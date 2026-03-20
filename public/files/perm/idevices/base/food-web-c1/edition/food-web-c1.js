/* eslint-disable no-undef */
var $exeDevice = {
    ideviceId: 'food-web-c1',
    locales: ['es', 'en', 'ca'],
    roleOrder: [
        'producer',
        'primary-consumer',
        'secondary-consumer',
        'tertiary-consumer',
        'omnivore',
        'decomposer',
    ],
    rolePalette: {
        producer: '#3a7d44',
        'primary-consumer': '#dda15e',
        'secondary-consumer': '#bc6c25',
        'tertiary-consumer': '#7f5539',
        omnivore: '#6d597a',
        decomposer: '#4d908e',
    },
    i18n: {
        es: {
            'Food web': 'Red trófica',
            'Interactive ecology activity with species, relations and scenarios.':
                'Actividad interactiva de ecología con especies, relaciones y escenarios.',
            'General settings': 'Configuración general',
            Title: 'Título',
            Subtitle: 'Subtítulo',
            Instructions: 'Instrucciones',
            'Ecosystem name': 'Nombre del ecosistema',
            Biome: 'Bioma',
            Level: 'Nivel educativo',
            Course: 'Curso',
            Locale: 'Idioma',
            Notes: 'Observaciones',
            'Display options': 'Opciones de visualización',
            'Show legend': 'Mostrar leyenda',
            'Show species cards': 'Mostrar tarjetas de especies',
            'Show arrows': 'Mostrar flechas',
            'Show relation labels': 'Mostrar etiquetas de relación',
            'Randomize questions': 'Aleatorizar preguntas',
            'Allow reveal answers': 'Permitir mostrar respuestas',
            Layout: 'Distribución',
            'By trophic levels': 'Por niveles tróficos',
            Network: 'Red',
            Evaluation: 'Evaluación',
            'Enable evaluation': 'Activar evaluación',
            'Evaluation ID': 'ID de evaluación',
            Species: 'Especies',
            Relations: 'Relaciones',
            Questions: 'Preguntas',
            Scenarios: 'Escenarios',
            'Artificial Intelligence': 'IA',
            'Import/Export': 'Importar/Exportar',
            'Add species': 'Añadir especie',
            'Add relation': 'Añadir relación',
            'Add question': 'Añadir pregunta',
            'Add scenario': 'Añadir escenario',
            Duplicate: 'Duplicar',
            Delete: 'Eliminar',
            Name: 'Nombre',
            Role: 'Rol',
            Group: 'Grupo',
            Description: 'Descripción',
            Image: 'Imagen',
            Traits: 'Rasgos',
            Importance: 'Importancia',
            Source: 'Origen',
            Target: 'Destino',
            Type: 'Tipo',
            Strength: 'Intensidad',
            Note: 'Nota',
            Prompt: 'Enunciado',
            Options: 'Opciones',
            'Correct answers': 'Respuestas correctas',
            Explanation: 'Explicación',
            'Question type': 'Tipo de pregunta',
            'Scenario title': 'Título del escenario',
            'Change type': 'Tipo de cambio',
            'Target species': 'Especie objetivo',
            'Expected effects': 'Efectos esperados',
            Ecosystem: 'Ecosistema',
            'Approx. species': 'N.º de especies',
            'Include decomposer': 'Incluir descomponedor',
            'Include invasive species': 'Incluir especie invasora',
            'Include questions': 'Incluir preguntas',
            Difficulty: 'Dificultad',
            'Generate prompt': 'Generar prompt',
            'Copy prompt': 'Copiar prompt',
            'Send to AI': 'Enviar a IA',
            'Import result': 'Importar resultado',
            'Prompt to generate': 'Prompt para generar',
            'Generated result': 'Resultado generado',
            'Export JSON': 'Exportar JSON',
            'Import JSON': 'Importar JSON',
            'Paste simplified text or JSON': 'Pega texto simplificado o JSON',
            'Import pasted text': 'Importar texto pegado',
            'At least one producer is required.':
                'Hace falta al menos un productor.',
            'At least three species are required.':
                'Hace falta un mínimo de tres especies.',
            'At least two relations are required.':
                'Hace falta un mínimo de dos relaciones.',
            'Please write a title.': 'Escribe un título.',
            'There are broken references in the relations.':
                'Hay referencias rotas en las relaciones.',
            'The questions are not valid.': 'Las preguntas no son válidas.',
            'The imported content is not valid for this iDevice.':
                'El contenido importado no es válido para este iDevice.',
            'The content has been imported successfully.':
                'El contenido se ha importado correctamente.',
            'The prompt has been copied to the clipboard.':
                'El prompt se ha copiado al portapapeles.',
            'The JSON has been copied to the clipboard.':
                'El JSON se ha copiado al portapapeles.',
            'Unable to copy to the clipboard.':
                'No se ha podido copiar al portapapeles.',
            'Open your preferred assistant and paste the prompt.':
                'Abre tu asistente preferido y pega el prompt.',
            'Producer': 'Productor',
            'Primary consumer': 'Consumidor primario',
            'Secondary consumer': 'Consumidor secundario',
            'Tertiary consumer': 'Consumidor terciario',
            Omnivore: 'Omnívoro',
            Decomposer: 'Descomponedor',
            Eats: 'Se alimenta de',
            Decomposes: 'Descompone',
            Competes: 'Compite con',
            'Parasite of': 'Parásita de',
            Low: 'Baja',
            Medium: 'Media',
            High: 'Alta',
            'Multiple choice': 'Opción múltiple',
            'Multi select': 'Selección múltiple',
            'True/false': 'Verdadero/falso',
            'Match role': 'Relacionar rol',
            'Predict effect': 'Predecir efecto',
            'Species disappearance': 'Desaparición de especie',
            'Population increase': 'Aumento de población',
            'Invasive arrival': 'Llegada de invasora',
            Pollution: 'Contaminación',
            Drought: 'Sequía',
            'Producer loss': 'Pérdida de productor',
            Basic: 'Básica',
            Intermediate: 'Intermedia',
            Advanced: 'Avanzada',
            'One option per line. Mark the correct ones with * at the end or write their indexes separated by commas.':
                'Una opción por línea. Marca las correctas con * al final o escribe sus índices separados por comas.',
            'One expected effect per line.':
                'Un efecto esperado por línea.',
            'One trait per comma.': 'Un rasgo por comas.',
        },
        en: {},
        ca: {},
    },

    init: function (element, previousData) {
        this.ideviceBody = element;
        this.idevicePreviousData = previousData || {};
        this.bindedImportFile = this.handleImportFile.bind(this);
        this.createForm();
    },

    save: function () {
        const data = this.collectFormData();
        const error = this.validateData(data);
        if (error) {
            eXe.app.alert(error);
            return false;
        }
        return data;
    },

    getLocale: function () {
        const htmlLang =
            (document.documentElement &&
                document.documentElement.lang &&
                document.documentElement.lang.toLowerCase()) ||
            '';
        if (htmlLang.indexOf('ca') === 0) return 'ca';
        if (htmlLang.indexOf('en') === 0) return 'en';
        return 'es';
    },

    t: function (key) {
        const locale = this.getLocale();
        const current = this.i18n[locale] || {};
        return current[key] || this.i18n.es[key] || key;
    },

    getDefaultData: function () {
        return {
            title: 'Red trófica del humedal',
            subtitle: 'Ecosistema de agua dulce',
            instructions:
                '<p>Explora las especies, observa las relaciones y responde a las preguntas.</p>',
            ecosystemContext: {
                name: 'Humedal mediterráneo',
                biome: 'humedal',
                level: 'ESO',
                course: '1.º ESO',
                locale: 'es',
                notes: '',
            },
            displayOptions: {
                showLegend: true,
                showSpeciesCards: true,
                showArrows: true,
                showRelationLabels: false,
                randomizeQuestions: false,
                allowRevealAnswers: true,
                layout: 'levels',
            },
            species: [
                {
                    id: 'sp-alga',
                    name: 'Algas',
                    role: 'producer',
                    group: 'protist',
                    description: 'Base fotosintética del ecosistema.',
                    image: '',
                    traits: ['native', 'aquatic'],
                    importance: 'base',
                },
                {
                    id: 'sp-caracol',
                    name: 'Caracol acuático',
                    role: 'primary-consumer',
                    group: 'mollusk',
                    description: 'Consume algas y restos vegetales.',
                    image: '',
                    traits: ['native', 'herbivore'],
                    importance: 'intermediate',
                },
                {
                    id: 'sp-rana',
                    name: 'Rana',
                    role: 'secondary-consumer',
                    group: 'amphibian',
                    description: 'Depreda pequeños invertebrados.',
                    image: '',
                    traits: ['native', 'predator'],
                    importance: 'indicator',
                },
            ],
            relations: [
                {
                    id: 'rel-1',
                    from: 'sp-caracol',
                    to: 'sp-alga',
                    type: 'eats',
                    strength: 'medium',
                    note: 'El caracol se alimenta de algas.',
                },
                {
                    id: 'rel-2',
                    from: 'sp-rana',
                    to: 'sp-caracol',
                    type: 'eats',
                    strength: 'medium',
                    note: 'La rana se alimenta del caracol.',
                },
            ],
            questions: [
                {
                    id: 'q-1',
                    type: 'multiple-choice',
                    prompt: '¿Qué ocurriría si disminuyen mucho las algas?',
                    options: [
                        'Aumentarían todos los consumidores primarios',
                        'Disminuirían algunos consumidores primarios',
                        'No cambiaría nada',
                    ],
                    correctAnswers: [1],
                    explanation:
                        'Las algas sostienen a parte de los consumidores primarios.',
                },
            ],
            scenarios: [
                {
                    id: 'sc-1',
                    title: 'Llegada de especie invasora',
                    changeType: 'invasive-arrival',
                    targetSpeciesId: 'sp-rana',
                    prompt: 'Predice una consecuencia probable en la red.',
                    expectedEffects: ['Competencia por alimento', 'Cambio en las poblaciones'],
                },
            ],
            evaluation: false,
            evaluationID: '',
        };
    },

    normalizeData: function (rawData) {
        const defaults = this.getDefaultData();
        const data = rawData || {};
        const context = data.ecosystemContext || {};
        const display = data.displayOptions || {};
        const species = Array.isArray(data.species) ? data.species : defaults.species;
        const relations = Array.isArray(data.relations)
            ? data.relations
            : defaults.relations;
        const questions = Array.isArray(data.questions)
            ? data.questions
            : defaults.questions;
        const scenarios = Array.isArray(data.scenarios)
            ? data.scenarios
            : defaults.scenarios;
        return {
            title: data.title || defaults.title,
            subtitle: data.subtitle || defaults.subtitle,
            instructions: data.instructions || defaults.instructions,
            ecosystemContext: {
                name: context.name || defaults.ecosystemContext.name,
                biome: context.biome || defaults.ecosystemContext.biome,
                level: context.level || defaults.ecosystemContext.level,
                course: context.course || defaults.ecosystemContext.course,
                locale: context.locale || defaults.ecosystemContext.locale,
                notes: context.notes || defaults.ecosystemContext.notes,
            },
            displayOptions: {
                showLegend:
                    display.showLegend !== undefined
                        ? !!display.showLegend
                        : defaults.displayOptions.showLegend,
                showSpeciesCards:
                    display.showSpeciesCards !== undefined
                        ? !!display.showSpeciesCards
                        : defaults.displayOptions.showSpeciesCards,
                showArrows:
                    display.showArrows !== undefined
                        ? !!display.showArrows
                        : defaults.displayOptions.showArrows,
                showRelationLabels:
                    display.showRelationLabels !== undefined
                        ? !!display.showRelationLabels
                        : defaults.displayOptions.showRelationLabels,
                randomizeQuestions:
                    display.randomizeQuestions !== undefined
                        ? !!display.randomizeQuestions
                        : defaults.displayOptions.randomizeQuestions,
                allowRevealAnswers:
                    display.allowRevealAnswers !== undefined
                        ? !!display.allowRevealAnswers
                        : defaults.displayOptions.allowRevealAnswers,
                layout: display.layout || defaults.displayOptions.layout,
            },
            species: species.map((item, index) => ({
                id: item.id || this.slugify(item.name || `species-${index + 1}`, 'sp'),
                name: item.name || '',
                role: item.role || 'producer',
                group: item.group || '',
                description: item.description || '',
                image: item.image || '',
                traits: Array.isArray(item.traits)
                    ? item.traits
                    : this.splitList(item.traits || ''),
                importance: item.importance || '',
            })),
            relations: relations.map((item, index) => ({
                id: item.id || `rel-${index + 1}`,
                from: item.from || '',
                to: item.to || '',
                type: item.type || 'eats',
                strength: item.strength || 'medium',
                note: item.note || '',
            })),
            questions: questions.map((item, index) => ({
                id: item.id || `q-${index + 1}`,
                type: item.type || 'multiple-choice',
                prompt: item.prompt || '',
                options: Array.isArray(item.options)
                    ? item.options
                    : this.splitLines(item.options || ''),
                correctAnswers: Array.isArray(item.correctAnswers)
                    ? item.correctAnswers.map(Number).filter((value) => !Number.isNaN(value))
                    : this.parseCorrectAnswers(item.correctAnswers || ''),
                explanation: item.explanation || '',
            })),
            scenarios: scenarios.map((item, index) => ({
                id: item.id || `sc-${index + 1}`,
                title: item.title || '',
                changeType: item.changeType || 'species-disappearance',
                targetSpeciesId: item.targetSpeciesId || '',
                prompt: item.prompt || '',
                expectedEffects: Array.isArray(item.expectedEffects)
                    ? item.expectedEffects
                    : this.splitLines(item.expectedEffects || ''),
            })),
            evaluation: !!data.evaluation,
            evaluationID: data.evaluationID || '',
        };
    },

    createForm: function () {
        const data = this.normalizeData(this.idevicePreviousData);
        let html = `<div class="food-web-c1-editor">`;
        html += `<section class="fwc1-header"><h2>${this.t('Food web')}</h2><p>${this.t(
            'Interactive ecology activity with species, relations and scenarios.'
        )}</p></section>`;
        html += this.getGeneralSection(data);
        html += this.getSpeciesSection(data);
        html += this.getRelationsSection(data);
        html += this.getQuestionsSection(data);
        html += this.getScenariosSection(data);
        html += this.getAiSection(data);
        html += this.getImportExportSection();
        html += `</div>`;
        this.ideviceBody.innerHTML = html;
        this.syncPresetValues();
        this.setBehaviour();
    },

    getGeneralSection: function (data) {
        const options = data.displayOptions;
        return `<section class="fwc1-section">
            <h3>${this.t('General settings')}</h3>
            <div class="fwc1-grid">
                ${this.inputField('fwc1-title', this.t('Title'), data.title)}
                ${this.inputField('fwc1-subtitle', this.t('Subtitle'), data.subtitle)}
                ${this.textareaField('fwc1-instructions', this.t('Instructions'), data.instructions, 4)}
                ${this.inputField('fwc1-ecosystem-name', this.t('Ecosystem name'), data.ecosystemContext.name)}
                ${this.inputField('fwc1-biome', this.t('Biome'), data.ecosystemContext.biome)}
                ${this.inputField('fwc1-level', this.t('Level'), data.ecosystemContext.level)}
                ${this.inputField('fwc1-course', this.t('Course'), data.ecosystemContext.course)}
                ${this.selectField(
                    'fwc1-locale',
                    this.t('Locale'),
                    this.locales.map((value) => ({ value: value, label: value })),
                    data.ecosystemContext.locale
                )}
                ${this.textareaField('fwc1-notes', this.t('Notes'), data.ecosystemContext.notes, 3)}
            </div>
            <div class="fwc1-subsection">
                <h4>${this.t('Display options')}</h4>
                <div class="fwc1-grid fwc1-grid-tight">
                    ${this.checkboxField('fwc1-show-legend', this.t('Show legend'), options.showLegend)}
                    ${this.checkboxField('fwc1-show-species-cards', this.t('Show species cards'), options.showSpeciesCards)}
                    ${this.checkboxField('fwc1-show-arrows', this.t('Show arrows'), options.showArrows)}
                    ${this.checkboxField('fwc1-show-relation-labels', this.t('Show relation labels'), options.showRelationLabels)}
                    ${this.checkboxField('fwc1-randomize-questions', this.t('Randomize questions'), options.randomizeQuestions)}
                    ${this.checkboxField('fwc1-allow-reveal', this.t('Allow reveal answers'), options.allowRevealAnswers)}
                    ${this.selectField(
                        'fwc1-layout',
                        this.t('Layout'),
                        [
                            { value: 'levels', label: this.t('By trophic levels') },
                            { value: 'network', label: this.t('Network') },
                        ],
                        options.layout
                    )}
                </div>
            </div>
            <div class="fwc1-subsection">
                <h4>${this.t('Evaluation')}</h4>
                <div class="fwc1-grid fwc1-grid-tight">
                    ${this.checkboxField('fwc1-evaluation', this.t('Enable evaluation'), data.evaluation)}
                    ${this.inputField('fwc1-evaluation-id', this.t('Evaluation ID'), data.evaluationID)}
                </div>
            </div>
        </section>`;
    },

    getSpeciesSection: function (data) {
        return `<section class="fwc1-section">
            <div class="fwc1-section-header">
                <h3>${this.t('Species')}</h3>
                <button type="button" class="btn btn-secondary fwc1-add-row" data-target="species">${this.t('Add species')}</button>
            </div>
            <div id="fwc1-species-list">${data.species
                .map((item) => this.getSpeciesRow(item))
                .join('')}</div>
        </section>`;
    },

    getRelationsSection: function (data) {
        return `<section class="fwc1-section">
            <div class="fwc1-section-header">
                <h3>${this.t('Relations')}</h3>
                <button type="button" class="btn btn-secondary fwc1-add-row" data-target="relations">${this.t('Add relation')}</button>
            </div>
            <div id="fwc1-relations-list">${data.relations
                .map((item) => this.getRelationRow(item, data.species))
                .join('')}</div>
        </section>`;
    },

    getQuestionsSection: function (data) {
        return `<section class="fwc1-section">
            <div class="fwc1-section-header">
                <h3>${this.t('Questions')}</h3>
                <button type="button" class="btn btn-secondary fwc1-add-row" data-target="questions">${this.t('Add question')}</button>
            </div>
            <div id="fwc1-questions-list">${data.questions
                .map((item) => this.getQuestionRow(item))
                .join('')}</div>
        </section>`;
    },

    getScenariosSection: function (data) {
        return `<section class="fwc1-section">
            <div class="fwc1-section-header">
                <h3>${this.t('Scenarios')}</h3>
                <button type="button" class="btn btn-secondary fwc1-add-row" data-target="scenarios">${this.t('Add scenario')}</button>
            </div>
            <div id="fwc1-scenarios-list">${data.scenarios
                .map((item) => this.getScenarioRow(item, data.species))
                .join('')}</div>
        </section>`;
    },

    getAiSection: function (data) {
        return `<section class="fwc1-section">
            <h3>${this.t('Artificial Intelligence')}</h3>
            <div class="fwc1-grid">
                ${this.inputField('fwc1-ai-ecosystem', this.t('Ecosystem'), data.ecosystemContext.name)}
                ${this.inputField('fwc1-ai-level', this.t('Level'), data.ecosystemContext.level)}
                ${this.inputField('fwc1-ai-course', this.t('Course'), data.ecosystemContext.course)}
                ${this.inputField('fwc1-ai-species-count', this.t('Approx. species'), String(data.species.length), 'number')}
                ${this.checkboxField('fwc1-ai-include-decomposer', this.t('Include decomposer'), true)}
                ${this.checkboxField('fwc1-ai-include-invasive', this.t('Include invasive species'), false)}
                ${this.checkboxField('fwc1-ai-include-questions', this.t('Include questions'), true)}
                ${this.selectField(
                    'fwc1-ai-locale',
                    this.t('Locale'),
                    this.locales.map((value) => ({ value: value, label: value })),
                    data.ecosystemContext.locale
                )}
                ${this.selectField(
                    'fwc1-ai-difficulty',
                    this.t('Difficulty'),
                    [
                        { value: 'basic', label: this.t('Basic') },
                        { value: 'intermediate', label: this.t('Intermediate') },
                        { value: 'advanced', label: this.t('Advanced') },
                    ],
                    'intermediate'
                )}
            </div>
            <div class="fwc1-button-row">
                <button type="button" class="btn btn-secondary" id="fwc1-generate-prompt">${this.t('Generate prompt')}</button>
                <button type="button" class="btn btn-secondary" id="fwc1-copy-prompt">${this.t('Copy prompt')}</button>
                <button type="button" class="btn btn-secondary" id="fwc1-send-ai">${this.t('Send to AI')}</button>
                <button type="button" class="btn btn-secondary" id="fwc1-import-result">${this.t('Import result')}</button>
            </div>
            ${this.textareaField('fwc1-ai-prompt', this.t('Prompt to generate'), '', 8)}
            ${this.textareaField('fwc1-ai-result', this.t('Generated result'), '', 8)}
        </section>`;
    },

    getImportExportSection: function () {
        return `<section class="fwc1-section">
            <h3>${this.t('Import/Export')}</h3>
            <div class="fwc1-button-row">
                <button type="button" class="btn btn-secondary" id="fwc1-export-json">${this.t('Export JSON')}</button>
                <button type="button" class="btn btn-secondary" id="fwc1-import-json">${this.t('Import JSON')}</button>
                <input type="file" id="fwc1-import-file" accept=".json,.txt" class="fwc1-hidden-input" />
            </div>
            ${this.textareaField('fwc1-pasted-import', this.t('Paste simplified text or JSON'), '', 8, this.t('One option per line. Mark the correct ones with * at the end or write their indexes separated by commas.'))}
            <div class="fwc1-button-row">
                <button type="button" class="btn btn-secondary" id="fwc1-import-pasted">${this.t('Import pasted text')}</button>
            </div>
        </section>`;
    },

    getSpeciesRow: function (item) {
        return `<article class="fwc1-card fwc1-repeatable" data-kind="species" data-id="${this.escapeAttribute(
            item.id
        )}">
            <div class="fwc1-card-actions">
                <button type="button" class="btn btn-link fwc1-duplicate-row">${this.t('Duplicate')}</button>
                <button type="button" class="btn btn-link fwc1-delete-row">${this.t('Delete')}</button>
            </div>
            <div class="fwc1-grid">
                ${this.inputField('species-id', 'ID', item.id, 'text', '', 'fwc1-inline-field', true)}
                ${this.inputField('species-name', this.t('Name'), item.name)}
                ${this.selectField('species-role', this.t('Role'), this.getRoleOptions(), item.role)}
                ${this.inputField('species-group', this.t('Group'), item.group)}
                ${this.inputField('species-image', this.t('Image'), item.image)}
                ${this.inputField('species-importance', this.t('Importance'), item.importance)}
                ${this.textareaField('species-description', this.t('Description'), item.description, 3)}
                ${this.inputField('species-traits', this.t('Traits'), item.traits.join(', '), 'text', this.t('One trait per comma.'))}
            </div>
        </article>`;
    },

    getRelationRow: function (item, species) {
        return `<article class="fwc1-card fwc1-repeatable" data-kind="relation" data-id="${this.escapeAttribute(
            item.id
        )}">
            <div class="fwc1-card-actions">
                <button type="button" class="btn btn-link fwc1-duplicate-row">${this.t('Duplicate')}</button>
                <button type="button" class="btn btn-link fwc1-delete-row">${this.t('Delete')}</button>
            </div>
            <div class="fwc1-grid">
                ${this.inputField('relation-id', 'ID', item.id, 'text', '', 'fwc1-inline-field', true)}
                ${this.selectField('relation-from', this.t('Source'), this.getSpeciesSelectOptions(species), item.from)}
                ${this.selectField('relation-to', this.t('Target'), this.getSpeciesSelectOptions(species), item.to)}
                ${this.selectField('relation-type', this.t('Type'), this.getRelationTypeOptions(), item.type)}
                ${this.selectField('relation-strength', this.t('Strength'), this.getStrengthOptions(), item.strength)}
                ${this.textareaField('relation-note', this.t('Note'), item.note, 3)}
            </div>
        </article>`;
    },

    getQuestionRow: function (item) {
        return `<article class="fwc1-card fwc1-repeatable" data-kind="question" data-id="${this.escapeAttribute(
            item.id
        )}">
            <div class="fwc1-card-actions">
                <button type="button" class="btn btn-link fwc1-duplicate-row">${this.t('Duplicate')}</button>
                <button type="button" class="btn btn-link fwc1-delete-row">${this.t('Delete')}</button>
            </div>
            <div class="fwc1-grid">
                ${this.inputField('question-id', 'ID', item.id, 'text', '', 'fwc1-inline-field', true)}
                ${this.selectField('question-type', this.t('Question type'), this.getQuestionTypeOptions(), item.type)}
                ${this.textareaField('question-prompt', this.t('Prompt'), item.prompt, 3)}
                ${this.textareaField(
                    'question-options',
                    this.t('Options'),
                    item.options.join('\n'),
                    5,
                    this.t('One option per line. Mark the correct ones with * at the end or write their indexes separated by commas.')
                )}
                ${this.inputField('question-correct', this.t('Correct answers'), item.correctAnswers.join(', '))}
                ${this.textareaField('question-explanation', this.t('Explanation'), item.explanation, 3)}
            </div>
        </article>`;
    },

    getScenarioRow: function (item, species) {
        return `<article class="fwc1-card fwc1-repeatable" data-kind="scenario" data-id="${this.escapeAttribute(
            item.id
        )}">
            <div class="fwc1-card-actions">
                <button type="button" class="btn btn-link fwc1-duplicate-row">${this.t('Duplicate')}</button>
                <button type="button" class="btn btn-link fwc1-delete-row">${this.t('Delete')}</button>
            </div>
            <div class="fwc1-grid">
                ${this.inputField('scenario-id', 'ID', item.id, 'text', '', 'fwc1-inline-field', true)}
                ${this.inputField('scenario-title', this.t('Scenario title'), item.title)}
                ${this.selectField('scenario-change-type', this.t('Change type'), this.getScenarioTypeOptions(), item.changeType)}
                ${this.selectField('scenario-target-species', this.t('Target species'), this.getSpeciesSelectOptions(species), item.targetSpeciesId)}
                ${this.textareaField('scenario-prompt', this.t('Prompt'), item.prompt, 3)}
                ${this.textareaField('scenario-effects', this.t('Expected effects'), item.expectedEffects.join('\n'), 4, this.t('One expected effect per line.'))}
            </div>
        </article>`;
    },

    inputField: function (field, label, value, type, help, extraClass, readOnly) {
        return `<label class="fwc1-field ${extraClass || ''}">
            <span>${label}</span>
            <input id="${field}" type="${type || 'text'}" data-field="${field}" value="${this.escapeAttribute(
                value || ''
            )}" ${readOnly ? 'readonly="readonly"' : ''} />
            ${help ? `<small>${help}</small>` : ''}
        </label>`;
    },

    textareaField: function (field, label, value, rows, help) {
        return `<label class="fwc1-field fwc1-field-full">
            <span>${label}</span>
            <textarea id="${field}" data-field="${field}" rows="${rows || 4}">${this.escapeHtml(
                value || ''
            )}</textarea>
            ${help ? `<small>${help}</small>` : ''}
        </label>`;
    },

    selectField: function (field, label, options, selected) {
        return `<label class="fwc1-field">
            <span>${label}</span>
            <select id="${field}" data-field="${field}" data-selected="${this.escapeAttribute(
                selected || ''
            )}">
                ${options
                    .map(
                        (option) =>
                            `<option value="${this.escapeAttribute(option.value)}" ${
                                option.value === selected ? 'selected="selected"' : ''
                            }>${this.escapeHtml(option.label)}</option>`
                    )
                    .join('')}
            </select>
        </label>`;
    },

    checkboxField: function (field, label, checked) {
        return `<label class="fwc1-field fwc1-checkbox">
            <input id="${field}" type="checkbox" data-field="${field}" ${
                checked ? 'checked="checked"' : ''
            } />
            <span>${label}</span>
        </label>`;
    },

    setBehaviour: function () {
        const root = this.ideviceBody;
        root.querySelectorAll('.fwc1-add-row').forEach((button) => {
            button.addEventListener('click', () => this.addRow(button.dataset.target));
        });
        root.addEventListener('click', (event) => {
            const duplicate = event.target.closest('.fwc1-duplicate-row');
            if (duplicate) {
                this.duplicateRow(duplicate.closest('.fwc1-repeatable'));
                return;
            }
            const remove = event.target.closest('.fwc1-delete-row');
            if (remove) {
                this.deleteRow(remove.closest('.fwc1-repeatable'));
            }
        });
        root.addEventListener('input', (event) => {
            if (event.target && event.target.dataset.field === 'species-name') {
                const card = event.target.closest('[data-kind="species"]');
                const idInput = card.querySelector('[data-field="species-id"]');
                idInput.value = this.slugify(event.target.value, 'sp');
                this.refreshSpeciesDependentSelects();
            }
        });
        root.querySelector('#fwc1-generate-prompt').addEventListener('click', () => {
            root.querySelector('#fwc1-ai-prompt').value = this.buildAiPrompt();
        });
        root.querySelector('#fwc1-copy-prompt').addEventListener('click', () => {
            this.copyText(root.querySelector('#fwc1-ai-prompt').value, this.t('The prompt has been copied to the clipboard.'));
        });
        root.querySelector('#fwc1-send-ai').addEventListener('click', () => {
            const prompt = root.querySelector('#fwc1-ai-prompt').value || this.buildAiPrompt();
            root.querySelector('#fwc1-ai-prompt').value = prompt;
            this.copyText(prompt, this.t('Open your preferred assistant and paste the prompt.'));
            if (typeof window !== 'undefined' && window.open) {
                window.open('https://chat.openai.com/', '_blank', 'noopener');
            }
        });
        root.querySelector('#fwc1-import-result').addEventListener('click', () => {
            this.importText(root.querySelector('#fwc1-ai-result').value);
        });
        root.querySelector('#fwc1-export-json').addEventListener('click', () => {
            const data = this.collectFormData();
            this.downloadFile(
                'food-web-c1.json',
                JSON.stringify(data, null, 2),
                'application/json'
            );
        });
        root.querySelector('#fwc1-import-json').addEventListener('click', () => {
            root.querySelector('#fwc1-import-file').click();
        });
        root.querySelector('#fwc1-import-file').addEventListener('change', this.bindedImportFile);
        root.querySelector('#fwc1-import-pasted').addEventListener('click', () => {
            this.importText(root.querySelector('#fwc1-pasted-import').value);
        });
    },

    addRow: function (target) {
        const species = this.collectSpecies();
        const defaults = {
            species: this.getSpeciesRow({
                id: this.slugify(`species-${Date.now()}`, 'sp'),
                name: '',
                role: 'producer',
                group: '',
                description: '',
                image: '',
                traits: [],
                importance: '',
            }),
            relations: this.getRelationRow(
                {
                    id: `rel-${Date.now()}`,
                    from: species[0] ? species[0].id : '',
                    to: species[1] ? species[1].id : '',
                    type: 'eats',
                    strength: 'medium',
                    note: '',
                },
                species
            ),
            questions: this.getQuestionRow({
                id: `q-${Date.now()}`,
                type: 'multiple-choice',
                prompt: '',
                options: [],
                correctAnswers: [],
                explanation: '',
            }),
            scenarios: this.getScenarioRow(
                {
                    id: `sc-${Date.now()}`,
                    title: '',
                    changeType: 'species-disappearance',
                    targetSpeciesId: species[0] ? species[0].id : '',
                    prompt: '',
                    expectedEffects: [],
                },
                species
            ),
        };
        const list = this.ideviceBody.querySelector(`#fwc1-${target}-list`);
        list.insertAdjacentHTML('beforeend', defaults[target]);
        this.refreshSpeciesDependentSelects();
    },

    duplicateRow: function (card) {
        if (!card) return;
        const clone = card.cloneNode(true);
        const kind = clone.dataset.kind;
        const idInput = clone.querySelector('[data-field$="-id"]');
        if (idInput) {
            const prefix = kind === 'species' ? 'sp' : kind === 'relation' ? 'rel' : kind === 'question' ? 'q' : 'sc';
            idInput.value = this.slugify(`${idInput.value}-${Date.now()}`, prefix);
        }
        card.insertAdjacentElement('afterend', clone);
        this.refreshSpeciesDependentSelects();
    },

    deleteRow: function (card) {
        if (!card) return;
        const container = card.parentElement;
        if (container.children.length <= 1) return;
        card.remove();
        this.refreshSpeciesDependentSelects();
    },

    collectFormData: function () {
        return this.normalizeData({
            title: this.valueById('fwc1-title'),
            subtitle: this.valueById('fwc1-subtitle'),
            instructions: this.valueById('fwc1-instructions'),
            ecosystemContext: {
                name: this.valueById('fwc1-ecosystem-name'),
                biome: this.valueById('fwc1-biome'),
                level: this.valueById('fwc1-level'),
                course: this.valueById('fwc1-course'),
                locale: this.valueById('fwc1-locale'),
                notes: this.valueById('fwc1-notes'),
            },
            displayOptions: {
                showLegend: this.checkedById('fwc1-show-legend'),
                showSpeciesCards: this.checkedById('fwc1-show-species-cards'),
                showArrows: this.checkedById('fwc1-show-arrows'),
                showRelationLabels: this.checkedById('fwc1-show-relation-labels'),
                randomizeQuestions: this.checkedById('fwc1-randomize-questions'),
                allowRevealAnswers: this.checkedById('fwc1-allow-reveal'),
                layout: this.valueById('fwc1-layout'),
            },
            species: this.collectSpecies(),
            relations: this.collectRelations(),
            questions: this.collectQuestions(),
            scenarios: this.collectScenarios(),
            evaluation: this.checkedById('fwc1-evaluation'),
            evaluationID: this.valueById('fwc1-evaluation-id'),
        });
    },

    collectSpecies: function () {
        return Array.from(
            this.ideviceBody.querySelectorAll('[data-kind="species"]')
        ).map((card, index) => ({
            id:
                this.getFieldValue(card, 'species-id') ||
                this.slugify(this.getFieldValue(card, 'species-name'), 'sp') ||
                `sp-${index + 1}`,
            name: this.getFieldValue(card, 'species-name'),
            role: this.getFieldValue(card, 'species-role') || 'producer',
            group: this.getFieldValue(card, 'species-group'),
            description: this.getFieldValue(card, 'species-description'),
            image: this.getFieldValue(card, 'species-image'),
            traits: this.splitList(this.getFieldValue(card, 'species-traits')),
            importance: this.getFieldValue(card, 'species-importance'),
        }));
    },

    collectRelations: function () {
        return Array.from(
            this.ideviceBody.querySelectorAll('[data-kind="relation"]')
        ).map((card, index) => ({
            id: this.getFieldValue(card, 'relation-id') || `rel-${index + 1}`,
            from: this.getFieldValue(card, 'relation-from'),
            to: this.getFieldValue(card, 'relation-to'),
            type: this.getFieldValue(card, 'relation-type'),
            strength: this.getFieldValue(card, 'relation-strength'),
            note: this.getFieldValue(card, 'relation-note'),
        }));
    },

    collectQuestions: function () {
        return Array.from(
            this.ideviceBody.querySelectorAll('[data-kind="question"]')
        ).map((card, index) => {
            const options = this.splitLines(this.getFieldValue(card, 'question-options'));
            const explicitCorrect = this.parseCorrectAnswers(
                this.getFieldValue(card, 'question-correct')
            );
            const derivedCorrect = [];
            const cleanOptions = options.map((option, optionIndex) => {
                if (/\*$/.test(option.trim())) {
                    derivedCorrect.push(optionIndex);
                    return option.replace(/\*$/, '').trim();
                }
                return option;
            });
            return {
                id: this.getFieldValue(card, 'question-id') || `q-${index + 1}`,
                type: this.getFieldValue(card, 'question-type'),
                prompt: this.getFieldValue(card, 'question-prompt'),
                options: cleanOptions,
                correctAnswers: explicitCorrect.length ? explicitCorrect : derivedCorrect,
                explanation: this.getFieldValue(card, 'question-explanation'),
            };
        });
    },

    collectScenarios: function () {
        return Array.from(
            this.ideviceBody.querySelectorAll('[data-kind="scenario"]')
        ).map((card, index) => ({
            id: this.getFieldValue(card, 'scenario-id') || `sc-${index + 1}`,
            title: this.getFieldValue(card, 'scenario-title'),
            changeType: this.getFieldValue(card, 'scenario-change-type'),
            targetSpeciesId: this.getFieldValue(card, 'scenario-target-species'),
            prompt: this.getFieldValue(card, 'scenario-prompt'),
            expectedEffects: this.splitLines(this.getFieldValue(card, 'scenario-effects')),
        }));
    },

    validateData: function (data) {
        const normalized = this.normalizeData(data);
        if (!normalized.title.trim()) return this.t('Please write a title.');
        if (normalized.species.length < 3) return this.t('At least three species are required.');
        if (!normalized.species.some((item) => item.role === 'producer'))
            return this.t('At least one producer is required.');
        if (normalized.relations.length < 2) return this.t('At least two relations are required.');
        const ids = normalized.species.map((item) => item.id);
        const uniqueIds = new Set(ids);
        if (uniqueIds.size !== ids.length) return 'Species IDs must be unique.';
        const brokenRelation = normalized.relations.some(
            (relation) =>
                !uniqueIds.has(relation.from) ||
                !uniqueIds.has(relation.to) ||
                !relation.from ||
                !relation.to
        );
        if (brokenRelation) return this.t('There are broken references in the relations.');
        const duplicateRelationSet = new Set();
        for (let index = 0; index < normalized.relations.length; index += 1) {
            const relation = normalized.relations[index];
            if (relation.from === relation.to) return this.t('There are broken references in the relations.');
            const key = `${relation.from}|${relation.to}|${relation.type}`;
            if (duplicateRelationSet.has(key)) return 'Duplicated relations are not allowed.';
            duplicateRelationSet.add(key);
        }
        const invalidQuestion = normalized.questions.some((question) => {
            if (!question.prompt.trim()) return true;
            if (
                ['multiple-choice', 'multi-select', 'match-role'].indexOf(question.type) !== -1 &&
                question.options.length < 2
            ) {
                return true;
            }
            if (
                ['multiple-choice', 'multi-select', 'true-false'].indexOf(question.type) !== -1 &&
                !question.correctAnswers.length
            ) {
                return true;
            }
            return false;
        });
        if (invalidQuestion) return this.t('The questions are not valid.');
        return '';
    },

    buildAiPrompt: function () {
        const ecosystem = this.valueById('fwc1-ai-ecosystem');
        const level = this.valueById('fwc1-ai-level');
        const course = this.valueById('fwc1-ai-course');
        const speciesCount = this.valueById('fwc1-ai-species-count') || '8';
        const locale = this.valueById('fwc1-ai-locale');
        const difficulty = this.valueById('fwc1-ai-difficulty');
        const includeDecomposer = this.checkedById('fwc1-ai-include-decomposer');
        const includeInvasive = this.checkedById('fwc1-ai-include-invasive');
        const includeQuestions = this.checkedById('fwc1-ai-include-questions');
        return `Actúa como docente experto en ecología escolar.
Genera una red trófica para eXeLearning en JSON válido para el iDevice food-web-c1.

Requisitos:
- ecosistema: ${ecosystem}
- nivel educativo: ${level}
- curso: ${course}
- número aproximado de especies: ${speciesCount}
- idioma de salida: ${locale}
- dificultad: ${difficulty}
- incluye al menos un productor
- ${includeDecomposer ? 'incluye al menos un descomponedor' : 'no es obligatorio incluir descomponedor'}
- ${includeInvasive ? 'incluye una especie invasora' : 'no incluyas especies invasoras salvo que sean didácticamente necesarias'}
- ${includeQuestions ? 'añade 3-5 preguntas de práctica' : 'no añadas preguntas'}
- define relaciones tróficas coherentes
- usa los campos: title, subtitle, instructions, ecosystemContext, displayOptions, species, relations, questions, scenarios, evaluation, evaluationID
- devuelve solo JSON`;
    },

    importText: function (text) {
        if (!text || !text.trim()) return;
        try {
            const imported = this.parseImportText(text);
            const error = this.validateData(imported);
            if (error) {
                eXe.app.alert(error);
                return;
            }
            this.idevicePreviousData = imported;
            this.createForm();
            eXe.app.alert(this.t('The content has been imported successfully.'));
        } catch (error) {
            eXe.app.alert(this.t('The imported content is not valid for this iDevice.'));
        }
    },

    parseImportText: function (text) {
        const trimmed = text.trim();
        if (!trimmed) return this.getDefaultData();
        if (trimmed[0] === '{') {
            return this.normalizeData(JSON.parse(trimmed));
        }
        const jsonMatch = trimmed.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
            try {
                return this.normalizeData(JSON.parse(jsonMatch[0]));
            } catch (error) {
            }
        }
        return this.parseSimplifiedText(trimmed);
    },

    parseSimplifiedText: function (text) {
        const data = this.getDefaultData();
        data.species = [];
        data.relations = [];
        data.questions = [];
        data.scenarios = [];
        const speciesByName = {};
        const lines = this.splitLines(text);
        lines.forEach((line) => {
            const separatorIndex = line.indexOf(':');
            if (separatorIndex === -1) return;
            const key = line.slice(0, separatorIndex).trim().toUpperCase();
            const rest = line.slice(separatorIndex + 1).trim();
            const parts = rest.split('|').map((item) => item.trim());
            if (key === 'ECOSYSTEM') data.ecosystemContext.name = rest;
            if (key === 'TITLE') data.title = rest;
            if (key === 'SUBTITLE') data.subtitle = rest;
            if (key === 'INSTRUCTIONS') data.instructions = `<p>${rest}</p>`;
            if (key === 'SPECIES') {
                const name = parts[0] || '';
                const role = parts[1] || 'producer';
                const group = parts[2] || '';
                const description = parts[3] || '';
                const id = this.slugify(name, 'sp');
                data.species.push({
                    id: id,
                    name: name,
                    role: role,
                    group: group,
                    description: description,
                    image: '',
                    traits: [],
                    importance: '',
                });
                speciesByName[name.toLowerCase()] = id;
            }
            if (key === 'RELATION') {
                const fromName = parts[0] || '';
                const type = parts[1] || 'eats';
                const toName = parts[2] || '';
                const strength = parts[3] || 'medium';
                data.relations.push({
                    id: `rel-${data.relations.length + 1}`,
                    from: speciesByName[fromName.toLowerCase()] || this.slugify(fromName, 'sp'),
                    to: speciesByName[toName.toLowerCase()] || this.slugify(toName, 'sp'),
                    type: type,
                    strength: strength,
                    note: parts[4] || '',
                });
            }
            if (key === 'QUESTION') {
                const type = parts[0] || 'multiple-choice';
                const prompt = parts[1] || '';
                const optionParts = parts.slice(2);
                const options = [];
                const correctAnswers = [];
                optionParts.forEach((option, index) => {
                    if (/\*$/.test(option)) {
                        correctAnswers.push(index);
                        options.push(option.replace(/\*$/, '').trim());
                    } else {
                        options.push(option);
                    }
                });
                data.questions.push({
                    id: `q-${data.questions.length + 1}`,
                    type: type,
                    prompt: prompt,
                    options: options,
                    correctAnswers: correctAnswers,
                    explanation: '',
                });
            }
            if (key === 'SCENARIO') {
                data.scenarios.push({
                    id: `sc-${data.scenarios.length + 1}`,
                    title: parts[0] || '',
                    changeType: parts[1] || 'species-disappearance',
                    targetSpeciesId:
                        speciesByName[(parts[2] || '').toLowerCase()] ||
                        this.slugify(parts[2] || '', 'sp'),
                    prompt: parts[3] || '',
                    expectedEffects: parts.slice(4),
                });
            }
        });
        return this.normalizeData(data);
    },

    handleImportFile: function (event) {
        const file = event.target.files && event.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (loadEvent) => {
            this.importText(loadEvent.target.result);
        };
        reader.readAsText(file);
        event.target.value = '';
    },

    refreshSpeciesDependentSelects: function () {
        const species = this.collectSpecies();
        const options = this.getSpeciesSelectOptions(species);
        this.ideviceBody
            .querySelectorAll('[data-field="relation-from"], [data-field="relation-to"], [data-field="scenario-target-species"]')
            .forEach((select) => {
                const current = select.value;
                select.innerHTML = options
                    .map(
                        (option) =>
                            `<option value="${this.escapeAttribute(option.value)}" ${
                                option.value === current ? 'selected="selected"' : ''
                            }>${this.escapeHtml(option.label)}</option>`
                    )
                    .join('');
            });
    },

    syncPresetValues: function () {
        this.ideviceBody.querySelectorAll('select[data-selected]').forEach((field) => {
            if (field.dataset.selected) {
                field.value = field.dataset.selected;
            }
        });
    },

    getRoleOptions: function () {
        return [
            { value: 'producer', label: this.t('Producer') },
            { value: 'primary-consumer', label: this.t('Primary consumer') },
            { value: 'secondary-consumer', label: this.t('Secondary consumer') },
            { value: 'tertiary-consumer', label: this.t('Tertiary consumer') },
            { value: 'omnivore', label: this.t('Omnivore') },
            { value: 'decomposer', label: this.t('Decomposer') },
        ];
    },

    getRelationTypeOptions: function () {
        return [
            { value: 'eats', label: this.t('Eats') },
            { value: 'decomposes', label: this.t('Decomposes') },
            { value: 'competes', label: this.t('Competes') },
            { value: 'parasite-of', label: this.t('Parasite of') },
        ];
    },

    getStrengthOptions: function () {
        return [
            { value: 'low', label: this.t('Low') },
            { value: 'medium', label: this.t('Medium') },
            { value: 'high', label: this.t('High') },
        ];
    },

    getQuestionTypeOptions: function () {
        return [
            { value: 'multiple-choice', label: this.t('Multiple choice') },
            { value: 'multi-select', label: this.t('Multi select') },
            { value: 'true-false', label: this.t('True/false') },
            { value: 'match-role', label: this.t('Match role') },
            { value: 'predict-effect', label: this.t('Predict effect') },
        ];
    },

    getScenarioTypeOptions: function () {
        return [
            { value: 'species-disappearance', label: this.t('Species disappearance') },
            { value: 'population-increase', label: this.t('Population increase') },
            { value: 'invasive-arrival', label: this.t('Invasive arrival') },
            { value: 'pollution', label: this.t('Pollution') },
            { value: 'drought', label: this.t('Drought') },
            { value: 'producer-loss', label: this.t('Producer loss') },
        ];
    },

    getSpeciesSelectOptions: function (species) {
        const list = species && species.length ? species : this.collectSpecies();
        return list.map((item) => ({
            value: item.id,
            label: item.name || item.id,
        }));
    },

    splitLines: function (value) {
        return String(value || '')
            .split(/\r?\n/)
            .map((item) => item.trim())
            .filter(Boolean);
    },

    splitList: function (value) {
        if (Array.isArray(value)) return value.filter(Boolean);
        return String(value || '')
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean);
    },

    parseCorrectAnswers: function (value) {
        if (Array.isArray(value)) return value.map(Number).filter((item) => !Number.isNaN(item));
        return String(value || '')
            .split(',')
            .map((item) => Number(item.trim()))
            .filter((item) => !Number.isNaN(item));
    },

    slugify: function (value, prefix) {
        const base = String(value || '')
            .toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-+|-+$/g, '');
        return `${prefix || 'id'}-${base || Date.now()}`;
    },

    valueById: function (id) {
        const field = this.ideviceBody.querySelector(`#${id}`);
        if (!field) return '';
        if (field.type === 'checkbox') return field.checked;
        return field.value || '';
    },

    checkedById: function (id) {
        return !!this.ideviceBody.querySelector(`#${id}`)?.checked;
    },

    getFieldValue: function (card, name) {
        const field = card.querySelector(`[data-field="${name}"]`);
        if (!field) return '';
        if (field.type === 'checkbox') return field.checked;
        return field.value || '';
    },

    copyText: function (text, successMessage) {
        if (!text) return;
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard
                .writeText(text)
                .then(() => eXe.app.alert(successMessage))
                .catch(() => eXe.app.alert(this.t('Unable to copy to the clipboard.')));
            return;
        }
        eXe.app.alert(this.t('Unable to copy to the clipboard.'));
    },

    downloadFile: function (filename, content, mimeType) {
        if (typeof document === 'undefined') return;
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
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
