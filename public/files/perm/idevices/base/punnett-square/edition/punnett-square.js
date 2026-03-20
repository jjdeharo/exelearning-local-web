/**
 * Punnett square iDevice (edition)
 *
 * Adapted for this repository as a custom iDevice for eXeLearning.
 * Based on the eXeLearning iDevice architecture and UI patterns.
 *
 * Author: Juan José de Haro / Codex collaboration
 * License: GNU Affero General Public License v3.0 (see repository LICENSE)
 */
/* eslint-disable no-undef */
var $exeDevice = {
    i18n: {
        en: {
            'Punnett square': 'Punnett square',
            'Create interactive Punnett square activities for monohybrid and dihybrid crosses.':
                'Create interactive Punnett square activities for monohybrid and dihybrid crosses.',
            'Complete a sequence of Punnett square activities, determine the possible gametes and calculate genotype and phenotype ratios.':
                'Complete a sequence of Punnett square activities, determine the possible gametes and calculate genotype and phenotype ratios.',
            'Practice set': 'Practice set',
            Mode: 'Mode',
            Sequence: 'Sequence',
            Random: 'Random',
            'Random activities': 'Random activities',
            'Set to 0 to use all activities.': 'Set to 0 to use all activities.',
            Activities: 'Activities',
            'Add activity': 'Add activity',
            Duplicate: 'Duplicate',
            Delete: 'Delete',
            'Activity %s': 'Activity %s',
            Cross: 'Cross',
            'Activity title': 'Activity title',
            'Number of genes': 'Number of genes',
            Monohybrid: 'Monohybrid',
            Dihybrid: 'Dihybrid',
            'Parent 1 genotype': 'Parent 1 genotype',
            'Parent 2 genotype': 'Parent 2 genotype',
            'Examples: AA, Aa, aa, AaBb': 'Examples: AA, Aa, aa, AaBb',
            Traits: 'Traits',
            'Gene 1 letter': 'Gene 1 letter',
            'Gene 2 letter': 'Gene 2 letter',
            'Gene 1 dominant phenotype': 'Gene 1 dominant phenotype',
            'Gene 1 recessive phenotype': 'Gene 1 recessive phenotype',
            'Gene 2 dominant phenotype': 'Gene 2 dominant phenotype',
            'Gene 2 recessive phenotype': 'Gene 2 recessive phenotype',
            'Example dominant trait: dark eyes':
                'Example dominant trait: dark eyes',
            'Example recessive trait: light eyes':
                'Example recessive trait: light eyes',
            'Student tasks': 'Student tasks',
            'Ask for possible gametes': 'Ask for possible gametes',
            'Ask for Punnett square cells': 'Ask for Punnett square cells',
            'Ask for genotype ratio': 'Ask for genotype ratio',
            'Ask for phenotype ratio': 'Ask for phenotype ratio',
            'Allow showing the solution': 'Allow showing the solution',
            'Use the same identifier in all the activities that belong to the same progress report.':
                'Use the same identifier in all the activities that belong to the same progress report.',
            'Please write the instructions.': 'Please write the instructions.',
            'Please write an activity title.': 'Please write an activity title.',
            'At least one activity is required.': 'At least one activity is required.',
            'No valid activities were found in the imported content.':
                'No valid activities were found in the imported content.',
            'The imported activities have been added successfully.':
                'The imported activities have been added successfully.',
            'Please select a valid file (.json or .txt).':
                'Please select a valid file (.json or .txt).',
            'The file does not contain a valid Punnett square activity set.':
                'The file does not contain a valid Punnett square activity set.',
            'Import/Export': 'Import/Export',
            'Artificial Intelligence': 'Artificial Intelligence',
            'Import activity set': 'Import activity set',
            'Export activity set': 'Export activity set',
            'Choose': 'Choose',
            'No file selected': 'No file selected',
            'Supported formats: json, txt': 'Supported formats: json, txt',
            'You can import a full Punnett square activity set in JSON format or a plain text list of activities.':
                'You can import a full Punnett square activity set in JSON format or a plain text list of activities.',
            'Export activities': 'Export activities',
            'Generate or import Punnett square activities with AI.':
                'Generate or import Punnett square activities with AI.',
            'Copy prompt': 'Copy prompt',
            'Send to AI': 'Send to AI',
            'Import text': 'Import text',
            'Number of activities': 'Number of activities',
            Topic: 'Topic',
            Specialty: 'Specialty',
            Course: 'Course',
            Create: 'Create',
            'Prompt to generate activities': 'Prompt to generate activities',
            'Generated or pasted activities': 'Generated or pasted activities',
            'Act as a highly experienced teacher.':
                'Act as a highly experienced teacher.',
            'Generate Punnett square activities using this exact format, one activity per line:':
                'Generate Punnett square activities using this exact format, one activity per line:',
            'Monohybrid format: Title#1#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1':
                'Monohybrid format: Title#1#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1',
            'Dihybrid format: Title#2#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1#Gene2Letter#DominantPhenotype2#RecessivePhenotype2':
                'Dihybrid format: Title#2#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1#Gene2Letter#DominantPhenotype2#RecessivePhenotype2',
            'Do not include numbering, bullets, explanations or the # character inside any field.':
                'Do not include numbering, bullets, explanations or the # character inside any field.',
            'Write Parent1 and Parent2 separately. Do not write crosses like Aa x aa inside a single field.':
                'Write Parent1 and Parent2 separately. Do not write crosses like Aa x aa inside a single field.',
            'There is no prompt to copy.': 'There is no prompt to copy.',
            'There is no query to send to the assistant.':
                'There is no query to send to the assistant.',
            'Please select an AI assistant.':
                'Please select an AI assistant.',
            'Please enter at least one activity.':
                'Please enter at least one activity.',
            'Generating activities. Please wait...':
                'Generating activities. Please wait...',
            'The activities could not be generated.':
                'The activities could not be generated.',
            'The activities could not be generated. Incorrect format':
                'The activities could not be generated. Incorrect format',
            'An error occurred while retrieving the activities. Please try again.':
                'An error occurred while retrieving the activities. Please try again.',
            'Parent 1 genotype does not match the selected number of genes.':
                'Parent 1 genotype does not match the selected number of genes.',
            'Parent 2 genotype does not match the selected number of genes.':
                'Parent 2 genotype does not match the selected number of genes.',
            'Each gene needs a letter.': 'Each gene needs a letter.',
            'Write the dominant and recessive phenotype for each active gene.':
                'Write the dominant and recessive phenotype for each active gene.',
            'Parent genotypes must use the configured gene letters.':
                'Parent genotypes must use the configured gene letters.',
            'Select at least one student task.':
                'Select at least one student task.',
            'The report identifier must have at least 5 characters.':
                'The report identifier must have at least 5 characters.',
            'Random activities cannot exceed the number of available activities.':
                'Random activities cannot exceed the number of available activities.',
            'Monohybrid cross': 'Monohybrid cross',
        },
        es: {
            'Punnett square': 'Cuadro de Punnett',
            'Create interactive Punnett square activities for monohybrid and dihybrid crosses.':
                'Crea actividades interactivas de cuadro de Punnett para cruces monohíbridos y dihíbridos.',
            'Complete a sequence of Punnett square activities, determine the possible gametes and calculate genotype and phenotype ratios.':
                'Completa una secuencia de actividades de cuadro de Punnett, determina los gametos posibles y calcula las proporciones genotípicas y fenotípicas.',
            'Practice set': 'Batería de actividades',
            Mode: 'Modo',
            Sequence: 'Secuencia',
            Random: 'Aleatorio',
            'Random activities': 'Actividades aleatorias',
            'Set to 0 to use all activities.':
                'Pon 0 para usar todas las actividades.',
            Activities: 'Actividades',
            'Add activity': 'Añadir actividad',
            Duplicate: 'Duplicar',
            Delete: 'Eliminar',
            'Activity %s': 'Actividad %s',
            Cross: 'Cruce',
            'Activity title': 'Título de la actividad',
            'Number of genes': 'Número de genes',
            Monohybrid: 'Monohíbrido',
            Dihybrid: 'Dihíbrido',
            'Parent 1 genotype': 'Genotipo del progenitor 1',
            'Parent 2 genotype': 'Genotipo del progenitor 2',
            'Examples: AA, Aa, aa, AaBb': 'Ejemplos: AA, Aa, aa, AaBb',
            Traits: 'Rasgos',
            'Gene 1 letter': 'Letra del gen 1',
            'Gene 2 letter': 'Letra del gen 2',
            'Gene 1 dominant phenotype': 'Fenotipo dominante del gen 1',
            'Gene 1 recessive phenotype': 'Fenotipo recesivo del gen 1',
            'Gene 2 dominant phenotype': 'Fenotipo dominante del gen 2',
            'Gene 2 recessive phenotype': 'Fenotipo recesivo del gen 2',
            'Example dominant trait: dark eyes':
                'Ejemplo de rasgo dominante: ojos oscuros',
            'Example recessive trait: light eyes':
                'Ejemplo de rasgo recesivo: ojos claros',
            'Student tasks': 'Tareas del alumnado',
            'Ask for possible gametes': 'Pedir gametos posibles',
            'Ask for Punnett square cells': 'Pedir celdas del cuadro de Punnett',
            'Ask for genotype ratio': 'Pedir proporción genotípica',
            'Ask for phenotype ratio': 'Pedir proporción fenotípica',
            'Allow showing the solution': 'Permitir mostrar la solución',
            'Use the same identifier in all the activities that belong to the same progress report.':
                'Usa el mismo identificador en todas las actividades que pertenezcan al mismo informe de progreso.',
            'Please write the instructions.': 'Escribe las instrucciones.',
            'Please write an activity title.':
                'Escribe un título para la actividad.',
            'At least one activity is required.':
                'Hace falta al menos una actividad.',
            'No valid activities were found in the imported content.':
                'No se ha encontrado ninguna actividad válida en el contenido importado.',
            'The imported activities have been added successfully.':
                'Las actividades importadas se han añadido correctamente.',
            'Please select a valid file (.json or .txt).':
                'Selecciona un archivo válido (.json o .txt).',
            'The file does not contain a valid Punnett square activity set.':
                'El archivo no contiene una batería válida de actividades de cuadro de Punnett.',
            'Import/Export': 'Importar/Exportar',
            'Artificial Intelligence': 'Inteligencia artificial',
            'Import activity set': 'Importar batería de actividades',
            'Export activity set': 'Exportar batería de actividades',
            'Choose': 'Elegir',
            'No file selected': 'Ningún archivo seleccionado',
            'Supported formats: json, txt': 'Formatos admitidos: json, txt',
            'You can import a full Punnett square activity set in JSON format or a plain text list of activities.':
                'Puedes importar una batería completa de actividades de cuadro de Punnett en formato JSON o una lista de actividades en texto plano.',
            'Export activities': 'Exportar actividades',
            'Generate or import Punnett square activities with AI.':
                'Genera o importa actividades de cuadro de Punnett con IA.',
            'Copy prompt': 'Copiar prompt',
            'Send to AI': 'Enviar a la IA',
            'Import text': 'Importar texto',
            'Number of activities': 'Número de actividades',
            Topic: 'Tema',
            Specialty: 'Especialidad',
            Course: 'Curso',
            Create: 'Crear',
            'Prompt to generate activities': 'Prompt para generar actividades',
            'Generated or pasted activities': 'Actividades generadas o pegadas',
            'Act as a highly experienced teacher.':
                'Actúa como un docente con mucha experiencia.',
            'Generate Punnett square activities using this exact format, one activity per line:':
                'Genera actividades de cuadro de Punnett usando exactamente este formato, una actividad por línea:',
            'Monohybrid format: Title#1#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1':
                'Formato monohíbrido: Título#1#Progenitor1#Progenitor2#LetraGen1#FenotipoDominante1#FenotipoRecesivo1',
            'Dihybrid format: Title#2#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1#Gene2Letter#DominantPhenotype2#RecessivePhenotype2':
                'Formato dihíbrido: Título#2#Progenitor1#Progenitor2#LetraGen1#FenotipoDominante1#FenotipoRecesivo1#LetraGen2#FenotipoDominante2#FenotipoRecesivo2',
            'Do not include numbering, bullets, explanations or the # character inside any field.':
                'No incluyas numeración, viñetas, explicaciones ni el carácter # dentro de ningún campo.',
            'Write Parent1 and Parent2 separately. Do not write crosses like Aa x aa inside a single field.':
                'Escribe Progenitor1 y Progenitor2 por separado. No escribas cruces como Aa x aa dentro de un solo campo.',
            'There is no prompt to copy.': 'No hay ningún prompt para copiar.',
            'There is no query to send to the assistant.':
                'No hay ninguna consulta para enviar al asistente.',
            'Please select an AI assistant.':
                'Selecciona un asistente de IA.',
            'Please enter at least one activity.':
                'Introduce al menos una actividad.',
            'Generating activities. Please wait...':
                'Generando actividades. Espera un momento...',
            'The activities could not be generated.':
                'No se han podido generar las actividades.',
            'The activities could not be generated. Incorrect format':
                'No se han podido generar las actividades. Formato incorrecto.',
            'An error occurred while retrieving the activities. Please try again.':
                'Se ha producido un error al obtener las actividades. Inténtalo de nuevo.',
            'Parent 1 genotype does not match the selected number of genes.':
                'El genotipo del progenitor 1 no coincide con el número de genes seleccionado.',
            'Parent 2 genotype does not match the selected number of genes.':
                'El genotipo del progenitor 2 no coincide con el número de genes seleccionado.',
            'Each gene needs a letter.': 'Cada gen necesita una letra.',
            'Write the dominant and recessive phenotype for each active gene.':
                'Escribe el fenotipo dominante y recesivo de cada gen activo.',
            'Parent genotypes must use the configured gene letters.':
                'Los genotipos de los progenitores deben usar las letras de gen configuradas.',
            'Select at least one student task.':
                'Selecciona al menos una tarea para el alumnado.',
            'The report identifier must have at least 5 characters.':
                'El identificador del informe debe tener al menos 5 caracteres.',
            'Random activities cannot exceed the number of available activities.':
                'Las actividades aleatorias no pueden superar el número de actividades disponibles.',
            'Monohybrid cross': 'Cruce monohíbrido',
        },
        ca: {
            'Punnett square': 'Quadre de Punnett',
            'Create interactive Punnett square activities for monohybrid and dihybrid crosses.':
                'Crea activitats interactives de quadre de Punnett per a encreuaments monohíbrids i dihíbrids.',
            'Complete a sequence of Punnett square activities, determine the possible gametes and calculate genotype and phenotype ratios.':
                'Completa una seqüència d\'activitats de quadre de Punnett, determina els gàmetes possibles i calcula les proporcions genotípiques i fenotípiques.',
            'Practice set': 'Bateria d\'activitats',
            Mode: 'Mode',
            Sequence: 'Seqüència',
            Random: 'Aleatori',
            'Random activities': 'Activitats aleatòries',
            'Set to 0 to use all activities.':
                'Posa 0 per a usar totes les activitats.',
            Activities: 'Activitats',
            'Add activity': 'Afig activitat',
            Duplicate: 'Duplica',
            Delete: 'Elimina',
            'Activity %s': 'Activitat %s',
            Cross: 'Encreuament',
            'Activity title': "Títol de l'activitat",
            'Number of genes': 'Nombre de gens',
            Monohybrid: 'Monohíbrid',
            Dihybrid: 'Dihíbrid',
            'Parent 1 genotype': 'Genotip del progenitor 1',
            'Parent 2 genotype': 'Genotip del progenitor 2',
            'Examples: AA, Aa, aa, AaBb': 'Exemples: AA, Aa, aa, AaBb',
            Traits: 'Rasgos',
            'Gene 1 letter': 'Lletra del gen 1',
            'Gene 2 letter': 'Lletra del gen 2',
            'Gene 1 dominant phenotype': 'Fenotip dominant del gen 1',
            'Gene 1 recessive phenotype': 'Fenotip recessiu del gen 1',
            'Gene 2 dominant phenotype': 'Fenotip dominant del gen 2',
            'Gene 2 recessive phenotype': 'Fenotip recessiu del gen 2',
            'Example dominant trait: dark eyes':
                'Exemple de tret dominant: ulls foscos',
            'Example recessive trait: light eyes':
                'Exemple de tret recessiu: ulls clars',
            'Student tasks': "Tasques de l'alumnat",
            'Ask for possible gametes': 'Demana els gàmetes possibles',
            'Ask for Punnett square cells': 'Demana les cel·les del quadre de Punnett',
            'Ask for genotype ratio': 'Demana la proporció genotípica',
            'Ask for phenotype ratio': 'Demana la proporció fenotípica',
            'Allow showing the solution': 'Permet mostrar la solució',
            'Use the same identifier in all the activities that belong to the same progress report.':
                'Usa el mateix identificador en totes les activitats que pertanyen al mateix informe de progrés.',
            'Please write the instructions.': 'Escriu les instruccions.',
            'Please write an activity title.': "Escriu un títol per a l'activitat.",
            'At least one activity is required.':
                'Cal almenys una activitat.',
            'No valid activities were found in the imported content.':
                'No s\'ha trobat cap activitat vàlida en el contingut importat.',
            'The imported activities have been added successfully.':
                'Les activitats importades s\'han afegit correctament.',
            'Please select a valid file (.json or .txt).':
                'Selecciona un fitxer vàlid (.json o .txt).',
            'The file does not contain a valid Punnett square activity set.':
                'El fitxer no conté una bateria vàlida d\'activitats de quadre de Punnett.',
            'Import/Export': 'Importa/Exporta',
            'Artificial Intelligence': 'Intel·ligència artificial',
            'Import activity set': 'Importa bateria d\'activitats',
            'Export activity set': 'Exporta bateria d\'activitats',
            'Choose': 'Tria',
            'No file selected': 'Cap fitxer seleccionat',
            'Supported formats: json, txt': 'Formats admesos: json, txt',
            'You can import a full Punnett square activity set in JSON format or a plain text list of activities.':
                'Pots importar una bateria completa d\'activitats de quadre de Punnett en format JSON o una llista d\'activitats en text pla.',
            'Export activities': 'Exporta activitats',
            'Generate or import Punnett square activities with AI.':
                'Genera o importa activitats de quadre de Punnett amb IA.',
            'Copy prompt': 'Copia prompt',
            'Send to AI': 'Envia a la IA',
            'Import text': 'Importa text',
            'Number of activities': 'Nombre d\'activitats',
            Topic: 'Tema',
            Specialty: 'Especialitat',
            Course: 'Curs',
            Create: 'Crea',
            'Prompt to generate activities': 'Prompt per a generar activitats',
            'Generated or pasted activities': 'Activitats generades o apegrades',
            'Act as a highly experienced teacher.':
                'Actua com un docent amb molta experiència.',
            'Generate Punnett square activities using this exact format, one activity per line:':
                'Genera activitats de quadre de Punnett usant exactament este format, una activitat per línia:',
            'Monohybrid format: Title#1#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1':
                'Format monohíbrid: Títol#1#Progenitor1#Progenitor2#LletraGen1#FenotipDominant1#FenotipRecessiu1',
            'Dihybrid format: Title#2#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1#Gene2Letter#DominantPhenotype2#RecessivePhenotype2':
                'Format dihíbrid: Títol#2#Progenitor1#Progenitor2#LletraGen1#FenotipDominant1#FenotipRecessiu1#LletraGen2#FenotipDominant2#FenotipRecessiu2',
            'Do not include numbering, bullets, explanations or the # character inside any field.':
                'No inclogues numeració, vinyetes, explicacions ni el caràcter # dins de cap camp.',
            'Write Parent1 and Parent2 separately. Do not write crosses like Aa x aa inside a single field.':
                'Escriu Progenitor1 i Progenitor2 per separat. No escrigues encreuaments com Aa x aa dins d\'un sol camp.',
            'There is no prompt to copy.': 'No hi ha cap prompt per a copiar.',
            'There is no query to send to the assistant.':
                'No hi ha cap consulta per a enviar a l\'assistent.',
            'Please select an AI assistant.':
                'Selecciona un assistent d\'IA.',
            'Please enter at least one activity.':
                'Introdueix almenys una activitat.',
            'Generating activities. Please wait...':
                'Generant activitats. Espera un moment...',
            'The activities could not be generated.':
                'No s\'han pogut generar les activitats.',
            'The activities could not be generated. Incorrect format':
                'No s\'han pogut generar les activitats. Format incorrecte.',
            'An error occurred while retrieving the activities. Please try again.':
                'S\'ha produït un error en obtindre les activitats. Torna-ho a provar.',
            'Parent 1 genotype does not match the selected number of genes.':
                'El genotip del progenitor 1 no coincideix amb el nombre de gens seleccionat.',
            'Parent 2 genotype does not match the selected number of genes.':
                'El genotip del progenitor 2 no coincideix amb el nombre de gens seleccionat.',
            'Each gene needs a letter.': 'Cada gen necessita una lletra.',
            'Write the dominant and recessive phenotype for each active gene.':
                'Escriu el fenotip dominant i recessiu de cada gen actiu.',
            'Parent genotypes must use the configured gene letters.':
                'Els genotips dels progenitors han d\'usar les lletres de gen configurades.',
            'Select at least one student task.':
                "Selecciona almenys una tasca per a l'alumnat.",
            'The report identifier must have at least 5 characters.':
                "L'identificador de l'informe ha de tindre almenys 5 caràcters.",
            'Random activities cannot exceed the number of available activities.':
                'Les activitats aleatòries no poden superar el nombre d\'activitats disponibles.',
            'Monohybrid cross': 'Encreuament monohíbrid',
        },
        va: {},
    },
    name: 'Punnett square',
    lang: 'en',
    ideviceBody: null,
    idevicePreviousData: null,
    idevicePath: '',
    ci18n: {},
    currentActivityIndex: 0,
    workingData: null,
    defaultData: {
        mode: 'sequence',
        randomCount: 0,
        evaluation: false,
        evaluationID: '',
        activities: [],
    },

    init(element, previousData, path) {
        this.ideviceBody = element;
        this.idevicePreviousData = previousData || {};
        this.idevicePath = path;
        this.ensureLocaleAliases();
        this.lang = this.getLocale();
        this.name = this.t('Punnett square');
        this.refreshTranslations();
        this.workingData = this.getNormalizedData(this.idevicePreviousData || {});
        this.createForm();
        this.loadPreviousValues();
        this.addEvents();
    },

    getLocale() {
        const candidates = [];
        try {
            candidates.push(document.body ? document.body.getAttribute('lang') : '');
            candidates.push(
                top.document && top.document.body
                    ? top.document.body.getAttribute('lang')
                    : ''
            );
        } catch (e) {}
        try {
            candidates.push(
                window.eXeLearning &&
                    window.eXeLearning.config &&
                    window.eXeLearning.config.locale
                    ? window.eXeLearning.config.locale
                    : ''
            );
            candidates.push(
                top.eXeLearning &&
                    top.eXeLearning.config &&
                    top.eXeLearning.config.locale
                    ? top.eXeLearning.config.locale
                    : ''
            );
        } catch (e) {}
        try {
            candidates.push(
                document.documentElement
                    ? document.documentElement.getAttribute('lang')
                    : ''
            );
            candidates.push(
                top.document && top.document.documentElement
                    ? top.document.documentElement.getAttribute('lang')
                    : ''
            );
        } catch (e) {}
        candidates.push(navigator.language || '');
        for (let i = 0; i < candidates.length; i++) {
            const locale = String(candidates[i] || '')
                .trim()
                .replace('_', '-')
                .toLowerCase();
            if (locale) return locale;
        }
        return 'en';
    },

    t(str) {
        const locale = this.getLocale();
        const shortLocale = locale.split('-')[0];
        const map =
            this.i18n[locale] ||
            this.i18n[shortLocale] ||
            this.i18n[locale.replace('-', '_')] ||
            this.i18n.en ||
            {};
        return map[str] || str;
    },

    tf(str, value) {
        return this.t(str).replace('%s', value);
    },

    ensureLocaleAliases() {
        this.i18n.va = this.i18n.ca;
        this.i18n['es-ES'] = this.i18n.es;
        this.i18n.es_ES = this.i18n.es;
        this.i18n['ca-ES'] = this.i18n.ca;
        this.i18n.ca_ES = this.i18n.ca;
        this.i18n['va-ES'] = this.i18n.va;
        this.i18n.va_ES = this.i18n.va;
        this.i18n['en-US'] = this.i18n.en;
        this.i18n.en_US = this.i18n.en;
        this.i18n['en-GB'] = this.i18n.en;
        this.i18n.en_GB = this.i18n.en;
    },

    refreshTranslations() {
        this.ci18n = {
            msgCheck: _('Check'),
            msgReset: _('Restart'),
            msgSaveScore: _('Save score'),
            msgScoreScorm: _(
                "The score can't be saved because this page is not part of a SCORM package."
            ),
            msgYouScore: _('Your score'),
            msgScore: _('Score'),
            msgWeight: _('Weight'),
            msgYouLastScore: _('The last score saved is'),
            msgOnlySaveScore: _('You can only save the score once!'),
            msgOnlySave: _('You can only save once'),
            msgOnlySaveAuto: _(
                'Your score will be saved after each question. You can only play once.'
            ),
            msgSaveAuto: _(
                'Your score will be automatically saved after each question.'
            ),
            msgSeveralScore: _(
                'You can save the score as many times as you want'
            ),
            msgPlaySeveralTimes: _(
                'You can do this activity as many times as you want'
            ),
            msgActityComply: _('You have already done this activity.'),
            msgUncompletedActivity: _('Incomplete activity'),
            msgSuccessfulActivity: _('Activity: Passed. Score: %s'),
            msgUnsuccessfulActivity: _('Activity: Not passed. Score: %s'),
            msgTypeGame: this.t('Punnett square'),
        };
    },

    createDefaultActivity(index) {
        const suffix = index > 0 ? ' ' + (index + 1) : '';
        return {
            title: this.t('Monohybrid cross') + suffix,
            geneCount: 1,
            parent1: 'Aa',
            parent2: 'Aa',
            traits: [
                { geneLetter: 'A', dominantLabel: '', recessiveLabel: '' },
                { geneLetter: 'B', dominantLabel: '', recessiveLabel: '' },
            ],
            askGametes: false,
            askGrid: true,
            askGenotypeRatio: true,
            askPhenotypeRatio: true,
            showSolutions: true,
        };
    },

    normalizeActivity(activity, index) {
        const merged = JSON.parse(
            JSON.stringify({
                ...this.createDefaultActivity(index),
                ...(activity || {}),
                traits: [
                    {
                        ...this.createDefaultActivity(index).traits[0],
                        ...(((activity || {}).traits || [])[0] || {}),
                    },
                    {
                        ...this.createDefaultActivity(index).traits[1],
                        ...(((activity || {}).traits || [])[1] || {}),
                    },
                ],
            })
        );
        merged.title = String(merged.title || '').trim() || this.tf('Activity %s', index + 1);
        merged.geneCount = merged.geneCount === 2 ? 2 : 1;
        merged.parent1 = this.sanitizeGenotype(merged.parent1);
        merged.parent2 = this.sanitizeGenotype(merged.parent2);
        merged.traits = merged.traits.map((trait, traitIndex) => {
            const fallbackLetter =
                String(trait.geneLetter || (traitIndex === 0 ? 'A' : 'B'))
                    .replace(/[^A-Za-z]/g, '')
                    .toUpperCase()
                    .slice(0, 1) || (traitIndex === 0 ? 'A' : 'B');
            return {
                geneLetter: fallbackLetter,
                dominantLabel: String(trait.dominantLabel || '').trim(),
                recessiveLabel: String(trait.recessiveLabel || '').trim(),
            };
        });
        merged.askGametes = !!merged.askGametes;
        merged.askGrid = merged.askGrid !== false;
        merged.askGenotypeRatio = merged.askGenotypeRatio !== false;
        merged.askPhenotypeRatio = merged.askPhenotypeRatio !== false;
        merged.showSolutions = merged.showSolutions !== false;
        return merged;
    },

    getNormalizedData(data) {
        const base = JSON.parse(
            JSON.stringify({
                ...this.defaultData,
                ...data,
            })
        );
        let activities = Array.isArray(base.activities) ? base.activities : [];
        if (!activities.length) {
            activities = [
                {
                    title: data.title,
                    geneCount: data.geneCount,
                    parent1: data.parent1,
                    parent2: data.parent2,
                    traits: data.traits,
                    askGametes: data.askGametes,
                    askGrid: data.askGrid,
                    askGenotypeRatio: data.askGenotypeRatio,
                    askPhenotypeRatio: data.askPhenotypeRatio,
                    showSolutions: data.showSolutions,
                },
            ];
        }
        base.mode = base.mode === 'random' ? 'random' : 'sequence';
        base.randomCount = Math.max(0, parseInt(base.randomCount, 10) || 0);
        base.activities = activities.map((activity, index) =>
            this.normalizeActivity(activity, index)
        );
        if (!base.activities.length) {
            base.activities = [this.createDefaultActivity(0)];
        }
        base.evaluation = !!base.evaluation;
        base.evaluationID = base.evaluationID || '';
        return base;
    },

    createForm() {
        const html = `
            <div id="punnettSquareIdeviceForm">
                <p class="exe-block-info exe-block-dismissible">
                    ${this.t('Create interactive Punnett square activities for monohybrid and dihybrid crosses.')}
                </p>
                <div class="exe-form-tab" title="${_('General settings')}">
                    ${$exeDevicesEdition.iDevice.gamification.instructions.getFieldset(
                        this.t(
                            'Complete a sequence of Punnett square activities, determine the possible gametes and calculate genotype and phenotype ratios.'
                        )
                    )}
                    <fieldset class="exe-fieldset">
                        <legend><a href="#">${this.t('Practice set')}</a></legend>
                        <div class="punnett-settings-grid">
                            <div>
                                <label for="punnettMode" class="form-label">${this.t('Mode')}</label>
                                <select id="punnettMode" class="form-select punnett-select">
                                    <option value="sequence">${this.t('Sequence')}</option>
                                    <option value="random">${this.t('Random')}</option>
                                </select>
                            </div>
                            <div>
                                <label for="punnettRandomCount" class="form-label">${this.t('Random activities')}</label>
                                <input type="number" id="punnettRandomCount" min="0" class="form-control" />
                                <p class="punnett-inline-help">${this.t('Set to 0 to use all activities.')}</p>
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="exe-fieldset">
                        <legend><a href="#">${this.t('Activities')}</a></legend>
                        <div class="d-flex flex-wrap gap-2 mb-3">
                            <button type="button" id="punnettAddActivity" class="btn btn-primary">${this.t('Add activity')}</button>
                            <button type="button" id="punnettDuplicateActivity" class="btn btn-light">${this.t('Duplicate')}</button>
                            <button type="button" id="punnettDeleteActivity" class="btn btn-light">${this.t('Delete')}</button>
                        </div>
                        <div id="punnettActivitiesList" class="punnett-activities-list"></div>
                    </fieldset>
                    <fieldset class="exe-fieldset">
                        <legend><a href="#">${this.t('Cross')}</a></legend>
                        <div class="punnett-settings-grid">
                            <div>
                                <label for="punnettTitle" class="form-label">${this.t('Activity title')}</label>
                                <input type="text" id="punnettTitle" class="form-control" />
                            </div>
                            <div>
                                <label for="punnettGeneCount" class="form-label">${this.t('Number of genes')}</label>
                                <select id="punnettGeneCount" class="form-select punnett-select">
                                    <option value="1">${this.t('Monohybrid')}</option>
                                    <option value="2">${this.t('Dihybrid')}</option>
                                </select>
                            </div>
                            <div>
                                <label for="punnettParent1" class="form-label">${this.t('Parent 1 genotype')}</label>
                                <input type="text" id="punnettParent1" class="form-control" />
                                <p class="punnett-inline-help">${this.t('Examples: AA, Aa, aa, AaBb')}</p>
                            </div>
                            <div>
                                <label for="punnettParent2" class="form-label">${this.t('Parent 2 genotype')}</label>
                                <input type="text" id="punnettParent2" class="form-control" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="exe-fieldset">
                        <legend><a href="#">${this.t('Traits')}</a></legend>
                        <div class="punnett-traits-grid">
                            <div>
                                <label for="punnettGeneLetter1" class="form-label">${this.t('Gene 1 letter')}</label>
                                <input type="text" id="punnettGeneLetter1" maxlength="1" class="form-control" />
                            </div>
                            <div>
                                <label for="punnettDominant1" class="form-label">${this.t('Gene 1 dominant phenotype')}</label>
                                <input type="text" id="punnettDominant1" class="form-control" placeholder="${this.t('Example dominant trait: dark eyes')}" />
                            </div>
                            <div>
                                <label for="punnettRecessive1" class="form-label">${this.t('Gene 1 recessive phenotype')}</label>
                                <input type="text" id="punnettRecessive1" class="form-control" placeholder="${this.t('Example recessive trait: light eyes')}" />
                            </div>
                        </div>
                        <div id="punnettGene2Fields" class="punnett-traits-grid punnett-hidden">
                            <div>
                                <label for="punnettGeneLetter2" class="form-label">${this.t('Gene 2 letter')}</label>
                                <input type="text" id="punnettGeneLetter2" maxlength="1" class="form-control" />
                            </div>
                            <div>
                                <label for="punnettDominant2" class="form-label">${this.t('Gene 2 dominant phenotype')}</label>
                                <input type="text" id="punnettDominant2" class="form-control" placeholder="${this.t('Example dominant trait: dark eyes')}" />
                            </div>
                            <div>
                                <label for="punnettRecessive2" class="form-label">${this.t('Gene 2 recessive phenotype')}</label>
                                <input type="text" id="punnettRecessive2" class="form-control" placeholder="${this.t('Example recessive trait: light eyes')}" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset class="exe-fieldset">
                        <legend><a href="#">${this.t('Student tasks')}</a></legend>
                        <div class="punnett-settings-grid">
                            <label class="toggle-item mb-0">
                                <span class="toggle-control">
                                    <input type="checkbox" id="punnettAskGametes" class="toggle-input" />
                                    <span class="toggle-visual"></span>
                                </span>
                                <span class="toggle-label">${this.t('Ask for possible gametes')}</span>
                            </label>
                            <label class="toggle-item mb-0">
                                <span class="toggle-control">
                                    <input type="checkbox" id="punnettAskGrid" class="toggle-input" />
                                    <span class="toggle-visual"></span>
                                </span>
                                <span class="toggle-label">${this.t('Ask for Punnett square cells')}</span>
                            </label>
                            <label class="toggle-item mb-0">
                                <span class="toggle-control">
                                    <input type="checkbox" id="punnettAskGenotypeRatio" class="toggle-input" />
                                    <span class="toggle-visual"></span>
                                </span>
                                <span class="toggle-label">${this.t('Ask for genotype ratio')}</span>
                            </label>
                            <label class="toggle-item mb-0">
                                <span class="toggle-control">
                                    <input type="checkbox" id="punnettAskPhenotypeRatio" class="toggle-input" />
                                    <span class="toggle-visual"></span>
                                </span>
                                <span class="toggle-label">${this.t('Ask for phenotype ratio')}</span>
                            </label>
                            <label class="toggle-item mb-0">
                                <span class="toggle-control">
                                    <input type="checkbox" id="punnettShowSolutions" class="toggle-input" />
                                    <span class="toggle-visual"></span>
                                </span>
                                <span class="toggle-label">${this.t('Allow showing the solution')}</span>
                            </label>
                        </div>
                    </fieldset>
                    <fieldset class="exe-fieldset">
                        <legend><a href="#">${_('Assessment')}</a></legend>
                        <div class="d-flex flex-wrap align-items-center gap-2 mb-3">
                            <div class="toggle-item mb-0">
                                <span class="toggle-control">
                                    <input type="checkbox" id="punnettEvaluation" class="toggle-input" />
                                    <span class="toggle-visual"></span>
                                </span>
                                <label class="toggle-label mb-0" for="punnettEvaluation">${_('Progress report')}.</label>
                            </div>
                            <div class="d-flex flex-nowrap align-items-center gap-2">
                                <label for="punnettEvaluationID" class="mb-0">${_('Identifier')}:</label>
                                <input type="text" id="punnettEvaluationID" class="form-control" disabled value="${eXeLearning.app.project.odeId || ''}" />
                            </div>
                        </div>
                        <p class="punnett-inline-help">${this.t('Use the same identifier in all the activities that belong to the same progress report.')}</p>
                    </fieldset>
                    ${$exeDevicesEdition.iDevice.common.getTextFieldset('after')}
                </div>
                ${$exeDevicesEdition.iDevice.gamification.common.getLanguageTab(this.ci18n)}
                ${$exeDevicesEdition.iDevice.gamification.scorm.getTab(true, true, true)}
                <div class="exe-form-tab" title="${this.t('Import/Export')}">
                    <p class="exe-block-info">${this.t('You can import a full Punnett square activity set in JSON format or a plain text list of activities.')}</p>
                    <div class="mb-3" data-punnett-upload>
                        <label for="punnettImportFile" class="form-label mb-1">${this.t('Import activity set')}:</label>
                        <input type="file" id="punnettImportFile" accept=".json,.txt" class="exe-file-input" />
                        <button type="button" class="btn btn-primary exe-file-btn" data-punnett-file-trigger>${this.t('Choose')}</button>
                        <span data-punnett-file-name>${this.t('No file selected')}</span>
                        <span class="d-block mt-1">${this.t('Supported formats: json, txt')}</span>
                    </div>
                    <p class="d-flex align-items-center justify-content-start gap-1">
                        <input type="button" class="btn btn-primary" id="punnettExportActivities" value="${this.t('Export activities')}" />
                    </p>
                </div>
                <div class="exe-form-tab" title="${this.t('Artificial Intelligence')}">
                    <p class="exe-block-info">${this.t('Generate or import Punnett square activities with AI.')}</p>
                    <div id="punnettAIContainer">
                        <div class="d-flex flex-wrap gap-2 mt-3 mb-3 align-items-end">
                            <label for="punnettAISpecialty">${this.t('Specialty')}:
                                <input id="punnettAISpecialty" type="text" value="${_('Biology')}" style="width: 150px;" />
                            </label>
                            <label for="punnettAICourse">${this.t('Course')}:
                                <input id="punnettAICourse" type="text" value="${_('4th ESO')}" style="width: 130px;" />
                            </label>
                            <label for="punnettAINumber">${this.t('Number of activities')}:
                                <input id="punnettAINumber" type="number" min="1" max="30" value="10" class="form-control form-control-sm" style="width:6ch;" />
                            </label>
                            <label for="punnettAITheme">${this.t('Topic')}:
                                <input id="punnettAITheme" type="text" style="width: 300px;" />
                            </label>
                            <button type="button" id="punnettAIGenerate" class="btn btn-success ms-2">${this.t('Create')}</button>
                        </div>
                        <p id="punnettAIMessage" class="dp-none"></p>
                        <label for="punnettAIPrompt" class="form-label">${this.t('Prompt to generate activities')}</label>
                        <textarea id="punnettAIPrompt" class="form-control font-monospace fs-6 mb-3" style="min-height:220px;"></textarea>
                        <div class="d-flex justify-content-end border-secondary p-2 gap-2 flex-wrap">
                            <button type="button" id="punnettAICopyPrompt" class="btn btn-primary">${this.t('Copy prompt')}</button>
                            <select id="punnettAISelect" name="punnettAISelect" class="form-select form-select-sm w-auto">
                                <option selected value="https://chatgpt.com/?q=">ChatGPT</option>
                                <option value="https://claude.ai/new?q=">Claude</option>
                                <option value="https://www.perplexity.ai/search?q=">Perplexity</option>
                                <option value="https://chat.mistral.ai/chat/?q=">Le Chat (Mistral)</option>
                                <option value="https://grok.com/?q=">Grok</option>
                                <option value="https://chat.qwen.ai/?text=">Qwen</option>
                            </select>
                            <button type="button" id="punnettAISend" class="btn btn-primary">${this.t('Send to AI')}</button>
                        </div>
                        <label for="punnettAIText" class="form-label mt-3">${this.t('Generated or pasted activities')}</label>
                        <textarea id="punnettAIText" class="form-control font-monospace fs-6" style="min-height:220px;"></textarea>
                        <div class="d-flex justify-content-end border-secondary p-2 gap-2 mt-2">
                            <button type="button" id="punnettAIImportText" class="btn btn-primary">${this.t('Import text')}</button>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.ideviceBody.innerHTML = html;
        $exeDevicesEdition.iDevice.tabs.init('punnettSquareIdeviceForm');
        $exeDevicesEdition.iDevice.gamification.scorm.init();
    },

    loadPreviousValues() {
        const data = this.workingData;
        this.ideviceBody.querySelector('#punnettMode').value = data.mode;
        this.ideviceBody.querySelector('#punnettRandomCount').value = data.randomCount;
        this.ideviceBody.querySelector('#punnettEvaluation').checked = !!data.evaluation;
        this.ideviceBody.querySelector('#punnettEvaluationID').value = data.evaluationID || '';
        this.ideviceBody.querySelector('#punnettEvaluationID').disabled = !data.evaluation;
        this.currentActivityIndex = 0;
        this.renderActivitiesList();
        this.loadActivityIntoForm(this.currentActivityIndex);
    },

    addEvents() {
        this.ideviceBody
            .querySelector('#punnettGeneCount')
            .addEventListener('change', () => this.toggleGene2Fields());
        this.ideviceBody
            .querySelector('#punnettEvaluation')
            .addEventListener('change', (event) => {
                this.ideviceBody.querySelector('#punnettEvaluationID').disabled =
                    !event.target.checked;
            });
        this.ideviceBody
            .querySelector('#punnettAddActivity')
            .addEventListener('click', () => this.addActivity());
        this.ideviceBody
            .querySelector('#punnettDuplicateActivity')
            .addEventListener('click', () => this.duplicateActivity());
        this.ideviceBody
            .querySelector('#punnettDeleteActivity')
            .addEventListener('click', () => this.deleteActivity());
        this.ideviceBody
            .querySelector('#punnettActivitiesList')
            .addEventListener('click', (event) => {
                const button = event.target.closest('[data-activity-index]');
                if (!button) return;
                this.selectActivity(parseInt(button.dataset.activityIndex, 10));
            });
        this.ideviceBody
            .querySelector('#punnettMode')
            .addEventListener('change', () => this.toggleRandomCount());
        this.toggleRandomCount();
        this.addImportExportEvents();
        this.addAIEvents();
        this.updateAIPrompt();
    },

    toggleRandomCount() {
        const isRandom = this.ideviceBody.querySelector('#punnettMode').value === 'random';
        this.ideviceBody.querySelector('#punnettRandomCount').disabled = !isRandom;
    },

    toggleGene2Fields() {
        const isDihybrid =
            this.ideviceBody.querySelector('#punnettGeneCount').value === '2';
        this.ideviceBody
            .querySelector('#punnettGene2Fields')
            .classList.toggle('punnett-hidden', !isDihybrid);
    },

    renderActivitiesList() {
        const container = this.ideviceBody.querySelector('#punnettActivitiesList');
        container.innerHTML = this.workingData.activities
            .map((activity, index) => {
                const active = index === this.currentActivityIndex ? ' is-active' : '';
                const label = this.escapeHtml(
                    activity.title || this.tf('Activity %s', index + 1)
                );
                return `<button type="button" class="punnett-activity-pill${active}" data-activity-index="${index}">${label}</button>`;
            })
            .join('');
    },

    loadActivityIntoForm(index) {
        const activity = this.workingData.activities[index];
        if (!activity) return;
        this.ideviceBody.querySelector('#punnettTitle').value = activity.title;
        this.ideviceBody.querySelector('#punnettGeneCount').value = String(activity.geneCount);
        this.ideviceBody.querySelector('#punnettParent1').value = activity.parent1;
        this.ideviceBody.querySelector('#punnettParent2').value = activity.parent2;
        this.ideviceBody.querySelector('#punnettGeneLetter1').value = activity.traits[0].geneLetter;
        this.ideviceBody.querySelector('#punnettDominant1').value = activity.traits[0].dominantLabel;
        this.ideviceBody.querySelector('#punnettRecessive1').value = activity.traits[0].recessiveLabel;
        this.ideviceBody.querySelector('#punnettGeneLetter2').value = activity.traits[1].geneLetter;
        this.ideviceBody.querySelector('#punnettDominant2').value = activity.traits[1].dominantLabel;
        this.ideviceBody.querySelector('#punnettRecessive2').value = activity.traits[1].recessiveLabel;
        this.ideviceBody.querySelector('#punnettAskGametes').checked = !!activity.askGametes;
        this.ideviceBody.querySelector('#punnettAskGrid').checked = !!activity.askGrid;
        this.ideviceBody.querySelector('#punnettAskGenotypeRatio').checked = !!activity.askGenotypeRatio;
        this.ideviceBody.querySelector('#punnettAskPhenotypeRatio').checked = !!activity.askPhenotypeRatio;
        this.ideviceBody.querySelector('#punnettShowSolutions').checked = !!activity.showSolutions;
        this.toggleGene2Fields();
        this.renderActivitiesList();
    },

    collectActivityFromForm(index) {
        const geneCount = parseInt(
            this.ideviceBody.querySelector('#punnettGeneCount').value,
            10
        );
        return this.normalizeActivity(
            {
                title: this.ideviceBody.querySelector('#punnettTitle').value.trim(),
                geneCount: geneCount === 2 ? 2 : 1,
                parent1: this.sanitizeGenotype(
                    this.ideviceBody.querySelector('#punnettParent1').value
                ),
                parent2: this.sanitizeGenotype(
                    this.ideviceBody.querySelector('#punnettParent2').value
                ),
                traits: [
                    {
                        geneLetter: (
                            this.ideviceBody.querySelector('#punnettGeneLetter1')
                                .value || 'A'
                        )
                            .replace(/[^A-Za-z]/g, '')
                            .toUpperCase()
                            .slice(0, 1),
                        dominantLabel: this.ideviceBody
                            .querySelector('#punnettDominant1')
                            .value.trim(),
                        recessiveLabel: this.ideviceBody
                            .querySelector('#punnettRecessive1')
                            .value.trim(),
                    },
                    {
                        geneLetter: (
                            this.ideviceBody.querySelector('#punnettGeneLetter2')
                                .value || 'B'
                        )
                            .replace(/[^A-Za-z]/g, '')
                            .toUpperCase()
                            .slice(0, 1),
                        dominantLabel: this.ideviceBody
                            .querySelector('#punnettDominant2')
                            .value.trim(),
                        recessiveLabel: this.ideviceBody
                            .querySelector('#punnettRecessive2')
                            .value.trim(),
                    },
                ],
                askGametes: this.ideviceBody.querySelector('#punnettAskGametes').checked,
                askGrid: this.ideviceBody.querySelector('#punnettAskGrid').checked,
                askGenotypeRatio: this.ideviceBody.querySelector('#punnettAskGenotypeRatio').checked,
                askPhenotypeRatio: this.ideviceBody.querySelector('#punnettAskPhenotypeRatio').checked,
                showSolutions: this.ideviceBody.querySelector('#punnettShowSolutions').checked,
            },
            index
        );
    },

    storeCurrentActivity() {
        if (!this.workingData.activities.length) return;
        this.workingData.activities[this.currentActivityIndex] = this.collectActivityFromForm(
            this.currentActivityIndex
        );
        this.renderActivitiesList();
    },

    selectActivity(index) {
        if (!Number.isInteger(index) || index < 0 || index >= this.workingData.activities.length) {
            return;
        }
        this.storeCurrentActivity();
        this.currentActivityIndex = index;
        this.loadActivityIntoForm(index);
    },

    addActivity() {
        this.storeCurrentActivity();
        const index = this.workingData.activities.length;
        this.workingData.activities.push(this.createDefaultActivity(index));
        this.currentActivityIndex = index;
        this.loadActivityIntoForm(index);
    },

    duplicateActivity() {
        this.storeCurrentActivity();
        const source = this.workingData.activities[this.currentActivityIndex];
        const copy = JSON.parse(JSON.stringify(source));
        copy.title = copy.title ? copy.title + ' (2)' : this.tf('Activity %s', this.currentActivityIndex + 2);
        this.workingData.activities.splice(this.currentActivityIndex + 1, 0, copy);
        this.currentActivityIndex += 1;
        this.loadActivityIntoForm(this.currentActivityIndex);
    },

    deleteActivity() {
        if (this.workingData.activities.length === 1) return;
        this.workingData.activities.splice(this.currentActivityIndex, 1);
        if (this.currentActivityIndex >= this.workingData.activities.length) {
            this.currentActivityIndex = this.workingData.activities.length - 1;
        }
        this.loadActivityIntoForm(this.currentActivityIndex);
    },

    parseImportedActivity(line, index) {
        const parts = String(line || '')
            .split('#')
            .map((part) => String(part || '').trim());
        if (parts.length !== 7 && parts.length !== 10) return null;

        const geneCount = parseInt(parts[1], 10) === 2 ? 2 : 1;
        if ((geneCount === 1 && parts.length !== 7) || (geneCount === 2 && parts.length !== 10)) {
            return null;
        }

        const parents = this.extractImportedParents(parts[2], parts[3], geneCount);
        if (!parents) return null;

        return this.normalizeActivity(
            {
                title: parts[0],
                geneCount,
                parent1: parents.parent1,
                parent2: parents.parent2,
                traits: [
                    {
                        geneLetter: parts[4],
                        dominantLabel: parts[5],
                        recessiveLabel: parts[6],
                    },
                    {
                        geneLetter: geneCount === 2 ? parts[7] : 'B',
                        dominantLabel: geneCount === 2 ? parts[8] : '',
                        recessiveLabel: geneCount === 2 ? parts[9] : '',
                    },
                ],
                askGametes: false,
                askGrid: true,
                askGenotypeRatio: true,
                askPhenotypeRatio: true,
                showSolutions: true,
            },
            index
        );
    },

    extractImportedParents(rawParent1, rawParent2, geneCount) {
        const expectedLength = geneCount * 2;
        const splitCross = (value) => {
            const parts = String(value || '')
                .split(/(?:\s*[xX×]\s*)/)
                .map((part) => this.sanitizeGenotype(part))
                .filter(Boolean);
            return parts.length === 2 ? parts : null;
        };

        let parent1 = this.sanitizeGenotype(rawParent1);
        let parent2 = this.sanitizeGenotype(rawParent2);

        if (parent1.length === expectedLength && parent2.length === expectedLength) {
            return { parent1, parent2 };
        }

        const cross1 = splitCross(rawParent1);
        const cross2 = splitCross(rawParent2);

        if (cross1 && cross2 && cross1[0] === cross2[0] && cross1[1] === cross2[1]) {
            parent1 = cross1[0];
            parent2 = cross1[1];
        } else if (cross1 && parent2.length === expectedLength) {
            parent1 = cross1[0];
            parent2 = cross1[1];
        } else if (cross2 && parent1.length === expectedLength) {
            parent1 = cross2[0];
            parent2 = cross2[1];
        } else if (cross1) {
            parent1 = cross1[0];
            parent2 = cross1[1];
        } else if (cross2) {
            parent1 = cross2[0];
            parent2 = cross2[1];
        }

        if (parent1.length !== expectedLength || parent2.length !== expectedLength) {
            return null;
        }

        return { parent1, parent2 };
    },

    importActivitiesFromLines(lines) {
        const imported = [];
        const sourceLines = Array.isArray(lines) ? lines : [];
        for (let i = 0; i < sourceLines.length; i++) {
            const activity = this.parseImportedActivity(sourceLines[i], this.workingData.activities.length + imported.length);
            if (activity && this.validateActivity(activity)) {
                imported.push(activity);
            }
        }

        if (!imported.length) {
            eXe.app.alert(this.t('No valid activities were found in the imported content.'));
            return;
        }

        this.storeCurrentActivity();
        this.workingData.activities = this.workingData.activities.concat(imported);
        this.currentActivityIndex = this.workingData.activities.length - imported.length;
        this.loadActivityIntoForm(this.currentActivityIndex);
        eXe.app.alert(this.t('The imported activities have been added successfully.'));
    },

    addImportExportEvents() {
        const fileInput = this.ideviceBody.querySelector('#punnettImportFile');
        const fileName = this.ideviceBody.querySelector('[data-punnett-file-name]');
        const trigger = this.ideviceBody.querySelector('[data-punnett-file-trigger]');
        const exportButton = this.ideviceBody.querySelector('#punnettExportActivities');

        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            if (fileInput) fileInput.disabled = true;
            if (exportButton) exportButton.disabled = true;
            return;
        }

        trigger.addEventListener('click', () => fileInput.click());
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files && e.target.files[0];
            fileName.textContent = file ? file.name : this.t('No file selected');
            if (!file) return;

            const isJson =
                /\.json$/i.test(file.name) ||
                (file.type && file.type.match('application/json'));
            const isText =
                /\.txt$/i.test(file.name) ||
                !file.type ||
                file.type.match('text/plain');

            if (!isJson && !isText) {
                eXe.app.alert(this.t('Please select a valid file (.json or .txt).'));
                return;
            }

            const reader = new FileReader();
            reader.onload = (readerEvent) => {
                this.importGame(
                    readerEvent.target.result,
                    isJson ? 'application/json' : 'text/plain'
                );
            };
            reader.readAsText(file);
        });
        exportButton.addEventListener('click', () => this.exportGame());
    },

    addAIEvents() {
        const specialty = this.ideviceBody.querySelector('#punnettAISpecialty');
        const course = this.ideviceBody.querySelector('#punnettAICourse');
        const number = this.ideviceBody.querySelector('#punnettAINumber');
        const theme = this.ideviceBody.querySelector('#punnettAITheme');
        const prompt = this.ideviceBody.querySelector('#punnettAIPrompt');
        const text = this.ideviceBody.querySelector('#punnettAIText');
        const assistant = this.ideviceBody.querySelector('#punnettAISelect');

        if (
            window.eXeLearning?.app?.user?.preferences?.preferences?.defaultAI?.value
        ) {
            const defaultAI =
                window.eXeLearning.app.user.preferences.preferences.defaultAI.value;
            if ([...assistant.options].some((option) => option.value === defaultAI)) {
                assistant.value = defaultAI;
            }
        }

        [specialty, course, number, theme].forEach((field) => {
            field.addEventListener('input', () => this.updateAIPrompt());
        });

        this.ideviceBody
            .querySelector('#punnettAICopyPrompt')
            .addEventListener('click', async () => {
                const value = prompt.value.trim();
                if (!value) {
                    eXe.app.alert(this.t('There is no prompt to copy.'));
                    return;
                }
                try {
                    await navigator.clipboard.writeText(value);
                } catch (error) {}
            });

        this.ideviceBody
            .querySelector('#punnettAISend')
            .addEventListener('click', () => {
                const value = prompt.value.trim();
                if (!value) {
                    eXe.app.alert(this.t('There is no query to send to the assistant.'));
                    return;
                }
                const baseUrl = assistant.value;
                if (!baseUrl) {
                    eXe.app.alert(this.t('Please select an AI assistant.'));
                    return;
                }
                window.open(`${baseUrl}${encodeURIComponent(value)}`, '_blank');
            });

        this.ideviceBody
            .querySelector('#punnettAIImportText')
            .addEventListener('click', () => {
                const lines = text.value
                    .split(/\r?\n/)
                    .map((line) => line.trim())
                    .filter(Boolean);
                if (!lines.length) {
                    eXe.app.alert(this.t('Please enter at least one activity.'));
                    return;
                }
                this.importActivitiesFromLines(lines);
            });

        this.ideviceBody
            .querySelector('#punnettAIGenerate')
            .addEventListener('click', () => this.generateActivitiesWithAI());
    },

    updateAIPrompt() {
        const specialty = this.ideviceBody.querySelector('#punnettAISpecialty').value.trim();
        const course = this.ideviceBody.querySelector('#punnettAICourse').value.trim();
        const number = Math.max(
            1,
            parseInt(this.ideviceBody.querySelector('#punnettAINumber').value, 10) || 10
        );
        const theme = this.ideviceBody.querySelector('#punnettAITheme').value.trim();

        const lines = [this.t('Act as a highly experienced teacher.')];
        if (specialty) lines.push(`${this.t('Specialty')}: ${specialty}.`);
        if (course) lines.push(`${this.t('Course')}: ${course}.`);
        if (theme) lines.push(`${this.t('Topic')}: ${theme}.`);
        lines.push(`${number} ${this.t('Activities')}.`);
        lines.push(this.t('Generate Punnett square activities using this exact format, one activity per line:'));
        lines.push(this.t('Monohybrid format: Title#1#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1'));
        lines.push(this.t('Dihybrid format: Title#2#Parent1#Parent2#Gene1Letter#DominantPhenotype1#RecessivePhenotype1#Gene2Letter#DominantPhenotype2#RecessivePhenotype2'));
        lines.push(this.t('Do not include numbering, bullets, explanations or the # character inside any field.'));
        lines.push(this.t('Write Parent1 and Parent2 separately. Do not write crosses like Aa x aa inside a single field.'));
        this.ideviceBody.querySelector('#punnettAIPrompt').value = lines.join('\n');
    },

    async generateActivitiesWithAI() {
        const container = $('#punnettAIContainer');
        const message = $('#punnettAIMessage');
        const prompt = this.ideviceBody.querySelector('#punnettAIPrompt').value.trim();
        if (!prompt) {
            eXe.app.alert(this.t('There is no query to send to the assistant.'));
            return;
        }

        container.find('input, textarea, button, select').prop('disabled', true);
        message.text(this.t('Generating activities. Please wait...')).show();
        try {
            const data = await eXeLearning.app.api.getGenerateQuestions(prompt);
            const raw =
                data && Array.isArray(data.questions)
                    ? data.questions
                    : typeof data?.questions === 'string'
                      ? data.questions.split(/\r?\n/)
                      : [];
            const lines = raw
                .map((line) => String(line || '').trim())
                .filter(Boolean);
            if (!lines.length) {
                message.text(this.t('The activities could not be generated. Incorrect format')).show();
            } else {
                this.ideviceBody.querySelector('#punnettAIText').value = lines.join('\n');
                this.importActivitiesFromLines(lines);
                message.hide();
            }
        } catch (error) {
            message.text(this.t('An error occurred while retrieving the activities. Please try again.')).show();
        } finally {
            container.find('input, textarea, button, select').prop('disabled', false);
        }
    },

    exportGame() {
        this.storeCurrentActivity();
        const payload = {
            type: 'punnett-square',
            version: 1,
            mode: this.workingData.mode,
            randomCount: this.workingData.randomCount,
            activities: this.workingData.activities,
        };
        $exeDevicesEdition.iDevice.gamification.share.exportGame(
            payload,
            'punnettSquareIdeviceForm',
            'punnett-square'
        );
    },

    importGame(content, fileType) {
        if (fileType && fileType.match('application/json')) {
            this.importJsonGame(content);
            return;
        }
        const lines = String(content || '')
            .split(/\r?\n/)
            .map((line) => line.trim())
            .filter(Boolean);
        this.importActivitiesFromLines(lines);
    },

    importJsonGame(content) {
        let parsed;
        try {
            parsed = JSON.parse(content);
        } catch (error) {
            eXe.app.alert(this.t('The file does not contain a valid Punnett square activity set.'));
            return;
        }

        if (!parsed || parsed.type !== 'punnett-square' || !Array.isArray(parsed.activities)) {
            eXe.app.alert(this.t('The file does not contain a valid Punnett square activity set.'));
            return;
        }

        const imported = [];
        for (let i = 0; i < parsed.activities.length; i++) {
            const activity = this.normalizeActivity(parsed.activities[i], this.workingData.activities.length + imported.length);
            if (activity && this.validateActivity(activity)) {
                imported.push(activity);
            }
        }

        if (!imported.length) {
            eXe.app.alert(this.t('No valid activities were found in the imported content.'));
            return;
        }

        this.storeCurrentActivity();
        this.workingData.mode = parsed.mode === 'random' ? 'random' : this.workingData.mode;
        this.workingData.randomCount = Math.max(0, parseInt(parsed.randomCount, 10) || 0);
        this.ideviceBody.querySelector('#punnettMode').value = this.workingData.mode;
        this.ideviceBody.querySelector('#punnettRandomCount').value = this.workingData.randomCount;
        this.toggleRandomCount();
        this.workingData.activities = this.workingData.activities.concat(imported);
        this.currentActivityIndex = this.workingData.activities.length - imported.length;
        this.loadActivityIntoForm(this.currentActivityIndex);
        eXe.app.alert(this.t('The imported activities have been added successfully.'));
    },

    sanitizeGenotype(raw) {
        return String(raw || '').replace(/[^A-Za-z]/g, '');
    },

    genotypeMatchesTraits(genotype, traits, geneCount) {
        for (let i = 0; i < geneCount; i++) {
            const dominant = traits[i].geneLetter.toUpperCase();
            const recessive = traits[i].geneLetter.toLowerCase();
            const pair = genotype.slice(i * 2, i * 2 + 2);
            if (!pair) continue;
            for (const allele of pair) {
                if (allele !== dominant && allele !== recessive) return false;
            }
        }
        return true;
    },

    validateActivity(activity) {
        if (!activity.title) {
            eXe.app.alert(this.t('Please write an activity title.'));
            return false;
        }
        const expectedLength = activity.geneCount * 2;
        if (activity.parent1.length !== expectedLength) {
            eXe.app.alert(this.t('Parent 1 genotype does not match the selected number of genes.'));
            return false;
        }
        if (activity.parent2.length !== expectedLength) {
            eXe.app.alert(this.t('Parent 2 genotype does not match the selected number of genes.'));
            return false;
        }
        for (let i = 0; i < activity.geneCount; i++) {
            const trait = activity.traits[i];
            if (!trait.geneLetter) {
                eXe.app.alert(this.t('Each gene needs a letter.'));
                return false;
            }
            if (!trait.dominantLabel || !trait.recessiveLabel) {
                eXe.app.alert(this.t('Write the dominant and recessive phenotype for each active gene.'));
                return false;
            }
        }
        if (
            !this.genotypeMatchesTraits(
                activity.parent1,
                activity.traits,
                activity.geneCount
            ) ||
            !this.genotypeMatchesTraits(
                activity.parent2,
                activity.traits,
                activity.geneCount
            )
        ) {
            eXe.app.alert(this.t('Parent genotypes must use the configured gene letters.'));
            return false;
        }
        if (
            !activity.askGametes &&
            !activity.askGrid &&
            !activity.askGenotypeRatio &&
            !activity.askPhenotypeRatio
        ) {
            eXe.app.alert(this.t('Select at least one student task.'));
            return false;
        }
        return true;
    },

    save() {
        this.storeCurrentActivity();
        const scorm = $exeDevicesEdition.iDevice.gamification.scorm.getValues();
        const instructionsEditor = tinyMCE.get('eXeGameInstructions');
        const afterEditor = tinyMCE.get('eXeIdeviceTextAfter');

        const data = JSON.parse(JSON.stringify(this.workingData));
        data.mode = this.ideviceBody.querySelector('#punnettMode').value === 'random' ? 'random' : 'sequence';
        data.randomCount = Math.max(
            0,
            parseInt(this.ideviceBody.querySelector('#punnettRandomCount').value, 10) || 0
        );
        data.evaluation = this.ideviceBody.querySelector('#punnettEvaluation').checked;
        data.evaluationID = this.ideviceBody
            .querySelector('#punnettEvaluationID')
            .value.trim();
        data.isScorm = scorm.isScorm;
        data.textButtonScorm = scorm.textButtonScorm;
        data.repeatActivity = scorm.repeatActivity;
        data.weighted = scorm.weighted || 100;
        data.instructions = instructionsEditor ? instructionsEditor.getContent() : '';
        data.textAfter = afterEditor ? afterEditor.getContent() : '';

        const i18n = { ...this.ci18n };
        Object.keys(this.ci18n).forEach((key) => {
            const field = this.ideviceBody.querySelector('#ci18n_' + key);
            if (field && field.value.trim() !== '') i18n[key] = field.value;
        });
        data.msgs = i18n;

        if (!data.instructions) {
            eXe.app.alert(this.t('Please write the instructions.'));
            return false;
        }
        if (!data.activities.length) {
            eXe.app.alert(this.t('At least one activity is required.'));
            return false;
        }
        if (data.mode === 'random' && data.randomCount > data.activities.length) {
            eXe.app.alert(
                this.t('Random activities cannot exceed the number of available activities.')
            );
            return false;
        }
        if (data.evaluation && data.evaluationID.length < 5) {
            eXe.app.alert(this.t('The report identifier must have at least 5 characters.'));
            return false;
        }
        for (let i = 0; i < data.activities.length; i++) {
            if (!this.validateActivity(data.activities[i])) return false;
        }

        const first = data.activities[0];
        data.title = first.title;
        data.geneCount = first.geneCount;
        data.parent1 = first.parent1;
        data.parent2 = first.parent2;
        data.traits = first.traits;
        data.askGametes = first.askGametes;
        data.askGrid = first.askGrid;
        data.askGenotypeRatio = first.askGenotypeRatio;
        data.askPhenotypeRatio = first.askPhenotypeRatio;
        data.showSolutions = first.showSolutions;
        return data;
    },

    escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },
};
