var $exeDevice = {
    i18n: {
        es: {
            name: 'Ahorcado aleatorio',
            descriptionText:
                'Crea un juego del ahorcado con una lista de palabras. En cada partida se elegira una palabra al azar de las introducidas.',
            titleLabel: 'Titulo del juego',
            titlePlaceholder: 'Juego del ahorcado',
            instructionsLabel: 'Instrucciones',
            instructionsPlaceholder:
                'Adivina la palabra antes de quedarte sin intentos.',
            wordsLabel: 'Palabras del juego',
            wordsHelp:
                'Escribe una palabra o expresion por linea. Se eliminaran lineas vacias y duplicadas.',
            attemptsLabel: 'Intentos maximos',
            previewLabel: 'Vista previa de palabras validas',
            wordsExample: 'Ejemplo:\nmitosis\necosistema\ntriangulo',
            emptyPreview: 'Todavia no hay palabras validas en la lista.',
            totalWords: 'Total de palabras',
            moreWords: 'Y {count} mas...',
            requiredWords:
                'Debes introducir al menos una palabra valida para el juego.',
            defaultTitle: 'Juego del ahorcado',
            defaultInstructions:
                'Adivina la palabra antes de quedarte sin intentos.',
        },
        ca: {
            name: 'Penjat aleatori',
            descriptionText:
                "Crea un joc del penjat amb una llista de paraules. A cada partida se'n triara una a l'atzar.",
            titleLabel: 'Titol del joc',
            titlePlaceholder: 'Joc del penjat',
            instructionsLabel: 'Instruccions',
            instructionsPlaceholder:
                "Endevina la paraula abans de quedar-te sense intents.",
            wordsLabel: 'Paraules del joc',
            wordsHelp:
                "Escriu una paraula o expressio per linia. S'eliminaran les linies buides i duplicades.",
            attemptsLabel: 'Intents maxims',
            previewLabel: 'Vista previa de paraules valides',
            wordsExample: 'Exemple:\nmitosi\necosistema\ntriangle',
            emptyPreview: 'Encara no hi ha paraules valides a la llista.',
            totalWords: 'Total de paraules',
            moreWords: 'I {count} mes...',
            requiredWords:
                "Has d'introduir almenys una paraula valida per al joc.",
            defaultTitle: 'Joc del penjat',
            defaultInstructions:
                "Endevina la paraula abans de quedar-te sense intents.",
        },
        en: {
            name: 'Random hangman',
            descriptionText:
                'Create a hangman game with a list of words. Each round will pick one of them at random.',
            titleLabel: 'Game title',
            titlePlaceholder: 'Hangman game',
            instructionsLabel: 'Instructions',
            instructionsPlaceholder:
                'Guess the word before you run out of attempts.',
            wordsLabel: 'Game words',
            wordsHelp:
                'Write one word or expression per line. Empty and duplicate lines will be removed.',
            attemptsLabel: 'Maximum attempts',
            previewLabel: 'Valid words preview',
            wordsExample: 'Example:\nmitosis\necosystem\ntriangle',
            emptyPreview: 'There are no valid words in the list yet.',
            totalWords: 'Total words',
            moreWords: '{count} more...',
            requiredWords:
                'You must enter at least one valid word for the game.',
            defaultTitle: 'Hangman game',
            defaultInstructions:
                'Guess the word before you run out of attempts.',
        },
    },

    name: 'Ahorcado aleatorio',
    lang: 'es',
    titleId: 'hangmanRandomTitle',
    instructionsId: 'hangmanRandomInstructions',
    wordsId: 'hangmanRandomWords',
    attemptsId: 'hangmanRandomAttempts',
    previewId: 'hangmanRandomPreview',
    attemptsMin: 4,
    attemptsMax: 10,
    attemptsDefault: 6,

    init: function (element, previousData) {
        this.ideviceBody = element;
        this.idevicePreviousData = previousData || {};
        this.lang = this.getLocale();
        this.name = this.t('name');
        this.createForm();
    },

    save: function () {
        var title = this.ideviceBody.querySelector('#' + this.titleId).value.trim();
        var instructions = this.ideviceBody
            .querySelector('#' + this.instructionsId)
            .value.trim();
        var rawWords = this.ideviceBody.querySelector('#' + this.wordsId).value;
        var maxAttempts = parseInt(
            this.ideviceBody.querySelector('#' + this.attemptsId).value,
            10
        );
        var words = this.parseWords(rawWords);

        if (!words.length) {
            eXe.app.alert(this.t('requiredWords'));
            return false;
        }

        return {
            title: title,
            instructions: instructions,
            words: words,
            maxAttempts: this.clamp(
                maxAttempts,
                this.attemptsMin,
                this.attemptsMax
            ),
        };
    },

    createForm: function () {
        var html = '';
        html += '<div id="hangmanRandomForm">';
        html += '<div class="idevice-description">';
        html += '<p>' + this.t('descriptionText') + '</p>';
        html += '</div>';
        html += this.createInputHTML(
            this.titleId,
            this.t('titleLabel'),
            this.t('titlePlaceholder'),
            ''
        );
        html += this.createTextareaHTML(
            this.instructionsId,
            this.t('instructionsLabel'),
            this.t('instructionsPlaceholder'),
            ''
        );
        html += this.createTextareaHTML(
            this.wordsId,
            this.t('wordsLabel'),
            this.t('wordsExample'),
            ''
        );
        html +=
            '<span class="exe-field-help">' + this.t('wordsHelp') + '</span>';
        html += this.createRangeHTML(
            this.attemptsId,
            this.t('attemptsLabel'),
            this.attemptsMin,
            this.attemptsMax,
            this.attemptsDefault
        );
        html +=
            '<div class="word-preview" id="' +
            this.previewId +
            '"><strong>' +
            this.t('previewLabel') +
            '</strong><div class="word-preview-content"></div></div>';
        html += '</div>';

        this.ideviceBody.innerHTML = html;
        this.loadPreviousValues();
        this.setBehaviour();
        this.refreshPreview();
    },

    loadPreviousValues: function () {
        var data = this.idevicePreviousData || {};
        if (typeof data.title === 'string') {
            this.ideviceBody.querySelector('#' + this.titleId).value = data.title;
        }
        if (typeof data.instructions === 'string') {
            this.ideviceBody.querySelector('#' + this.instructionsId).value =
                data.instructions;
        }
        if (data.words && data.words.length) {
            this.ideviceBody.querySelector('#' + this.wordsId).value =
                data.words.join('\n');
        }
        if (data.maxAttempts) {
            this.ideviceBody.querySelector('#' + this.attemptsId).value =
                this.clamp(data.maxAttempts, this.attemptsMin, this.attemptsMax);
        }
        this.updateRangeBadge();
    },

    setBehaviour: function () {
        var wordsArea = this.ideviceBody.querySelector('#' + this.wordsId);
        var attempts = this.ideviceBody.querySelector('#' + this.attemptsId);
        var self = this;

        wordsArea.addEventListener('input', function () {
            self.refreshPreview();
        });

        attempts.addEventListener('input', function () {
            self.updateRangeBadge();
        });
    },

    refreshPreview: function () {
        var preview = this.ideviceBody.querySelector(
            '#' + this.previewId + ' .word-preview-content'
        );
        var words = this.parseWords(
            this.ideviceBody.querySelector('#' + this.wordsId).value
        );

        if (!words.length) {
            preview.innerHTML = '<p>' + this.t('emptyPreview') + '</p>';
            return;
        }

        var html =
            '<p>' +
            this.t('totalWords') +
            ': <strong>' +
            words.length +
            '</strong></p>';
        html += '<ul>';
        words.slice(0, 8).forEach(function (word) {
            html += '<li>' + $exeDevice.escapeHtml(word) + '</li>';
        });
        html += '</ul>';
        if (words.length > 8) {
            html +=
                '<p>' +
                this.interpolate(this.t('moreWords'), {
                    count: words.length - 8,
                }) +
                '</p>';
        }
        preview.innerHTML = html;
    },

    updateRangeBadge: function () {
        var range = this.ideviceBody.querySelector('#' + this.attemptsId);
        var badge = this.ideviceBody.querySelector('.value-number');
        if (range && badge) {
            badge.textContent = range.value;
        }
    },

    parseWords: function (rawWords) {
        var seen = {};
        return rawWords
            .split(/\r?\n/)
            .map(function (word) {
                return word.trim().replace(/\s+/g, ' ');
            })
            .filter(function (word) {
                return word !== '';
            })
            .filter(function (word) {
                return /^[A-Za-z0-9À-ÿ' -]+$/.test(word);
            })
            .filter(function (word) {
                var normalized = $exeDevice.normalizeWord(word);
                if (seen[normalized]) {
                    return false;
                }
                seen[normalized] = true;
                return true;
            });
    },

    normalizeWord: function (word) {
        return word
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase();
    },

    clamp: function (value, min, max) {
        return Math.max(min, Math.min(max, value));
    },

    getLocale: function () {
        var lang = $('HTML').attr('lang') || 'es';
        return this.normalizeLocale(lang);
    },

    normalizeLocale: function (lang) {
        var normalized = String(lang || 'es')
            .toLowerCase()
            .split('-')[0];
        if (this.i18n[normalized]) {
            return normalized;
        }
        return 'es';
    },

    t: function (key) {
        var lang = this.i18n[this.lang] ? this.lang : 'es';
        return this.i18n[lang][key] || this.i18n.es[key] || key;
    },

    interpolate: function (text, values) {
        return String(text).replace(/\{(\w+)\}/g, function (match, key) {
            return Object.prototype.hasOwnProperty.call(values, key)
                ? values[key]
                : match;
        });
    },

    createInputHTML: function (id, title, placeholder, value) {
        return (
            '<div class="exe-field">' +
            '<label for="' +
            id +
            '">' +
            title +
            '</label>' +
            '<input type="text" class="form-control" id="' +
            id +
            '" placeholder="' +
            this.escapeHtml(placeholder) +
            '" value="' +
            this.escapeHtml(value) +
            '">' +
            '</div>'
        );
    },

    createTextareaHTML: function (id, title, placeholder, value) {
        return (
            '<div class="exe-field">' +
            '<label for="' +
            id +
            '">' +
            title +
            '</label>' +
            '<textarea id="' +
            id +
            '" class="form-control" placeholder="' +
            this.escapeHtml(placeholder) +
            '">' +
            this.escapeHtml(value) +
            '</textarea>' +
            '</div>'
        );
    },

    createRangeHTML: function (id, title, min, max, value) {
        return (
            '<div class="exe-field">' +
            '<label for="' +
            id +
            '">' +
            title +
            '</label>' +
            '<div class="range-row">' +
            '<input type="range" class="form-range" min="' +
            min +
            '" max="' +
            max +
            '" value="' +
            value +
            '" id="' +
            id +
            '">' +
            '<span class="value-number">' +
            value +
            '</span>' +
            '</div>' +
            '</div>'
        );
    },

    escapeHtml: function (text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },
};
