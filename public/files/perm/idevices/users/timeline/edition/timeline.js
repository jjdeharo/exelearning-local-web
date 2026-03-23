var $exeDevice = {
    i18n: {
        es: {
            name: 'Linea temporal',
            description: 'Crea una linea temporal interactiva con medios por evento y puntuacion SCORM.',
            title: 'Titulo',
            intro: 'Introduccion',
            mode: 'Modo',
            modeOrder: 'Ordenar',
            modeExplore: 'Explorar',
            showDates: 'Mostrar fechas visibles',
            shuffle: 'Barajar eventos al empezar',
            help: 'La clave de orden puede ser un numero o una fecha ISO (AAAA-MM-DD).',
            addEvent: 'Anadir evento',
            clearEvents: 'Vaciar linea',
            noEvents: 'Todavia no hay eventos. Anade el primero.',
            event: 'Evento',
            events: 'Eventos',
            up: 'Subir',
            down: 'Bajar',
            duplicate: 'Duplicar',
            del: 'Eliminar',
            displayDate: 'Fecha visible',
            sortKey: 'Clave de orden',
            eventTitle: 'Titulo del evento',
            text: 'Descripcion',
            feedback: 'Retroalimentacion',
            mediaType: 'Tipo de medio',
            mediaNone: 'Sin medio',
            mediaImage: 'Imagen',
            mediaAudio: 'Audio',
            mediaVideo: 'Video',
            mediaSrc: 'Archivo o URL',
            caption: 'Pie o credito',
            videoSource: 'Origen del video',
            videoLocal: 'Archivo subido',
            videoExternal: 'Video externo',
            videoUrl: 'URL externa',
            poster: 'Imagen poster opcional',
            aiTitle: 'Generador por IA',
            aiInfo: 'Genera el contenido fuera de eXe, pega aqui el resultado e importalo.',
            importExportTitle: 'Importar/Exportar',
            importInfo: 'Puedes importar una linea temporal completa en JSON o una lista de eventos en texto plano.',
            importFile: 'Importar contenido',
            choose: 'Elegir',
            noFile: 'Ningun archivo seleccionado',
            supportedFormats: 'Formatos admitidos: json, txt',
            exportActivities: 'Exportar contenido',
            subject: 'Materia',
            course: 'Curso',
            count: 'Numero de eventos',
            topic: 'Tema',
            prompt: 'Prompt para generar eventos',
            copyPrompt: 'Copiar prompt',
            sendAI: 'Enviar a la IA',
            generated: 'Eventos generados o pegados',
            importText: 'Importar texto',
            formatHelp: 'Admite JSON completo del iDevice. Como alternativa, formato por linea: fechaVisible#claveOrden#titulo#descripcion#feedback#tipoMedio#valorMedio#pie',
            aiNoPrompt: 'No hay ningun prompt para copiar.',
            aiNoAssistant: 'Selecciona un asistente de IA.',
            aiNoText: 'Introduce al menos un evento.',
            aiBadFormat: 'No se han podido importar los eventos. El formato no es valido.',
            aiJsonInfo: 'La IA debe devolver exclusivamente JSON valido del iDevice timeline.',
            aiNoQuery: 'No hay ninguna consulta para enviar al asistente.',
            importSuccess: 'La linea temporal se ha importado correctamente.',
            invalidFile: 'Selecciona un archivo valido (.json o .txt).',
            scormTitle: 'SCORM',
            scormEnable: 'Guardar puntuacion SCORM',
            scormButton: 'Texto del boton',
            scormRepeat: 'Permitir repetir y volver a guardar',
            scormWeight: 'Peso',
            evaluation: 'Informe de progreso',
            evaluationId: 'Identificador',
            invalidTitle: 'Debes indicar un titulo para la linea temporal.',
            invalidEvents: 'Necesitas al menos dos eventos completos para guardar este iDevice.',
            invalidEvent: 'Cada evento debe tener al menos titulo, fecha visible y clave de orden.',
            invalidEvaluationID: 'El identificador del informe debe tener al menos 5 caracteres.',
            clearConfirm: 'Se borraran el titulo, la introduccion y todos los eventos. ¿Quieres continuar?',
            sampleTitle: 'Linea temporal',
            sampleIntro: 'Ordena o explora los hitos principales de este proceso.',
            sample1Date: '1789',
            sample1Title: 'Inicio del proceso',
            sample1Text: 'Se produce el primer gran hito de la secuencia.',
            sample2Date: '1791',
            sample2Title: 'Cambio relevante',
            sample2Text: 'Aparece un segundo momento que modifica el contexto.',
            sample3Date: '1799',
            sample3Title: 'Cierre de etapa',
            sample3Text: 'La etapa concluye con un hecho decisivo.',
            prompt1: 'Actua como un docente con experiencia y genera una linea temporal rigurosa.',
            prompt2: 'Devuelve exclusivamente un unico JSON valido escrito en una caja de texto plano, sin comentarios, sin markdown, sin formato enriquecido y sin texto antes o despues del JSON.',
            prompt3: 'Usa exactamente esta estructura:\n{\n  "title": "...",\n  "intro": "...",\n  "mode": "order",\n  "showDates": true,\n  "shuffleEvents": true,\n  "events": [\n    {\n      "displayDate": "...",\n      "sortKey": "...",\n      "title": "...",\n      "text": "...",\n      "feedback": "...",\n      "mediaType": "none|image|audio|video",\n      "mediaSrc": "",\n      "videoSource": "local|external",\n      "videoUrl": "",\n      "posterSrc": "",\n      "mediaCaption": ""\n    }\n  ]\n}',
            prompt4: 'Reglas obligatorias: escapa las comillas internas dentro de los textos; no uses enlaces en formato markdown [texto](url); si incluyes un video externo, pon solo la URL limpia en videoUrl; si no hay medio, usa mediaType="none" y deja vacios mediaSrc, videoUrl y posterSrc.',
            prompt5: 'No uses bloques ```json```, no uses listas, no uses encabezados ni texto explicativo. Responde solo con el objeto JSON copiable dentro de una caja de texto plano.',
            saveScoreText: 'Guardar puntuacion',
        },
        en: {
            name: 'Timeline',
            description: 'Create an interactive timeline with media per event and SCORM scoring.',
            title: 'Title',
            intro: 'Introduction',
            mode: 'Mode',
            modeOrder: 'Order',
            modeExplore: 'Explore',
            showDates: 'Show visible dates',
            shuffle: 'Shuffle events at the start',
            help: 'The sort key can be a number or an ISO date (YYYY-MM-DD).',
            addEvent: 'Add event',
            clearEvents: 'Clear timeline',
            noEvents: 'There are no events yet. Add the first one.',
            event: 'Event',
            events: 'Events',
            up: 'Up',
            down: 'Down',
            duplicate: 'Duplicate',
            del: 'Delete',
            displayDate: 'Visible date',
            sortKey: 'Sort key',
            eventTitle: 'Event title',
            text: 'Description',
            feedback: 'Feedback',
            mediaType: 'Media type',
            mediaNone: 'No media',
            mediaImage: 'Image',
            mediaAudio: 'Audio',
            mediaVideo: 'Video',
            mediaSrc: 'File or URL',
            caption: 'Caption or credit',
            videoSource: 'Video source',
            videoLocal: 'Uploaded file',
            videoExternal: 'External video',
            videoUrl: 'External URL',
            poster: 'Optional poster image',
            aiTitle: 'AI Generator',
            aiInfo: 'Generate the content outside eXe, paste the result here and import it.',
            importExportTitle: 'Import/Export',
            importInfo: 'You can import a full timeline in JSON or a list of events in plain text.',
            importFile: 'Import content',
            choose: 'Choose',
            noFile: 'No file selected',
            supportedFormats: 'Supported formats: json, txt',
            exportActivities: 'Export content',
            subject: 'Subject',
            course: 'Course',
            count: 'Number of events',
            topic: 'Topic',
            prompt: 'Prompt to generate events',
            copyPrompt: 'Copy prompt',
            sendAI: 'Send to AI',
            generated: 'Generated or pasted events',
            importText: 'Import text',
            formatHelp: 'Accepts the full iDevice JSON. Alternatively, line format: visibleDate#sortKey#title#description#feedback#mediaType#mediaValue#caption',
            aiNoPrompt: 'There is no prompt to copy.',
            aiNoAssistant: 'Select an AI assistant.',
            aiNoText: 'Enter at least one event.',
            aiBadFormat: 'The events could not be imported. The format is not valid.',
            aiJsonInfo: 'The AI must return only valid JSON for the timeline iDevice.',
            aiNoQuery: 'There is no query to send to the assistant.',
            importSuccess: 'The timeline was imported successfully.',
            invalidFile: 'Select a valid file (.json or .txt).',
            scormTitle: 'SCORM',
            scormEnable: 'Save SCORM score',
            scormButton: 'Button text',
            scormRepeat: 'Allow repeating and saving again',
            scormWeight: 'Weight',
            evaluation: 'Progress report',
            evaluationId: 'Identifier',
            invalidTitle: 'You must provide a title for the timeline.',
            invalidEvents: 'You need at least two complete events to save this iDevice.',
            invalidEvent: 'Each event must have at least a title, a visible date and a sort key.',
            invalidEvaluationID: 'The report identifier must have at least 5 characters.',
            clearConfirm: 'The title, introduction and all events will be deleted. Do you want to continue?',
            sampleTitle: 'Timeline',
            sampleIntro: 'Order or explore the main milestones of this process.',
            sample1Date: '1789',
            sample1Title: 'Start of the process',
            sample1Text: 'The first major milestone in the sequence takes place.',
            sample2Date: '1791',
            sample2Title: 'Relevant change',
            sample2Text: 'A second moment appears and changes the context.',
            sample3Date: '1799',
            sample3Title: 'End of the stage',
            sample3Text: 'The stage ends with a decisive event.',
            prompt1: 'Act as an experienced teacher and generate a rigorous timeline.',
            prompt2: 'Return only a single valid JSON object written in a plain text box, with no comments, no markdown, no rich formatting and no text before or after the JSON.',
            prompt3: 'Use exactly this structure:\n{\n  "title": "...",\n  "intro": "...",\n  "mode": "order",\n  "showDates": true,\n  "shuffleEvents": true,\n  "events": [\n    {\n      "displayDate": "...",\n      "sortKey": "...",\n      "title": "...",\n      "text": "...",\n      "feedback": "...",\n      "mediaType": "none|image|audio|video",\n      "mediaSrc": "",\n      "videoSource": "local|external",\n      "videoUrl": "",\n      "posterSrc": "",\n      "mediaCaption": ""\n    }\n  ]\n}',
            prompt4: 'Mandatory rules: escape internal quotes inside texts; do not use markdown links [text](url); if you include an external video, put only the clean URL in videoUrl; if there is no media, use mediaType="none" and leave mediaSrc, videoUrl and posterSrc empty.',
            prompt5: 'Do not use ```json``` blocks, do not use lists, do not use headings or explanatory text. Reply only with the JSON object, ready to copy inside a plain text box.',
            saveScoreText: 'Save score',
        },
        ca: {
            name: 'Linia temporal',
            description: 'Crea una linia temporal interactiva amb mitjans per esdeveniment i puntuacio SCORM.',
            title: 'Titol',
            intro: 'Introduccio',
            mode: 'Mode',
            modeOrder: 'Ordena',
            modeExplore: 'Explora',
            showDates: 'Mostra les dates visibles',
            shuffle: 'Barreja els esdeveniments en començar',
            help: "La clau d'ordre pot ser un numero o una data ISO (AAAA-MM-DD).",
            addEvent: 'Afig esdeveniment',
            clearEvents: 'Buida la linia',
            noEvents: 'Encara no hi ha esdeveniments. Afig el primer.',
            event: 'Esdeveniment',
            events: 'Esdeveniments',
            up: 'Puja',
            down: 'Baixa',
            duplicate: 'Duplica',
            del: 'Elimina',
            displayDate: 'Data visible',
            sortKey: "Clau d'ordre",
            eventTitle: "Titol de l'esdeveniment",
            text: 'Descripcio',
            feedback: 'Retroalimentacio',
            mediaType: 'Tipus de mitja',
            mediaNone: 'Sense mitja',
            mediaImage: 'Imatge',
            mediaAudio: 'Audio',
            mediaVideo: 'Video',
            mediaSrc: 'Fitxer o URL',
            caption: 'Peu o credit',
            videoSource: 'Origen del video',
            videoLocal: 'Fitxer pujat',
            videoExternal: 'Video extern',
            videoUrl: 'URL externa',
            poster: 'Imatge poster opcional',
            aiTitle: "Generador per IA",
            aiInfo: "Genera el contingut fora d'eXe, apega aci el resultat i importa'l.",
            importExportTitle: 'Importa/Exporta',
            importInfo: 'Pots importar una linia temporal completa en JSON o una llista d’esdeveniments en text pla.',
            importFile: 'Importa contingut',
            choose: 'Tria',
            noFile: 'Cap fitxer seleccionat',
            supportedFormats: 'Formats admesos: json, txt',
            exportActivities: 'Exporta contingut',
            subject: 'Materia',
            course: 'Curs',
            count: "Nombre d'esdeveniments",
            topic: 'Tema',
            prompt: 'Prompt per a generar esdeveniments',
            copyPrompt: 'Copia el prompt',
            sendAI: 'Envia a la IA',
            generated: 'Esdeveniments generats o apegats',
            importText: 'Importa text',
            formatHelp: "Admet el JSON complet de l'iDevice. Com a alternativa, format per linia: dataVisible#clauOrdre#titol#descripcio#retroalimentacio#tipusMitja#valorMitja#peu",
            aiNoPrompt: 'No hi ha cap prompt per a copiar.',
            aiNoAssistant: 'Selecciona un assistent d’IA.',
            aiNoText: 'Introdueix almenys un esdeveniment.',
            aiBadFormat: 'No s’han pogut importar els esdeveniments. El format no es valid.',
            aiJsonInfo: "La IA ha de tornar exclusivament JSON valid de l'iDevice timeline.",
            aiNoQuery: 'No hi ha cap consulta per a enviar a l’assistent.',
            importSuccess: 'La linia temporal s’ha importat correctament.',
            invalidFile: 'Selecciona un fitxer valid (.json o .txt).',
            scormTitle: 'SCORM',
            scormEnable: 'Guarda la puntuacio SCORM',
            scormButton: 'Text del boto',
            scormRepeat: 'Permet repetir i tornar a guardar',
            scormWeight: 'Pes',
            evaluation: 'Informe de progres',
            evaluationId: 'Identificador',
            invalidTitle: 'Has d’indicar un titol per a la linia temporal.',
            invalidEvents: 'Necessites almenys dos esdeveniments complets per a guardar aquest iDevice.',
            invalidEvent: 'Cada esdeveniment ha de tindre almenys titol, data visible i clau d’ordre.',
            invalidEvaluationID: "L'identificador de l'informe ha de tindre almenys 5 caracters.",
            clearConfirm: 'S’esborraran el titol, la introduccio i tots els esdeveniments. Vols continuar?',
            sampleTitle: 'Linia temporal',
            sampleIntro: 'Ordena o explora les fites principals d’aquest proces.',
            sample1Date: '1789',
            sample1Title: 'Inici del proces',
            sample1Text: 'Es produix la primera gran fita de la sequencia.',
            sample2Date: '1791',
            sample2Title: 'Canvi rellevant',
            sample2Text: 'Apareix un segon moment que modifica el context.',
            sample3Date: '1799',
            sample3Title: 'Tancament de l’etapa',
            sample3Text: 'L’etapa conclou amb un fet decisiu.',
            prompt1: 'Actua com un docent amb experiencia i genera una linia temporal rigorosa.',
            prompt2: 'Torna exclusivament un unic objecte JSON valid escrit en una caixa de text pla, sense comentaris, sense markdown, sense format enriquit i sense text abans o despres del JSON.',
            prompt3: 'Usa exactament esta estructura:\n{\n  "title": "...",\n  "intro": "...",\n  "mode": "order",\n  "showDates": true,\n  "shuffleEvents": true,\n  "events": [\n    {\n      "displayDate": "...",\n      "sortKey": "...",\n      "title": "...",\n      "text": "...",\n      "feedback": "...",\n      "mediaType": "none|image|audio|video",\n      "mediaSrc": "",\n      "videoSource": "local|external",\n      "videoUrl": "",\n      "posterSrc": "",\n      "mediaCaption": ""\n    }\n  ]\n}',
            prompt4: 'Regles obligatories: escapa les cometes internes dins dels textos; no uses enllacos en format markdown [text](url); si inclous un video extern, posa nomes l’URL neta en videoUrl; si no hi ha mitja, usa mediaType="none" i deixa buits mediaSrc, videoUrl i posterSrc.',
            prompt5: 'No uses blocs ```json```, no uses llistes, no uses encapcalaments ni text explicatiu. Respon nomes amb l’objecte JSON, preparat per a copiar dins d’una caixa de text pla.',
            saveScoreText: 'Guardar puntuacio',
        },
    },

    lang: 'es',
    state: null,

    init: function (element, previousData) {
        this.ideviceBody = element;
        this.idevicePreviousData = previousData || {};
        this.lang = this.getLocale(this.idevicePreviousData);
        this.state = this.normalizeData(this.idevicePreviousData);
        this.createForm();
    },

    save: function () {
        this.syncRichTextEditors();
        var title = this.q('#timelineTitle').value.trim();
        if (!title) {
            eXe.app.alert(this.t('invalidTitle'));
            return false;
        }
        var collected = this.collectEvents();
        if (collected.error) {
            eXe.app.alert(collected.error);
            return false;
        }
        if (collected.items.length < 2) {
            eXe.app.alert(this.t('invalidEvents'));
            return false;
        }
        var evaluation = this.q('#timelineEvaluation').checked;
        var evaluationID = this.q('#timelineEvaluationID').value.trim();
        if (evaluation && evaluationID.length < 5) {
            eXe.app.alert(this.t('invalidEvaluationID'));
            return false;
        }
        var weighted = parseInt(this.q('#timelineWeighted').value, 10);
        weighted = Number.isNaN(weighted) ? 100 : Math.max(1, Math.min(weighted, 100));
        return {
            title: title,
            intro: this.q('#timelineIntro').value.trim(),
            mode: this.q('#timelineMode').value,
            showDates: this.q('#timelineShowDates').checked,
            shuffleEvents: this.q('#timelineShuffleEvents').checked,
            locale: this.lang,
            events: collected.items,
            isScorm: this.q('#timelineIsScorm').checked ? 1 : 0,
            textButtonScorm: this.q('#timelineScormButtonText').value.trim() || this.t('saveScoreText'),
            repeatActivity: this.q('#timelineRepeatActivity').checked,
            weighted: weighted,
            evaluation: evaluation,
            evaluationID: evaluationID,
            msgs: this.getScormMessages(),
        };
    },

    createForm: function () {
        this.ideviceBody.innerHTML = this.getFormHtml();
        $exeDevicesEdition.iDevice.tabs.init('timelineIdeviceForm');
        this.renderEvents();
        this.bindEvents();
        this.updateAIPrompt();
        this.loadDefaultAI();
        this.q('#timelineEvaluationID').disabled = !this.state.evaluation;
    },

    getFormHtml: function () {
        var odeId = window.eXeLearning?.app?.project?.odeId || '';
        return (
            '<div class="timeline-editor" id="timelineIdeviceForm">' +
            '<div class="exe-form-tab" title="' + this.t('name') + '">' +
            '<div class="idevice-description"><p>' + this.t('description') + '</p></div>' +
            '<fieldset class="exe-fieldset"><legend><a href="#">' + this.t('name') + '</a></legend>' +
            '<div class="timeline-editor-grid">' +
            this.input('timelineTitle', this.t('title'), this.state.title) +
            this.select('timelineMode', this.t('mode'), [
                ['order', this.t('modeOrder')],
                ['explore', this.t('modeExplore')],
            ], this.state.mode) +
            '</div>' +
            this.textarea('timelineIntro', this.t('intro'), this.state.intro) +
            '<div class="timeline-toggle-row">' +
            this.checkbox('timelineShowDates', this.t('showDates'), this.state.showDates) +
            this.checkbox('timelineShuffleEvents', this.t('shuffle'), this.state.shuffleEvents) +
            '</div>' +
            '<p class="timeline-help">' + this.t('help') + '</p>' +
            '</fieldset>' +
            '<fieldset class="exe-fieldset"><legend><a href="#">' + this.t('events') + '</a></legend>' +
            '<div class="timeline-events" id="timelineEvents"></div>' +
            '<div class="timeline-event-toolbar"><button type="button" class="timeline-add-event" id="timelineAddEvent">' + this.t('addEvent') + '</button><button type="button" class="timeline-clear-events" id="timelineClearEvents">' + this.t('clearEvents') + '</button></div>' +
            '</fieldset>' +
            '</div>' +
            '<div class="exe-form-tab" title="' + this.t('importExportTitle') + '">' +
            '<section class="timeline-box"><h3>' + this.t('importExportTitle') + '</h3><p class="timeline-help">' + this.t('importInfo') + '</p>' +
            '<div class="mb-3" data-timeline-upload>' +
            '<label for="timelineImportFile" class="form-label mb-1">' + this.t('importFile') + ':</label>' +
            '<input type="file" id="timelineImportFile" accept=".json,.txt" class="exe-file-input" />' +
            '<button type="button" class="btn btn-primary exe-file-btn" data-timeline-file-trigger>' + this.t('choose') + '</button> ' +
            '<span data-timeline-file-name>' + this.t('noFile') + '</span>' +
            '<span class="d-block mt-1">' + this.t('supportedFormats') + '</span>' +
            '</div>' +
            '<p><input type="button" class="btn btn-primary" id="timelineExportContent" value="' + this.t('exportActivities') + '" /></p>' +
            '</section>' +
            '</div>' +
            '<div class="exe-form-tab" title="' + this.t('aiTitle') + '">' +
            '<section class="timeline-box"><h3>' + this.t('aiTitle') + '</h3><p class="timeline-help">' + this.t('aiInfo') + '</p><p class="timeline-help">' + this.t('aiJsonInfo') + '</p>' +
            '<div id="timelineAIContainer" class="timeline-ai-grid">' +
            this.input('timelineAISubject', this.t('subject'), '') +
            this.input('timelineAICourse', this.t('course'), '') +
            '<div class="timeline-field"><label for="timelineAICount">' + this.t('count') + '</label><input type="number" id="timelineAICount" min="2" max="30" value="6"></div>' +
            this.input('timelineAITopic', this.t('topic'), '') +
            '</div>' +
            this.textarea('timelineAIPrompt', this.t('prompt'), '') +
            '<div class="timeline-ai-actions">' +
            '<button type="button" id="timelineAICopyPrompt" class="btn btn-primary">' + this.t('copyPrompt') + '</button>' +
            '<select id="timelineAISelect" class="form-select form-select-sm w-auto"><option value="https://chatgpt.com/?q=">ChatGPT</option><option value="https://claude.ai/new?q=">Claude</option><option value="https://gemini.google.com/app?q=">Gemini</option></select>' +
            '<button type="button" id="timelineAISend" class="btn btn-primary">' + this.t('sendAI') + '</button>' +
            '</div>' +
            this.textarea('timelineAIText', this.t('generated'), '') +
            '<p class="timeline-help">' + this.t('formatHelp') + '</p><button type="button" id="timelineAIImportText" class="btn btn-primary">' + this.t('importText') + '</button></section>' +
            '</div>' +
            '<div class="exe-form-tab" title="' + this.t('scormTitle') + '">' +
            '<section class="timeline-box"><h3>' + this.t('scormTitle') + '</h3><div class="timeline-toggle-row">' +
            this.checkbox('timelineIsScorm', this.t('scormEnable'), this.state.isScorm > 0) +
            this.checkbox('timelineRepeatActivity', this.t('scormRepeat'), this.state.repeatActivity) +
            this.checkbox('timelineEvaluation', this.t('evaluation'), this.state.evaluation) +
            '</div><div class="timeline-editor-grid">' +
            this.input('timelineScormButtonText', this.t('scormButton'), this.state.textButtonScorm) +
            '<div class="timeline-field"><label for="timelineWeighted">' + this.t('scormWeight') + '</label><input type="number" id="timelineWeighted" min="1" max="100" value="' + this.escape(this.state.weighted) + '"></div>' +
            this.input('timelineEvaluationID', this.t('evaluationId'), this.state.evaluationID || odeId) +
            '</div></section>' +
            '</div>' +
            '</div>'
        );
    },

    bindEvents: function () {
        var self = this;
        this.q('#timelineAddEvent').addEventListener('click', function () {
            self.syncRichTextEditors();
            self.state.events.push(self.emptyEvent());
            self.renderEvents();
        });
        this.q('#timelineClearEvents').addEventListener('click', function () {
            if (!window.confirm(self.t('clearConfirm'))) return;
            self.syncRichTextEditors();
            self.state.events = [self.emptyEvent()];
            self.q('#timelineTitle').value = '';
            self.q('#timelineIntro').value = '';
            self.renderEvents();
        });
        this.q('#timelineEvaluation').addEventListener('change', function () {
            self.q('#timelineEvaluationID').disabled = !this.checked;
        });
        this.addImportExportEvents();
        this.q('#timelineEvents').addEventListener('click', function (event) {
            var btn = event.target.closest('button[data-action]');
            if (!btn) return;
            self.syncRichTextEditors();
            var index = parseInt(btn.getAttribute('data-index'), 10);
            var action = btn.getAttribute('data-action');
            if (action === 'delete') self.state.events.splice(index, 1);
            if (action === 'duplicate' && self.state.events[index]) {
                var copy = Object.assign({}, self.state.events[index], { id: self.id() });
                self.state.events.splice(index + 1, 0, copy);
            }
            if (action === 'up' && index > 0) self.swap(index, index - 1);
            if (action === 'down' && index < self.state.events.length - 1) self.swap(index, index + 1);
            self.renderEvents();
        });
        this.q('#timelineEvents').addEventListener('input', function (event) {
            var target = event.target;
            var index = parseInt(target.getAttribute('data-index'), 10);
            var field = target.getAttribute('data-field');
            if (Number.isNaN(index) || !field || !self.state.events[index]) return;
            self.state.events[index][field] = target.value;
            if (field === 'title' || field === 'displayDate') self.updateSummary(index);
        });
        this.q('#timelineEvents').addEventListener('change', function (event) {
            var target = event.target;
            var index = parseInt(target.getAttribute('data-index'), 10);
            var field = target.getAttribute('data-field');
            if (Number.isNaN(index) || !field || !self.state.events[index]) return;
            self.state.events[index][field] = target.value;
            if (field === 'mediaType' || field === 'videoSource') self.renderEvents();
        });
        ['timelineAISubject', 'timelineAICourse', 'timelineAICount', 'timelineAITopic'].forEach(function (id) {
            self.q('#' + id).addEventListener('input', function () {
                self.updateAIPrompt();
            });
        });
        this.q('#timelineAICopyPrompt').addEventListener('click', async function () {
            var value = self.q('#timelineAIPrompt').value.trim();
            if (!value) return eXe.app.alert(self.t('aiNoPrompt'));
            try { await navigator.clipboard.writeText(value); } catch (error) {}
        });
        this.q('#timelineAISend').addEventListener('click', function () {
            var value = self.q('#timelineAIPrompt').value.trim();
            if (!value) return eXe.app.alert(self.t('aiNoQuery'));
            var baseUrl = self.q('#timelineAISelect').value;
            if (!baseUrl) return eXe.app.alert(self.t('aiNoAssistant'));
            window.open(baseUrl + encodeURIComponent(value), '_blank');
        });
        this.q('#timelineAIImportText').addEventListener('click', function () {
            if (!self.q('#timelineAIText').value.trim()) return eXe.app.alert(self.t('aiNoText'));
            if (self.importEventsFromText(self.q('#timelineAIText').value)) {
                eXe.app.alert(self.t('importSuccess'));
            } else {
                eXe.app.alert(self.t('aiBadFormat'));
            }
        });
    },

    addImportExportEvents: function () {
        var self = this;
        var fileInput = this.q('#timelineImportFile');
        var fileName = this.ideviceBody.querySelector('[data-timeline-file-name]');
        var trigger = this.ideviceBody.querySelector('[data-timeline-file-trigger]');
        var exportButton = this.q('#timelineExportContent');
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            if (fileInput) fileInput.disabled = true;
            if (exportButton) exportButton.disabled = true;
            return;
        }
        trigger.addEventListener('click', function () {
            fileInput.click();
        });
        fileInput.addEventListener('change', function (event) {
            var file = event.target.files && event.target.files[0];
            fileName.textContent = file ? file.name : self.t('noFile');
            if (!file) return;
            var isJson = /\.json$/i.test(file.name) || (file.type && file.type.match('application/json'));
            var isText = /\.txt$/i.test(file.name) || !file.type || file.type.match('text/plain');
            if (!isJson && !isText) {
                eXe.app.alert(self.t('invalidFile'));
                return;
            }
            var reader = new FileReader();
            reader.onload = function (readerEvent) {
                self.importGame(readerEvent.target.result, isJson ? 'application/json' : 'text/plain');
            };
            reader.readAsText(file);
        });
        exportButton.addEventListener('click', function () {
            self.exportGame();
        });
    },

    updateAIPrompt: function () {
        var subject = this.q('#timelineAISubject').value.trim();
        var course = this.q('#timelineAICourse').value.trim();
        var count = Math.max(2, parseInt(this.q('#timelineAICount').value, 10) || 6);
        var topic = this.q('#timelineAITopic').value.trim();
        var lines = [this.t('prompt1')];
        if (subject) lines.push(this.t('subject') + ': ' + subject + '.');
        if (course) lines.push(this.t('course') + ': ' + course + '.');
        if (topic) lines.push(this.t('topic') + ': ' + topic + '.');
        lines.push('Numero de eventos: ' + count + '.');
        lines.push(this.t('prompt2'));
        lines.push(this.t('prompt3'));
        lines.push(this.t('prompt4'));
        lines.push(this.t('prompt5'));
        lines.push('Devuelve exactamente ' + count + ' eventos.');
        this.q('#timelineAIPrompt').value = lines.join('\n');
    },

    exportGame: function () {
        var data = this.save();
        if (!data) return;
        var payload = {
            type: 'timeline',
            version: 1,
            title: data.title,
            intro: data.intro,
            mode: data.mode,
            showDates: data.showDates,
            shuffleEvents: data.shuffleEvents,
            events: data.events,
        };
        var blob = new Blob([JSON.stringify(payload, null, 2)], {
            type: 'application/json',
        });
        var url = URL.createObjectURL(blob);
        var link = document.createElement('a');
        link.href = url;
        link.download = 'timeline.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    },

    importGame: function (content, fileType) {
        var imported = null;
        if (fileType && fileType.match('application/json')) {
            try {
                imported = JSON.parse(this.extractJsonText(content));
            } catch (error) {
                imported = null;
            }
            if (!imported) {
                eXe.app.alert(this.t('aiBadFormat'));
                return;
            }
            if (Array.isArray(imported.events) || Array.isArray(imported)) {
                var items = Array.isArray(imported) ? imported : imported.events;
                this.state.events = this.normalizeEvents(items).filter(function (item) {
                    return item.title && item.displayDate && item.sortKey;
                });
                if (typeof imported.title === 'string') this.q('#timelineTitle').value = imported.title;
                if (typeof imported.intro === 'string') this.q('#timelineIntro').value = imported.intro;
                if (imported.mode === 'order' || imported.mode === 'explore') this.q('#timelineMode').value = imported.mode;
                if (typeof imported.showDates === 'boolean') this.q('#timelineShowDates').checked = imported.showDates;
                if (typeof imported.shuffleEvents === 'boolean') this.q('#timelineShuffleEvents').checked = imported.shuffleEvents;
                this.renderEvents();
                eXe.app.alert(this.t('importSuccess'));
                return;
            }
            eXe.app.alert(this.t('aiBadFormat'));
            return;
        }
        if (!this.importEventsFromText(content)) {
            eXe.app.alert(this.t('aiBadFormat'));
            return;
        }
        eXe.app.alert(this.t('importSuccess'));
    },

    importEventsFromText: function (raw) {
        var events = this.parseAIText(raw);
        if (!events.length) return false;
        this.state.events = events;
        this.renderEvents();
        return true;
    },

    parseAIText: function (raw) {
        var self = this;
        var text = String(raw || '').trim();
        if (!text) return [];
        var jsonText = this.extractJsonText(text);
        if (jsonText) {
            try {
                var parsed = JSON.parse(jsonText);
                var items = Array.isArray(parsed) ? parsed : parsed.events;
                if (Array.isArray(items)) return this.normalizeEvents(items).filter(function (item) {
                    return item.title && item.displayDate && item.sortKey;
                });
            } catch (error) {}
        }
        var result = [];
        text.split(/\r?\n/).forEach(function (line) {
            var parts = line.trim().split('#');
            if (parts.length < 4) return;
            var eventData = self.emptyEvent();
            eventData.displayDate = (parts[0] || '').trim();
            eventData.sortKey = (parts[1] || '').trim();
            eventData.title = (parts[2] || '').trim();
            eventData.text = (parts[3] || '').trim();
            eventData.feedback = (parts[4] || '').trim();
            eventData.mediaCaption = (parts[7] || '').trim();
            var mediaType = (parts[5] || 'none').trim().toLowerCase();
            var mediaValue = (parts[6] || '').trim();
            if (mediaType === 'image' || mediaType === 'audio') {
                eventData.mediaType = mediaType;
                eventData.mediaSrc = mediaValue;
            } else if (mediaType === 'video-external') {
                eventData.mediaType = 'video';
                eventData.videoSource = 'external';
                eventData.videoUrl = mediaValue;
            } else if (mediaType === 'video-local' || mediaType === 'video') {
                eventData.mediaType = 'video';
                eventData.videoSource = mediaType === 'video' && /^https?:\/\//i.test(mediaValue) ? 'external' : 'local';
                if (eventData.videoSource === 'external') eventData.videoUrl = mediaValue;
                else eventData.mediaSrc = mediaValue;
            }
            if (eventData.title && eventData.displayDate && eventData.sortKey) result.push(eventData);
        });
        return result;
    },

    extractJsonText: function (raw) {
        var text = String(raw || '').trim();
        if (!text) return '';
        text = text.replace(/```json\s*/gi, '```').replace(/```/g, '').trim();
        var firstObject = text.indexOf('{');
        var firstArray = text.indexOf('[');
        var start = -1;
        if (firstObject === -1) start = firstArray;
        else if (firstArray === -1) start = firstObject;
        else start = Math.min(firstObject, firstArray);
        if (start === -1) return '';
        var opening = text[start];
        var closing = opening === '{' ? '}' : ']';
        var depth = 0;
        var inString = false;
        var escaped = false;
        for (var i = start; i < text.length; i++) {
            var char = text[i];
            if (inString) {
                if (escaped) escaped = false;
                else if (char === '\\') escaped = true;
                else if (char === '"') inString = false;
                continue;
            }
            if (char === '"') {
                inString = true;
                continue;
            }
            if (char === opening) depth++;
            if (char === closing) {
                depth--;
                if (depth === 0) return text.slice(start, i + 1).trim();
            }
        }
        return text;
    },

    renderEvents: function () {
        var root = this.q('#timelineEvents');
        this.removeRichTextEditors();
        if (!this.state.events.length) {
            root.innerHTML = '<p class="timeline-empty">' + this.t('noEvents') + '</p>';
            return;
        }
        var html = '';
        for (var i = 0; i < this.state.events.length; i++) html += this.eventCard(this.state.events[i], i);
        root.innerHTML = html;
        this.initRichTextEditors();
    },

    updateSummary: function (index) {
        var card = this.ideviceBody.querySelector('.timeline-event-card[data-index="' + index + '"]');
        if (!card) return;
        card.querySelector('.timeline-event-summary strong').textContent = this.state.events[index].title || this.t('event') + ' ' + (index + 1);
        card.querySelector('.timeline-event-summary span').textContent = this.state.events[index].displayDate || this.state.events[index].sortKey || '';
    },

    eventCard: function (item, index) {
        var isVideo = item.mediaType === 'video';
        var isExternal = isVideo && item.videoSource === 'external';
        var sourceField = isExternal ? 'videoUrl' : 'mediaSrc';
        var sourceLabel = isExternal ? this.t('videoUrl') : (isVideo ? this.t('mediaSrc') : this.t('mediaSrc'));
        return (
            '<section class="timeline-event-card" data-index="' + index + '"><div class="timeline-event-header"><div class="timeline-event-summary"><strong>' + this.escape(item.title || (this.t('event') + ' ' + (index + 1))) + '</strong><span>' + this.escape(item.displayDate || item.sortKey || '') + '</span></div><div class="timeline-event-actions"><button type="button" data-action="up" data-index="' + index + '">' + this.t('up') + '</button><button type="button" data-action="down" data-index="' + index + '">' + this.t('down') + '</button><button type="button" data-action="duplicate" data-index="' + index + '">' + this.t('duplicate') + '</button><button type="button" data-action="delete" data-index="' + index + '">' + this.t('del') + '</button></div></div>' +
            '<div class="timeline-event-body"><div class="timeline-event-grid">' +
            this.eventInput(index, 'displayDate', this.t('displayDate'), item.displayDate, '') +
            this.eventInput(index, 'sortKey', this.t('sortKey'), item.sortKey, '') +
            '</div>' + this.eventInput(index, 'title', this.t('eventTitle'), item.title, '') +
            this.eventRichTextarea(index, 'text', this.t('text'), item.text) +
            this.eventRichTextarea(index, 'feedback', this.t('feedback'), item.feedback) +
            '<div class="timeline-media-settings">' +
            this.eventSelect(index, 'mediaType', this.t('mediaType'), [['none', this.t('mediaNone')], ['image', this.t('mediaImage')], ['audio', this.t('mediaAudio')], ['video', this.t('mediaVideo')]], item.mediaType) +
            (isVideo ? this.eventSelect(index, 'videoSource', this.t('videoSource'), [['local', this.t('videoLocal')], ['external', this.t('videoExternal')]], item.videoSource) : '') +
            this.eventInput(index, sourceField, sourceLabel, item[sourceField], isExternal ? '' : 'exe-file-picker') +
            (isVideo ? this.eventInput(index, 'posterSrc', this.t('poster'), item.posterSrc, 'exe-file-picker') : '') +
            this.eventInput(index, 'mediaCaption', this.t('caption'), item.mediaCaption, '') +
            '</div></div></section>'
        );
    },

    collectEvents: function () {
        var items = [];
        for (var i = 0; i < this.state.events.length; i++) {
            var item = this.state.events[i];
            if (this.empty(item)) continue;
            if (!item.title.trim() || !item.displayDate.trim() || !item.sortKey.trim()) return { error: this.t('invalidEvent') };
            items.push({
                id: item.id || this.id(),
                displayDate: item.displayDate.trim(),
                sortKey: item.sortKey.trim(),
                title: item.title.trim(),
                text: item.text.trim(),
                feedback: item.feedback.trim(),
                mediaType: item.mediaType || 'none',
                mediaSrc: (item.mediaSrc || '').trim(),
                videoSource: item.videoSource || 'local',
                videoUrl: (item.videoUrl || '').trim(),
                posterSrc: (item.posterSrc || '').trim(),
                mediaCaption: (item.mediaCaption || '').trim(),
            });
        }
        return { items: items };
    },

    normalizeData: function (data) {
        return {
            title: typeof data.title === 'string' && data.title ? data.title : this.t('sampleTitle'),
            intro: typeof data.intro === 'string' && data.intro ? data.intro : this.t('sampleIntro'),
            mode: data.mode === 'explore' ? 'explore' : 'order',
            showDates: typeof data.showDates === 'boolean' ? data.showDates : true,
            shuffleEvents: typeof data.shuffleEvents === 'boolean' ? data.shuffleEvents : true,
            isScorm: data.isScorm || 0,
            textButtonScorm: typeof data.textButtonScorm === 'string' && data.textButtonScorm ? data.textButtonScorm : this.t('saveScoreText'),
            repeatActivity: typeof data.repeatActivity === 'boolean' ? data.repeatActivity : true,
            weighted: data.weighted || 100,
            evaluation: !!data.evaluation,
            evaluationID: typeof data.evaluationID === 'string' ? data.evaluationID : '',
            events: Array.isArray(data.events) && data.events.length ? this.normalizeEvents(data.events) : this.samples(),
        };
    },

    normalizeEvents: function (events) {
        var self = this;
        return events.map(function (item) {
            return {
                id: item.id || self.id(),
                displayDate: item.displayDate || '',
                sortKey: item.sortKey || '',
                title: item.title || '',
                text: item.text || '',
                feedback: item.feedback || '',
                mediaType: item.mediaType || 'none',
                mediaSrc: item.mediaSrc || '',
                videoSource: item.videoSource === 'external' ? 'external' : 'local',
                videoUrl: item.videoUrl || '',
                posterSrc: item.posterSrc || '',
                mediaCaption: item.mediaCaption || '',
            };
        });
    },

    samples: function () {
        return [
            { id: this.id(), displayDate: this.t('sample1Date'), sortKey: this.t('sample1Date'), title: this.t('sample1Title'), text: this.t('sample1Text'), feedback: '', mediaType: 'none', mediaSrc: '', videoSource: 'local', videoUrl: '', posterSrc: '', mediaCaption: '' },
            { id: this.id(), displayDate: this.t('sample2Date'), sortKey: this.t('sample2Date'), title: this.t('sample2Title'), text: this.t('sample2Text'), feedback: '', mediaType: 'none', mediaSrc: '', videoSource: 'local', videoUrl: '', posterSrc: '', mediaCaption: '' },
            { id: this.id(), displayDate: this.t('sample3Date'), sortKey: this.t('sample3Date'), title: this.t('sample3Title'), text: this.t('sample3Text'), feedback: '', mediaType: 'none', mediaSrc: '', videoSource: 'local', videoUrl: '', posterSrc: '', mediaCaption: '' },
        ];
    },

    emptyEvent: function () {
        return { id: this.id(), displayDate: '', sortKey: '', title: '', text: '', feedback: '', mediaType: 'none', mediaSrc: '', videoSource: 'local', videoUrl: '', posterSrc: '', mediaCaption: '' };
    },

    getScormMessages: function () {
        return {
            msgScoreScorm: c_("The score can't be saved because this page is not part of a SCORM package."),
            msgYouScore: c_('Your score'),
            msgScore: c_('Score'),
            msgWeight: c_('Weight'),
            msgYouLastScore: c_('The last score saved is'),
            msgOnlySaveScore: c_('You can only save the score once!'),
            msgOnlySave: c_('You can only save once'),
            msgOnlySaveAuto: c_('Your score will be saved after each question. You can only play once.'),
            msgSaveAuto: c_('Your score will be automatically saved after each question.'),
            msgSeveralScore: c_('You can save the score as many times as you want'),
            msgPlaySeveralTimes: c_('You can do this activity as many times as you want'),
            msgActityComply: c_('You have already done this activity.'),
            msgUncompletedActivity: c_('Incomplete activity'),
            msgSuccessfulActivity: c_('Activity: Passed. Score: %s'),
            msgUnsuccessfulActivity: c_('Activity: Not passed. Score: %s'),
            msgTypeGame: this.t('name'),
            msgEndGameScore: c_('Please start the game before saving your score.'),
        };
    },

    loadDefaultAI: function () {
        var defaultAI = window.eXeLearning?.app?.user?.preferences?.preferences?.defaultAI?.value;
        var select = this.q('#timelineAISelect');
        if (defaultAI && [].slice.call(select.options).some(function (option) { return option.value === defaultAI; })) {
            select.value = defaultAI;
        }
    },

    getLocale: function (data) {
        var locale = data?.locale || window.eXeLearning?.config?.locale || top?.eXeLearning?.config?.locale || document.documentElement.lang || navigator.language || 'es';
        locale = String(locale).toLowerCase();
        if (locale.indexOf('ca') === 0 || locale.indexOf('val') === 0) return 'ca';
        if (locale.indexOf('en') === 0) return 'en';
        return 'es';
    },

    t: function (key) {
        return (this.i18n[this.lang] || this.i18n.es)[key] || this.i18n.es[key] || key;
    },

    q: function (selector) { return this.ideviceBody.querySelector(selector); },
    id: function () { return 'timeline-' + Math.random().toString(36).slice(2, 10); },
    swap: function (a, b) { var tmp = this.state.events[a]; this.state.events[a] = this.state.events[b]; this.state.events[b] = tmp; },
    empty: function (item) { return !(item.displayDate || item.sortKey || item.title || item.text || item.feedback || item.mediaSrc || item.videoUrl || item.posterSrc || item.mediaCaption); },
    escape: function (value) { return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); },
    getEditorId: function (index, field) { return 'timelineEventEditor_' + field + '_' + index; },
    initRichTextEditors: function () {
        if (typeof $exeTinyMCE !== 'undefined' && this.ideviceBody.querySelector('.exe-html-editor')) {
            $exeTinyMCE.init('multiple-visible', '.exe-html-editor');
        }
    },
    removeRichTextEditors: function () {
        if (typeof tinyMCE === 'undefined') return;
        var self = this;
        this.state.events.forEach(function (item, index) {
            ['text', 'feedback'].forEach(function (field) {
                var editor = tinyMCE.get(self.getEditorId(index, field));
                if (editor) editor.remove();
            });
        });
    },
    syncRichTextEditors: function () {
        if (typeof tinyMCE === 'undefined') return;
        var self = this;
        this.state.events.forEach(function (item, index) {
            ['text', 'feedback'].forEach(function (field) {
                var editor = tinyMCE.get(self.getEditorId(index, field));
                if (editor && self.state.events[index]) self.state.events[index][field] = editor.getContent();
            });
        });
    },

    input: function (id, label, value) { return '<div class="timeline-field"><label for="' + id + '">' + label + '</label><input type="text" id="' + id + '" value="' + this.escape(value) + '"></div>'; },
    textarea: function (id, label, value) { return '<div class="timeline-field"><label for="' + id + '">' + label + '</label><textarea id="' + id + '">' + this.escape(value) + '</textarea></div>'; },
    checkbox: function (id, label, checked) { return '<label for="' + id + '"><input type="checkbox" id="' + id + '"' + (checked ? ' checked' : '') + '> ' + label + '</label>'; },
    select: function (id, label, options, selected) {
        var html = '<div class="timeline-field"><label for="' + id + '">' + label + '</label><select id="' + id + '">';
        options.forEach(function (option) { html += '<option value="' + option[0] + '"' + (option[0] === selected ? ' selected' : '') + '>' + option[1] + '</option>'; });
        return html + '</select></div>';
    },
    eventInput: function (index, field, label, value, klass) { return '<div class="timeline-event-field"><label>' + label + '</label><input type="text" class="' + (klass || '') + '" data-index="' + index + '" data-field="' + field + '" value="' + this.escape(value) + '"></div>'; },
    eventTextarea: function (index, field, label, value) { return '<div class="timeline-event-field"><label>' + label + '</label><textarea data-index="' + index + '" data-field="' + field + '">' + this.escape(value) + '</textarea></div>'; },
    eventRichTextarea: function (index, field, label, value) {
        var id = this.getEditorId(index, field);
        return '<div class="timeline-event-field"><label for="' + id + '">' + label + '</label><textarea id="' + id + '" class="exe-html-editor timeline-rich-editor" data-index="' + index + '" data-field="' + field + '">' + this.escape(value) + '</textarea></div>';
    },
    eventSelect: function (index, field, label, options, selected) {
        var html = '<div class="timeline-event-field"><label>' + label + '</label><select data-index="' + index + '" data-field="' + field + '">';
        options.forEach(function (option) { html += '<option value="' + option[0] + '"' + (option[0] === selected ? ' selected' : '') + '>' + option[1] + '</option>'; });
        return html + '</select></div>';
    },
};
