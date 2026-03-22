var $hangmanrandom = {
    ideviceClass: 'hangman-random-idevice',
    keyboardLetters: 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ',
    i18n: {
        es: {
            defaultTitle: 'Juego del ahorcado',
            defaultInstructions:
                'Adivina la palabra antes de quedarte sin intentos.',
            labelSuccesses: 'Aciertos',
            labelRemaining: 'Intentos',
            labelFails: 'Fallos',
            wordAriaLabel: 'Palabra a adivinar',
            inputLabel: 'Letra',
            inputAriaLabel: 'Introduce una letra',
            guessButton: 'Probar letra',
            resetButton: 'Otra palabra',
            statusReady: 'Escribe o pulsa una letra para seguir jugando.',
            statusNoWords: 'No hay palabras disponibles en este juego.',
            invalidLetter: 'Introduce una letra valida del alfabeto.',
            repeatedLetter: 'Esa letra ya se habia probado.',
            solvedWord: 'Has acertado la palabra. Puedes pedir otra nueva.',
            failedWord: 'Sin intentos. La palabra era: {word}',
            wrongLetters: 'Letras falladas',
            emptyWrongLetters: '-',
        },
        ca: {
            defaultTitle: 'Joc del penjat',
            defaultInstructions:
                "Endevina la paraula abans de quedar-te sense intents.",
            labelSuccesses: 'Encerts',
            labelRemaining: 'Intents',
            labelFails: 'Errors',
            wordAriaLabel: 'Paraula per endevinar',
            inputLabel: 'Lletra',
            inputAriaLabel: 'Introdueix una lletra',
            guessButton: 'Prova lletra',
            resetButton: 'Una altra paraula',
            statusReady: 'Escriu o prem una lletra per continuar jugant.',
            statusNoWords: 'No hi ha paraules disponibles en aquest joc.',
            invalidLetter: "Introdueix una lletra valida de l'alfabet.",
            repeatedLetter: "Aquesta lletra ja s'havia provat.",
            solvedWord: 'Has encertat la paraula. Pots demanar-ne una altra.',
            failedWord: "Sense intents. La paraula era: {word}",
            wrongLetters: 'Lletres fallades',
            emptyWrongLetters: '-',
        },
        en: {
            defaultTitle: 'Hangman game',
            defaultInstructions:
                'Guess the word before you run out of attempts.',
            labelSuccesses: 'Hits',
            labelRemaining: 'Attempts',
            labelFails: 'Misses',
            wordAriaLabel: 'Word to guess',
            inputLabel: 'Letter',
            inputAriaLabel: 'Enter a letter',
            guessButton: 'Try letter',
            resetButton: 'Another word',
            statusReady: 'Type or press a letter to keep playing.',
            statusNoWords: 'There are no words available in this game.',
            invalidLetter: 'Enter a valid letter from the alphabet.',
            repeatedLetter: 'That letter has already been tried.',
            solvedWord: 'You guessed the word. You can ask for a new one.',
            failedWord: 'No attempts left. The word was: {word}',
            wrongLetters: 'Wrong letters',
            emptyWrongLetters: '-',
        },
    },

    renderView: function (data, accesibility, template) {
        var safeData = {
            title: typeof data.title === 'string' ? data.title : '',
            instructions:
                typeof data.instructions === 'string' ? data.instructions : '',
            words: Array.isArray(data.words) ? data.words : [],
            locale:
                typeof data.locale === 'string' ? this.normalizeLocale(data.locale) : '',
            maxAttempts: this.clamp(parseInt(data.maxAttempts, 10) || 6, 4, 10),
        };
        var lang = this.getLocale(safeData);
        var messages = this.getMessages(lang);

        var title = safeData.title || messages.defaultTitle;
        var instructions =
            safeData.instructions || messages.defaultInstructions;
        var htmlContent = '';
        htmlContent +=
            '<div class="' +
            this.ideviceClass +
            '" data-lang="' +
            this.escapeHtml(lang) +
            '" data-locale="' +
            this.escapeHtml(safeData.locale || lang) +
            '">';
        htmlContent += '<div class="hangman-random-header">';
        htmlContent += '<h3>' + this.escapeHtml(title) + '</h3>';
        htmlContent += '<p>' + this.escapeHtml(instructions) + '</p>';
        htmlContent += '</div>';
        htmlContent += '<div class="hangman-random-board">';
        htmlContent += '<div class="hangman-random-figure">';
        htmlContent += this.getFigureSvg();
        htmlContent +=
            '<div class="hangman-random-stats">' +
            '<span><strong>' +
            this.escapeHtml(messages.labelSuccesses) +
            ':</strong> <span class="hangman-successes"></span></span>' +
            '<span><strong>' +
            this.escapeHtml(messages.labelRemaining) +
            ':</strong> <span class="hangman-remaining"></span></span>' +
            '<span><strong>' +
            this.escapeHtml(messages.labelFails) +
            ':</strong> <span class="hangman-fails"></span></span>' +
            '</div>';
        htmlContent += '</div>';
        htmlContent += '<div class="hangman-random-panel">';
        htmlContent +=
            '<div class="hangman-random-word" aria-label="' +
            this.escapeHtml(messages.wordAriaLabel) +
            '"></div>';
        htmlContent += '<div class="hangman-random-controls">';
        htmlContent +=
            '<div class="hangman-random-input-wrap">' +
            '<label>' +
            this.escapeHtml(messages.inputLabel) +
            '</label>' +
            '<input class="hangman-guess-input" type="text" maxlength="1" inputmode="text" autocomplete="off" aria-label="' +
            this.escapeHtml(messages.inputAriaLabel) +
            '">' +
            '</div>';
        htmlContent +=
            '<button type="button" class="hangman-guess-button">' +
            this.escapeHtml(messages.guessButton) +
            '</button>';
        htmlContent +=
            '<button type="button" class="hangman-reset-button secondary">' +
            this.escapeHtml(messages.resetButton) +
            '</button>';
        htmlContent += '</div>';
        htmlContent +=
            '<div class="hangman-random-status playing" aria-live="polite"></div>';
        htmlContent += '<div class="hangman-random-keyboard"></div>';
        htmlContent +=
            '<div class="hangman-random-wrong"><strong>' +
            this.escapeHtml(messages.wrongLetters) +
            ':</strong> <span class="hangman-wrong-letters">' +
            this.escapeHtml(messages.emptyWrongLetters) +
            '</span></div>';
        htmlContent += '</div>';
        htmlContent += '</div>';
        htmlContent +=
            '<script type="application/json" class="hangman-random-data">' +
            this.escapeScript(JSON.stringify(safeData)) +
            '</script>';
        htmlContent += '</div>';

        return template.replace('{content}', htmlContent);
    },

    renderBehaviour: function () {
        var self = this;
        var instances = document.querySelectorAll('.' + this.ideviceClass);
        instances.forEach(function (root) {
            if (root.getAttribute('data-hangman-bound') === '1') {
                return;
            }
            root.setAttribute('data-hangman-bound', '1');
            self.setupInstance(root);
        });
    },

    init: function () {
        this.renderBehaviour();
    },

    setupInstance: function (root) {
        var dataNode = root.querySelector('.hangman-random-data');
        var data = { words: [], maxAttempts: 6 };
        var lang = this.getLocale(root);

        if (dataNode) {
            try {
                data = JSON.parse(dataNode.textContent);
            } catch (error) {
                data = { words: [], maxAttempts: 6 };
            }
        }

        root._hangmanRandom = {
            data: data,
            lang: lang,
            messages: this.getMessages(lang),
            successes: 0,
            guessedHits: [],
            guessedMisses: [],
            remainingWords: this.shuffleWords(data.words || []),
            targetWord: '',
        };

        this.buildKeyboard(root);
        this.bindEvents(root);
        this.startRound(root);
    },

    buildKeyboard: function (root) {
        var keyboard = root.querySelector('.hangman-random-keyboard');
        var html = '';
        this.keyboardLetters.split('').forEach(function (letter) {
            html +=
                '<button type="button" class="hangman-key" data-letter="' +
                letter +
                '">' +
                letter +
                '</button>';
        });
        keyboard.innerHTML = html;
    },

    bindEvents: function (root) {
        var self = this;
        var input = root.querySelector('.hangman-guess-input');
        var guessButton = root.querySelector('.hangman-guess-button');
        var resetButton = root.querySelector('.hangman-reset-button');
        var keyboard = root.querySelector('.hangman-random-keyboard');

        guessButton.addEventListener('click', function () {
            self.submitGuess(root, input.value);
        });

        resetButton.addEventListener('click', function () {
            self.startRound(root);
        });

        input.addEventListener('keydown', function (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
                self.submitGuess(root, input.value);
            }
        });

        keyboard.addEventListener('click', function (event) {
            var button = event.target.closest('button[data-letter]');
            if (!button || button.disabled) {
                return;
            }
            self.submitGuess(root, button.getAttribute('data-letter'));
        });
    },

    startRound: function (root) {
        var state = root._hangmanRandom;
        state.guessedHits = [];
        state.guessedMisses = [];
        state.targetWord = this.pickWord(state);
        this.renderKeyboardState(root);
        this.updateView(root, 'playing');
        if (!state.targetWord) {
            this.lockInput(root, true);
            this.setStatus(root, state.messages.statusNoWords, 'lose');
            return;
        }
        var input = root.querySelector('.hangman-guess-input');
        if (input) {
            input.value = '';
            input.focus();
        }
    },

    submitGuess: function (root, rawLetter) {
        var state = root._hangmanRandom;
        var messages = state.messages;
        var letter = this.normalizeLetter(rawLetter);
        var input = root.querySelector('.hangman-guess-input');

        if (!state.targetWord) {
            this.setStatus(root, messages.statusNoWords, 'lose');
            return;
        }

        if (!letter || this.keyboardLetters.indexOf(letter) === -1) {
            this.setStatus(root, messages.invalidLetter, 'playing');
            if (input) {
                input.focus();
            }
            return;
        }

        if (
            state.guessedHits.indexOf(letter) !== -1 ||
            state.guessedMisses.indexOf(letter) !== -1
        ) {
            this.setStatus(root, messages.repeatedLetter, 'playing');
            if (input) {
                input.value = '';
                input.focus();
            }
            return;
        }

        if (this.wordContainsLetter(state.targetWord, letter)) {
            state.guessedHits.push(letter);
        } else {
            state.guessedMisses.push(letter);
        }

        this.updateView(root, 'playing');

        if (this.isWordSolved(state.targetWord, state.guessedHits)) {
            state.successes += 1;
            root.querySelector('.hangman-successes').textContent = state.successes;
            this.setStatus(root, messages.solvedWord, 'win');
            this.lockInput(root, true);
        } else if (state.guessedMisses.length >= state.data.maxAttempts) {
            this.revealWord(root);
            this.setStatus(
                root,
                this.interpolate(messages.failedWord, {
                    word: state.targetWord,
                }),
                'lose'
            );
            this.lockInput(root, true);
        }

        if (input) {
            input.value = '';
            input.focus();
        }
    },

    updateView: function (root, statusClass) {
        var state = root._hangmanRandom;
        var messages = state.messages;
        var fails = state.guessedMisses.length;
        var remaining = Math.max(state.data.maxAttempts - fails, 0);

        this.renderWord(root);
        this.renderKeyboardState(root);
        this.renderFigure(root, fails, state.data.maxAttempts);
        root.querySelector('.hangman-successes').textContent = state.successes;
        root.querySelector('.hangman-remaining').textContent = remaining;
        root.querySelector('.hangman-fails').textContent = fails;
        root.querySelector('.hangman-wrong-letters').textContent =
            state.guessedMisses.length
                ? state.guessedMisses.join(', ')
                : messages.emptyWrongLetters;
        this.lockInput(root, false);
        this.setStatus(root, messages.statusReady, statusClass);
    },

    renderWord: function (root) {
        var state = root._hangmanRandom;
        var wordNode = root.querySelector('.hangman-random-word');
        var html = '';

        this.toCharacterArray(state.targetWord).forEach(function (char) {
            if (!$hangmanrandom.isGuessableChar(char)) {
                html +=
                    '<span class="hangman-random-letter separator">' +
                    $hangmanrandom.escapeHtml(char) +
                    '</span>';
                return;
            }

            var visible =
                state.guessedHits.indexOf(
                    $hangmanrandom.normalizeLetter(char)
                ) !== -1;
            html +=
                '<span class="hangman-random-letter">' +
                (visible ? $hangmanrandom.escapeHtml(char) : '_') +
                '</span>';
        });

        wordNode.innerHTML = html;
    },

    revealWord: function (root) {
        var state = root._hangmanRandom;
        var hits = [];
        this.toCharacterArray(state.targetWord).forEach(function (char) {
            var normalized = $hangmanrandom.normalizeLetter(char);
            if (
                $hangmanrandom.isGuessableChar(char) &&
                hits.indexOf(normalized) === -1
            ) {
                hits.push(normalized);
            }
        });
        state.guessedHits = hits;
        this.renderWord(root);
    },

    renderKeyboardState: function (root) {
        var state = root._hangmanRandom;
        var keys = root.querySelectorAll('.hangman-key');
        keys.forEach(function (key) {
            var letter = key.getAttribute('data-letter');
            key.classList.remove('hit');
            key.classList.remove('miss');
            key.disabled = false;

            if (state.guessedHits.indexOf(letter) !== -1) {
                key.classList.add('hit');
                key.disabled = true;
            } else if (state.guessedMisses.indexOf(letter) !== -1) {
                key.classList.add('miss');
                key.disabled = true;
            }
        });
    },

    renderFigure: function (root, fails, maxAttempts) {
        var visibleParts = Math.ceil((fails / maxAttempts) * 6);
        var parts = root.querySelectorAll('.hangman-part');

        parts.forEach(function (part, index) {
            if (index < visibleParts) {
                part.classList.add('visible');
            } else {
                part.classList.remove('visible');
            }
        });
    },

    lockInput: function (root, disabled) {
        root.querySelector('.hangman-guess-input').disabled = disabled;
        root.querySelector('.hangman-guess-button').disabled = disabled;
        root.querySelectorAll('.hangman-key').forEach(function (key) {
            if (disabled) {
                key.disabled = true;
            }
        });
    },

    setStatus: function (root, message, statusClass) {
        var status = root.querySelector('.hangman-random-status');
        status.className = 'hangman-random-status ' + statusClass;
        status.textContent = message;
    },

    isWordSolved: function (word, guessedHits) {
        var solved = true;
        this.toCharacterArray(word).forEach(function (char) {
            if (
                $hangmanrandom.isGuessableChar(char) &&
                guessedHits.indexOf($hangmanrandom.normalizeLetter(char)) === -1
            ) {
                solved = false;
            }
        });
        return solved;
    },

    wordContainsLetter: function (word, letter) {
        var found = false;
        this.toCharacterArray(word).forEach(function (char) {
            if ($hangmanrandom.normalizeLetter(char) === letter) {
                found = true;
            }
        });
        return found;
    },

    pickWord: function (state) {
        var words = state && Array.isArray(state.data && state.data.words)
            ? state.data.words
            : [];
        if (!words.length) {
            return '';
        }
        if (!Array.isArray(state.remainingWords) || !state.remainingWords.length) {
            state.remainingWords = this.shuffleWords(words);
        }
        return state.remainingWords.shift() || '';
    },

    shuffleWords: function (words) {
        var shuffled = Array.isArray(words) ? words.slice() : [];
        for (var i = shuffled.length - 1; i > 0; i -= 1) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = shuffled[i];
            shuffled[i] = shuffled[j];
            shuffled[j] = temp;
        }
        return shuffled;
    },

    getLocale: function (root) {
        var explicit =
            typeof root === 'string'
                ? root
                : (root && root.locale) ||
                  (root && root.getAttribute && root.getAttribute('data-locale')) ||
                  (root && root.getAttribute && root.getAttribute('data-lang')) ||
                  '';
        var lang =
            explicit ||
            (document.documentElement && document.documentElement.lang) ||
            (navigator.language || 'es');
        return this.normalizeLocale(lang);
    },

    normalizeLocale: function (lang) {
        var normalized = String(lang || 'es')
            .toLowerCase()
            .replace('_', '-')
            .split('-')[0];
        if (normalized === 'va') {
            normalized = 'ca';
        }
        if (this.i18n[normalized]) {
            return normalized;
        }
        return 'es';
    },

    getMessages: function (lang) {
        var locale = this.normalizeLocale(lang);
        return this.i18n[locale] || this.i18n.es;
    },

    interpolate: function (text, values) {
        return String(text).replace(/\{(\w+)\}/g, function (match, key) {
            return Object.prototype.hasOwnProperty.call(values, key)
                ? values[key]
                : match;
        });
    },

    normalizeLetter: function (letter) {
        if (!letter) {
            return '';
        }
        return String(letter)
            .charAt(0)
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toUpperCase();
    },

    isGuessableChar: function (char) {
        return /^[A-ZÑ0-9À-ÿ]$/i.test(char);
    },

    toCharacterArray: function (word) {
        return Array.from(word || '');
    },

    clamp: function (value, min, max) {
        return Math.max(min, Math.min(max, value));
    },

    escapeHtml: function (text) {
        return String(text)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    escapeScript: function (text) {
        return String(text).replace(/</g, '\\u003c');
    },

    getFigureSvg: function () {
        return (
            '<svg class="hangman-random-svg" viewBox="0 0 180 220" aria-hidden="true">' +
            '<path d="M20 200h90M40 200V20h75M115 20v24" fill="none" stroke="#1e293b" stroke-linecap="round" stroke-linejoin="round" stroke-width="8"/>' +
            '<circle class="hangman-part" cx="115" cy="60" r="18" fill="none" stroke="#dc2626" stroke-width="6"/>' +
            '<path class="hangman-part" d="M115 78v46" fill="none" stroke="#dc2626" stroke-linecap="round" stroke-width="6"/>' +
            '<path class="hangman-part" d="M115 92l-24 18" fill="none" stroke="#dc2626" stroke-linecap="round" stroke-width="6"/>' +
            '<path class="hangman-part" d="M115 92l24 18" fill="none" stroke="#dc2626" stroke-linecap="round" stroke-width="6"/>' +
            '<path class="hangman-part" d="M115 124l-22 30" fill="none" stroke="#dc2626" stroke-linecap="round" stroke-width="6"/>' +
            '<path class="hangman-part" d="M115 124l22 30" fill="none" stroke="#dc2626" stroke-linecap="round" stroke-width="6"/>' +
            '</svg>'
        );
    },
};
