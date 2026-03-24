var $exeDevice = {
    i18n: {
        es: {
            name: 'Escala de valoracion',
            description:
                'Instrumento ligero de valoracion ordinal. Se diferencia de una rubrica porque usa una sola escala comun para todos los indicadores.',
            title: 'Titulo',
            intro: 'Indicaciones',
            indicators: 'Indicadores',
            levels: 'Niveles',
            addIndicator: 'Anadir indicador',
            addLevel: 'Anadir nivel',
            indicator: 'Indicador',
            indicatorText: 'Texto del indicador',
            indicatorHelp: 'Ayuda o aclaracion',
            level: 'Nivel',
            levelLabel: 'Etiqueta del nivel',
            levelPoints: 'Puntuacion',
            duplicate: 'Duplicar',
            del: 'Eliminar',
            up: 'Subir',
            down: 'Bajar',
            commentOption: 'Permitir comentario final',
            commentLabel: 'Etiqueta del comentario',
            commentDefault: 'Comentario final',
            aiTitle: 'IA',
            aiInfo:
                'Genera una escala con IA fuera de eXe, pega el resultado aqui e importalo.',
            subject: 'Materia',
            course: 'Curso',
            topic: 'Describe con detalle lo que se evaluará',
            count: 'Numero de indicadores',
            levelsCount: 'Numero de niveles',
            prompt: 'Prompt para generar la escala',
            copyPrompt: 'Copiar prompt',
            sendAI: 'Enviar a la IA',
            generated: 'Escala generada o pegada',
            importText: 'Importar texto',
            formatHelp:
                'Admite el JSON completo del iDevice. Como alternativa, usa este formato: TITLE: ... / INTRO: ... / COMMENT: ... / LEVELS: Inicial=1 | En progreso=2 | Adecuado=3 / ITEM: Indicador # ayuda opcional',
            aiNoPrompt: 'No hay ningun prompt para copiar.',
            aiNoAssistant: 'Selecciona un asistente de IA.',
            aiNoText: 'Introduce una escala o al menos un indicador.',
            aiBadFormat:
                'No se ha podido importar la escala. El formato no es valido.',
            aiNoQuery: 'No hay ninguna consulta para enviar al asistente.',
            importSuccess: 'La escala se ha importado correctamente.',
            aiJsonInfo:
                'La IA debe devolver exclusivamente JSON valido del iDevice rating-scale o el formato de texto simplificado indicado.',
            prompt1:
                'Actua como un docente con experiencia y genera una escala de valoracion clara, breve y utilizable.',
            prompt2:
                'Devuelve exclusivamente un unico JSON valido escrito en una caja de texto plano, sin comentarios, sin markdown y sin texto antes o despues del JSON.',
            prompt3:
                'Usa exactamente esta estructura:\n{\n  "title": "...",\n  "intro": "...",\n  "allowComment": true,\n  "commentLabel": "Comentario final",\n  "levels": [\n    { "label": "...", "points": 1 }\n  ],\n  "items": [\n    { "text": "...", "help": "" }\n  ]\n}',
            prompt4:
                'Reglas obligatorias: crea una sola escala comun para todos los indicadores; no conviertas esto en una rubrica con descriptores diferentes por fila; usa entre 2 y 6 niveles; usa puntos enteros ascendentes; no uses el caracter # dentro de los textos.',
            prompt5: 'Devuelve exactamente {{count}} indicadores y {{levelsCount}} niveles.',
            scaleInfo:
                'Usa una escala comun para todos los indicadores. Si necesitas descriptores distintos en cada criterio, eso ya es una rubrica.',
            invalidTitle: 'Debes indicar un titulo para la escala.',
            invalidLevels: 'Necesitas al menos dos niveles con etiqueta y puntuacion.',
            invalidIndicators:
                'Necesitas al menos un indicador con texto para guardar este iDevice.',
            sampleTitle: 'Escala de valoracion de la tarea',
            sampleIntro:
                'Selecciona el nivel que mejor describe el desempeño en cada indicador.',
            sampleIndicator1: 'Comprende la informacion esencial de la actividad.',
            sampleIndicator2: 'Organiza el trabajo con claridad y orden.',
            sampleIndicator3: 'Usa el vocabulario especifico de la materia.',
            sampleIndicator4: 'Justifica sus decisiones con argumentos suficientes.',
            sampleLevel1: 'Inicial',
            sampleLevel2: 'En progreso',
            sampleLevel3: 'Adecuado',
            sampleLevel4: 'Excelente',
        },
        en: {
            name: 'Rating scale',
            description:
                'Lightweight ordinal assessment tool. Unlike a rubric, it uses one shared scale for all indicators.',
            title: 'Title',
            intro: 'Instructions',
            indicators: 'Indicators',
            levels: 'Levels',
            addIndicator: 'Add indicator',
            addLevel: 'Add level',
            indicator: 'Indicator',
            indicatorText: 'Indicator text',
            indicatorHelp: 'Help or clarification',
            level: 'Level',
            levelLabel: 'Level label',
            levelPoints: 'Score',
            duplicate: 'Duplicate',
            del: 'Delete',
            up: 'Up',
            down: 'Down',
            commentOption: 'Allow final comment',
            commentLabel: 'Comment label',
            commentDefault: 'Final comment',
            aiTitle: 'AI',
            aiInfo:
                'Generate a scale with AI outside eXe, paste the result here and import it.',
            subject: 'Subject',
            course: 'Course',
            topic: 'Describe in detail what will be assessed',
            count: 'Number of indicators',
            levelsCount: 'Number of levels',
            prompt: 'Prompt to generate the scale',
            copyPrompt: 'Copy prompt',
            sendAI: 'Send to AI',
            generated: 'Generated or pasted scale',
            importText: 'Import text',
            formatHelp:
                'Accepts the full iDevice JSON. Alternatively, use this format: TITLE: ... / INTRO: ... / COMMENT: ... / LEVELS: Emerging=1 | Developing=2 | Proficient=3 / ITEM: Indicator text # optional help',
            aiNoPrompt: 'There is no prompt to copy.',
            aiNoAssistant: 'Select an AI assistant.',
            aiNoText: 'Enter a scale or at least one indicator.',
            aiBadFormat: 'The scale could not be imported. The format is not valid.',
            aiNoQuery: 'There is no query to send to the assistant.',
            importSuccess: 'The scale was imported successfully.',
            aiJsonInfo:
                'The AI must return only valid JSON for the rating-scale iDevice or the indicated simplified text format.',
            prompt1:
                'Act as an experienced teacher and generate a clear, concise and usable rating scale.',
            prompt2:
                'Return only a single valid JSON object written in a plain text box, with no comments, no markdown and no text before or after the JSON.',
            prompt3:
                'Use exactly this structure:\n{\n  "title": "...",\n  "intro": "...",\n  "allowComment": true,\n  "commentLabel": "Final comment",\n  "levels": [\n    { "label": "...", "points": 1 }\n  ],\n  "items": [\n    { "text": "...", "help": "" }\n  ]\n}',
            prompt4:
                'Mandatory rules: create one shared scale for all indicators; do not turn this into a rubric with different descriptors per row; use between 2 and 6 levels; use ascending integer points; do not use the # character inside texts.',
            prompt5: 'Return exactly {{count}} indicators and {{levelsCount}} levels.',
            scaleInfo:
                'Use one shared scale for all indicators. If each criterion needs its own descriptors, that is already a rubric.',
            invalidTitle: 'You must provide a title for the scale.',
            invalidLevels: 'You need at least two levels with a label and a score.',
            invalidIndicators:
                'You need at least one indicator with text to save this iDevice.',
            sampleTitle: 'Task rating scale',
            sampleIntro:
                'Select the level that best describes the performance in each indicator.',
            sampleIndicator1: 'Understands the essential information in the activity.',
            sampleIndicator2: 'Organizes the work clearly and neatly.',
            sampleIndicator3: 'Uses the subject-specific vocabulary accurately.',
            sampleIndicator4: 'Justifies decisions with sufficient arguments.',
            sampleLevel1: 'Beginning',
            sampleLevel2: 'Developing',
            sampleLevel3: 'Proficient',
            sampleLevel4: 'Excellent',
        },
        ca: {
            name: 'Escala de valoracio',
            description:
                'Instrument lleuger de valoracio ordinal. A diferencia d una rubrica, usa una sola escala comuna per a tots els indicadors.',
            title: 'Titol',
            intro: 'Indicacions',
            indicators: 'Indicadors',
            levels: 'Nivells',
            addIndicator: 'Afig indicador',
            addLevel: 'Afig nivell',
            indicator: 'Indicador',
            indicatorText: 'Text de l indicador',
            indicatorHelp: 'Ajuda o aclariment',
            level: 'Nivell',
            levelLabel: 'Etiqueta del nivell',
            levelPoints: 'Puntuacio',
            duplicate: 'Duplica',
            del: 'Elimina',
            up: 'Puja',
            down: 'Baixa',
            commentOption: 'Permet comentari final',
            commentLabel: 'Etiqueta del comentari',
            commentDefault: 'Comentari final',
            aiTitle: 'IA',
            aiInfo:
                'Genera una escala amb IA fora d eXe, apega el resultat aci i importa l.',
            subject: 'Materia',
            course: 'Curs',
            topic: 'Descriu amb detall allo que s avaluara',
            count: 'Nombre d indicadors',
            levelsCount: 'Nombre de nivells',
            prompt: 'Prompt per a generar l escala',
            copyPrompt: 'Copia el prompt',
            sendAI: 'Envia a la IA',
            generated: 'Escala generada o apegada',
            importText: 'Importa text',
            formatHelp:
                'Admet el JSON complet de l iDevice. Com a alternativa, usa este format: TITLE: ... / INTRO: ... / COMMENT: ... / LEVELS: Inicial=1 | En progres=2 | Adequat=3 / ITEM: Indicador # ajuda opcional',
            aiNoPrompt: 'No hi ha cap prompt per a copiar.',
            aiNoAssistant: 'Selecciona un assistent d IA.',
            aiNoText: 'Introdueix una escala o almenys un indicador.',
            aiBadFormat:
                'No s ha pogut importar l escala. El format no es valid.',
            aiNoQuery: 'No hi ha cap consulta per a enviar a l assistent.',
            importSuccess: 'L escala s ha importat correctament.',
            aiJsonInfo:
                'La IA ha de tornar exclusivament JSON valid de l iDevice rating-scale o el format de text simplificat indicat.',
            prompt1:
                'Actua com un docent amb experiencia i genera una escala de valoracio clara, breu i utilitzable.',
            prompt2:
                'Torna exclusivament un unic objecte JSON valid escrit en una caixa de text pla, sense comentaris, sense markdown i sense text abans o despres del JSON.',
            prompt3:
                'Usa exactament esta estructura:\n{\n  "title": "...",\n  "intro": "...",\n  "allowComment": true,\n  "commentLabel": "Comentari final",\n  "levels": [\n    { "label": "...", "points": 1 }\n  ],\n  "items": [\n    { "text": "...", "help": "" }\n  ]\n}',
            prompt4:
                'Regles obligatories: crea una sola escala comuna per a tots els indicadors; no convertisques aixo en una rubrica amb descriptors diferents per fila; usa entre 2 i 6 nivells; usa punts enters ascendents; no uses el caracter # dins dels textos.',
            prompt5: 'Torna exactament {{count}} indicadors i {{levelsCount}} nivells.',
            scaleInfo:
                'Usa una escala comuna per a tots els indicadors. Si cada criteri necessita descriptors propis, aixo ja es una rubrica.',
            invalidTitle: 'Has d indicar un titol per a l escala.',
            invalidLevels: 'Necessites almenys dos nivells amb etiqueta i puntuacio.',
            invalidIndicators:
                'Necessites almenys un indicador amb text per a guardar este iDevice.',
            sampleTitle: 'Escala de valoracio de la tasca',
            sampleIntro:
                'Selecciona el nivell que millor descriu l acompli ment en cada indicador.',
            sampleIndicator1: 'Compren la informacio essencial de l activitat.',
            sampleIndicator2: 'Organitza el treball amb claredat i orde.',
            sampleIndicator3: 'Usa el vocabulari especific de la materia.',
            sampleIndicator4: 'Justifica les decisions amb arguments suficients.',
            sampleLevel1: 'Inicial',
            sampleLevel2: 'En progres',
            sampleLevel3: 'Adequat',
            sampleLevel4: 'Excel lent',
        },
    },

    lang: 'es',
    state: null,

    init: function (element, previousData) {
        this.ideviceBody = element;
        this.loadData(previousData || {});
    },

    loadData: function (data) {
        this.idevicePreviousData = data || {};
        this.lang = this.getLocale(this.idevicePreviousData);
        this.state = this.normalizeData(this.idevicePreviousData);
        this.createForm();
    },

    save: function () {
        var title = this.q('#ratingScaleTitle').value.trim();
        if (!title) {
            eXe.app.alert(this.t('invalidTitle'));
            return false;
        }
        var levels = this.collectLevels();
        if (levels.error) {
            eXe.app.alert(levels.error);
            return false;
        }
        var items = this.collectItems();
        if (items.error) {
            eXe.app.alert(items.error);
            return false;
        }
        return {
            title: title,
            intro: this.getIntroValue(),
            locale: this.lang,
            levels: levels.items,
            items: items.items,
            allowComment: this.q('#ratingScaleAllowComment').checked,
            commentLabel:
                this.q('#ratingScaleCommentLabel').value.trim() ||
                this.t('commentDefault'),
        };
    },

    createForm: function () {
        this.destroyRichTextEditor();
        this.ideviceBody.innerHTML = this.getFormHtml();
        this.setIntroValue(this.state.intro);
        if ($exeDevicesEdition.iDevice.tabs?.init) {
            $exeDevicesEdition.iDevice.tabs.init('ratingScaleIdeviceForm');
        }
        this.initRichTextEditor();
        this.renderLevels();
        this.renderItems();
        this.bindEvents();
        this.updateAIPrompt();
    },

    getFormHtml: function () {
        return (
            '<div class="rating-scale-editor" id="ratingScaleIdeviceForm">' +
            '<div class="exe-form-tab" title="' + this.t('name') + '">' +
            '<div class="rating-scale-description"><p>' + this.t('description') + '</p><p class="rating-scale-help">' + this.t('scaleInfo') + '</p></div>' +
            '<fieldset class="exe-fieldset"><legend><a href="#">' + this.t('name') + '</a></legend>' +
            '<div class="rating-scale-grid">' +
            this.input('ratingScaleTitle', this.t('title'), this.state.title) +
            this.checkboxField('ratingScaleAllowComment', this.t('commentOption'), this.state.allowComment) +
            '</div>' +
            this.htmlTextarea('ratingScaleIntro', this.t('intro')) +
            this.input('ratingScaleCommentLabel', this.t('commentLabel'), this.state.commentLabel) +
            '</fieldset>' +
            '<fieldset class="exe-fieldset"><legend><a href="#">' + this.t('levels') + '</a></legend>' +
            '<div id="ratingScaleLevels" class="rating-scale-collection"></div>' +
            '<button type="button" class="rating-scale-add" id="ratingScaleAddLevel">' + this.t('addLevel') + '</button>' +
            '</fieldset>' +
            '<fieldset class="exe-fieldset"><legend><a href="#">' + this.t('indicators') + '</a></legend>' +
            '<div id="ratingScaleItems" class="rating-scale-collection"></div>' +
            '<button type="button" class="rating-scale-add" id="ratingScaleAddItem">' + this.t('addIndicator') + '</button>' +
            '</fieldset>' +
            '</div>' +
            '<div class="exe-form-tab" title="' + this.t('aiTitle') + '">' +
            '<section><p class="rating-scale-help">' + this.t('aiInfo') + '</p><p class="rating-scale-help">' + this.t('aiJsonInfo') + '</p>' +
            '<div class="rating-scale-ai-grid">' +
            this.input('ratingScaleAISubject', this.t('subject'), '') +
            this.input('ratingScaleAICourse', this.t('course'), '') +
            this.number('ratingScaleAICount', this.t('count'), 6, 1, 20) +
            this.number('ratingScaleAILevelsCount', this.t('levelsCount'), 4, 2, 6) +
            this.textarea('ratingScaleAITopic', this.t('topic'), '', 'rating-scale-ai-topic') +
            '</div>' +
            this.textarea('ratingScaleAIPrompt', this.t('prompt'), '') +
            '<div class="rating-scale-ai-actions">' +
            '<button type="button" id="ratingScaleAICopyPrompt" class="btn btn-primary">' + this.t('copyPrompt') + '</button>' +
            '<select id="ratingScaleAISelect" class="form-select form-select-sm w-auto"><option value="https://chatgpt.com/?q=">ChatGPT</option><option value="https://claude.ai/new?q=">Claude</option><option value="https://gemini.google.com/app?q=">Gemini</option></select>' +
            '<button type="button" id="ratingScaleAISend" class="btn btn-primary">' + this.t('sendAI') + '</button>' +
            '</div>' +
            this.textarea('ratingScaleAIText', this.t('generated'), '') +
            '<p class="rating-scale-help">' + this.t('formatHelp') + '</p>' +
            '<div class="rating-scale-ai-actions"><button type="button" id="ratingScaleAIImportText" class="btn btn-primary">' + this.t('importText') + '</button></div>' +
            '</div>' +
            '</div>'
        );
    },

    bindEvents: function () {
        var self = this;
        this.q('#ratingScaleAddLevel').addEventListener('click', function () {
            self.state.levels.push(self.emptyLevel());
            self.renderLevels();
        });
        this.q('#ratingScaleAddItem').addEventListener('click', function () {
            self.state.items.push(self.emptyItem());
            self.renderItems();
        });
        this.q('#ratingScaleAllowComment').addEventListener('change', function () {
            self.q('#ratingScaleCommentLabel').disabled = !this.checked;
        });
        [
            'ratingScaleAISubject',
            'ratingScaleAICourse',
            'ratingScaleAICount',
            'ratingScaleAILevelsCount',
            'ratingScaleAITopic',
        ].forEach(function (id) {
            self.q('#' + id).addEventListener('input', function () {
                self.updateAIPrompt();
            });
        });
        this.q('#ratingScaleAICopyPrompt').addEventListener('click', async function () {
            var value = self.q('#ratingScaleAIPrompt').value.trim();
            if (!value) return eXe.app.alert(self.t('aiNoPrompt'));
            try {
                await navigator.clipboard.writeText(value);
            } catch (error) {}
        });
        this.q('#ratingScaleAISend').addEventListener('click', function () {
            var value = self.q('#ratingScaleAIPrompt').value.trim();
            if (!value) return eXe.app.alert(self.t('aiNoQuery'));
            var baseUrl = self.q('#ratingScaleAISelect').value;
            if (!baseUrl) return eXe.app.alert(self.t('aiNoAssistant'));
            window.open(baseUrl + encodeURIComponent(value), '_blank');
        });
        this.q('#ratingScaleAIImportText').addEventListener('click', function () {
            var value = self.q('#ratingScaleAIText').value.trim();
            if (!value) return eXe.app.alert(self.t('aiNoText'));
            if (self.importScaleFromText(value)) {
                eXe.app.alert(self.t('importSuccess'));
            } else {
                eXe.app.alert(self.t('aiBadFormat'));
            }
        });
        this.delegateCollection('ratingScaleLevels', 'levels');
        this.delegateCollection('ratingScaleItems', 'items');
        this.q('#ratingScaleCommentLabel').disabled = !this.q(
            '#ratingScaleAllowComment'
        ).checked;
    },

    updateAIPrompt: function () {
        var subject = this.q('#ratingScaleAISubject').value.trim();
        var course = this.q('#ratingScaleAICourse').value.trim();
        var count = Math.max(
            1,
            parseInt(this.q('#ratingScaleAICount').value, 10) || 6
        );
        var levelsCount = Math.max(
            2,
            Math.min(6, parseInt(this.q('#ratingScaleAILevelsCount').value, 10) || 4)
        );
        var topic = this.q('#ratingScaleAITopic').value.trim();
        var lines = [this.t('prompt1')];
        if (subject) lines.push(this.t('subject') + ': ' + subject + '.');
        if (course) lines.push(this.t('course') + ': ' + course + '.');
        if (topic) lines.push(topic);
        lines.push(this.t('count') + ': ' + count + '.');
        lines.push(this.t('levelsCount') + ': ' + levelsCount + '.');
        lines.push(this.t('prompt2'));
        lines.push(this.t('prompt3'));
        lines.push(this.t('prompt4'));
        lines.push(
            this.t('prompt5')
                .replace('{{count}}', count)
                .replace('{{levelsCount}}', levelsCount)
        );
        this.q('#ratingScaleAIPrompt').value = lines.join('\n');
    },

    importScaleFromText: function (raw) {
        var parsed = this.parseAIText(raw);
        if (!parsed) return false;
        this.state.title = parsed.title || this.state.title;
        this.state.intro = parsed.intro || '';
        this.state.allowComment =
            typeof parsed.allowComment === 'boolean' ? parsed.allowComment : true;
        this.state.commentLabel =
            parsed.commentLabel || this.t('commentDefault');
        this.state.levels = this.normalizeLevels(parsed.levels);
        this.state.items = this.normalizeItems(parsed.items);
        this.q('#ratingScaleTitle').value = this.state.title;
        this.setIntroValue(this.state.intro);
        this.q('#ratingScaleAllowComment').checked = this.state.allowComment;
        this.q('#ratingScaleCommentLabel').value = this.state.commentLabel;
        this.q('#ratingScaleCommentLabel').disabled = !this.state.allowComment;
        this.renderLevels();
        this.renderItems();
        return true;
    },

    parseAIText: function (raw) {
        var text = String(raw || '').trim();
        if (!text) return null;
        var jsonText = this.prepareJsonText(text);
        if (jsonText) {
            try {
                var parsed = JSON.parse(jsonText);
                if (parsed && Array.isArray(parsed.levels) && Array.isArray(parsed.items)) {
                    return this.normalizeImportedScale(parsed);
                }
            } catch (error) {}
        }
        return this.parseSimplifiedText(text);
    },

    normalizeImportedScale: function (parsed) {
        var levels = this.normalizeLevels(parsed.levels || []).filter(function (item) {
            return String(item.label || '').trim() !== '';
        });
        var items = this.normalizeItems(parsed.items || []).filter(function (item) {
            return String(item.text || '').trim() !== '';
        });
        if (levels.length < 2 || !items.length) return null;
        return {
            title: String(parsed.title || '').trim() || this.t('sampleTitle'),
            intro: String(parsed.intro || '').trim(),
            allowComment:
                typeof parsed.allowComment === 'boolean' ? parsed.allowComment : true,
            commentLabel:
                String(parsed.commentLabel || '').trim() || this.t('commentDefault'),
            levels: levels,
            items: items,
        };
    },

    parseSimplifiedText: function (raw) {
        var result = {
            title: '',
            intro: '',
            allowComment: true,
            commentLabel: this.t('commentDefault'),
            levels: [],
            items: [],
        };
        String(raw || '')
            .split(/\r?\n/)
            .forEach(
                function (line) {
                    var clean = line.trim();
                    if (!clean) return;
                    if (/^title\s*:/i.test(clean)) {
                        result.title = clean.replace(/^title\s*:/i, '').trim();
                        return;
                    }
                    if (/^intro\s*:/i.test(clean)) {
                        result.intro = clean.replace(/^intro\s*:/i, '').trim();
                        return;
                    }
                    if (/^comment\s*:/i.test(clean)) {
                        result.commentLabel =
                            clean.replace(/^comment\s*:/i, '').trim() ||
                            this.t('commentDefault');
                        return;
                    }
                    if (/^allowcomment\s*:/i.test(clean)) {
                        var value = clean
                            .replace(/^allowcomment\s*:/i, '')
                            .trim()
                            .toLowerCase();
                        result.allowComment = !(
                            value === 'false' ||
                            value === '0' ||
                            value === 'no'
                        );
                        return;
                    }
                    if (/^levels\s*:/i.test(clean)) {
                        result.levels = this.parseLevelsLine(
                            clean.replace(/^levels\s*:/i, '').trim()
                        );
                        return;
                    }
                    if (/^item\s*:/i.test(clean)) {
                        var itemText = clean.replace(/^item\s*:/i, '').trim();
                        var parts = itemText.split('#');
                        var textValue = (parts[0] || '').trim();
                        var helpValue = parts.slice(1).join('#').trim();
                        if (textValue) {
                            result.items.push({
                                id: this.id(),
                                text: textValue,
                                help: helpValue,
                            });
                        }
                    }
                }.bind(this)
            );
        if (result.levels.length < 2 || !result.items.length) return null;
        result.title = result.title || this.t('sampleTitle');
        return result;
    },

    parseLevelsLine: function (raw) {
        return String(raw || '')
            .split('|')
            .map(
                function (part) {
                    var pieces = part.split('=');
                    var label = String(pieces[0] || '').trim();
                    var points = parseInt(String(pieces[1] || '').trim(), 10);
                    if (!label || Number.isNaN(points)) return null;
                    return {
                        id: this.id(),
                        label: label,
                        points: points,
                    };
                }.bind(this)
            )
            .filter(Boolean);
    },

    prepareJsonText: function (raw) {
        return this.sanitizeBrokenJson(this.extractJsonText(raw));
    },

    sanitizeBrokenJson: function (raw) {
        var text = String(raw || '').trim();
        if (!text) return '';
        var result = '';
        var inString = false;
        var escaped = false;
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            if (!inString) {
                result += char;
                if (char === '"') {
                    inString = true;
                    escaped = false;
                }
                continue;
            }
            if (escaped) {
                result += char;
                escaped = false;
                continue;
            }
            if (char === '\\') {
                result += char;
                escaped = true;
                continue;
            }
            if (char === '"') {
                var nextInfo = this.nextSignificantInfo(text, i + 1);
                var next = nextInfo.char;
                var closesObjectValue = next === '}' || next === ']';
                var closesKey = next === ':';
                var closesListValue = false;
                if (next === ',') {
                    var afterComma = this.nextSignificantInfo(text, nextInfo.index + 1).char;
                    closesListValue =
                        afterComma === '"' || afterComma === '}' || afterComma === ']';
                }
                if (closesKey || closesObjectValue || closesListValue) {
                    result += char;
                    inString = false;
                } else {
                    result += '\\"';
                }
                continue;
            }
            result += char;
        }
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

    nextSignificantInfo: function (text, start) {
        for (var i = start; i < text.length; i++) {
            if (!/\s/.test(text[i])) return { index: i, char: text[i] };
        }
        return { index: -1, char: '' };
    },

    delegateCollection: function (id, key) {
        var self = this;
        this.q('#' + id).addEventListener('click', function (event) {
            var btn = event.target.closest('button[data-action]');
            if (!btn) return;
            var index = parseInt(btn.getAttribute('data-index'), 10);
            if (Number.isNaN(index) || !self.state[key][index]) return;
            var action = btn.getAttribute('data-action');
            if (action === 'delete') self.state[key].splice(index, 1);
            if (action === 'duplicate') {
                var copy = Object.assign({}, self.state[key][index], { id: self.id() });
                self.state[key].splice(index + 1, 0, copy);
            }
            if (action === 'up' && index > 0) self.swap(self.state[key], index, index - 1);
            if (action === 'down' && index < self.state[key].length - 1) {
                self.swap(self.state[key], index, index + 1);
            }
            if (key === 'levels') self.renderLevels();
            else self.renderItems();
        });
        this.q('#' + id).addEventListener('input', function (event) {
            var target = event.target;
            var index = parseInt(target.getAttribute('data-index'), 10);
            var field = target.getAttribute('data-field');
            if (Number.isNaN(index) || !field || !self.state[key][index]) return;
            if (field === 'points') {
                var points = parseInt(target.value, 10);
                self.state[key][index][field] = Number.isNaN(points) ? 0 : points;
            } else {
                self.state[key][index][field] = target.value;
            }
            self.updateCardSummary(id, key, index);
        });
    },

    renderLevels: function () {
        var root = this.q('#ratingScaleLevels');
        var html = '';
        for (var i = 0; i < this.state.levels.length; i++) {
            html += this.levelCard(this.state.levels[i], i);
        }
        root.innerHTML = html;
    },

    renderItems: function () {
        var root = this.q('#ratingScaleItems');
        var html = '';
        for (var i = 0; i < this.state.items.length; i++) {
            html += this.itemCard(this.state.items[i], i);
        }
        root.innerHTML = html;
    },

    levelCard: function (item, index) {
        return (
            '<section class="rating-scale-card" data-index="' + index + '">' +
            '<div class="rating-scale-card-header"><strong>' +
            this.escape(item.label || this.t('level') + ' ' + (index + 1)) +
            '</strong><div class="rating-scale-card-actions">' +
            this.actionButton('up', index, this.t('up')) +
            this.actionButton('down', index, this.t('down')) +
            this.actionButton('duplicate', index, this.t('duplicate')) +
            this.actionButton('delete', index, this.t('del')) +
            '</div></div>' +
            '<div class="rating-scale-grid">' +
            this.inlineInput(index, 'label', this.t('levelLabel'), item.label) +
            this.inlineNumber(index, 'points', this.t('levelPoints'), item.points) +
            '</div></section>'
        );
    },

    itemCard: function (item, index) {
        return (
            '<section class="rating-scale-card" data-index="' + index + '">' +
            '<div class="rating-scale-card-header"><strong>' +
            this.escape(item.text || this.t('indicator') + ' ' + (index + 1)) +
            '</strong><div class="rating-scale-card-actions">' +
            this.actionButton('up', index, this.t('up')) +
            this.actionButton('down', index, this.t('down')) +
            this.actionButton('duplicate', index, this.t('duplicate')) +
            this.actionButton('delete', index, this.t('del')) +
            '</div></div>' +
            this.inlineTextarea(index, 'text', this.t('indicatorText'), item.text) +
            this.inlineTextarea(index, 'help', this.t('indicatorHelp'), item.help) +
            '</section>'
        );
    },

    updateCardSummary: function (containerId, key, index) {
        var card = this.ideviceBody.querySelector(
            '#' +
                containerId +
                ' .rating-scale-card[data-index="' +
                index +
                '"] .rating-scale-card-header strong'
        );
        if (!card) return;
        if (key === 'levels') {
            card.textContent =
                this.state.levels[index].label || this.t('level') + ' ' + (index + 1);
            return;
        }
        card.textContent =
            this.state.items[index].text || this.t('indicator') + ' ' + (index + 1);
    },

    collectLevels: function () {
        var levels = this.state.levels
            .map(function (item) {
                return {
                    id: item.id || this.id(),
                    label: String(item.label || '').trim(),
                    points: Number.isFinite(item.points)
                        ? item.points
                        : parseInt(item.points, 10) || 0,
                };
            }, this)
            .filter(function (item) {
                return item.label !== '';
            });
        if (levels.length < 2) return { error: this.t('invalidLevels') };
        return { items: levels };
    },

    collectItems: function () {
        var items = this.state.items
            .map(function (item) {
                return {
                    id: item.id || this.id(),
                    text: String(item.text || '').trim(),
                    help: String(item.help || '').trim(),
                };
            }, this)
            .filter(function (item) {
                return item.text !== '';
            });
        if (!items.length) return { error: this.t('invalidIndicators') };
        return { items: items };
    },

    normalizeData: function (data) {
        return {
            title:
                typeof data.title === 'string' && data.title
                    ? data.title
                    : this.t('sampleTitle'),
            intro:
                typeof data.intro === 'string' && data.intro
                    ? data.intro
                    : this.t('sampleIntro'),
            allowComment:
                typeof data.allowComment === 'boolean' ? data.allowComment : true,
            commentLabel:
                typeof data.commentLabel === 'string' && data.commentLabel
                    ? data.commentLabel
                    : this.t('commentDefault'),
            levels:
                Array.isArray(data.levels) && data.levels.length
                    ? this.normalizeLevels(data.levels)
                    : this.sampleLevels(),
            items:
                Array.isArray(data.items) && data.items.length
                    ? this.normalizeItems(data.items)
                    : this.sampleItems(),
        };
    },

    normalizeLevels: function (levels) {
        return levels.map(
            function (item, index) {
                return {
                    id: item.id || 'level-' + index + '-' + this.id(),
                    label: item.label || '',
                    points: Number.isFinite(item.points)
                        ? item.points
                        : parseInt(item.points, 10) || 0,
                };
            }.bind(this)
        );
    },

    normalizeItems: function (items) {
        return items.map(
            function (item, index) {
                return {
                    id: item.id || 'item-' + index + '-' + this.id(),
                    text: item.text || '',
                    help: item.help || '',
                };
            }.bind(this)
        );
    },

    sampleLevels: function () {
        return [
            { id: this.id(), label: this.t('sampleLevel1'), points: 1 },
            { id: this.id(), label: this.t('sampleLevel2'), points: 2 },
            { id: this.id(), label: this.t('sampleLevel3'), points: 3 },
            { id: this.id(), label: this.t('sampleLevel4'), points: 4 },
        ];
    },

    sampleItems: function () {
        return [
            { id: this.id(), text: this.t('sampleIndicator1'), help: '' },
            { id: this.id(), text: this.t('sampleIndicator2'), help: '' },
            { id: this.id(), text: this.t('sampleIndicator3'), help: '' },
            { id: this.id(), text: this.t('sampleIndicator4'), help: '' },
        ];
    },

    emptyLevel: function () {
        return { id: this.id(), label: '', points: this.state.levels.length + 1 };
    },

    emptyItem: function () {
        return { id: this.id(), text: '', help: '' };
    },

    actionButton: function (action, index, label) {
        return (
            '<button type="button" data-action="' +
            action +
            '" data-index="' +
            index +
            '">' +
            this.escape(label) +
            '</button>'
        );
    },

    input: function (id, label, value) {
        return (
            '<div class="rating-scale-field"><label for="' +
            id +
            '">' +
            this.escape(label) +
            '</label><input type="text" id="' +
            id +
            '" value="' +
            this.escape(value) +
            '"></div>'
        );
    },

    number: function (id, label, value, min, max) {
        return (
            '<div class="rating-scale-field"><label for="' +
            id +
            '">' +
            this.escape(label) +
            '</label><input type="number" id="' +
            id +
            '" value="' +
            this.escape(String(value)) +
            '" min="' +
            min +
            '" max="' +
            max +
            '"></div>'
        );
    },

    textarea: function (id, label, value, extraClass) {
        return (
            '<div class="rating-scale-textarea' +
            (extraClass ? ' ' + extraClass : '') +
            '"><label for="' +
            id +
            '">' +
            this.escape(label) +
            '</label><textarea id="' +
            id +
            '">' +
            this.escape(value) +
            '</textarea></div>'
        );
    },

    htmlTextarea: function (id, label, extraClass) {
        return (
            '<div class="rating-scale-textarea' +
            (extraClass ? ' ' + extraClass : '') +
            '"><label for="' +
            id +
            '">' +
            this.escape(label) +
            '</label><textarea id="' +
            id +
            '" class="exe-html-editor"></textarea></div>'
        );
    },

    checkboxField: function (id, label, checked) {
        return (
            '<label class="rating-scale-toggle" for="' +
            id +
            '"><input type="checkbox" id="' +
            id +
            '"' +
            (checked ? ' checked' : '') +
            '> <span>' +
            this.escape(label) +
            '</span></label>'
        );
    },

    inlineInput: function (index, field, label, value) {
        return (
            '<div class="rating-scale-field"><label>' +
            this.escape(label) +
            '</label><input type="text" data-index="' +
            index +
            '" data-field="' +
            field +
            '" value="' +
            this.escape(value) +
            '"></div>'
        );
    },

    inlineNumber: function (index, field, label, value) {
        return (
            '<div class="rating-scale-field"><label>' +
            this.escape(label) +
            '</label><input type="number" min="0" data-index="' +
            index +
            '" data-field="' +
            field +
            '" value="' +
            this.escape(String(value)) +
            '"></div>'
        );
    },

    inlineTextarea: function (index, field, label, value) {
        return (
            '<div class="rating-scale-textarea"><label>' +
            this.escape(label) +
            '</label><textarea data-index="' +
            index +
            '" data-field="' +
            field +
            '">' +
            this.escape(value) +
            '</textarea></div>'
        );
    },

    initRichTextEditor: function () {
        if (typeof tinymce === 'undefined' || !tinymce.init || !this.q('#ratingScaleIntro')) {
            return;
        }
        tinymce.init({
            selector: '#ratingScaleIntro',
            height: 220,
            language: 'all',
            menubar: false,
            statusbar: false,
            branding: false,
            plugins: ['link', 'lists', 'paste', 'code'],
            paste_as_text: true,
            entity_encoding: 'raw',
            toolbar:
                'undo redo | removeformat | formatselect | bold italic underline | alignleft aligncenter alignright alignjustify | bullist numlist | link | code',
        });
    },

    destroyRichTextEditor: function () {
        if (typeof tinyMCE === 'undefined' || !tinyMCE.get) return;
        var editor = tinyMCE.get('ratingScaleIntro');
        if (editor) editor.remove();
    },

    getIntroValue: function () {
        if (typeof tinyMCE !== 'undefined' && tinyMCE.get) {
            var editor = tinyMCE.get('ratingScaleIntro');
            if (editor) return editor.getContent().trim();
        }
        var field = this.q('#ratingScaleIntro');
        return field ? field.value.trim() : '';
    },

    setIntroValue: function (value) {
        var normalizedValue = String(value || '');
        var field = this.q('#ratingScaleIntro');
        if (field) field.value = normalizedValue;
        if (typeof tinyMCE !== 'undefined' && tinyMCE.get) {
            var editor = tinyMCE.get('ratingScaleIntro');
            if (editor) editor.setContent(normalizedValue);
        }
    },

    q: function (selector) {
        return this.ideviceBody.querySelector(selector);
    },

    swap: function (items, a, b) {
        var tmp = items[a];
        items[a] = items[b];
        items[b] = tmp;
    },

    getLocale: function (data) {
        var locale =
            data.locale ||
            window.eXeLearning?.config?.locale ||
            document.documentElement.getAttribute('lang') ||
            document.body.getAttribute('lang') ||
            navigator.language ||
            'es';
        locale = String(locale || '').toLowerCase();
        if (locale.indexOf('ca') === 0 || locale.indexOf('val') === 0) return 'ca';
        if (locale.indexOf('en') === 0) return 'en';
        return 'es';
    },

    t: function (key) {
        var dict = this.i18n[this.lang] || this.i18n.es;
        return dict[key] || key;
    },

    id: function () {
        return Math.random().toString(36).slice(2, 10);
    },

    escape: function (value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },
};
