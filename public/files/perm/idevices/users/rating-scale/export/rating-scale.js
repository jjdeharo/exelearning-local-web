var $ratingscale = {
    ideviceClass: 'rating-scale-idevice',
    printBodyClass: 'exe-rating-scale-print',
    i18n: {
        es: {
            indicator: 'Indicador',
            calculate: 'Calcular',
            reset: 'Reiniciar',
            print: 'Imprimir',
            printPdf: 'Rellenar e imprimir',
            score: 'Puntuacion',
            percentage: 'Porcentaje',
            average: 'Media',
            selectedLevel: 'Nivel medio',
            answered: 'Indicadores respondidos',
            completeAll:
                'Debes seleccionar un nivel en todos los indicadores antes de calcular.',
            result: 'Has completado {answered} de {total} indicadores. Puntuacion: {score}/{max}.',
            commentLabel: 'Comentario final',
            activity: 'Actividad',
            name: 'Nombre del alumno',
            date: 'Fecha',
            notes: 'Observaciones',
            printScore: '{score}/{max} ({percentage}%)',
            msgTypeGame: 'Escala de valoracion',
            msgUncompletedActivity: 'Actividad incompleta',
            msgSuccessfulActivity: 'Actividad superada. Puntuacion: %s',
            msgUnsuccessfulActivity: 'Actividad no superada. Puntuacion: %s',
        },
        en: {
            indicator: 'Indicator',
            calculate: 'Calculate',
            reset: 'Reset',
            print: 'Print',
            printPdf: 'Fill in and print',
            score: 'Score',
            percentage: 'Percentage',
            average: 'Average',
            selectedLevel: 'Average level',
            answered: 'Answered indicators',
            completeAll:
                'You must select a level for every indicator before calculating.',
            result: 'You completed {answered} out of {total} indicators. Score: {score}/{max}.',
            commentLabel: 'Final comment',
            activity: 'Activity',
            name: 'Student name',
            date: 'Date',
            notes: 'Notes',
            printScore: '{score}/{max} ({percentage}%)',
            msgTypeGame: 'Rating scale',
            msgUncompletedActivity: 'Incomplete activity',
            msgSuccessfulActivity: 'Activity passed. Score: %s',
            msgUnsuccessfulActivity: 'Activity not passed. Score: %s',
        },
        ca: {
            indicator: 'Indicador',
            calculate: 'Calcula',
            reset: 'Reinicia',
            print: 'Imprimeix',
            printPdf: 'Ompli i imprimeix',
            score: 'Puntuacio',
            percentage: 'Percentatge',
            average: 'Mitjana',
            selectedLevel: 'Nivell mitja',
            answered: 'Indicadors resposts',
            completeAll:
                'Has de seleccionar un nivell en tots els indicadors abans de calcular.',
            result: 'Has completat {answered} de {total} indicadors. Puntuacio: {score}/{max}.',
            commentLabel: 'Comentari final',
            activity: 'Activitat',
            name: 'Nom de l alumne',
            date: 'Data',
            notes: 'Observacions',
            printScore: '{score}/{max} ({percentage}%)',
            msgTypeGame: 'Escala de valoracio',
            msgUncompletedActivity: 'Activitat incompleta',
            msgSuccessfulActivity: 'Activitat superada. Puntuacio: %s',
            msgUnsuccessfulActivity: 'Activitat no superada. Puntuacio: %s',
        },
    },

    renderView: function (data, accesibility, template, ideviceId) {
        var ldata = this.normalizeData(data, ideviceId);
        var strings = this.t(ldata.locale);
        var html = '';
        html +=
            '<div id="rating-scale-main-' +
            this.escape(ldata.id) +
            '" class="' +
            this.ideviceClass +
            '">';
        html +=
            '<div class="rating-scale-header"><h3>' +
            this.escape(ldata.title) +
            '</h3>' +
            (ldata.intro
                ? '<div class="rating-scale-intro">' +
                  this.escape(ldata.intro) +
                  '</div>'
                : '') +
            '</div>';
        html +=
            '<div class="rating-scale-table-wrap"><table class="rating-scale-table"><thead><tr>';
        html += '<th scope="col">' + strings.indicator + '</th>';
        for (var i = 0; i < ldata.levels.length; i++) {
            html +=
                '<th scope="col"><span class="rating-scale-level-label">' +
                this.escape(ldata.levels[i].label) +
                '</span><span class="rating-scale-level-points">' +
                this.escape(String(ldata.levels[i].points)) +
                '</span></th>';
        }
        html += '</tr></thead><tbody>';
        for (var j = 0; j < ldata.items.length; j++) {
            var item = ldata.items[j];
            html += '<tr data-item-id="' + this.escape(item.id) + '"><td>';
            html +=
                '<span class="rating-scale-indicator-text">' +
                this.escape(item.text) +
                '</span>';
            if (item.help) {
                html +=
                    '<span class="rating-scale-indicator-help">' +
                    this.escape(item.help) +
                    '</span>';
            }
            html += '</td>';
            for (var k = 0; k < ldata.levels.length; k++) {
                var level = ldata.levels[k];
                html +=
                    '<td><label class="rating-scale-choice"><input type="radio" name="rating-scale-' +
                    this.escape(ldata.id) +
                    '-' +
                    this.escape(item.id) +
                    '" value="' +
                    this.escape(level.id) +
                    '" aria-label="' +
                    this.escape(level.label) +
                    '"></label></td>';
            }
            html += '</tr>';
        }
        html += '</tbody></table></div>';
        html +=
            '<div class="rating-scale-actions"><button type="button" class="btn btn-primary rating-scale-calculate">' +
            strings.calculate +
            '</button><button type="button" class="btn btn-secondary rating-scale-reset">' +
            strings.reset +
            '</button><button type="button" class="btn btn-secondary rating-scale-print">' +
            strings.printPdf +
            '</button></div>';
        html +=
            '<div class="rating-scale-summary">' +
            '<div><strong>' +
            strings.score +
            ':</strong> <span class="rating-scale-result-score">0/0</span></div>' +
            '<div><strong>' +
            strings.percentage +
            ':</strong> <span class="rating-scale-result-percentage">0%</span></div>' +
            '<div><strong>' +
            strings.average +
            ':</strong> <span class="rating-scale-result-average">0</span></div>' +
            '<div><strong>' +
            strings.selectedLevel +
            ':</strong> <span class="rating-scale-result-level">-</span></div>' +
            '<div><strong>' +
            strings.answered +
            ':</strong> <span class="rating-scale-result-answered">0/' +
            ldata.items.length +
            '</span></div>' +
            '</div>';
        html +=
            '<p class="rating-scale-status">' + this.escape(strings.completeAll) + '</p>';
        if (ldata.allowComment) {
            html +=
                '<div class="rating-scale-comment"><label for="rating-scale-comment-' +
                this.escape(ldata.id) +
                '">' +
                this.escape(ldata.commentLabel || strings.commentLabel) +
                '</label><textarea id="rating-scale-comment-' +
                this.escape(ldata.id) +
                '" class="rating-scale-comment-input"></textarea></div>';
        }
        html +=
            '<script type="application/json" class="rating-scale-data">' +
            this.escapeScript(JSON.stringify(ldata)) +
            '</script></div>';
        return template.replace('{content}', html);
    },

    renderBehaviour: function (data, accesibility, ideviceId) {
        var id = ideviceId || data.ideviceId || data.id || '';
        var root = document.getElementById('rating-scale-main-' + id);
        if (!root) return true;
        if (root.getAttribute('data-bound') === '1') return true;
        root.setAttribute('data-bound', '1');
        this.setup(root, data, ideviceId);
        return true;
    },

    init: function () {},

    setup: function (root, rawData, ideviceId) {
        var resolved = this.resolveData(root, rawData);
        var ldata = this.normalizeData(resolved, ideviceId);
        root._ratingScale = {
            data: ldata,
            strings: this.t(ldata.locale),
            results: null,
        };
        this.bind(root);
        this.reset(root);
    },

    bind: function (root) {
        var self = this;
        root.addEventListener('click', function (event) {
            if (event.target.closest('.rating-scale-calculate')) {
                return self.calculate(root);
            }
            if (event.target.closest('.rating-scale-reset')) return self.reset(root);
            if (event.target.closest('.rating-scale-print')) {
                return self.openPrintView(root);
            }
        });
        root.addEventListener('change', function () {
            self.refreshAnswered(root);
        });
    },

    refreshAnswered: function (root) {
        var responses = this.getResponses(root);
        var answered = root.querySelector('.rating-scale-result-answered');
        if (answered) {
            answered.textContent =
                responses.answeredCount + '/' + root._ratingScale.data.items.length;
        }
    },

    calculate: function (root) {
        var responses = this.getResponses(root);
        var state = root._ratingScale;
        if (responses.missing.length) {
            this.updateStatus(root, state.strings.completeAll);
            this.updateMetrics(root, null, responses.answeredCount, state.data.items.length);
            state.data.gameStarted = responses.answeredCount > 0;
            state.data.gameOver = false;
            state.data.scorerp = 0;
            return;
        }
        var results = this.computeResults(state.data, responses.values);
        state.results = results;
        state.data.responses = responses.values;
        state.data.comment = this.getComment(root);
        state.data.gameStarted = true;
        state.data.gameOver = true;
        state.data.scorep = results.scoreOutOfTen;
        state.data.scorerp = results.scoreOutOfTen;
        this.updateMetrics(root, results, responses.answeredCount, state.data.items.length);
        this.updateStatus(
            root,
            this.interpolate(state.strings.result, {
                answered: responses.answeredCount,
                total: state.data.items.length,
                score: results.selectedScore,
                max: results.maxScore,
            })
        );
    },

    check: function (root) {
        return this.calculate(root);
    },

    reset: function (root) {
        root.querySelectorAll('input[type="radio"]').forEach(function (input) {
            input.checked = false;
        });
        var comment = root.querySelector('.rating-scale-comment-input');
        if (comment) comment.value = '';
        var state = root._ratingScale;
        state.results = null;
        state.data.gameStarted = false;
        state.data.gameOver = false;
        state.data.scorep = 0;
        state.data.scorerp = 0;
        state.data.responses = {};
        state.data.comment = '';
        this.updateMetrics(root, null, 0, state.data.items.length);
        this.updateStatus(root, state.strings.completeAll);
    },

    openPrintView: function (root) {
        var state = root._ratingScale;
        var title = state.data.title || 'Rating scale';
        var responses = this.getResponses(root).values;
        var comment = this.getComment(root);
        var popup = window.open('', title);
        if (!popup || !popup.document) return false;
        popup.document.open('text/html');
        popup.document.write(this.buildPrintHtml(state.data, responses, comment));
        popup.document.close();
        return false;
    },

    buildPrintHtml: function (data, responses, comment) {
        var ldata = this.normalizeData(data, data.ideviceId || data.id || '');
        var strings = this.t(ldata.locale);
        var results = this.computeResults(ldata, responses || {});
        var today = new Date();
        var defaultDate = this.formatDate(today, ldata.locale);
        var html = '';
        html += '<!DOCTYPE html>';
        html += '<html class="' + this.printBodyClass + '">';
        html += '<head>';
        html += '<meta charset="utf-8">';
        html += '<title>' + this.escape(ldata.title) + '</title>';
        html += '<style>' + this.getPrintInlineStyles() + '</style>';
        html += '</head>';
        html += '<body class="' + this.printBodyClass + '">';
        html += '<div class="rating-scale-print-wrapper">';
        html += '<div id="rating-scale-print-commands">';
        html +=
            '<input type="button" value="' +
            this.escape(strings.reset) +
            '" id="rating-scale-print-reset">';
        html +=
            ' <input type="button" value="' +
            this.escape(strings.print) +
            '" id="rating-scale-print-button">';
        html += '</div>';
        html += '<div class="rating-scale-print-content">';
        html += '<div class="rating-scale-print-header">';
        html += '<p>';
        html +=
            '<label for="rating-scale-print-activity">' +
            this.escape(strings.activity) +
            ':</label> ';
        html +=
            '<input type="text" id="rating-scale-print-activity" value="' +
            this.escape(ldata.title) +
            '">';
        html +=
            '<label for="rating-scale-print-date">' +
            this.escape(strings.date) +
            ':</label> ';
        html +=
            '<input type="text" id="rating-scale-print-date" value="' +
            this.escape(defaultDate) +
            '">';
        html += '</p>';
        html += '<p>';
        html +=
            '<label for="rating-scale-print-name">' +
            this.escape(strings.name) +
            ':</label> ';
        html += '<input type="text" id="rating-scale-print-name">';
        html +=
            '<label for="rating-scale-print-score">' +
            this.escape(strings.score) +
            ':</label> ';
        html +=
            '<input type="text" id="rating-scale-print-score" value="' +
            this.escape(
                this.interpolate(strings.printScore, {
                    score: results.selectedScore,
                    max: results.maxScore,
                    percentage: results.percentage,
                })
            ) +
            '" readonly>';
        html += '</p>';
        html += '</div>';
        html +=
            '<table class="rating-scale-table rating-scale-print-table"><caption>' +
            this.escape(ldata.title) +
            '</caption><thead><tr>';
        html += '<th scope="col">' + this.escape(strings.indicator) + '</th>';
        for (var i = 0; i < ldata.levels.length; i++) {
            html +=
                '<th scope="col"><span class="rating-scale-level-label">' +
                this.escape(ldata.levels[i].label) +
                '</span><span class="rating-scale-level-points">' +
                this.escape(String(ldata.levels[i].points)) +
                '</span></th>';
        }
        html += '</tr></thead><tbody>';
        for (var j = 0; j < ldata.items.length; j++) {
            var item = ldata.items[j];
            html += '<tr data-item-id="' + this.escape(item.id) + '"><td>';
            html +=
                '<span class="rating-scale-indicator-text">' +
                this.escape(item.text) +
                '</span>';
            if (item.help) {
                html +=
                    '<span class="rating-scale-indicator-help">' +
                    this.escape(item.help) +
                    '</span>';
            }
            html += '</td>';
            for (var k = 0; k < ldata.levels.length; k++) {
                var level = ldata.levels[k];
                var checked = responses && responses[item.id] === level.id;
                html +=
                    '<td><label class="rating-scale-choice"><input type="radio" name="rating-scale-print-' +
                    this.escape(item.id) +
                    '" value="' +
                    this.escape(level.id) +
                    '"' +
                    (checked ? ' checked="checked"' : '') +
                    ' aria-label="' +
                    this.escape(level.label) +
                    '"></label></td>';
            }
            html += '</tr>';
        }
        html += '</tbody></table>';
        html += '<div class="rating-scale-print-footer">';
        html +=
            '<label for="rating-scale-print-notes">' +
            this.escape(strings.notes) +
            ':</label>';
        html +=
            '<textarea id="rating-scale-print-notes" rows="6">' +
            this.escape(comment || '') +
            '</textarea>';
        html += '</div>';
        html +=
            '<script type="application/json" id="rating-scale-print-data">' +
            this.escapeScript(JSON.stringify(ldata)) +
            '<\/script>';
        html += '<script>' + this.getPrintInlineScript() + '<\/script>';
        html += '</div></div></body></html>';
        return html;
    },

    getPrintInlineStyles: function () {
        return [
            'html.exe-rating-scale-print, body.exe-rating-scale-print { margin: 0; padding: 0; }',
            'body.exe-rating-scale-print { background: #d8d8d8; color: #111; font-family: Arial, Helvetica, sans-serif; font-size: 10pt; line-height: 1.45; }',
            'body.exe-rating-scale-print .rating-scale-print-wrapper { background: #fff; box-shadow: 0 0 0.5cm rgba(0,0,0,0.35); margin: 0 auto 0.5cm; min-height: 21cm; position: relative; width: 29.7cm; }',
            'body.exe-rating-scale-print .rating-scale-print-content { padding: 1cm 1.5cm; }',
            'body.exe-rating-scale-print .rating-scale-print-header p { display: flex; flex-wrap: wrap; gap: 0.5cm; line-height: 2.2em; margin: 0 0 0.2cm; }',
            'body.exe-rating-scale-print .rating-scale-print-header label, body.exe-rating-scale-print .rating-scale-print-footer label { font-weight: 700; }',
            'body.exe-rating-scale-print .rating-scale-print-header label { display: inline-block; min-width: 9em; text-align: right; }',
            "body.exe-rating-scale-print input[type='text'] { border: none; border-bottom: 1px solid #000; box-sizing: border-box; font-family: Arial, Helvetica, sans-serif; font-size: 10pt; min-width: 0; padding: 0.08cm 0.1cm; }",
            'body.exe-rating-scale-print #rating-scale-print-activity, body.exe-rating-scale-print #rating-scale-print-name { flex: 1 1 11cm; }',
            'body.exe-rating-scale-print #rating-scale-print-date, body.exe-rating-scale-print #rating-scale-print-score { flex: 0 0 4.6cm; }',
            'body.exe-rating-scale-print .rating-scale-print-table { border-collapse: collapse; margin-top: 0.9cm; table-layout: fixed; width: 100%; }',
            'body.exe-rating-scale-print .rating-scale-print-table caption { font-size: 1.1em; font-weight: 700; margin-bottom: 0.25cm; }',
            'body.exe-rating-scale-print .rating-scale-print-table, body.exe-rating-scale-print .rating-scale-print-table th, body.exe-rating-scale-print .rating-scale-print-table td { border: 1px solid #000; }',
            'body.exe-rating-scale-print .rating-scale-print-table th, body.exe-rating-scale-print .rating-scale-print-table td { padding: 0.18cm 0.22cm; text-align: center; vertical-align: middle; }',
            'body.exe-rating-scale-print .rating-scale-print-table th:first-child, body.exe-rating-scale-print .rating-scale-print-table td:first-child { text-align: left; width: 42%; }',
            'body.exe-rating-scale-print .rating-scale-level-label { display: block; font-weight: 700; }',
            'body.exe-rating-scale-print .rating-scale-level-points { display: block; font-size: 9pt; margin-top: 0.05cm; opacity: 0.85; }',
            'body.exe-rating-scale-print .rating-scale-indicator-text { display: block; font-weight: 600; }',
            'body.exe-rating-scale-print .rating-scale-indicator-help { color: #444; display: block; font-size: 9pt; font-style: italic; margin-top: 0.08cm; }',
            'body.exe-rating-scale-print .rating-scale-choice { align-items: center; display: flex; justify-content: center; }',
            "body.exe-rating-scale-print .rating-scale-choice input[type='radio'] { height: 0.42cm; width: 0.42cm; }",
            'body.exe-rating-scale-print .rating-scale-print-footer { margin-top: 0.9cm; }',
            "body.exe-rating-scale-print #rating-scale-print-notes { border: 1px solid #000; box-sizing: border-box; display: block; font-family: Arial, Helvetica, sans-serif; font-size: 10pt; height: 5cm; margin-top: 0.1cm; max-width: 100%; padding: 0.12cm; width: 100%; }",
            'body.exe-rating-scale-print #rating-scale-print-commands { left: 0.3cm; position: absolute; top: 0.2cm; }',
            'body.exe-rating-scale-print #rating-scale-print-commands input { margin-right: 0.15cm; }',
            '@media print { html.exe-rating-scale-print, body.exe-rating-scale-print, body.exe-rating-scale-print .rating-scale-print-wrapper { box-shadow: none; margin: 0; padding: 0; } body.exe-rating-scale-print #rating-scale-print-commands { display: none; } }',
            '@page { margin: 0; size: auto; }',
        ].join('\n');
    },

    getPrintInlineScript: function () {
        return [
            '(function(){',
            "var dataNode = document.getElementById('rating-scale-print-data');",
            'if (!dataNode) return;',
            'var data = {};',
            'try { data = JSON.parse(dataNode.textContent || "{}"); } catch (error) { data = {}; }',
            'var scoreField = document.getElementById("rating-scale-print-score");',
            'var nameField = document.getElementById("rating-scale-print-name");',
            'var notesField = document.getElementById("rating-scale-print-notes");',
            'function getResponses(){',
            '  var responses = {};',
            '  document.querySelectorAll(".rating-scale-print-table tbody tr").forEach(function(row){',
            '    var itemId = row.getAttribute("data-item-id");',
            '    var checked = row.querySelector("input[type=radio]:checked");',
            '    if (!itemId || !checked) return;',
            '    responses[itemId] = checked.value;',
            '  });',
            '  return responses;',
            '}',
            'function computeResults(){',
            '  var selectedScore = 0;',
            '  var maxScore = 0;',
            '  var levels = Array.isArray(data.levels) ? data.levels : [];',
            '  var items = Array.isArray(data.items) ? data.items : [];',
            '  var scoreMap = {};',
            '  levels.forEach(function(level){ scoreMap[level.id] = level; });',
            '  var maxPoints = 0;',
            '  levels.forEach(function(level){ maxPoints = Math.max(maxPoints, Number(level.points) || 0); });',
            '  var responses = getResponses();',
            '  items.forEach(function(item){',
            '    maxScore += maxPoints;',
            '    var levelId = responses[item.id];',
            '    if (!levelId || !scoreMap[levelId]) return;',
            '    selectedScore += Number(scoreMap[levelId].points) || 0;',
            '  });',
            '  var percentage = maxScore ? Math.round((selectedScore / maxScore) * 100) : 0;',
            '  return { selectedScore: selectedScore, maxScore: maxScore, percentage: percentage };',
            '}',
            'function updateScore(){',
            '  if (!scoreField) return;',
            '  var results = computeResults();',
            '  scoreField.value = results.selectedScore + "/" + results.maxScore + " (" + results.percentage + "%)";',
            '}',
            'document.querySelectorAll(".rating-scale-print-table input[type=radio]").forEach(function(input){',
            '  input.addEventListener("change", updateScore);',
            '});',
            'var resetButton = document.getElementById("rating-scale-print-reset");',
            'if (resetButton) {',
            '  resetButton.addEventListener("click", function(){',
            '    document.querySelectorAll(".rating-scale-print-table input[type=radio]").forEach(function(input){ input.checked = false; });',
            '    if (nameField) nameField.value = "";',
            '    if (notesField) notesField.value = "";',
            '    updateScore();',
            '    if (nameField) nameField.focus();',
            '  });',
            '}',
            'var printButton = document.getElementById("rating-scale-print-button");',
            'if (printButton) {',
            '  printButton.addEventListener("click", function(){',
            '    try { window.focus(); window.print(); } catch (error) {}',
            '  });',
            '}',
            'updateScore();',
            '})();',
        ].join('\n');
    },

    initPrintView: function (doc) {
        doc = doc || document;
        if (!doc.body || !doc.body.classList.contains(this.printBodyClass)) return;
        var dataNode = doc.getElementById('rating-scale-print-data');
        if (!dataNode) return;
        var data = {};
        try {
            data = JSON.parse(dataNode.textContent);
        } catch (error) {
            data = {};
        }
        var self = this;
        var syncScore = function () {
            self.updatePrintScore(doc, data);
        };
        doc.querySelectorAll('.rating-scale-print-table input[type="radio"]').forEach(
            function (input) {
                input.addEventListener('change', syncScore);
            }
        );
        var resetButton = doc.getElementById('rating-scale-print-reset');
        if (resetButton) {
            resetButton.addEventListener('click', function () {
                doc.querySelectorAll(
                    '.rating-scale-print-table input[type="radio"]'
                ).forEach(function (input) {
                    input.checked = false;
                });
                var notes = doc.getElementById('rating-scale-print-notes');
                var name = doc.getElementById('rating-scale-print-name');
                if (notes) notes.value = '';
                if (name) name.value = '';
                self.updatePrintScore(doc, data);
                if (name) name.focus();
            });
        }
        var printButton = doc.getElementById('rating-scale-print-button');
        if (printButton) {
            printButton.addEventListener('click', function () {
                try {
                    doc.defaultView.print();
                } catch (error) {
                    //
                }
            });
        }
        this.updatePrintScore(doc, data);
    },

    updatePrintScore: function (doc, data) {
        var responses = {};
        doc.querySelectorAll('.rating-scale-print-table tbody tr').forEach(function (row) {
            var itemId = row.getAttribute('data-item-id');
            var checked = row.querySelector('input[type="radio"]:checked');
            if (!itemId || !checked) return;
            responses[itemId] = checked.value;
        });
        var results = this.computeResults(data, responses);
        var strings = this.t(data.locale);
        var field = doc.getElementById('rating-scale-print-score');
        if (field) {
            field.value = this.interpolate(strings.printScore, {
                score: results.selectedScore,
                max: results.maxScore,
                percentage: results.percentage,
            });
        }
    },

    updateMetrics: function (root, results, answeredCount, totalCount) {
        root.querySelector('.rating-scale-result-score').textContent = results
            ? results.selectedScore + '/' + results.maxScore
            : '0/0';
        root.querySelector('.rating-scale-result-percentage').textContent = results
            ? results.percentage + '%'
            : '0%';
        root.querySelector('.rating-scale-result-average').textContent = results
            ? String(results.average)
            : '0';
        root.querySelector('.rating-scale-result-level').textContent = results
            ? results.levelLabel
            : '-';
        root.querySelector('.rating-scale-result-answered').textContent =
            answeredCount + '/' + totalCount;
    },

    updateStatus: function (root, text) {
        var status = root.querySelector('.rating-scale-status');
        if (status) status.textContent = text;
    },

    getResponses: function (root) {
        var data = root._ratingScale.data;
        var values = {};
        var missing = [];
        for (var i = 0; i < data.items.length; i++) {
            var item = data.items[i];
            var checked = root.querySelector(
                'input[name="rating-scale-' +
                    data.id +
                    '-' +
                    item.id +
                    '"]:checked'
            );
            if (!checked) {
                missing.push(item.id);
                continue;
            }
            values[item.id] = checked.value;
        }
        return {
            values: values,
            missing: missing,
            answeredCount: Object.keys(values).length,
        };
    },

    computeResults: function (data, responses) {
        var selectedScore = 0;
        var maxScore = 0;
        var answeredCount = 0;
        var scoreMap = {};
        for (var i = 0; i < data.levels.length; i++) {
            scoreMap[data.levels[i].id] = data.levels[i];
        }
        var maxPoints = data.levels.reduce(function (max, level) {
            return Math.max(max, level.points);
        }, 0);
        var minPoints = data.levels.reduce(function (min, level) {
            return Math.min(min, level.points);
        }, data.levels.length ? data.levels[0].points : 0);
        for (var j = 0; j < data.items.length; j++) {
            maxScore += maxPoints;
            if (!responses[data.items[j].id]) continue;
            answeredCount++;
            selectedScore += scoreMap[responses[data.items[j].id]].points;
        }
        var percentage = maxScore
            ? Math.round((selectedScore / maxScore) * 100)
            : 0;
        var scoreOutOfTen = Math.round((percentage / 10) * 100) / 100;
        var average = answeredCount
            ? Math.round((selectedScore / answeredCount) * 100) / 100
            : 0;
        var levelLabel = '-';
        var nearestDistance = Infinity;
        for (var k = 0; k < data.levels.length; k++) {
            var distance = Math.abs(data.levels[k].points - average);
            if (distance < nearestDistance) {
                nearestDistance = distance;
                levelLabel = data.levels[k].label;
            }
        }
        if (!answeredCount && data.levels.length) {
            levelLabel = data.levels[0].points === minPoints ? '-' : levelLabel;
        }
        return {
            selectedScore: selectedScore,
            maxScore: maxScore,
            percentage: percentage,
            scoreOutOfTen: scoreOutOfTen,
            average: average,
            levelLabel: levelLabel,
        };
    },

    getComment: function (root) {
        var field = root.querySelector('.rating-scale-comment-input');
        return field ? field.value.trim() : '';
    },

    formatDate: function (date, locale) {
        try {
            return new Intl.DateTimeFormat(locale || 'es', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
            }).format(date);
        } catch (error) {
            return date.toISOString().slice(0, 10);
        }
    },

    resolveData: function (root, rawData) {
        if (rawData && typeof rawData === 'object' && Array.isArray(rawData.items)) {
            return rawData;
        }
        try {
            return JSON.parse(root.querySelector('.rating-scale-data').textContent);
        } catch (error) {
            return rawData || {};
        }
    },

    normalizeData: function (data, ideviceId) {
        var locale = this.normalizeLocale(data.locale);
        var strings = this.t(locale);
        var id = ideviceId || data.ideviceId || data.id || '';
        return {
            id: id,
            ideviceId: id,
            title: data.title || 'Rating scale',
            intro: data.intro || '',
            locale: locale,
            isInExe:
                typeof eXe.app.isInExe === 'function' ? eXe.app.isInExe() : false,
            allowComment:
                typeof data.allowComment === 'boolean' ? data.allowComment : true,
            commentLabel: data.commentLabel || strings.commentLabel,
            scorerp: data.scorerp ?? 0,
            scorep: data.scorep ?? 0,
            gameStarted: false,
            gameOver: false,
            main: 'rating-scale-main-' + id,
            idevice: 'rating-scale-idevice',
            msgs: Object.assign({}, strings, data.msgs || {}),
            levels: this.normalizeLevels(data.levels || []),
            items: this.normalizeItems(data.items || []),
        };
    },

    normalizeLevels: function (levels) {
        return (levels || []).map(function (item, index) {
            return {
                id: item.id || 'rating-scale-level-' + index,
                label: item.label || '',
                points: Number.isFinite(item.points)
                    ? item.points
                    : parseInt(item.points, 10) || 0,
            };
        });
    },

    normalizeItems: function (items) {
        return (items || []).map(function (item, index) {
            return {
                id: item.id || 'rating-scale-item-' + index,
                text: item.text || '',
                help: item.help || '',
            };
        });
    },

    interpolate: function (text, values) {
        return String(text || '').replace(/\{(\w+)\}/g, function (match, key) {
            return Object.prototype.hasOwnProperty.call(values, key)
                ? values[key]
                : match;
        });
    },

    t: function (locale) {
        return this.i18n[this.normalizeLocale(locale)] || this.i18n.es;
    },

    normalizeLocale: function (locale) {
        locale = String(locale || '').toLowerCase();
        if (locale.indexOf('ca') === 0 || locale.indexOf('val') === 0) return 'ca';
        if (locale.indexOf('en') === 0) return 'en';
        return 'es';
    },

    escape: function (value) {
        return String(value || '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    },

    escapeScript: function (value) {
        return String(value || '').replace(/</g, '\\u003c');
    },
};

if (typeof window !== 'undefined' && window.addEventListener) {
    window.addEventListener('load', function () {
        if (
            document.body &&
            document.body.classList.contains($ratingscale.printBodyClass)
        ) {
            $ratingscale.initPrintView(document);
        }
    });
}
