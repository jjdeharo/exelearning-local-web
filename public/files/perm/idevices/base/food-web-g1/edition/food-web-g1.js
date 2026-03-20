/**
 * Food Web iDevice (edition)
 * Technical name: food-web-g1
 */
/* eslint-disable no-undef */
var $exeDevice = {
    i18n: {
        en: {
            'Food web': 'Food web',
            'General': 'General',
            'Species': 'Species',
            'Relations': 'Relations',
            'Questions': 'Questions',
            'Scenarios': 'Scenarios',
            'AI Assistant': 'AI Assistant',
            'Import/Export': 'Import/Export',
            'Title': 'Title',
            'Subtitle': 'Subtitle',
            'Instructions': 'Instructions',
            'Ecosystem': 'Ecosystem',
            'Biome': 'Biome',
            'Educational level': 'Educational level',
            'Course': 'Course',
            'Observations': 'Observations',
            'Add species': 'Add species',
            'Add relation': 'Add relation',
            'Add question': 'Add question',
            'Add scenario': 'Add scenario',
            'Name': 'Name',
            'Role': 'Role',
            'Biological group': 'Biological group',
            'Description': 'Description',
            'Producer': 'Producer',
            'Primary consumer': 'Primary consumer',
            'Secondary consumer': 'Secondary consumer',
            'Tertiary consumer': 'Tertiary consumer',
            'Decomposer': 'Decomposer',
            'Omnivore': 'Omnivore',
            'Eats': 'Eats',
            'Decomposes': 'Decomposes',
            'Competes': 'Competes',
            'Parasite of': 'Parasite of',
            'From': 'From',
            'To': 'To',
            'Type': 'Type',
            'Strength': 'Strength',
            'Low': 'Low',
            'Medium': 'Medium',
            'High': 'High',
            'Prompt': 'Prompt',
            'Options': 'Options',
            'Correct answers': 'Correct answers',
            'Explanation': 'Explanation',
            'Change type': 'Change type',
            'Target species': 'Target species',
            'Expected effects': 'Expected effects',
            'Generate prompt': 'Generate prompt',
            'Copy prompt': 'Copy prompt',
            'Send to AI': 'Send to AI',
            'Import result': 'Import result',
            'Validate': 'Validate',
            'Save': 'Save'
        },
        es: {
            'Food web': 'Red trófica',
            'General': 'General',
            'Species': 'Especies',
            'Relations': 'Relaciones',
            'Questions': 'Preguntas',
            'Scenarios': 'Escenarios',
            'AI Assistant': 'Asistente IA',
            'Import/Export': 'Importar/Exportar',
            'Title': 'Título',
            'Subtitle': 'Subtítulo',
            'Instructions': 'Instrucciones',
            'Ecosystem': 'Ecosistema',
            'Biome': 'Bioma',
            'Educational level': 'Nivel educativo',
            'Course': 'Curso',
            'Observations': 'Observaciones',
            'Add species': 'Añadir especie',
            'Add relation': 'Añadir relación',
            'Add question': 'Añadir pregunta',
            'Add scenario': 'Añadir escenario',
            'Name': 'Nombre',
            'Role': 'Rol',
            'Biological group': 'Grupo biológico',
            'Description': 'Descripción',
            'Producer': 'Productor',
            'Primary consumer': 'Consumidor primario',
            'Secondary consumer': 'Consumidor secundario',
            'Tertiary consumer': 'Consumidor terciario',
            'Decomposer': 'Descomponedor',
            'Omnivore': 'Omnívoro',
            'Eats': 'Se alimenta de',
            'Decomposes': 'Descompone',
            'Competes': 'Compite con',
            'Parasite of': 'Parásito de',
            'From': 'De (consumidor)',
            'To': 'A (recurso)',
            'Type': 'Tipo',
            'Strength': 'Intensidad',
            'Low': 'Baja',
            'Medium': 'Media',
            'High': 'Alta',
            'Prompt': 'Enunciado',
            'Options': 'Opciones',
            'Correct answers': 'Respuestas correctas',
            'Explanation': 'Retroalimentación',
            'Change type': 'Tipo de cambio',
            'Target species': 'Especie afectada',
            'Expected effects': 'Efectos esperados',
            'Generate prompt': 'Generar prompt',
            'Copy prompt': 'Copiar prompt',
            'Send to AI': 'Enviar a IA',
            'Import result': 'Importar resultado',
            'Validate': 'Validar',
            'Save': 'Guardar'
        }
    },
    
    data: {},
    element: null,

    init(element, previousData) {
        this.element = element;
        this.data = this.migrateData(previousData);
        this.render();
    },

    migrateData(previousData) {
        const defaultData = {
            title: '',
            subtitle: '',
            instructions: '',
            ecosystemContext: {
                name: '',
                biome: '',
                level: '',
                course: '',
                locale: 'es',
                notes: ''
            },
            displayOptions: {
                showLegend: true,
                showSpeciesCards: true,
                showArrows: true,
                showRelationLabels: false,
                randomizeQuestions: false,
                allowRevealAnswers: true,
                layout: 'network'
            },
            species: [],
            relations: [],
            questions: [],
            scenarios: [],
            evaluation: false,
            evaluationID: ''
        };
        return Object.assign({}, defaultData, previousData);
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

    render() {
        let html = `
            <div class="food-web-editor">
                <ul class="food-web-tabs">
                    <li class="active" data-tab="general">${this.t('General')}</li>
                    <li data-tab="species">${this.t('Species')}</li>
                    <li data-tab="relations">${this.t('Relations')}</li>
                    <li data-tab="questions">${this.t('Questions')}</li>
                    <li data-tab="scenarios">${this.t('Scenarios')}</li>
                    <li data-tab="ai">${this.t('AI Assistant')}</li>
                    <li data-tab="import">${this.t('Import/Export')}</li>
                </ul>
                <div class="food-web-tab-content active" id="tab-general">
                    ${this.renderGeneralTab()}
                </div>
                <div class="food-web-tab-content" id="tab-species">
                    ${this.renderSpeciesTab()}
                </div>
                <div class="food-web-tab-content" id="tab-relations">
                    ${this.renderRelationsTab()}
                </div>
                <div class="food-web-tab-content" id="tab-questions">
                    ${this.renderQuestionsTab()}
                </div>
                <div class="food-web-tab-content" id="tab-scenarios">
                    ${this.renderScenariosTab()}
                </div>
                <div class="food-web-tab-content" id="tab-ai">
                    ${this.renderAITab()}
                </div>
                <div class="food-web-tab-content" id="tab-import">
                    ${this.renderImportTab()}
                </div>
            </div>
        `;
        this.element.innerHTML = html;
        this.addEventListeners();
    },

    renderGeneralTab() {
        return `
            <div class="field">
                <label>${this.t('Title')}</label>
                <input type="text" id="fw-title" value="${this.escape(this.data.title)}">
            </div>
            <div class="field">
                <label>${this.t('Subtitle')}</label>
                <input type="text" id="fw-subtitle" value="${this.escape(this.data.subtitle)}">
            </div>
            <div class="field">
                <label>${this.t('Instructions')}</label>
                <textarea id="fw-instructions">${this.escape(this.data.instructions)}</textarea>
            </div>
            <div class="field">
                <label>${this.t('Ecosystem')}</label>
                <input type="text" id="fw-eco-name" value="${this.escape(this.data.ecosystemContext.name)}">
            </div>
            <div class="field">
                <label>${this.t('Biome')}</label>
                <input type="text" id="fw-biome" value="${this.escape(this.data.ecosystemContext.biome)}">
            </div>
            <div class="field">
                <label>${this.t('Educational level')}</label>
                <input type="text" id="fw-level" value="${this.escape(this.data.ecosystemContext.level)}">
            </div>
            <div class="field">
                <label>${this.t('Course')}</label>
                <input type="text" id="fw-course" value="${this.escape(this.data.ecosystemContext.course)}">
            </div>
        `;
    },

    renderSpeciesTab() {
        let rows = this.data.species.map((s, index) => `
            <div class="species-row" data-index="${index}">
                <input type="text" class="sp-name" placeholder="${this.t('Name')}" value="${this.escape(s.name)}">
                <select class="sp-role">
                    <option value="producer" ${s.role === 'producer' ? 'selected' : ''}>${this.t('Producer')}</option>
                    <option value="primary-consumer" ${s.role === 'primary-consumer' ? 'selected' : ''}>${this.t('Primary consumer')}</option>
                    <option value="secondary-consumer" ${s.role === 'secondary-consumer' ? 'selected' : ''}>${this.t('Secondary consumer')}</option>
                    <option value="tertiary-consumer" ${s.role === 'tertiary-consumer' ? 'selected' : ''}>${this.t('Tertiary consumer')}</option>
                    <option value="omnivore" ${s.role === 'omnivore' ? 'selected' : ''}>${this.t('Omnivore')}</option>
                    <option value="decomposer" ${s.role === 'decomposer' ? 'selected' : ''}>${this.t('Decomposer')}</option>
                </select>
                <button class="remove-species">X</button>
            </div>
        `).join('');
        return `
            <div id="species-list">${rows}</div>
            <button id="add-species">${this.t('Add species')}</button>
        `;
    },

    renderRelationsTab() {
        // Implementation for relations tab
        return `<div id="relations-list"></div><button id="add-relation">${this.t('Add relation')}</button>`;
    },

    renderQuestionsTab() {
        // Implementation for questions tab
        return `<div id="questions-list"></div><button id="add-question">${this.t('Add question')}</button>`;
    },

    renderScenariosTab() {
        // Implementation for scenarios tab
        return `<div id="scenarios-list"></div><button id="add-scenario">${this.t('Add scenario')}</button>`;
    },

    renderAITab() {
        return `
            <div class="ai-assistant">
                <p>Describe your ecosystem to generate a food web prompt.</p>
                <textarea id="ai-prompt-input" placeholder="e.g. Mediterranean forest with 8 species..."></textarea>
                <button id="fw-generate-prompt">${this.t('Generate prompt')}</button>
                <div id="generated-prompt-container" style="display:none">
                    <textarea id="fw-generated-prompt" readonly></textarea>
                    <button id="fw-copy-prompt">${this.t('Copy prompt')}</button>
                </div>
            </div>
        `;
    },

    renderImportTab() {
        return `
            <div class="import-export">
                <h3>JSON</h3>
                <textarea id="import-json-area"></textarea>
                <button id="fw-import-json">${this.t('Import result')}</button>
            </div>
        `;
    },

    addEventListeners() {
        this.element.querySelectorAll('.food-web-tabs li').forEach(li => {
            li.addEventListener('click', () => {
                this.element.querySelectorAll('.food-web-tabs li').forEach(l => l.classList.remove('active'));
                this.element.querySelectorAll('.food-web-tab-content').forEach(c => c.classList.remove('active'));
                li.classList.add('active');
                this.element.querySelector('#tab-' + li.dataset.tab).classList.add('active');
            });
        });

        this.element.querySelector('#add-species').addEventListener('click', () => {
            this.saveToData();
            this.data.species.push({
                id: 'sp-' + Date.now(),
                name: '',
                role: 'producer',
                group: '',
                description: '',
                image: '',
                traits: [],
                importance: 'medium'
            });
            this.render();
            this.activateTab('species');
        });

        // Add more listeners...
    },

    activateTab(tab) {
         this.element.querySelectorAll('.food-web-tabs li').forEach(l => {
             if (l.dataset.tab === tab) l.classList.add('active');
             else l.classList.remove('active');
         });
         this.element.querySelectorAll('.food-web-tab-content').forEach(c => {
             if (c.id === 'tab-' + tab) c.classList.add('active');
             else c.classList.remove('active');
         });
    },

    saveToData() {
        this.data.title = this.element.querySelector('#fw-title').value;
        this.data.subtitle = this.element.querySelector('#fw-subtitle').value;
        this.data.instructions = this.element.querySelector('#fw-instructions').value;
        this.data.ecosystemContext.name = this.element.querySelector('#fw-eco-name').value;
        this.data.ecosystemContext.biome = this.element.querySelector('#fw-biome').value;
        this.data.ecosystemContext.level = this.element.querySelector('#fw-level').value;
        this.data.ecosystemContext.course = this.element.querySelector('#fw-course').value;

        const speciesRows = this.element.querySelectorAll('.species-row');
        this.data.species = Array.from(speciesRows).map(row => {
            const index = row.dataset.index;
            const s = this.data.species[index] || { id: 'sp-' + Date.now() };
            s.name = row.querySelector('.sp-name').value;
            s.role = row.querySelector('.sp-role').value;
            return s;
        });
    },

    save() {
        this.saveToData();
        return this.data;
    },

    escape(text) {
        if (!text) return '';
        return text.toString().replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
};
