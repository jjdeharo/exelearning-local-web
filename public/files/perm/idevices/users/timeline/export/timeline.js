var $timeline = {
    ideviceClass: 'timeline-idevice',
    scormAPIwrapper: 'libs/SCORM_API_wrapper.js',
    scormFunctions: 'libs/SCOFunctions.js',
    i18n: {
        es: {
            check: 'Comprobar',
            reset: 'Reiniciar',
            solution: 'Mostrar solucion',
            up: '↑',
            down: '↓',
            upLabel: 'Mover arriba',
            downLabel: 'Mover abajo',
            detailEmpty: 'Selecciona un evento para ver su contenido.',
            feedback: 'Retroalimentacion',
            statusExplore: 'Explora los eventos en orden cronologico.',
            statusReady: 'Reordena los eventos y comprueba tu propuesta.',
            statusResult: 'Has colocado bien {hits} de {total} eventos.',
            openResource: 'Abrir recurso',
            msgYouScore: 'Tu puntuacion',
            msgScore: 'Puntuacion',
            msgWeight: 'Peso',
            msgOnlySaveScore: 'Solo puedes guardar la puntuacion una vez.',
            msgOnlySave: 'Solo puedes guardar una vez.',
            msgOnlySaveAuto: 'La puntuacion se guarda automaticamente y solo puedes jugar una vez.',
            msgSaveAuto: 'La puntuacion se guardara automaticamente.',
            msgSeveralScore: 'Puedes guardar la puntuacion tantas veces como quieras.',
            msgPlaySeveralTimes: 'Puedes realizar la actividad tantas veces como quieras.',
            msgActityComply: 'Ya has realizado esta actividad.',
            msgUncompletedActivity: 'Actividad incompleta',
            msgSuccessfulActivity: 'Actividad superada. Puntuacion: %s',
            msgUnsuccessfulActivity: 'Actividad no superada. Puntuacion: %s',
            msgTypeGame: 'Linea temporal',
            msgEndGameScore: 'Comprueba la actividad antes de guardar la puntuacion.',
            mediaImage: 'Imagen',
            mediaAudio: 'Audio',
            mediaVideo: 'Video',
        },
        en: {
            check: 'Check',
            reset: 'Reset',
            solution: 'Show solution',
            up: '↑',
            down: '↓',
            upLabel: 'Move up',
            downLabel: 'Move down',
            detailEmpty: 'Select an event to view its content.',
            feedback: 'Feedback',
            statusExplore: 'Explore the events in chronological order.',
            statusReady: 'Reorder the events and check your proposal.',
            statusResult: 'You placed {hits} out of {total} events correctly.',
            openResource: 'Open resource',
            msgYouScore: 'Your score',
            msgScore: 'Score',
            msgWeight: 'Weight',
            msgOnlySaveScore: 'You can only save the score once.',
            msgOnlySave: 'You can only save once.',
            msgOnlySaveAuto: 'The score is saved automatically and you can only play once.',
            msgSaveAuto: 'The score will be saved automatically.',
            msgSeveralScore: 'You can save the score as many times as you want.',
            msgPlaySeveralTimes: 'You can do this activity as many times as you want.',
            msgActityComply: 'You have already completed this activity.',
            msgUncompletedActivity: 'Incomplete activity',
            msgSuccessfulActivity: 'Activity passed. Score: %s',
            msgUnsuccessfulActivity: 'Activity not passed. Score: %s',
            msgTypeGame: 'Timeline',
            msgEndGameScore: 'Check the activity before saving the score.',
            mediaImage: 'Image',
            mediaAudio: 'Audio',
            mediaVideo: 'Video',
        },
        ca: {
            check: 'Comprova',
            reset: 'Reinicia',
            solution: 'Mostra la solucio',
            up: '↑',
            down: '↓',
            upLabel: 'Mou amunt',
            downLabel: 'Mou avall',
            detailEmpty: 'Selecciona un esdeveniment per a veure’n el contingut.',
            feedback: 'Retroalimentacio',
            statusExplore: 'Explora els esdeveniments en ordre cronologic.',
            statusReady: 'Reordena els esdeveniments i comprova la teua proposta.',
            statusResult: 'Has col·locat correctament {hits} de {total} esdeveniments.',
            openResource: 'Obri el recurs',
            msgYouScore: 'La teua puntuacio',
            msgScore: 'Puntuacio',
            msgWeight: 'Pes',
            msgOnlySaveScore: 'Nomes pots guardar la puntuacio una vegada.',
            msgOnlySave: 'Nomes pots guardar una vegada.',
            msgOnlySaveAuto: 'La puntuacio es guarda automaticament i nomes pots jugar una vegada.',
            msgSaveAuto: 'La puntuacio es guardara automaticament.',
            msgSeveralScore: 'Pots guardar la puntuacio tantes vegades com vulgues.',
            msgPlaySeveralTimes: 'Pots fer esta activitat tantes vegades com vulgues.',
            msgActityComply: 'Ja has fet esta activitat.',
            msgUncompletedActivity: 'Activitat incompleta',
            msgSuccessfulActivity: 'Activitat superada. Puntuacio: %s',
            msgUnsuccessfulActivity: 'Activitat no superada. Puntuacio: %s',
            msgTypeGame: 'Linia temporal',
            msgEndGameScore: 'Comprova l’activitat abans de guardar la puntuacio.',
            mediaImage: 'Imatge',
            mediaAudio: 'Audio',
            mediaVideo: 'Video',
        },
    },

    renderView: function (data, accesibility, template, ideviceId) {
        var ldata = this.normalizeData(data, ideviceId);
        var strings = this.t(ldata.locale);
        var showScoreButton = document.body.classList.contains('exe-scorm') && ldata.isScorm > 0 ? 'inline-block' : 'none';
        var html = '';
        html += '<div class="game-evaluation-ids js-hidden" data-id="' + this.escape(ldata.id) + '" data-evaluationb="' + ldata.evaluation + '" data-evaluationid="' + this.escape(ldata.evaluationID) + '"></div>';
        html += '<div id="timeline-main-' + this.escape(ldata.id) + '" class="' + this.ideviceClass + ' timeline-style-' + this.escape(ldata.styleVariant) + '" data-mode="' + this.escape(ldata.mode) + '" data-style="' + this.escape(ldata.styleVariant) + '">';
        html += '<div class="timeline-header"><h3>' + this.escape(ldata.title) + '</h3>' + (ldata.intro ? '<div class="timeline-rich-content timeline-intro">' + ldata.intro + '</div>' : '') + '</div>';
        if (ldata.mode === 'order') {
            html += '<div class="timeline-toolbar"><button type="button" class="primary timeline-check">' + strings.check + '</button><button type="button" class="timeline-reset">' + strings.reset + '</button><button type="button" class="timeline-solution">' + strings.solution + '</button></div>';
        }
        html += '<p class="timeline-status">' + (ldata.mode === 'order' ? strings.statusReady : strings.statusExplore) + '</p>';
        html += '<div class="timeline-layout"><ol class="timeline-events"></ol><aside class="timeline-detail"><p class="timeline-empty-detail">' + strings.detailEmpty + '</p></aside></div>';
        html += '<div class="Games-BottonContainer"><div class="Games-GetScore"><input type="button" value="' + this.escape(ldata.textButtonScorm) + '" class="feedbackbutton Games-SendScore timeline-send-score" style="display:' + showScoreButton + '" /><span class="Games-RepeatActivity"></span></div></div>';
        html += '<script type="application/json" class="timeline-data">' + this.escapeScript(JSON.stringify(ldata)) + '</script></div>';
        return template.replace('{content}', html);
    },

    renderBehaviour: function (data, accesibility, ideviceId) {
        if (typeof data === 'object' && data !== null) {
            var root = document.getElementById('timeline-main-' + (ideviceId || data.ideviceId || data.id || ''));
            if (root && root.getAttribute('data-bound') !== '1') {
                root.setAttribute('data-bound', '1');
                this.setup(root, data, ideviceId);
                return true;
            }
        }
        var initialized = this.bindPendingRoots();
        if (!initialized) this.deferBinding();
        return true;
    },

    bindPendingRoots: function () {
        var roots = document.querySelectorAll('.' + this.ideviceClass);
        var initialized = 0;
        for (var i = 0; i < roots.length; i++) {
            if (roots[i].getAttribute('data-bound') === '1') continue;
            roots[i].setAttribute('data-bound', '1');
            this.setup(roots[i], null, null);
            initialized++;
        }
        return initialized;
    },

    deferBinding: function () {
        var self = this;
        if (this._bindingTimer) return;
        this._bindingTimer = window.setTimeout(function () {
            self._bindingTimer = null;
            self.bindPendingRoots();
        }, 60);
    },

    init: function () {
        this.renderBehaviour();
    },

    setup: function (root, rawData, ideviceId) {
        var resolvedData = this.resolveData(root, rawData);
        var ldata = this.normalizeData(resolvedData, ideviceId);
        root._timeline = {
            data: ldata,
            strings: this.t(ldata.locale),
            ordered: this.sortEvents(ldata.events),
            current: [],
            selectedId: '',
            results: null,
            solutionShown: false,
        };
        if (!$('html').is('#exe-index')) {
            this.scormAPIwrapper = '../libs/SCORM_API_wrapper.js';
            this.scormFunctions = '../libs/SCOFunctions.js';
        }
        if (document.body.classList.contains('exe-scorm') && ldata.isScorm > 0) {
            if (typeof window.scorm !== 'undefined' && window.scorm.init()) this.initScormData(ldata);
            else this.loadSCORM_API_wrapper(ldata);
        } else if (ldata.isScorm > 0) {
            $exeDevices.iDevice.gamification.scorm.registerActivity(ldata);
        }
        if (ldata.evaluation && ldata.evaluationID && ldata.evaluationID.length > 4) {
            setTimeout(function () {
                $exeDevices.iDevice.gamification.report.updateEvaluationIcon(ldata, ldata.isInExe);
            }, 300);
        }
        this.reset(root);
        this.bind(root);
        this.paint(root);
    },

    resolveData: function (root, rawData) {
        if (rawData && typeof rawData === 'object' && Array.isArray(rawData.events) && rawData.events.length) return rawData;
        var embedded = this.read(root);
        if (embedded && typeof embedded === 'object' && Array.isArray(embedded.events) && embedded.events.length) return embedded;
        var host = root.closest('.idevice_node');
        if (!host) return rawData || embedded || {};
        var attr = host.getAttribute('data-idevice-json-data');
        if (!attr) return rawData || embedded || {};
        try {
            var parsed = JSON.parse(attr);
            if (parsed && typeof parsed === 'object') return parsed;
        } catch (error) {}
        return rawData || embedded || {};
    },

    bind: function (root) {
        var self = this;
        root.addEventListener('click', function (event) {
            var btn = event.target.closest('button[data-action]');
            if (btn) return self.move(root, btn.getAttribute('data-action'), btn.getAttribute('data-id'));
            var card = event.target.closest('.timeline-card');
            if (card && !event.target.closest('.timeline-card-actions')) return self.select(root, card.getAttribute('data-id'));
            if (event.target.closest('.timeline-check')) return self.check(root);
            if (event.target.closest('.timeline-reset')) { self.reset(root); return self.paint(root); }
            if (event.target.closest('.timeline-solution')) return self.showSolution(root);
            if (event.target.closest('.timeline-send-score')) return self.sendScore(root, false);
        });
        root.addEventListener('dragstart', function (event) {
            var card = event.target.closest('.timeline-card');
            if (!card || root._timeline.data.mode !== 'order') return;
            event.dataTransfer.setData('text/plain', card.getAttribute('data-id'));
        });
        root.addEventListener('dragover', function (event) {
            if (!event.target.closest('.timeline-card') || root._timeline.data.mode !== 'order') return;
            event.preventDefault();
        });
        root.addEventListener('drop', function (event) {
            var card = event.target.closest('.timeline-card');
            if (!card || root._timeline.data.mode !== 'order') return;
            event.preventDefault();
            self.drop(root, event.dataTransfer.getData('text/plain'), card.getAttribute('data-id'));
        });
        window.addEventListener('resize', function () {
            self.positionDetail(root);
        });
    },

    paint: function (root) {
        root.querySelector('.timeline-events').innerHTML = this.cards(root._timeline);
        root.querySelector('.timeline-detail').innerHTML = this.detail(root._timeline);
        root.querySelector('.timeline-status').textContent = this.status(root._timeline);
        this.positionDetail(root);
        this.deferDetailPosition(root);
    },

    cards: function (state) {
        var html = '';
        for (var i = 0; i < state.current.length; i++) {
            var item = state.current[i];
            var resultClass = '';
            var mediaIcon = this.cardMediaIcon(item, state.strings);
            var isSelected = state.selectedId === item.id;
            var mainClass = 'timeline-card-main' + (state.data.showDates ? ' timeline-has-date' : '');
            if (state.results && typeof state.results[item.id] === 'boolean') resultClass = state.results[item.id] ? ' correct' : ' incorrect';
            html += '<li class="timeline-card' + (isSelected ? ' selected' : '') + resultClass + '" data-id="' + this.escape(item.id) + '" draggable="' + (state.data.mode === 'order' ? 'true' : 'false') + '">';
            html += '<div class="timeline-card-header"><div class="' + mainClass + '">';
            if (state.data.showDates) html += '<div class="timeline-date">' + this.escape(item.displayDate) + '</div>';
            html += '<div class="timeline-title-row"><h4 class="timeline-title">' + this.escape(item.title) + '</h4>' + mediaIcon + '</div></div>';
            if (state.data.mode === 'order') {
                html += '<div class="timeline-card-actions"><button type="button" aria-label="' + state.strings.upLabel + '" title="' + state.strings.upLabel + '" data-action="up" data-id="' + this.escape(item.id) + '">' + state.strings.up + '</button><button type="button" aria-label="' + state.strings.downLabel + '" title="' + state.strings.downLabel + '" data-action="down" data-id="' + this.escape(item.id) + '">' + state.strings.down + '</button></div>';
            }
            html += '</div>';
            if (isSelected) html += '<div class="timeline-card-detail-mobile">' + this.detailContent(item, state) + '</div>';
            html += '</li>';
        }
        return html;
    },

    cardMediaIcon: function (item, strings) {
        if (!item || !item.mediaType || item.mediaType === 'none') return '';
        var icon = '';
        var label = '';
        if (item.mediaType === 'image') {
            icon = 'image';
            label = strings.mediaImage;
        } else if (item.mediaType === 'audio') {
            icon = 'volume_up';
            label = strings.mediaAudio;
        } else if (item.mediaType === 'video') {
            icon = item.videoSource === 'external' ? 'smart_display' : 'movie';
            label = strings.mediaVideo;
        }
        if (!icon) return '';
        return '<span class="timeline-media-icon auto-icon" aria-label="' + this.escape(label) + '" title="' + this.escape(label) + '">' + icon + '</span>';
    },

    detail: function (state) {
        var item = this.findById(state.current, state.selectedId);
        if (!item) return '<p class="timeline-empty-detail">' + state.strings.detailEmpty + '</p>';
        return this.detailContent(item, state);
    },

    detailContent: function (item, state) {
        var html = '<h4>' + this.escape(item.title) + '</h4>';
        if (state.data.showDates) html += '<p class="timeline-date">' + this.escape(item.displayDate) + '</p>';
        if (item.text) html += '<div class="timeline-rich-content">' + item.text + '</div>';
        html += this.media(item, state.data.id, state.strings);
        if (item.mediaCaption) html += '<p class="timeline-caption">' + this.escape(item.mediaCaption) + '</p>';
        if (item.feedback && (state.data.mode === 'explore' || state.results || state.solutionShown)) {
            html += '<div class="timeline-feedback"><strong>' + state.strings.feedback + ':</strong><div class="timeline-rich-content">' + item.feedback + '</div></div>';
        }
        return html;
    },

    media: function (item, ideviceId, strings) {
        if (item.mediaType === 'video' && item.videoSource === 'external') {
            var embed = this.embedUrl(item.videoUrl);
            if (embed) return '<div class="timeline-media"><iframe loading="lazy" allowfullscreen src="' + this.escape(embed) + '" title="' + this.escape(item.title) + '"></iframe></div>';
            if (item.videoUrl) return '<div class="timeline-media"><p><a target="_blank" rel="noopener" href="' + this.escape(item.videoUrl) + '">' + strings.openResource + '</a></p></div>';
            return '';
        }
        var src = this.resolvePath(item.mediaType === 'video' ? item.mediaSrc : item.mediaSrc, ideviceId);
        if (item.mediaType === 'video' && item.videoSource !== 'external') {
            if (!src) return '';
            var poster = this.resolvePath(item.posterSrc, ideviceId);
            return '<div class="timeline-media"><video controls preload="metadata"' + (poster ? ' poster="' + this.escape(poster) + '"' : '') + ' src="' + this.escape(src) + '"></video></div>';
        }
        if (!src) return '';
        if (item.mediaType === 'image') return '<div class="timeline-media"><img src="' + this.escape(src) + '" alt="' + this.escape(item.title) + '"></div>';
        if (item.mediaType === 'audio') return '<div class="timeline-media"><audio controls src="' + this.escape(src) + '"></audio></div>';
        return '';
    },

    status: function (state) {
        if (state.data.mode !== 'order') return state.strings.statusExplore;
        if (!state.results) return state.strings.statusReady;
        var hits = 0;
        Object.keys(state.results).forEach(function (id) { if (state.results[id]) hits++; });
        return state.strings.statusResult.replace('{hits}', hits).replace('{total}', state.current.length);
    },

    move: function (root, action, id) {
        var state = root._timeline;
        var index = this.indexById(state.current, id);
        if (index === -1) return;
        if (action === 'up' && index > 0) this.swap(state.current, index, index - 1);
        if (action === 'down' && index < state.current.length - 1) this.swap(state.current, index, index + 1);
        state.results = null;
        state.solutionShown = false;
        state.data.gameStarted = false;
        state.data.gameOver = false;
        state.data.scorerp = 0;
        this.paint(root);
    },

    drop: function (root, draggedId, targetId) {
        var state = root._timeline;
        var from = this.indexById(state.current, draggedId);
        var to = this.indexById(state.current, targetId);
        if (from === -1 || to === -1 || from === to) return;
        var moved = state.current.splice(from, 1)[0];
        state.current.splice(to, 0, moved);
        state.results = null;
        state.solutionShown = false;
        state.data.gameStarted = false;
        state.data.gameOver = false;
        state.data.scorerp = 0;
        this.paint(root);
    },

    select: function (root, id) {
        root._timeline.selectedId = root._timeline.selectedId === id ? '' : id;
        this.paint(root);
    },

    positionDetail: function (root) {
        var layout = root.querySelector('.timeline-layout');
        var detail = root.querySelector('.timeline-detail');
        var events = root.querySelector('.timeline-events');
        var selected = root.querySelector('.timeline-card.selected');
        if (!layout || !detail || !events || !selected || window.innerWidth <= 860) {
            if (detail) detail.style.setProperty('--timeline-detail-offset', '0px');
            return;
        }
        var selectedTop = selected.offsetTop;
        var selectedHeight = selected.offsetHeight;
        var detailHeight = detail.offsetHeight;
        var eventsHeight = events.offsetHeight;
        var maxOffset = Math.max(0, eventsHeight - detailHeight);
        var offset = selectedTop;
        if (offset + detailHeight > eventsHeight) offset = eventsHeight - detailHeight;
        if (selectedHeight > detailHeight && offset > selectedTop) offset = selectedTop;
        offset = Math.max(0, Math.min(offset, maxOffset));
        detail.style.setProperty('--timeline-detail-offset', offset + 'px');
    },

    deferDetailPosition: function (root) {
        var self = this;
        if (root._timelineDetailTimer) window.clearTimeout(root._timelineDetailTimer);
        root._timelineDetailTimer = window.setTimeout(function () {
            self.positionDetail(root);
        }, 120);
    },

    check: function (root) {
        var state = root._timeline;
        var hits = 0;
        state.results = {};
        for (var i = 0; i < state.current.length; i++) {
            var ok = state.current[i].id === state.ordered[i].id;
            state.results[state.current[i].id] = ok;
            if (ok) hits++;
        }
        state.solutionShown = false;
        state.data.gameStarted = true;
        state.data.gameOver = hits === state.current.length;
        state.data.scorerp = state.current.length ? (hits / state.current.length) * 100 : 0;
        this.paint(root);
    },

    showSolution: function (root) {
        var state = root._timeline;
        state.current = state.ordered.slice();
        state.results = null;
        state.solutionShown = true;
        state.data.gameStarted = false;
        state.data.gameOver = false;
        state.data.scorerp = 0;
        this.paint(root);
    },

    sendScore: function (root, auto) {
        $exeDevices.iDevice.gamification.scorm.sendScoreNew(auto, root._timeline.data);
    },

    reset: function (root) {
        var state = root._timeline;
        state.current = state.ordered.slice();
        if (state.data.mode === 'order') state.current = this.shuffle(state.current.slice());
        state.selectedId = state.current.length ? state.current[0].id : '';
        state.results = null;
        state.solutionShown = false;
        state.data.gameStarted = false;
        state.data.gameOver = false;
        state.data.scorerp = 0;
    },

    normalizeData: function (data, ideviceId) {
        var locale = this.normalizeLocale(data.locale);
        var strings = this.t(locale);
        var id = ideviceId || data.ideviceId || data.id || '';
        return {
            id: id,
            ideviceId: id,
            title: data.title || 'Timeline',
            intro: data.intro || '',
            mode: data.mode === 'order' ? 'order' : 'explore',
            styleVariant: data.styleVariant === 'editorial' ? 'editorial' : 'classic',
            showDates: typeof data.showDates === 'boolean' ? data.showDates : data.mode === 'order' ? false : true,
            locale: locale,
            isInExe: eXe.app.isInExe() ?? false,
            isScorm: data.isScorm || 0,
            textButtonScorm: data.textButtonScorm || 'Save score',
            repeatActivity: typeof data.repeatActivity === 'boolean' ? data.repeatActivity : true,
            weighted: data.weighted ?? 100,
            evaluation: !!data.evaluation,
            evaluationID: data.evaluationID || '',
            scorerp: data.scorerp ?? 0,
            gameStarted: false,
            gameOver: false,
            main: 'timeline-main-' + id,
            idevice: 'timeline-idevice',
            msgs: Object.assign({}, strings, data.msgs || {}),
            events: this.normalizeEvents(data.events || []),
        };
    },

    normalizeEvents: function (events) {
        return events.map(function (item, index) {
            return {
                id: item.id || ('timeline-event-' + index),
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

    sortEvents: function (events) {
        return events.slice().sort(function (a, b) {
            return $timeline.compare(a.sortKey, b.sortKey);
        });
    },

    compare: function (a, b) {
        var pa = this.parseKey(a);
        var pb = this.parseKey(b);
        if (pa.type === pb.type) {
            if (pa.value < pb.value) return -1;
            if (pa.value > pb.value) return 1;
            return 0;
        }
        return String(a).localeCompare(String(b), undefined, { numeric: true });
    },

    parseKey: function (value) {
        value = String(value || '').trim();
        if (/^-?\d+(\.\d+)?$/.test(value)) return { type: 'number', value: parseFloat(value) };
        if (/^\d{4}-\d{2}-\d{2}$/.test(value)) return { type: 'date', value: new Date(value + 'T00:00:00Z').getTime() };
        return { type: 'text', value: value.toLowerCase() };
    },

    resolvePath: function (src, ideviceId) {
        if (!src) return '';
        if (/^(https?:|data:|blob:)/.test(src)) return src;
        if (src.indexOf('content/resources/') === 0) return $('html').is('#exe-index') ? src : '../' + src;
        if (src.indexOf('asset://') === 0) {
            if (eXe.app.isInExe()) return src;
            return ($('html').is('#exe-index') ? '' : '../') + 'content/resources/' + ideviceId + '/' + src.split('/').pop();
        }
        if (/^\/?files\//.test(src)) return ($('html').is('#exe-index') ? '' : '../') + 'content/resources/' + ideviceId + '/' + src.split('/').pop();
        return src;
    },

    embedUrl: function (url) {
        if (!url) return '';
        if (url.indexOf('youtube.com/embed/') !== -1) return url;
        var match = url.match(/[?&]v=([^&]+)/);
        if (match && match[1]) return 'https://www.youtube.com/embed/' + match[1];
        match = url.match(/youtu\.be\/([^?&/]+)/);
        if (match && match[1]) return 'https://www.youtube.com/embed/' + match[1];
        match = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
        if (match && match[1]) return 'https://www.youtube.com/embed/' + match[1];
        return '';
    },

    loadSCORM_API_wrapper: function (data) {
        if (typeof pipwerks === 'undefined') eXe.app.loadScript(this.scormAPIwrapper, '$timeline.loadSCOFunctions("' + this.escapeForCallback(data) + '")');
        else this.loadSCOFunctions(data);
    },

    loadSCOFunctions: function (data) {
        if (typeof scorm === 'undefined') eXe.app.loadScript(this.scormFunctions, '$timeline.initSCORM("' + this.escapeForCallback(data) + '")');
        else this.initSCORM(data);
    },

    initSCORM: function (data) {
        data = typeof data === 'string' ? JSON.parse(data) : data;
        this.mScorm = window.scorm;
        if (this.mScorm && this.mScorm.init()) this.initScormData(data);
    },

    initScormData: function (data) {
        this.mScorm = window.scorm;
        data.userName = $exeDevices.iDevice.gamification.scorm.getUserName(this.mScorm);
        data.previousScore = $exeDevices.iDevice.gamification.scorm.getPreviousScore(this.mScorm);
        if (typeof this.mScorm.SetScoreMax === 'function') this.mScorm.SetScoreMax(100);
        if (typeof this.mScorm.SetScoreMin === 'function') this.mScorm.SetScoreMin(0);
        $exeDevices.iDevice.gamification.scorm.registerActivity(data);
    },

    read: function (root) {
        try { return JSON.parse(root.querySelector('.timeline-data').textContent); } catch (error) { return {}; }
    },
    t: function (locale) { return this.i18n[this.normalizeLocale(locale)] || this.i18n.es; },
    normalizeLocale: function (locale) {
        locale = String(locale || '').toLowerCase();
        if (locale.indexOf('ca') === 0 || locale.indexOf('val') === 0) return 'ca';
        if (locale.indexOf('en') === 0) return 'en';
        return 'es';
    },
    findById: function (items, id) { return items.find(function (item) { return item.id === id; }) || null; },
    indexById: function (items, id) { return items.findIndex(function (item) { return item.id === id; }); },
    shuffle: function (items) { for (var i = items.length - 1; i > 0; i--) this.swap(items, i, Math.floor(Math.random() * (i + 1))); return items; },
    swap: function (items, a, b) { var tmp = items[a]; items[a] = items[b]; items[b] = tmp; },
    escapeForCallback: function (obj) { return JSON.stringify(obj).replace(/\\/g, '\\\\').replace(/"/g, '\\"'); },
    escape: function (value) { return String(value || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;'); },
    escapeScript: function (value) { return String(value || '').replace(/</g, '\\u003c'); },
};
