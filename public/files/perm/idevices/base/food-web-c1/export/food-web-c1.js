/* eslint-disable no-undef */
var $foodwebc1 = {
    ideviceClass: 'food-web-c1-content',
    roleOrder: [
        'producer',
        'primary-consumer',
        'secondary-consumer',
        'tertiary-consumer',
        'omnivore',
        'decomposer',
    ],
    roleLabels: {
        producer: 'Producer',
        'primary-consumer': 'Primary consumer',
        'secondary-consumer': 'Secondary consumer',
        'tertiary-consumer': 'Tertiary consumer',
        omnivore: 'Omnivore',
        decomposer: 'Decomposer',
    },
    rolePalette: {
        producer: '#3a7d44',
        'primary-consumer': '#dda15e',
        'secondary-consumer': '#bc6c25',
        'tertiary-consumer': '#7f5539',
        omnivore: '#6d597a',
        decomposer: '#4d908e',
    },
    relationLabels: {
        eats: 'eats',
        decomposes: 'decomposes',
        competes: 'competes with',
        'parasite-of': 'parasite of',
    },

    normalizeData: function (rawData) {
        const data = rawData || {};
        return {
            title: data.title || '',
            subtitle: data.subtitle || '',
            instructions: data.instructions || '',
            ecosystemContext: data.ecosystemContext || {},
            displayOptions: {
                showLegend: data.displayOptions?.showLegend !== false,
                showSpeciesCards: data.displayOptions?.showSpeciesCards !== false,
                showArrows: data.displayOptions?.showArrows !== false,
                showRelationLabels: !!data.displayOptions?.showRelationLabels,
                randomizeQuestions: !!data.displayOptions?.randomizeQuestions,
                allowRevealAnswers: data.displayOptions?.allowRevealAnswers !== false,
                layout: data.displayOptions?.layout || 'levels',
            },
            species: Array.isArray(data.species) ? data.species : [],
            relations: Array.isArray(data.relations) ? data.relations : [],
            questions: Array.isArray(data.questions) ? data.questions : [],
            scenarios: Array.isArray(data.scenarios) ? data.scenarios : [],
            evaluation: !!data.evaluation,
            evaluationID: data.evaluationID || '',
        };
    },

    renderView: function (rawData, accesibility, template, ideviceId) {
        const data = this.normalizeData(rawData);
        const id = ideviceId || data.ideviceId || `food-web-c1-${Date.now()}`;
        const grouped = this.groupSpeciesByRole(data.species);
        const detail = data.species[0] || null;
        const htmlContent = `<div class="game-evaluation-ids js-hidden" data-id="${this.escapeAttribute(
            id
        )}" data-evaluationb="${data.evaluation}" data-evaluationid="${this.escapeAttribute(
            data.evaluationID
        )}"></div>
        <section class="${this.ideviceClass}" id="${this.escapeAttribute(id)}" data-food-web-id="${this.escapeAttribute(
            id
        )}">
            <header class="fwx-head">
                <div>
                    <h2>${this.escapeHtml(data.title)}</h2>
                    ${
                        data.subtitle
                            ? `<p class="fwx-subtitle">${this.escapeHtml(data.subtitle)}</p>`
                            : ''
                    }
                </div>
                <div class="fwx-context">
                    ${
                        data.ecosystemContext.name
                            ? `<span>${this.escapeHtml(data.ecosystemContext.name)}</span>`
                            : ''
                    }
                    ${
                        data.ecosystemContext.level
                            ? `<span>${this.escapeHtml(data.ecosystemContext.level)}</span>`
                            : ''
                    }
                    ${
                        data.ecosystemContext.course
                            ? `<span>${this.escapeHtml(data.ecosystemContext.course)}</span>`
                            : ''
                    }
                </div>
            </header>
            ${
                data.instructions
                    ? `<div class="fwx-instructions">${data.instructions}</div>`
                    : ''
            }
            ${
                data.displayOptions.showLegend
                    ? `<section class="fwx-legend">${this.getLegendHtml()}</section>`
                    : ''
            }
            <section class="fwx-layout fwx-layout-${this.escapeAttribute(
                data.displayOptions.layout
            )}">
                <div class="fwx-levels">
                    ${this.roleOrder
                        .map((role) => this.getLevelHtml(role, grouped[role] || [], data))
                        .join('')}
                </div>
                <aside class="fwx-side">
                    ${this.getDetailPanel(detail)}
                    ${this.getRelationsPanel(data, detail)}
                </aside>
            </section>
            ${this.getQuestionsHtml(data, id)}
            ${this.getScenariosHtml(data, id)}
            <script type="application/json" class="fwx-data">${this.escapeHtml(
                JSON.stringify(data)
            )}</script>
        </section>`;
        return template.replace('{content}', htmlContent);
    },

    renderBehaviour: function (rawData, accesibility, ideviceId) {
        const data = this.normalizeData(rawData);
        const root = document.getElementById(ideviceId);
        if (!root) return;
        const parsed = this.parseEmbeddedData(root) || data;
        root.querySelectorAll('.fwx-species-button').forEach((button) => {
            button.addEventListener('click', () => {
                const species = parsed.species.find((item) => item.id === button.dataset.speciesId);
                if (!species) return;
                root.querySelectorAll('.fwx-species-button').forEach((item) => {
                    item.classList.toggle('is-active', item === button);
                });
                this.updateDetailPanel(root, species);
                this.updateRelationsPanel(root, parsed, species);
            });
        });
        root.querySelectorAll('.fwx-question').forEach((questionNode, index) => {
            const question = parsed.questions[index];
            const button = questionNode.querySelector('.fwx-check-question');
            if (!button || !question) return;
            button.addEventListener('click', () => {
                this.checkQuestion(questionNode, question);
            });
            const revealButton = questionNode.querySelector('.fwx-reveal-question');
            if (revealButton) {
                revealButton.addEventListener('click', () => {
                    this.showQuestionFeedback(questionNode, question, true);
                });
            }
        });
        root.querySelectorAll('.fwx-scenario-button').forEach((button, index) => {
            button.addEventListener('click', () => {
                root.querySelectorAll('.fwx-scenario-card').forEach((card, cardIndex) => {
                    card.hidden = cardIndex !== index;
                });
            });
        });
        const firstScenario = root.querySelector('.fwx-scenario-card');
        if (firstScenario) firstScenario.hidden = false;
    },

    init: function (data, accesibility) {
    },

    groupSpeciesByRole: function (species) {
        const grouped = {};
        this.roleOrder.forEach((role) => {
            grouped[role] = [];
        });
        species.forEach((item) => {
            const role = grouped[item.role] ? item.role : 'secondary-consumer';
            grouped[role].push(item);
        });
        return grouped;
    },

    getLegendHtml: function () {
        return this.roleOrder
            .map(
                (role) =>
                    `<span class="fwx-legend-item"><i style="background:${this.rolePalette[role]}"></i>${this.escapeHtml(
                        this.roleLabels[role]
                    )}</span>`
            )
            .join('');
    },

    getLevelHtml: function (role, species, data) {
        return `<section class="fwx-level">
            <h3>${this.escapeHtml(this.roleLabels[role])}</h3>
            <div class="fwx-level-items">
                ${
                    species.length
                        ? species
                              .map(
                                  (item, index) => `<button type="button" class="fwx-species-button ${
                                      index === 0 ? 'is-active' : ''
                                  }" data-species-id="${this.escapeAttribute(
                                      item.id
                                  )}" style="--species-color:${this.rolePalette[item.role] || '#4d908e'}">
                                    <span class="fwx-species-name">${this.escapeHtml(item.name)}</span>
                                    ${
                                        data.displayOptions.showSpeciesCards && item.group
                                            ? `<span class="fwx-species-group">${this.escapeHtml(item.group)}</span>`
                                            : ''
                                    }
                                  </button>`
                              )
                              .join('')
                        : '<p class="fwx-empty-level">No species</p>'
                }
            </div>
        </section>`;
    },

    getDetailPanel: function (species) {
        if (!species) return '<div class="fwx-detail-panel"></div>';
        return `<div class="fwx-detail-panel" data-detail-panel="true">
            <h3>${this.escapeHtml(species.name)}</h3>
            <p class="fwx-detail-role">${this.escapeHtml(this.roleLabels[species.role] || species.role)}</p>
            ${species.description ? `<p>${this.escapeHtml(species.description)}</p>` : ''}
            ${
                species.traits && species.traits.length
                    ? `<p><strong>Traits:</strong> ${this.escapeHtml(species.traits.join(', '))}</p>`
                    : ''
            }
            ${
                species.importance
                    ? `<p><strong>Importance:</strong> ${this.escapeHtml(species.importance)}</p>`
                    : ''
            }
        </div>`;
    },

    getRelationsPanel: function (data, species) {
        const filtered = species
            ? data.relations.filter(
                  (relation) =>
                      relation.from === species.id || relation.to === species.id
              )
            : data.relations;
        return `<div class="fwx-relations-panel" data-relations-panel="true">
            <h3>Relations</h3>
            <ul>
                ${
                    filtered.length
                        ? filtered
                              .map((relation) => `<li>${this.formatRelation(data, relation)}</li>`)
                              .join('')
                        : '<li>No direct relations available.</li>'
                }
            </ul>
        </div>`;
    },

    getQuestionsHtml: function (data, id) {
        if (!data.questions.length) return '';
        const questions = data.displayOptions.randomizeQuestions
            ? [...data.questions].sort(() => Math.random() - 0.5)
            : data.questions;
        return `<section class="fwx-questions">
            <h3>Practice</h3>
            ${questions
                .map(
                    (question, index) => `<article class="fwx-question" data-question-id="${this.escapeAttribute(
                        question.id
                    )}">
                        <p class="fwx-question-prompt">${this.escapeHtml(question.prompt)}</p>
                        ${this.getQuestionInputs(question, `${id}-${index}`)}
                        <div class="fwx-question-actions">
                            <button type="button" class="btn btn-primary fwx-check-question">Check</button>
                            ${
                                data.displayOptions.allowRevealAnswers
                                    ? '<button type="button" class="btn btn-secondary fwx-reveal-question">Show answer</button>'
                                    : ''
                            }
                        </div>
                        <div class="fwx-question-feedback" aria-live="polite"></div>
                    </article>`
                )
                .join('')}
        </section>`;
    },

    getQuestionInputs: function (question, key) {
        if (question.type === 'true-false') {
            return ['True', 'False']
                .map(
                    (label, index) => `<label class="fwx-option">
                        <input type="radio" name="question-${this.escapeAttribute(key)}" value="${index}" />
                        <span>${label}</span>
                    </label>`
                )
                .join('');
        }
        if (question.type === 'predict-effect') {
            return `<textarea class="fwx-open-answer" rows="3" placeholder="Write your prediction."></textarea>`;
        }
        return question.options
            .map((option, index) => {
                const inputType = question.type === 'multi-select' ? 'checkbox' : 'radio';
                return `<label class="fwx-option">
                    <input type="${inputType}" name="question-${this.escapeAttribute(
                        key
                    )}" value="${index}" />
                    <span>${this.escapeHtml(option)}</span>
                </label>`;
            })
            .join('');
    },

    getScenariosHtml: function (data) {
        if (!data.scenarios.length) return '';
        return `<section class="fwx-scenarios">
            <h3>Ecological scenarios</h3>
            <div class="fwx-scenario-tabs">
                ${data.scenarios
                    .map(
                        (scenario) => `<button type="button" class="btn btn-secondary fwx-scenario-button">${this.escapeHtml(
                            scenario.title
                        )}</button>`
                    )
                    .join('')}
            </div>
            ${data.scenarios
                .map(
                    (scenario, index) => `<article class="fwx-scenario-card" ${
                        index === 0 ? '' : 'hidden'
                    }>
                        <h4>${this.escapeHtml(scenario.title)}</h4>
                        <p>${this.escapeHtml(scenario.prompt)}</p>
                        ${
                            scenario.expectedEffects && scenario.expectedEffects.length
                                ? `<ul>${scenario.expectedEffects
                                      .map((item) => `<li>${this.escapeHtml(item)}</li>`)
                                      .join('')}</ul>`
                                : ''
                        }
                    </article>`
                )
                .join('')}
        </section>`;
    },

    updateDetailPanel: function (root, species) {
        const panel = root.querySelector('[data-detail-panel="true"]');
        if (!panel) return;
        panel.innerHTML = this.getDetailPanel(species).replace(/^<div[^>]*>|<\/div>$/g, '');
    },

    updateRelationsPanel: function (root, data, species) {
        const panel = root.querySelector('[data-relations-panel="true"]');
        if (!panel) return;
        panel.innerHTML = this.getRelationsPanel(data, species).replace(/^<div[^>]*>|<\/div>$/g, '');
    },

    formatRelation: function (data, relation) {
        const from = data.species.find((item) => item.id === relation.from);
        const to = data.species.find((item) => item.id === relation.to);
        const label = this.relationLabels[relation.type] || relation.type;
        return `${this.escapeHtml(from?.name || relation.from)} ${this.escapeHtml(
            label
        )} ${this.escapeHtml(to?.name || relation.to)}${
            relation.note ? `: ${this.escapeHtml(relation.note)}` : ''
        }`;
    },

    checkQuestion: function (questionNode, question) {
        if (question.type === 'predict-effect') {
            this.showQuestionFeedback(questionNode, question, true, 'Open response recorded.');
            return;
        }
        const selected = Array.from(
            questionNode.querySelectorAll('input:checked')
        ).map((input) => Number(input.value));
        const expected = [...question.correctAnswers].sort().join(',');
        const received = [...selected].sort().join(',');
        this.showQuestionFeedback(
            questionNode,
            question,
            expected === received
        );
    },

    showQuestionFeedback: function (questionNode, question, isCorrect, customText) {
        const feedback = questionNode.querySelector('.fwx-question-feedback');
        if (!feedback) return;
        const baseText = customText || (isCorrect ? 'Correct.' : 'Review the food web and try again.');
        feedback.className = `fwx-question-feedback ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
        feedback.innerHTML = `<p>${this.escapeHtml(baseText)}</p>${
            question.explanation ? `<p>${this.escapeHtml(question.explanation)}</p>` : ''
        }`;
    },

    parseEmbeddedData: function (root) {
        const node = root.querySelector('.fwx-data');
        if (!node) return null;
        try {
            return JSON.parse(node.textContent);
        } catch (error) {
            return null;
        }
    },

    escapeHtml: function (value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },

    escapeAttribute: function (value) {
        return this.escapeHtml(value).replace(/'/g, '&#39;');
    },
};
