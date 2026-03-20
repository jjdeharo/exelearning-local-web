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
            General: 'General',
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
            'AI Assistant': 'Asistente IA',
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
            'AI assistant': 'Asistente de IA',
            'Please select an AI assistant.': 'Selecciona un asistente de IA.',
            'There is no query to send to the assistant.':
                'No hay ninguna consulta para enviar al asistente.',
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
            'The report identifier must have at least 5 characters.':
                'El identificador del informe debe tener al menos 5 caracteres.',
            'Use the same identifier in all the activities that belong to the same progress report.':
                'Usa el mismo identificador en todas las actividades que pertenezcan al mismo informe de progreso.',
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
        en: {
            'Food web': 'Food web',
            'Interactive ecology activity with species, relations and scenarios.':
                'Interactive ecology activity with species, relations and scenarios.',
            'General settings': 'General settings',
            General: 'General',
            Title: 'Title',
            Subtitle: 'Subtitle',
            Instructions: 'Instructions',
            'Ecosystem name': 'Ecosystem name',
            Biome: 'Biome',
            Level: 'Educational level',
            Course: 'Course',
            Locale: 'Language',
            Notes: 'Notes',
            'Display options': 'Display options',
            'Show legend': 'Show legend',
            'Show species cards': 'Show species cards',
            'Show arrows': 'Show arrows',
            'Show relation labels': 'Show relation labels',
            'Randomize questions': 'Randomize questions',
            'Allow reveal answers': 'Allow reveal answers',
            Layout: 'Layout',
            'By trophic levels': 'By trophic levels',
            Network: 'Network',
            Evaluation: 'Evaluation',
            'Enable evaluation': 'Enable evaluation',
            'Evaluation ID': 'Evaluation ID',
            Species: 'Species',
            Relations: 'Relations',
            Questions: 'Questions',
            Scenarios: 'Scenarios',
            'Artificial Intelligence': 'AI',
            'AI Assistant': 'AI Assistant',
            'Import/Export': 'Import/Export',
            'Add species': 'Add species',
            'Add relation': 'Add relation',
            'Add question': 'Add question',
            'Add scenario': 'Add scenario',
            Duplicate: 'Duplicate',
            Delete: 'Delete',
            Name: 'Name',
            Role: 'Role',
            Group: 'Group',
            Description: 'Description',
            Image: 'Image',
            Traits: 'Traits',
            Importance: 'Importance',
            Source: 'Source',
            Target: 'Target',
            Type: 'Type',
            Strength: 'Strength',
            Note: 'Note',
            Prompt: 'Prompt',
            Options: 'Options',
            'Correct answers': 'Correct answers',
            Explanation: 'Explanation',
            'Question type': 'Question type',
            'Scenario title': 'Scenario title',
            'Change type': 'Change type',
            'Target species': 'Target species',
            'Expected effects': 'Expected effects',
            Ecosystem: 'Ecosystem',
            'Approx. species': 'Approx. species',
            'Include decomposer': 'Include decomposer',
            'Include invasive species': 'Include invasive species',
            'Include questions': 'Include questions',
            Difficulty: 'Difficulty',
            'Generate prompt': 'Generate prompt',
            'Copy prompt': 'Copy prompt',
            'Send to AI': 'Send to AI',
            'Import result': 'Import result',
            'AI assistant': 'AI assistant',
            'Please select an AI assistant.': 'Please select an AI assistant.',
            'There is no query to send to the assistant.':
                'There is no query to send to the assistant.',
            'Prompt to generate': 'Prompt to generate',
            'Generated result': 'Generated result',
            'Export JSON': 'Export JSON',
            'Import JSON': 'Import JSON',
            'Paste simplified text or JSON': 'Paste simplified text or JSON',
            'Import pasted text': 'Import pasted text',
            'At least one producer is required.':
                'At least one producer is required.',
            'At least three species are required.':
                'At least three species are required.',
            'At least two relations are required.':
                'At least two relations are required.',
            'Please write a title.': 'Please write a title.',
            'There are broken references in the relations.':
                'There are broken references in the relations.',
            'The questions are not valid.': 'The questions are not valid.',
            'The imported content is not valid for this iDevice.':
                'The imported content is not valid for this iDevice.',
            'The content has been imported successfully.':
                'The content has been imported successfully.',
            'The prompt has been copied to the clipboard.':
                'The prompt has been copied to the clipboard.',
            'The JSON has been copied to the clipboard.':
                'The JSON has been copied to the clipboard.',
            'Unable to copy to the clipboard.':
                'Unable to copy to the clipboard.',
            'The report identifier must have at least 5 characters.':
                'The report identifier must have at least 5 characters.',
            'Use the same identifier in all the activities that belong to the same progress report.':
                'Use the same identifier in all the activities that belong to the same progress report.',
            'Open your preferred assistant and paste the prompt.':
                'Open your preferred assistant and paste the prompt.',
            Producer: 'Producer',
            'Primary consumer': 'Primary consumer',
            'Secondary consumer': 'Secondary consumer',
            'Tertiary consumer': 'Tertiary consumer',
            Omnivore: 'Omnivore',
            Decomposer: 'Decomposer',
            Eats: 'Eats',
            Decomposes: 'Decomposes',
            Competes: 'Competes with',
            'Parasite of': 'Parasite of',
            Low: 'Low',
            Medium: 'Medium',
            High: 'High',
            'Multiple choice': 'Multiple choice',
            'Multi select': 'Multi select',
            'True/false': 'True/false',
            'Match role': 'Match role',
            'Predict effect': 'Predict effect',
            'Species disappearance': 'Species disappearance',
            'Population increase': 'Population increase',
            'Invasive arrival': 'Invasive arrival',
            Pollution: 'Pollution',
            Drought: 'Drought',
            'Producer loss': 'Producer loss',
            Basic: 'Basic',
            Intermediate: 'Intermediate',
            Advanced: 'Advanced',
            'One option per line. Mark the correct ones with * at the end or write their indexes separated by commas.':
                'One option per line. Mark the correct ones with * at the end or write their indexes separated by commas.',
            'One expected effect per line.':
                'One expected effect per line.',
            'One trait per comma.': 'One trait per comma.',
        },
        ca: {
            'Food web': 'Xarxa tròfica',
            'Interactive ecology activity with species, relations and scenarios.':
                "Activitat interactiva d'ecologia amb espècies, relacions i escenaris.",
            'General settings': 'Configuració general',
            General: 'General',
            Title: 'Títol',
            Subtitle: 'Subtítol',
            Instructions: 'Instruccions',
            'Ecosystem name': "Nom de l'ecosistema",
            Biome: 'Bioma',
            Level: 'Nivell educatiu',
            Course: 'Curs',
            Locale: 'Idioma',
            Notes: 'Observacions',
            'Display options': 'Opcions de visualització',
            'Show legend': 'Mostra la llegenda',
            'Show species cards': "Mostra les targetes d'espècies",
            'Show arrows': 'Mostra les fletxes',
            'Show relation labels': 'Mostra les etiquetes de relació',
            'Randomize questions': 'Barreja les preguntes',
            'Allow reveal answers': 'Permet mostrar les respostes',
            Layout: 'Distribució',
            'By trophic levels': 'Per nivells tròfics',
            Network: 'Xarxa',
            Evaluation: 'Avaluació',
            'Enable evaluation': "Activa l'avaluació",
            'Evaluation ID': "ID d'avaluació",
            Species: 'Espècies',
            Relations: 'Relacions',
            Questions: 'Preguntes',
            Scenarios: 'Escenaris',
            'Artificial Intelligence': 'IA',
            'AI Assistant': "Assistent d'IA",
            'Import/Export': 'Importa/Exporta',
            'Add species': 'Afegeix espècie',
            'Add relation': 'Afegeix relació',
            'Add question': 'Afegeix pregunta',
            'Add scenario': 'Afegeix escenari',
            Duplicate: 'Duplica',
            Delete: 'Elimina',
            Name: 'Nom',
            Role: 'Rol',
            Group: 'Grup',
            Description: 'Descripció',
            Image: 'Imatge',
            Traits: 'Trets',
            Importance: 'Importància',
            Source: 'Origen',
            Target: 'Destí',
            Type: 'Tipus',
            Strength: 'Intensitat',
            Note: 'Nota',
            Prompt: 'Enunciat',
            Options: 'Opcions',
            'Correct answers': 'Respostes correctes',
            Explanation: 'Explicació',
            'Question type': 'Tipus de pregunta',
            'Scenario title': "Títol de l'escenari",
            'Change type': 'Tipus de canvi',
            'Target species': 'Espècie objectiu',
            'Expected effects': 'Efectes esperats',
            Ecosystem: 'Ecosistema',
            'Approx. species': "Nombre d'espècies",
            'Include decomposer': 'Inclou descomponedor',
            'Include invasive species': 'Inclou espècie invasora',
            'Include questions': 'Inclou preguntes',
            Difficulty: 'Dificultat',
            'Generate prompt': 'Genera prompt',
            'Copy prompt': 'Copia prompt',
            'Send to AI': 'Envia a la IA',
            'Import result': 'Importa resultat',
            'AI assistant': "Assistent d'IA",
            'Please select an AI assistant.': "Selecciona un assistent d'IA.",
            'There is no query to send to the assistant.':
                "No hi ha cap consulta per enviar a l'assistent.",
            'Prompt to generate': 'Prompt per generar',
            'Generated result': 'Resultat generat',
            'Export JSON': 'Exporta JSON',
            'Import JSON': 'Importa JSON',
            'Paste simplified text or JSON': 'Enganxa text simplificat o JSON',
            'Import pasted text': 'Importa text enganxat',
            'At least one producer is required.':
                'Cal almenys un productor.',
            'At least three species are required.':
                'Calen almenys tres espècies.',
            'At least two relations are required.':
                'Calen almenys dues relacions.',
            'Please write a title.': 'Escriu un títol.',
            'There are broken references in the relations.':
                'Hi ha referències trencades en les relacions.',
            'The questions are not valid.': 'Les preguntes no són vàlides.',
            'The imported content is not valid for this iDevice.':
                "El contingut importat no és vàlid per a aquest iDevice.",
            'The content has been imported successfully.':
                "El contingut s'ha importat correctament.",
            'The prompt has been copied to the clipboard.':
                "El prompt s'ha copiat al porta-retalls.",
            'The JSON has been copied to the clipboard.':
                "El JSON s'ha copiat al porta-retalls.",
            'Unable to copy to the clipboard.':
                "No s'ha pogut copiar al porta-retalls.",
            'The report identifier must have at least 5 characters.':
                "L'identificador de l'informe ha de tenir almenys 5 caràcters.",
            'Use the same identifier in all the activities that belong to the same progress report.':
                "Fes servir el mateix identificador en totes les activitats que pertanyen al mateix informe de progrés.",
            'Open your preferred assistant and paste the prompt.':
                'Obre el teu assistent preferit i enganxa el prompt.',
            Producer: 'Productor',
            'Primary consumer': 'Consumidor primari',
            'Secondary consumer': 'Consumidor secundari',
            'Tertiary consumer': 'Consumidor terciari',
            Omnivore: 'Omnívor',
            Decomposer: 'Descomponedor',
            Eats: "S'alimenta de",
            Decomposes: 'Descompon',
            Competes: 'Competeix amb',
            'Parasite of': 'Paràsit de',
            Low: 'Baixa',
            Medium: 'Mitjana',
            High: 'Alta',
            'Multiple choice': 'Opció múltiple',
            'Multi select': 'Selecció múltiple',
            'True/false': 'Vertader/fals',
            'Match role': 'Relaciona rol',
            'Predict effect': 'Prediu efecte',
            'Species disappearance': "Desaparició d'espècie",
            'Population increase': 'Augment de població',
            'Invasive arrival': "Arribada d'invasora",
            Pollution: 'Contaminació',
            Drought: 'Sequera',
            'Producer loss': 'Pèrdua de productor',
            Basic: 'Bàsica',
            Intermediate: 'Intermèdia',
            Advanced: 'Avançada',
            'One option per line. Mark the correct ones with * at the end or write their indexes separated by commas.':
                "Una opció per línia. Marca les correctes amb * al final o escriu els seus índexs separats per comes.",
            'One expected effect per line.':
                'Un efecte esperat per línia.',
            'One trait per comma.': 'Un tret per comes.',
        },
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
            if (locale.indexOf('ca') === 0 || locale.indexOf('va') === 0) return 'ca';
            if (locale.indexOf('en') === 0) return 'en';
            if (locale.indexOf('es') === 0) return 'es';
        }
        return 'es';
    },

    getExternalTranslation: function (key, locale) {
        const translators = [];
        try {
            if (typeof c_ === 'function') translators.push(c_);
        } catch (e) {}
        try {
            if (typeof _ === 'function') translators.push(_);
        } catch (e) {}
        for (let i = 0; i < translators.length; i++) {
            try {
                const translated = translators[i](key);
                if (typeof translated !== 'string' || !translated.trim()) continue;
                if (translated !== key) return translated;
                if (locale === 'en') return translated;
            } catch (e) {}
        }
        return '';
    },

    t: function (key) {
        const locale = this.getLocale();
        const external = this.getExternalTranslation(key, locale);
        if (external) return external;
        const current = this.i18n[locale] || {};
        return current[key] || this.i18n.es[key] || key;
    },

    getDefaultExampleData: function (locale) {
        const examples = {
            es: {
                title: 'Red trófica del bosque mediterráneo',
                subtitle: 'Cadena trófica básica en un ecosistema mediterráneo',
                instructions:
                    '<p>Explora las especies, observa las relaciones y responde a las preguntas.</p>',
                ecosystemContext: {
                    name: 'Bosque mediterráneo',
                    biome: 'bosque y matorral mediterráneo',
                    level: 'ESO',
                    course: '2.º ESO',
                    notes: '',
                },
                species: [
                    {
                        id: 'sp-encina',
                        name: 'Encina',
                        role: 'producer',
                        group: 'planta',
                        description:
                            'Árbol característico del bosque mediterráneo que produce hojas y bellotas.',
                        image: '',
                        traits: ['autótrofa', 'perenne'],
                        importance: 'productor principal',
                    },
                    {
                        id: 'sp-conejo',
                        name: 'Conejo europeo',
                        role: 'primary-consumer',
                        group: 'mamífero',
                        description:
                            'Herbívoro frecuente que se alimenta de brotes, hierbas y hojas tiernas.',
                        image: '',
                        traits: ['herbívoro', 'presa habitual'],
                        importance: 'consumidor primario clave',
                    },
                    {
                        id: 'sp-culebra',
                        name: 'Culebra bastarda',
                        role: 'secondary-consumer',
                        group: 'reptil',
                        description:
                            'Reptil depredador que puede capturar pequeños mamíferos y otros vertebrados.',
                        image: '',
                        traits: ['carnívora', 'depredadora'],
                        importance: 'consumidor secundario',
                    },
                    {
                        id: 'sp-aguila',
                        name: 'Águila culebrera',
                        role: 'tertiary-consumer',
                        group: 'ave',
                        description:
                            'Ave rapaz que captura serpientes, conejos y otros pequeños vertebrados.',
                        image: '',
                        traits: ['rapaz', 'depredadora'],
                        importance: 'superdepredador',
                    },
                ],
                relations: [
                    {
                        id: 'rel-1',
                        from: 'sp-conejo',
                        to: 'sp-encina',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'Consume brotes tiernos, hojas jóvenes y plántulas de encina.',
                    },
                    {
                        id: 'rel-2',
                        from: 'sp-culebra',
                        to: 'sp-conejo',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'Puede depredar sobre gazapos o conejos jóvenes en zonas abiertas.',
                    },
                    {
                        id: 'rel-3',
                        from: 'sp-aguila',
                        to: 'sp-culebra',
                        type: 'eats',
                        strength: 'high',
                        note:
                            'La culebra bastarda forma parte de su dieta en ecosistemas mediterráneos.',
                    },
                    {
                        id: 'rel-4',
                        from: 'sp-aguila',
                        to: 'sp-conejo',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'También puede capturar conejos, sobre todo ejemplares jóvenes o desprevenidos.',
                    },
                    {
                        id: 'rel-5',
                        from: 'sp-aguila',
                        to: 'sp-culebra',
                        type: 'competes',
                        strength: 'medium',
                        note:
                            'Águila culebrera y culebra bastarda compiten indirectamente por presas como el conejo joven.',
                    },
                ],
                questions: [
                    {
                        id: 'q-1',
                        type: 'multiple-choice',
                        prompt:
                            '¿Qué ocurriría si disminuye mucho la población de encinas?',
                        options: [
                            'Aumentaría el alimento disponible para el conejo europeo',
                            'Disminuiría parte del alimento disponible para el conejo europeo',
                            'La culebra bastarda tendría más alimento directo',
                        ],
                        correctAnswers: [1],
                        explanation:
                            'La encina es un productor y sostiene al conejo europeo, que depende de sus recursos vegetales.',
                    },
                ],
                scenarios: [
                    {
                        id: 'sc-1',
                        title: 'Sequía prolongada',
                        changeType: 'drought',
                        targetSpeciesId: 'sp-encina',
                        prompt:
                            'Predice una consecuencia probable en la red si una sequía reduce la producción de hojas y brotes.',
                        expectedEffects: [
                            'Disminuye el alimento disponible para el conejo europeo',
                            'Puede afectar indirectamente a los depredadores superiores',
                        ],
                    },
                ],
            },
            en: {
                title: 'Mediterranean forest food web',
                subtitle: 'Basic food chain in a Mediterranean ecosystem',
                instructions:
                    '<p>Explore the species, observe the relationships, and answer the questions.</p>',
                ecosystemContext: {
                    name: 'Mediterranean forest',
                    biome: 'Mediterranean woodland and scrub',
                    level: 'Secondary education',
                    course: 'Year 8',
                    notes: '',
                },
                species: [
                    {
                        id: 'sp-encina',
                        name: 'Holm oak',
                        role: 'producer',
                        group: 'plant',
                        description:
                            'A characteristic Mediterranean tree that produces leaves and acorns.',
                        image: '',
                        traits: ['autotroph', 'evergreen'],
                        importance: 'main producer',
                    },
                    {
                        id: 'sp-conejo',
                        name: 'European rabbit',
                        role: 'primary-consumer',
                        group: 'mammal',
                        description:
                            'A common herbivore that feeds on shoots, grasses, and tender leaves.',
                        image: '',
                        traits: ['herbivore', 'common prey'],
                        importance: 'key primary consumer',
                    },
                    {
                        id: 'sp-culebra',
                        name: 'Montpellier snake',
                        role: 'secondary-consumer',
                        group: 'reptile',
                        description:
                            'A predatory reptile that can capture small mammals and other vertebrates.',
                        image: '',
                        traits: ['carnivorous', 'predator'],
                        importance: 'secondary consumer',
                    },
                    {
                        id: 'sp-aguila',
                        name: 'Short-toed snake eagle',
                        role: 'tertiary-consumer',
                        group: 'bird',
                        description:
                            'A bird of prey that hunts snakes, rabbits, and other small vertebrates.',
                        image: '',
                        traits: ['raptor', 'predator'],
                        importance: 'top predator',
                    },
                ],
                relations: [
                    {
                        id: 'rel-1',
                        from: 'sp-conejo',
                        to: 'sp-encina',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'It feeds on tender shoots, young leaves, and holm oak seedlings.',
                    },
                    {
                        id: 'rel-2',
                        from: 'sp-culebra',
                        to: 'sp-conejo',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'It may prey on rabbit kits or young rabbits in open areas.',
                    },
                    {
                        id: 'rel-3',
                        from: 'sp-aguila',
                        to: 'sp-culebra',
                        type: 'eats',
                        strength: 'high',
                        note:
                            'The Montpellier snake is part of its diet in Mediterranean ecosystems.',
                    },
                    {
                        id: 'rel-4',
                        from: 'sp-aguila',
                        to: 'sp-conejo',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'It can also capture rabbits, especially young or exposed individuals.',
                    },
                    {
                        id: 'rel-5',
                        from: 'sp-aguila',
                        to: 'sp-culebra',
                        type: 'competes',
                        strength: 'medium',
                        note:
                            'The eagle and the snake indirectly compete for prey such as young rabbits.',
                    },
                ],
                questions: [
                    {
                        id: 'q-1',
                        type: 'multiple-choice',
                        prompt:
                            'What would happen if the holm oak population decreased sharply?',
                        options: [
                            'Food availability for the European rabbit would increase',
                            'Part of the food available to the European rabbit would decrease',
                            'The Montpellier snake would have more direct food',
                        ],
                        correctAnswers: [1],
                        explanation:
                            'The holm oak is a producer and supports the European rabbit, which depends on its plant resources.',
                    },
                ],
                scenarios: [
                    {
                        id: 'sc-1',
                        title: 'Prolonged drought',
                        changeType: 'drought',
                        targetSpeciesId: 'sp-encina',
                        prompt:
                            'Predict one likely consequence in the web if a drought reduces the production of leaves and shoots.',
                        expectedEffects: [
                            'Food availability for the European rabbit decreases',
                            'Top predators may be indirectly affected',
                        ],
                    },
                ],
            },
            ca: {
                title: 'Xarxa tròfica del bosc mediterrani',
                subtitle: 'Cadena tròfica bàsica en un ecosistema mediterrani',
                instructions:
                    '<p>Explora les espècies, observa les relacions i respon les preguntes.</p>',
                ecosystemContext: {
                    name: 'Bosc mediterrani',
                    biome: 'bosc i matollar mediterrani',
                    level: 'ESO',
                    course: '2n d’ESO',
                    notes: '',
                },
                species: [
                    {
                        id: 'sp-encina',
                        name: 'Alzina',
                        role: 'producer',
                        group: 'planta',
                        description:
                            'Arbre característic del bosc mediterrani que produeix fulles i glans.',
                        image: '',
                        traits: ['autòtrofa', 'perenne'],
                        importance: 'productor principal',
                    },
                    {
                        id: 'sp-conejo',
                        name: 'Conill europeu',
                        role: 'primary-consumer',
                        group: 'mamífer',
                        description:
                            'Herbívor freqüent que s’alimenta de brots, herbes i fulles tendres.',
                        image: '',
                        traits: ['herbívor', 'presa habitual'],
                        importance: 'consumidor primari clau',
                    },
                    {
                        id: 'sp-culebra',
                        name: 'Serp verda-i-groga',
                        role: 'secondary-consumer',
                        group: 'rèptil',
                        description:
                            'Rèptil depredador que pot capturar petits mamífers i altres vertebrats.',
                        image: '',
                        traits: ['carnívora', 'depredadora'],
                        importance: 'consumidor secundari',
                    },
                    {
                        id: 'sp-aguila',
                        name: 'Àguila marcenca',
                        role: 'tertiary-consumer',
                        group: 'au',
                        description:
                            'Au rapaç que captura serps, conills i altres petits vertebrats.',
                        image: '',
                        traits: ['rapinyaire', 'depredadora'],
                        importance: 'superdepredador',
                    },
                ],
                relations: [
                    {
                        id: 'rel-1',
                        from: 'sp-conejo',
                        to: 'sp-encina',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'S’alimenta de brots tendres, fulles joves i plançons d’alzina.',
                    },
                    {
                        id: 'rel-2',
                        from: 'sp-culebra',
                        to: 'sp-conejo',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'Pot depredar sobre conills joves en zones obertes.',
                    },
                    {
                        id: 'rel-3',
                        from: 'sp-aguila',
                        to: 'sp-culebra',
                        type: 'eats',
                        strength: 'high',
                        note:
                            'La serp verda-i-groga forma part de la seva dieta en ecosistemes mediterranis.',
                    },
                    {
                        id: 'rel-4',
                        from: 'sp-aguila',
                        to: 'sp-conejo',
                        type: 'eats',
                        strength: 'medium',
                        note:
                            'També pot capturar conills, sobretot exemplars joves o confiats.',
                    },
                    {
                        id: 'rel-5',
                        from: 'sp-aguila',
                        to: 'sp-culebra',
                        type: 'competes',
                        strength: 'medium',
                        note:
                            'L’àguila marcenca i la serp verda-i-groga competeixen indirectament per preses com el conill jove.',
                    },
                ],
                questions: [
                    {
                        id: 'q-1',
                        type: 'multiple-choice',
                        prompt:
                            'Què passaria si la població d’alzines disminuís molt?',
                        options: [
                            'Augmentaria l’aliment disponible per al conill europeu',
                            'Disminuiria part de l’aliment disponible per al conill europeu',
                            'La serp verda-i-groga tindria més aliment directe',
                        ],
                        correctAnswers: [1],
                        explanation:
                            'L’alzina és un productor i sosté el conill europeu, que depèn dels seus recursos vegetals.',
                    },
                ],
                scenarios: [
                    {
                        id: 'sc-1',
                        title: 'Sequera prolongada',
                        changeType: 'drought',
                        targetSpeciesId: 'sp-encina',
                        prompt:
                            'Prediu una conseqüència probable en la xarxa si una sequera redueix la producció de fulles i brots.',
                        expectedEffects: [
                            'Disminueix l’aliment disponible per al conill europeu',
                            'Pot afectar indirectament els depredadors superiors',
                        ],
                    },
                ],
            },
        };
        return examples[locale] || examples.es;
    },

    getDefaultData: function (localeOverride) {
        const locale = localeOverride || this.getLocale();
        const example = this.getDefaultExampleData(locale);
        return {
            title: example.title,
            subtitle: example.subtitle,
            instructions: example.instructions,
            ecosystemContext: {
                name: example.ecosystemContext.name,
                biome: example.ecosystemContext.biome,
                level: example.ecosystemContext.level,
                course: example.ecosystemContext.course,
                locale: locale,
                notes: example.ecosystemContext.notes,
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
            species: example.species,
            relations: example.relations,
            questions: example.questions,
            scenarios: example.scenarios,
            evaluation: false,
            evaluationID: '',
            isScorm: 0,
            textButtonScorm: '',
            repeatActivity: true,
            weighted: 100,
            scorep: 0,
            scorerp: 0,
        };
    },

    normalizeData: function (rawData) {
        const data = rawData || {};
        const context = data.ecosystemContext || {};
        const defaults = this.getDefaultData(context.locale || data.locale);
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
            isScorm: Number.isFinite(parseInt(data.isScorm, 10))
                ? parseInt(data.isScorm, 10)
                : defaults.isScorm,
            textButtonScorm: data.textButtonScorm || defaults.textButtonScorm,
            repeatActivity:
                typeof data.repeatActivity === 'boolean'
                    ? data.repeatActivity
                    : defaults.repeatActivity,
            weighted:
                Number.isFinite(parseInt(data.weighted, 10))
                    ? parseInt(data.weighted, 10)
                    : defaults.weighted,
            scorep: defaults.scorep,
            scorerp: defaults.scorerp,
        };
    },

    createForm: function () {
        const data = this.normalizeData(this.idevicePreviousData);
        let html = `<div id="foodWebC1IdeviceForm" class="food-web-c1-editor">`;
        html += `<section class="fwc1-header"><h2>${this.t('Food web')}</h2><p>${this.t(
            'Interactive ecology activity with species, relations and scenarios.'
        )}</p></section>`;
        html += `<div class="exe-form-tab" title="${this.escapeAttribute(this.t('General'))}">${this.getGeneralSection(
            data
        )}</div>`;
        html += `<div class="exe-form-tab" title="${this.escapeAttribute(this.t('Species'))}">${this.getSpeciesSection(
            data
        )}</div>`;
        html += `<div class="exe-form-tab" title="${this.escapeAttribute(
            this.t('Relations')
        )}">${this.getRelationsSection(data)}</div>`;
        html += `<div class="exe-form-tab" title="${this.escapeAttribute(
            this.t('Questions')
        )}">${this.getQuestionsSection(data)}</div>`;
        html += `<div class="exe-form-tab" title="${this.escapeAttribute(
            this.t('Scenarios')
        )}">${this.getScenariosSection(data)}</div>`;
        html += `<div class="exe-form-tab" title="${this.escapeAttribute(
            this.t('Artificial Intelligence')
        )}">${this.getAiSection(data)}</div>`;
        html += `<div class="exe-form-tab" title="${this.escapeAttribute(
            this.t('Import/Export')
        )}">${this.getImportExportSection()}</div>`;
        if ($exeDevicesEdition?.iDevice?.gamification?.scorm?.getTab) {
            html += $exeDevicesEdition.iDevice.gamification.scorm.getTab(
                true,
                true,
                true
            );
        }
        html += `</div>`;
        this.ideviceBody.innerHTML = html;
        this.syncPresetValues();
        if ($exeDevicesEdition?.iDevice?.tabs?.init) {
            $exeDevicesEdition.iDevice.tabs.init('foodWebC1IdeviceForm');
        }
        if ($exeDevicesEdition?.iDevice?.gamification?.scorm?.init) {
            $exeDevicesEdition.iDevice.gamification.scorm.init();
        }
        this.setBehaviour();
    },

    getGeneralSection: function (data) {
        const options = data.displayOptions;
        return `<section class="fwc1-section">
            <h3>${this.t('General settings')}</h3>
            <div class="fwc1-grid fwc1-repeatable-grid">
                ${this.inputField('fwc1-title', this.t('Title'), data.title, 'text', '', 'fwc1-field-wide')}
                ${this.inputField('fwc1-subtitle', this.t('Subtitle'), data.subtitle, 'text', '', 'fwc1-field-wide')}
                ${this.textareaField('fwc1-instructions', this.t('Instructions'), data.instructions, 4, '', 'fwc1-field-full')}
                ${this.inputField('fwc1-ecosystem-name', this.t('Ecosystem name'), data.ecosystemContext.name, 'text', '', 'fwc1-field-wide')}
                ${this.inputField('fwc1-biome', this.t('Biome'), data.ecosystemContext.biome, 'text', '', 'fwc1-field-medium')}
                ${this.inputField('fwc1-level', this.t('Level'), data.ecosystemContext.level, 'text', '', 'fwc1-field-medium')}
                ${this.inputField('fwc1-course', this.t('Course'), data.ecosystemContext.course, 'text', '', 'fwc1-field-medium')}
                ${this.selectField(
                    'fwc1-locale',
                    this.t('Locale'),
                    this.locales.map((value) => ({ value: value, label: value })),
                    data.ecosystemContext.locale,
                    'fwc1-field-short'
                )}
                ${this.textareaField('fwc1-notes', this.t('Notes'), data.ecosystemContext.notes, 3, '', 'fwc1-field-full')}
            </div>
            <div class="fwc1-subsection">
                <h4>${this.t('Display options')}</h4>
                <div class="fwc1-grid fwc1-grid-tight">
                    ${this.checkboxField('fwc1-show-legend', this.t('Show legend'), options.showLegend, 'fwc1-field-medium')}
                    ${this.checkboxField('fwc1-show-species-cards', this.t('Show species cards'), options.showSpeciesCards, 'fwc1-field-medium')}
                    ${this.checkboxField('fwc1-show-arrows', this.t('Show arrows'), options.showArrows, 'fwc1-field-medium')}
                    ${this.checkboxField('fwc1-show-relation-labels', this.t('Show relation labels'), options.showRelationLabels, 'fwc1-field-medium')}
                    ${this.checkboxField('fwc1-randomize-questions', this.t('Randomize questions'), options.randomizeQuestions, 'fwc1-field-medium')}
                    ${this.checkboxField('fwc1-allow-reveal', this.t('Allow reveal answers'), options.allowRevealAnswers, 'fwc1-field-medium')}
                    ${this.selectField(
                        'fwc1-layout',
                        this.t('Layout'),
                        [
                            { value: 'levels', label: this.t('By trophic levels') },
                            { value: 'network', label: this.t('Network') },
                        ],
                        options.layout,
                        'fwc1-field-medium'
                    )}
                </div>
            </div>
            ${this.getAssessmentSection(data)}
        </section>`;
    },

    getAssessmentSection: function (data) {
        const evaluationID =
            data.evaluationID || window.eXeLearning?.app?.project?.odeId || '';
        return `<fieldset class="exe-fieldset fwc1-assessment">
            <legend><a href="#">${_('Assessment')}</a></legend>
            <div class="fwc1-assessment-row">
                <div class="toggle-item mb-0">
                    <span class="toggle-control">
                        <input type="checkbox" id="fwc1-evaluation" class="toggle-input" ${
                            data.evaluation ? 'checked="checked"' : ''
                        } />
                        <span class="toggle-visual"></span>
                    </span>
                    <label class="toggle-label mb-0" for="fwc1-evaluation">${_(
                        'Progress report'
                    )}.</label>
                </div>
                <div class="fwc1-assessment-id">
                    <label for="fwc1-evaluation-id" class="mb-0">${_(
                        'Identifier'
                    )}:</label>
                    <input type="text" id="fwc1-evaluation-id" class="form-control" value="${this.escapeAttribute(
                        evaluationID
                    )}" ${data.evaluation ? '' : 'disabled="disabled"'} />
                </div>
            </div>
            <p class="fwc1-inline-help">${this.t(
                'Use the same identifier in all the activities that belong to the same progress report.'
            )}</p>
        </fieldset>`;
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
            <div class="fwc1-grid fwc1-ai-controls">
                ${this.inputField('fwc1-ai-ecosystem', this.t('Ecosystem'), data.ecosystemContext.name)}
                ${this.inputField('fwc1-ai-level', this.t('Level'), data.ecosystemContext.level)}
                ${this.inputField('fwc1-ai-course', this.t('Course'), data.ecosystemContext.course)}
                ${this.inputField('fwc1-ai-species-count', this.t('Approx. species'), '5', 'number')}
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
            <div class="fwc1-ai-toolbar">
                <label class="fwc1-field fwc1-ai-select-field">
                    <span>${this.t('AI assistant')}</span>
                    <select id="fwc1-ai-assistant">
                        <option value="https://chatgpt.com/?q=">ChatGPT</option>
                        <option value="https://claude.ai/new?q=">Claude</option>
                        <option value="https://www.perplexity.ai/search?q=">Perplexity</option>
                        <option value="https://chat.mistral.ai/chat/?q=">Le Chat</option>
                        <option value="https://grok.com/?q=">Grok</option>
                        <option value="https://chat.qwen.ai/?text=">Qwen</option>
                    </select>
                </label>
            </div>
            <div class="fwc1-button-row fwc1-ai-actions">
                <button type="button" class="btn btn-secondary" id="fwc1-generate-prompt">${this.t('Generate prompt')}</button>
                <button type="button" class="btn btn-secondary" id="fwc1-copy-prompt">${this.t('Copy prompt')}</button>
                <button type="button" class="btn btn-secondary" id="fwc1-send-ai">${this.t('Send to AI')}</button>
                <button type="button" class="btn btn-secondary" id="fwc1-import-result">${this.t('Import result')}</button>
            </div>
            <div class="fwc1-ai-panels">
                ${this.textareaField('fwc1-ai-prompt', this.t('Prompt to generate'), '', 14)}
                ${this.textareaField('fwc1-ai-result', this.t('Generated result'), '', 14)}
            </div>
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
            <div class="fwc1-grid fwc1-repeatable-grid">
                ${this.inputField('species-id', 'ID', item.id, 'text', '', 'fwc1-field-short fwc1-inline-field', true)}
                ${this.inputField('species-name', this.t('Name'), item.name, 'text', '', 'fwc1-field-wide')}
                ${this.selectField('species-role', this.t('Role'), this.getRoleOptions(), item.role, 'fwc1-field-medium')}
                ${this.inputField('species-group', this.t('Group'), item.group, 'text', '', 'fwc1-field-medium')}
                ${this.inputField('species-image', this.t('Image'), item.image, 'text', '', 'fwc1-field-wide')}
                ${this.inputField('species-importance', this.t('Importance'), item.importance, 'text', '', 'fwc1-field-wide')}
                ${this.textareaField('species-description', this.t('Description'), item.description, 3, '', 'fwc1-field-full')}
                ${this.inputField('species-traits', this.t('Traits'), item.traits.join(', '), 'text', this.t('One trait per comma.'), 'fwc1-field-full')}
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
            <div class="fwc1-grid fwc1-repeatable-grid">
                ${this.inputField('relation-id', 'ID', item.id, 'text', '', 'fwc1-field-short fwc1-inline-field', true)}
                ${this.selectField('relation-from', this.t('Source'), this.getSpeciesSelectOptions(species), item.from, 'fwc1-field-medium')}
                ${this.selectField('relation-to', this.t('Target'), this.getSpeciesSelectOptions(species), item.to, 'fwc1-field-medium')}
                ${this.selectField('relation-type', this.t('Type'), this.getRelationTypeOptions(), item.type, 'fwc1-field-medium')}
                ${this.selectField('relation-strength', this.t('Strength'), this.getStrengthOptions(), item.strength, 'fwc1-field-short')}
                ${this.textareaField('relation-note', this.t('Note'), item.note, 3, '', 'fwc1-field-full')}
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
                ${this.inputField('question-id', 'ID', item.id, 'text', '', 'fwc1-field-short fwc1-inline-field', true)}
                ${this.selectField('question-type', this.t('Question type'), this.getQuestionTypeOptions(), item.type, 'fwc1-field-medium')}
                ${this.textareaField('question-prompt', this.t('Prompt'), item.prompt, 3, '', 'fwc1-field-full')}
                ${this.textareaField(
                    'question-options',
                    this.t('Options'),
                    item.options.join('\n'),
                    5,
                    this.t('One option per line. Mark the correct ones with * at the end or write their indexes separated by commas.'),
                    'fwc1-field-full'
                )}
                ${this.inputField('question-correct', this.t('Correct answers'), item.correctAnswers.join(', '), 'text', '', 'fwc1-field-medium')}
                ${this.textareaField('question-explanation', this.t('Explanation'), item.explanation, 3, '', 'fwc1-field-full')}
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
                ${this.inputField('scenario-id', 'ID', item.id, 'text', '', 'fwc1-field-short fwc1-inline-field', true)}
                ${this.inputField('scenario-title', this.t('Scenario title'), item.title, 'text', '', 'fwc1-field-wide')}
                ${this.selectField('scenario-change-type', this.t('Change type'), this.getScenarioTypeOptions(), item.changeType, 'fwc1-field-medium')}
                ${this.selectField('scenario-target-species', this.t('Target species'), this.getSpeciesSelectOptions(species), item.targetSpeciesId, 'fwc1-field-medium')}
                ${this.textareaField('scenario-prompt', this.t('Prompt'), item.prompt, 3, '', 'fwc1-field-full')}
                ${this.textareaField('scenario-effects', this.t('Expected effects'), item.expectedEffects.join('\n'), 4, this.t('One expected effect per line.'), 'fwc1-field-full')}
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

    textareaField: function (field, label, value, rows, help, extraClass) {
        return `<label class="fwc1-field fwc1-field-full ${extraClass || ''}">
            <span>${label}</span>
            <textarea id="${field}" data-field="${field}" rows="${rows || 4}">${this.escapeHtml(
                value || ''
            )}</textarea>
            ${help ? `<small>${help}</small>` : ''}
        </label>`;
    },

    selectField: function (field, label, options, selected, extraClass) {
        return `<label class="fwc1-field ${extraClass || ''}">
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

    checkboxField: function (field, label, checked, extraClass) {
        return `<label class="fwc1-field fwc1-checkbox ${extraClass || ''}">
            <input id="${field}" type="checkbox" data-field="${field}" ${
                checked ? 'checked="checked"' : ''
            } />
            <span>${label}</span>
        </label>`;
    },

    setBehaviour: function () {
        const root = this.ideviceBody;
        this.applyDefaultAiPreference();
        const evaluation = root.querySelector('#fwc1-evaluation');
        const evaluationID = root.querySelector('#fwc1-evaluation-id');
        if (evaluation && evaluationID) {
            evaluation.addEventListener('change', (event) => {
                evaluationID.disabled = !event.target.checked;
            });
        }
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
            const assistant = root.querySelector('#fwc1-ai-assistant');
            const baseUrl = assistant ? assistant.value : '';
            if (!prompt.trim()) {
                eXe.app.alert(this.t('There is no query to send to the assistant.'));
                return;
            }
            if (!baseUrl) {
                eXe.app.alert(this.t('Please select an AI assistant.'));
                return;
            }
            root.querySelector('#fwc1-ai-prompt').value = prompt;
            if (typeof window !== 'undefined' && window.open) {
                window.open(`${baseUrl}${encodeURIComponent(prompt)}`, '_blank', 'noopener');
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
        const scorm =
            $exeDevicesEdition?.iDevice?.gamification?.scorm?.getValues?.() || {};
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
            evaluationID: this.valueById('fwc1-evaluation-id').trim(),
            isScorm: scorm.isScorm || 0,
            textButtonScorm: scorm.textButtonScorm || '',
            repeatActivity:
                typeof scorm.repeatActivity === 'boolean'
                    ? scorm.repeatActivity
                    : true,
            weighted: scorm.weighted || 100,
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
        if (normalized.evaluation && normalized.evaluationID.trim().length < 5) {
            return this.t('The report identifier must have at least 5 characters.');
        }
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
        const speciesCount = this.valueById('fwc1-ai-species-count') || '5';
        const locale = this.valueById('fwc1-ai-locale');
        const difficulty = this.valueById('fwc1-ai-difficulty');
        const includeDecomposer = this.checkedById('fwc1-ai-include-decomposer');
        const includeInvasive = this.checkedById('fwc1-ai-include-invasive');
        const includeQuestions = this.checkedById('fwc1-ai-include-questions');
        const schema = `{
  "title": "string",
  "subtitle": "string",
  "instructions": "<p>HTML breve</p>",
  "ecosystemContext": {
    "name": "${ecosystem}",
    "biome": "string",
    "level": "${level}",
    "course": "${course}",
    "locale": "${locale}",
    "notes": "string"
  },
  "displayOptions": {
    "showLegend": true,
    "showSpeciesCards": true,
    "showArrows": true,
    "showRelationLabels": false,
    "randomizeQuestions": false,
    "allowRevealAnswers": true,
    "layout": "levels"
  },
  "species": [
    {
      "id": "sp-id",
      "name": "string",
      "role": "producer | primary-consumer | secondary-consumer | tertiary-consumer | omnivore | decomposer",
      "group": "string",
      "description": "string",
      "image": "",
      "traits": ["string"],
      "importance": "string"
    }
  ],
  "relations": [
    {
      "id": "rel-1",
      "from": "sp-consumidor",
      "to": "sp-recurso",
      "type": "eats | decomposes | competes | parasite-of",
      "strength": "low | medium | high",
      "note": "string"
    }
  ],
  "questions": [
    {
      "id": "q-1",
      "type": "multiple-choice | multi-select | true-false | match-role | predict-effect",
      "prompt": "string",
      "options": ["opcion 1", "opcion 2"],
      "correctAnswers": [0],
      "explanation": "string"
    }
  ],
  "scenarios": [
    {
      "id": "sc-1",
      "title": "string",
      "changeType": "species-disappearance | population-increase | invasive-arrival | pollution | drought | producer-loss",
      "targetSpeciesId": "sp-id",
      "prompt": "string",
      "expectedEffects": ["string"]
    }
  ],
  "evaluation": false,
  "evaluationID": ""
}`;
        return `Actúa como docente experto en ecología escolar.
Genera una red trófica para eXeLearning en JSON válido.

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
- usa exactamente esta estructura JSON:

${schema}

Reglas adicionales:
- no añadas campos fuera del esquema
- usa ids estables y únicos
- en relations.from va el consumidor y en relations.to el recurso o presa
- si una pregunta es true-false, usa options ["Verdadero", "Falso"] y correctAnswers con el índice correcto
- devuelve solo JSON válido, sin markdown, sin comentarios y sin texto antes o después del JSON`;
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

    applyDefaultAiPreference: function () {
        const assistant = this.ideviceBody.querySelector('#fwc1-ai-assistant');
        const defaultAI =
            window.eXeLearning?.app?.user?.preferences?.preferences?.defaultAI?.value;
        if (!assistant || !defaultAI) return;
        if ([...assistant.options].some((option) => option.value === defaultAI)) {
            assistant.value = defaultAI;
        }
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
