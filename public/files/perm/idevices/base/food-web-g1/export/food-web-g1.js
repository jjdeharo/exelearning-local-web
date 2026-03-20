/**
 * Food Web iDevice (export)
 * Technical name: food-web-g1
 */
/* eslint-disable no-undef */
var $foodwebg1 = {
    i18n: {
        en: {
            Species: 'Species',
            Role: 'Role',
            Description: 'Description',
            Producer: 'Producer',
            'Primary consumer': 'Primary consumer',
            'Secondary consumer': 'Secondary consumer',
            'Tertiary consumer': 'Tertiary consumer',
            Decomposer: 'Decomposer',
            Omnivore: 'Omnivore',
            Questions: 'Questions',
            'Check answer': 'Check answer',
            'Correct!': 'Correct!',
            'Incorrect. Try again.': 'Incorrect. Try again.',
            'Select a species to see details.': 'Select a species to see details.',
            Legend: 'Legend',
            Scenarios: 'Scenarios',
            'No questions available.': 'No questions available.',
            'No scenarios available.': 'No scenarios available.',
            'No species available.': 'No species available.',
            'Expected effects': 'Expected effects',
            'Show answer': 'Show answer',
        },
        es: {
            Species: 'Especies',
            Role: 'Rol',
            Description: 'Descripción',
            Producer: 'Productor',
            'Primary consumer': 'Consumidor primario',
            'Secondary consumer': 'Consumidor secundario',
            'Tertiary consumer': 'Consumidor terciario',
            Decomposer: 'Descomponedor',
            Omnivore: 'Omnívoro',
            Questions: 'Preguntas',
            'Check answer': 'Comprobar',
            'Correct!': '¡Correcto!',
            'Incorrect. Try again.': 'Incorrecto. Inténtalo de nuevo.',
            'Select a species to see details.': 'Selecciona una especie para ver los detalles.',
            Legend: 'Leyenda',
            Scenarios: 'Escenarios',
            'No questions available.': 'No hay preguntas.',
            'No scenarios available.': 'No hay escenarios.',
            'No species available.': 'No hay especies.',
            'Expected effects': 'Efectos esperados',
            'Show answer': 'Mostrar respuesta',
        },
    },
    roleOrder: [
        'producer',
        'primary-consumer',
        'secondary-consumer',
        'tertiary-consumer',
        'omnivore',
        'decomposer',
    ],

    init: function (data, accessibility) {
    },

    renderView: function (rawData, accessibility, template, ideviceId) {
        const data = this.normalizeData(rawData);
        const id = ideviceId || data.id || `food-web-g1-${Date.now()}`;
        const content = `
            <div class="food-web-g1-container" id="${this.escapeAttribute(id)}" data-food-web-g1-id="${this.escapeAttribute(id)}">
                <div class="food-web-header">
                    <h2 class="food-web-title">${this.escape(data.title)}</h2>
                    ${data.subtitle ? `<h3 class="food-web-subtitle">${this.escape(data.subtitle)}</h3>` : ''}
                </div>
                ${data.instructions ? `<div class="food-web-instructions">${data.instructions}</div>` : ''}
                <div class="food-web-main">
                    <div class="food-web-visualization">
                        <div class="fw-network">${this.renderNetwork(data)}</div>
                    </div>
                    <div class="food-web-sidebar">
                        <div class="fw-species-details" data-role="details">
                            <p class="placeholder-text">${this.t('Select a species to see details.')}</p>
                        </div>
                        <div class="fw-legend">
                            ${this.renderLegend()}
                        </div>
                    </div>
                </div>
                <div class="food-web-activities">
                    <div class="fw-questions">
                        ${this.renderQuestions(data, id)}
                    </div>
                    <div class="fw-scenarios">
                        ${this.renderScenarios(data)}
                    </div>
                </div>
            </div>
        `;
        return content;
    },

    renderBehaviour: function (rawData, accessibility, ideviceId) {
        const data = this.normalizeData(rawData);
        const root = document.getElementById(ideviceId);
        if (!root) return;

        root.querySelectorAll('.fw-node').forEach((node) => {
            node.addEventListener('click', () => {
                const species = data.species.find((item) => item.id === node.dataset.id);
                if (!species) return;
                this.showSpeciesDetails(root, species);
                this.highlightRelations(root, species.id);
            });
        });

        root.querySelectorAll('.fw-check-btn').forEach((button) => {
            button.addEventListener('click', () => {
                const index = Number(button.dataset.index);
                const question = data.questions[index];
                const questionNode = button.closest('.fw-question');
                if (!question || !questionNode) return;
                const selected = questionNode.querySelector('input[type="radio"]:checked');
                const feedback = questionNode.querySelector('.fw-feedback');
                if (!selected || !feedback) return;
                const value = Number(selected.value);
                const isCorrect = Array.isArray(question.correctAnswers)
                    ? question.correctAnswers.indexOf(value) !== -1
                    : false;
                feedback.innerHTML = isCorrect
                    ? `<p class="correct">${this.t('Correct!')} ${this.escape(question.explanation || '')}</p>`
                    : `<p class="incorrect">${this.t('Incorrect. Try again.')}</p>`;
                feedback.style.display = 'block';
            });
        });
    },

    normalizeData: function (rawData) {
        const data = rawData || {};
        return {
            id: data.id || '',
            title: data.title || '',
            subtitle: data.subtitle || '',
            instructions: data.instructions || '',
            species: Array.isArray(data.species) ? data.species : [],
            relations: Array.isArray(data.relations) ? data.relations : [],
            questions: Array.isArray(data.questions) ? data.questions : [],
            scenarios: Array.isArray(data.scenarios) ? data.scenarios : [],
            ecosystemContext: data.ecosystemContext || {},
        };
    },

    renderNetwork: function (data) {
        let html = '<div class="fw-rows">';
        this.roleOrder.forEach((role) => {
            const speciesInRole = data.species.filter((item) => item.role === role);
            if (!speciesInRole.length) return;
            html += `<div class="fw-row fw-row-${role}">`;
            speciesInRole.forEach((species) => {
                html += `<button type="button" class="fw-node" data-id="${this.escapeAttribute(species.id)}" title="${this.escapeAttribute(species.name)}">
                    <span class="fw-node-label">${this.escape(species.name)}</span>
                </button>`;
            });
            html += '</div>';
        });
        if (html === '<div class="fw-rows">') {
            html += `<p class="placeholder-text">${this.t('No species available.')}</p>`;
        }
        html += '</div>';
        html += `<ul class="fw-relations-list" data-role="relations">
            ${data.relations
                .map(
                    (relation) => `<li class="fw-relation" data-from="${this.escapeAttribute(relation.from)}" data-to="${this.escapeAttribute(relation.to)}">
                        ${this.renderRelationText(data, relation)}
                    </li>`
                )
                .join('')}
        </ul>`;
        return html;
    },

    renderQuestions: function (data, id) {
        if (!data.questions.length) {
            return `<h4>${this.t('Questions')}</h4><p class="placeholder-text">${this.t('No questions available.')}</p>`;
        }
        let html = `<h4>${this.t('Questions')}</h4>`;
        data.questions.forEach((question, index) => {
            html += `<div class="fw-question" data-index="${index}">
                <p>${this.escape(question.prompt)}</p>
                <ul class="fw-options">
                    ${(question.options || [])
                        .map(
                            (option, optionIndex) => `<li>
                                <label>
                                    <input type="radio" name="q-${this.escapeAttribute(id)}-${index}" value="${optionIndex}">
                                    ${this.escape(option)}
                                </label>
                            </li>`
                        )
                        .join('')}
                </ul>
                <button type="button" class="fw-check-btn" data-index="${index}">${this.t('Check answer')}</button>
                <div class="fw-feedback" style="display:none"></div>
            </div>`;
        });
        return html;
    },

    renderScenarios: function (data) {
        if (!data.scenarios.length) {
            return `<h4>${this.t('Scenarios')}</h4><p class="placeholder-text">${this.t('No scenarios available.')}</p>`;
        }
        return `<h4>${this.t('Scenarios')}</h4>${data.scenarios
            .map(
                (scenario) => `<div class="fw-question">
                    <p><strong>${this.escape(scenario.title || '')}</strong></p>
                    <p>${this.escape(scenario.prompt || '')}</p>
                    ${
                        scenario.expectedEffects && scenario.expectedEffects.length
                            ? `<p><strong>${this.t('Expected effects')}:</strong> ${this.escape(
                                  scenario.expectedEffects.join(', ')
                              )}</p>`
                            : ''
                    }
                </div>`
            )
            .join('')}`;
    },

    renderLegend: function () {
        return `<h4>${this.t('Legend')}</h4><ul class="fw-legend-list">
            ${this.roleOrder
                .map(
                    (role) =>
                        `<li><span class="fw-legend-dot fw-role-${role}"></span> ${this.t(
                            this.capitalize(role)
                        )}</li>`
                )
                .join('')}
        </ul>`;
    },

    showSpeciesDetails: function (root, species) {
        const details = root.querySelector('[data-role="details"]');
        if (!details) return;
        details.innerHTML = `
            <h4>${this.escape(species.name)}</h4>
            <p><strong>${this.t('Role')}:</strong> ${this.t(this.capitalize(species.role || ''))}</p>
            <p><strong>${this.t('Description')}:</strong> ${this.escape(species.description || '')}</p>
        `;
    },

    highlightRelations: function (root, speciesId) {
        root.querySelectorAll('.fw-relation').forEach((item) => {
            const active =
                item.dataset.from === speciesId || item.dataset.to === speciesId;
            item.classList.toggle('active', active);
        });
    },

    renderRelationText: function (data, relation) {
        const from = data.species.find((item) => item.id === relation.from);
        const to = data.species.find((item) => item.id === relation.to);
        return `${this.escape((from && from.name) || relation.from)} → ${this.escape(
            (to && to.name) || relation.to
        )}`;
    },

    t: function (key) {
        const lang =
            (window.exe && window.exe.lang) ||
            document.documentElement.lang ||
            'es';
        if (this.i18n[lang] && this.i18n[lang][key]) {
            return this.i18n[lang][key];
        }
        if (this.i18n.en && this.i18n.en[key]) {
            return this.i18n.en[key];
        }
        return key;
    },

    escape: function (text) {
        if (!text) return '';
        return text
            .toString()
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },

    escapeAttribute: function (text) {
        return this.escape(text).replace(/'/g, '&#39;');
    },

    capitalize: function (value) {
        return value
            .split('-')
            .map((item) => item.charAt(0).toUpperCase() + item.slice(1))
            .join(' ');
    },
};
