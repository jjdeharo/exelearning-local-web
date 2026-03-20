/**
 * Food Web iDevice (export)
 * Technical name: food-web-g1
 */
/* eslint-disable no-undef */
var $foodwebg1 = {
    i18n: {
        en: {
            'Species': 'Species',
            'Role': 'Role',
            'Description': 'Description',
            'Producer': 'Producer',
            'Primary consumer': 'Primary consumer',
            'Secondary consumer': 'Secondary consumer',
            'Tertiary consumer': 'Tertiary consumer',
            'Decomposer': 'Decomposer',
            'Omnivore': 'Omnivore',
            'Questions': 'Questions',
            'Check answer': 'Check answer',
            'Correct!': 'Correct!',
            'Incorrect. Try again.': 'Incorrect. Try again.',
            'Select a species to see details.': 'Select a species to see details.',
            'Legend': 'Legend'
        },
        es: {
            'Species': 'Especies',
            'Role': 'Rol',
            'Description': 'Descripción',
            'Producer': 'Productor',
            'Primary consumer': 'Consumidor primario',
            'Secondary consumer': 'Consumidor secundario',
            'Tertiary consumer': 'Consumidor terciario',
            'Decomposer': 'Descomponedor',
            'Omnivore': 'Omnívoro',
            'Questions': 'Preguntas',
            'Check answer': 'Comprobar',
            'Correct!': '¡Correcto!',
            'Incorrect. Try again.': 'Incorrecto. Inténtalo de nuevo.',
            'Select a species to see details.': 'Selecciona una especie para ver los detalles.',
            'Legend': 'Leyenda'
        }
    },

    init(data, accessibility) {
        this.renderView(data, accessibility);
    },

    t(key) {
        const lang = (window.exe && window.exe.lang) || 'es';
        if (this.i18n[lang] && this.i18n[lang][key]) {
            return this.i18n[lang][key];
        }
        if (this.i18n['en'] && this.i18n['en'][key]) {
            return this.i18n['en'][key];
        }
        return key;
    },

    renderView(data, accessibility) {
        const id = data.id || 'default';
        const container = document.getElementById(`food-web-g1-${id}`);
        if (!container) return;

        this.renderNetwork(data, id);
        this.renderQuestions(data, id);
        this.renderLegend(data, id);
    },

    renderNetwork(data, id) {
        const networkDiv = document.getElementById(`fw-network-${id}`);
        if (!networkDiv) return;

        // Simple representation: Species grouped by role in horizontal rows
        const roles = ['producer', 'primary-consumer', 'secondary-consumer', 'tertiary-consumer', 'omnivore', 'decomposer'];
        let html = '<div class="fw-rows">';
        roles.forEach(role => {
            const speciesInRole = data.species.filter(s => s.role === role);
            if (speciesInRole.length > 0) {
                html += `<div class="fw-row fw-row-${role}">`;
                speciesInRole.forEach(s => {
                    html += `
                        <div class="fw-node" data-id="${s.id}" title="${this.escape(s.name)}">
                            <span class="fw-node-label">${this.escape(s.name)}</span>
                        </div>
                    `;
                });
                html += '</div>';
            }
        });
        html += '</div>';
        
        // Add SVG layer for connections
        html += `<svg id="fw-svg-${id}" class="fw-svg-connections"></svg>`;
        
        networkDiv.innerHTML = html;
        this.addNetworkListeners(data, id);
        this.drawConnections(data, id);
    },

    addNetworkListeners(data, id) {
        const nodes = document.querySelectorAll(`#fw-network-${id} .fw-node`);
        const detailsDiv = document.getElementById(`fw-species-details-${id}`);

        nodes.forEach(node => {
            node.addEventListener('click', () => {
                const speciesId = node.dataset.id;
                const species = data.species.find(s => s.id === speciesId);
                if (species) {
                    detailsDiv.innerHTML = `
                        <h4>${this.escape(species.name)}</h4>
                        <p><strong>${this.t('Role')}:</strong> ${this.t(this.capitalize(species.role))}</p>
                        <p>${this.escape(species.description)}</p>
                    `;
                    this.highlightRelations(speciesId, data, id);
                }
            });
        });
    },

    highlightRelations(speciesId, data, id) {
        const svg = document.getElementById(`fw-svg-${id}`);
        const paths = svg.querySelectorAll('path');
        paths.forEach(p => {
            if (p.dataset.from === speciesId || p.dataset.to === speciesId) {
                p.classList.add('active');
            } else {
                p.classList.remove('active');
            }
        });
    },

    drawConnections(data, id) {
        const svg = document.getElementById(`fw-svg-${id}`);
        const networkDiv = document.getElementById(`fw-network-${id}`);
        const rect = networkDiv.getBoundingClientRect();
        
        svg.setAttribute('width', rect.width);
        svg.setAttribute('height', rect.height);
        
        let paths = '';
        data.relations.forEach(rel => {
            const fromNode = networkDiv.querySelector(`.fw-node[data-id="${rel.from}"]`);
            const toNode = networkDiv.querySelector(`.fw-node[data-id="${rel.to}"]`);
            
            if (fromNode && toNode) {
                const fRect = fromNode.getBoundingClientRect();
                const tRect = toNode.getBoundingClientRect();
                
                const x1 = fRect.left - rect.left + fRect.width / 2;
                const y1 = fRect.top - rect.top + fRect.height / 2;
                const x2 = tRect.left - rect.left + tRect.width / 2;
                const y2 = tRect.top - rect.top + tRect.height / 2;
                
                paths += `<path d="M ${x1} ${y1} L ${x2} ${y2}" 
                               class="fw-connection" 
                               data-from="${rel.from}" 
                               data-to="${rel.to}" 
                               stroke="#888" 
                               stroke-width="2" 
                               fill="none" 
                               marker-end="url(#arrow-${id})"/>`;
            }
        });
        
        svg.innerHTML = `
            <defs>
                <marker id="arrow-${id}" markerWidth="10" markerHeight="10" refX="20" refY="5" orient="auto">
                    <path d="M0,0 L10,5 L0,10 Z" fill="#888" />
                </marker>
            </defs>
            ${paths}
        `;
    },

    renderQuestions(data, id) {
        const questionsDiv = document.getElementById(`fw-questions-${id}`);
        if (!questionsDiv || !data.questions || data.questions.length === 0) return;

        let html = `<h4>${this.t('Questions')}</h4>`;
        data.questions.forEach((q, index) => {
            html += `
                <div class="fw-question" data-index="${index}">
                    <p>${this.escape(q.prompt)}</p>
                    <ul class="fw-options">
                        ${q.options.map((opt, i) => `
                            <li>
                                <label>
                                    <input type="radio" name="q-${id}-${index}" value="${i}">
                                    ${this.escape(opt)}
                                </label>
                            </li>
                        `).join('')}
                    </ul>
                    <button class="fw-check-btn" data-id="${id}" data-index="${index}">${this.t('Check answer')}</button>
                    <div class="fw-feedback" style="display:none"></div>
                </div>
            `;
        });
        questionsDiv.innerHTML = html;

        questionsDiv.querySelectorAll('.fw-check-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = btn.dataset.index;
                const q = data.questions[idx];
                const selected = questionsDiv.querySelector(`input[name="q-${id}-${idx}"]:checked`);
                const feedback = btn.nextElementSibling;
                
                if (selected) {
                    const val = parseInt(selected.value);
                    if (q.correctAnswers.includes(val)) {
                        feedback.innerHTML = `<p class="correct">${this.t('Correct!')} ${this.escape(q.explanation)}</p>`;
                    } else {
                        feedback.innerHTML = `<p class="incorrect">${this.t('Incorrect. Try again.')}</p>`;
                    }
                    feedback.style.display = 'block';
                }
            });
        });
    },

    renderLegend(data, id) {
        const legendDiv = document.getElementById(`fw-legend-${id}`);
        if (!legendDiv) return;
        
        const roles = ['producer', 'primary-consumer', 'secondary-consumer', 'tertiary-consumer', 'omnivore', 'decomposer'];
        let html = `<h4>${this.t('Legend')}</h4><ul class="fw-legend-list">`;
        roles.forEach(role => {
            html += `<li><span class="fw-legend-dot fw-role-${role}"></span> ${this.t(this.capitalize(role))}</li>`;
        });
        html += '</ul>';
        legendDiv.innerHTML = html;
    },

    escape(text) {
        if (!text) return '';
        return text.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    },

    capitalize(s) {
        return s.charAt(0).toUpperCase() + s.slice(1);
    }
};
