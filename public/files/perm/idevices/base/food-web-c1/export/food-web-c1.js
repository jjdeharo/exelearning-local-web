/* eslint-disable no-undef */
var $foodwebc1 = {
    ideviceClass: 'food-web-c1-content',
    scormAPIwrapper: 'libs/SCORM_API_wrapper.js',
    scormFunctions: 'libs/SCOFunctions.js',
    userName: '',
    previousScore: '',
    mScorm: null,
    i18n: {
        es: {
            Producer: 'Productor',
            'Primary consumer': 'Consumidor primario',
            'Secondary consumer': 'Consumidor secundario',
            'Tertiary consumer': 'Consumidor terciario',
            Omnivore: 'Omnívoro',
            Decomposer: 'Descomponedor',
            eats: 'se alimenta de',
            decomposes: 'descompone',
            'competes with': 'compite con',
            'parasite of': 'parasita a',
            Traits: 'Rasgos',
            Importance: 'Importancia',
            Relations: 'Relaciones',
            'No direct relations available.': 'No hay relaciones directas.',
            Practice: 'Práctica',
            Check: 'Comprobar',
            'Show answer': 'Mostrar respuesta',
            True: 'Verdadero',
            False: 'Falso',
            'Write your prediction.': 'Escribe tu predicción.',
            'Ecological scenarios': 'Escenarios ecológicos',
            'Open response recorded.': 'Respuesta abierta registrada.',
            'Correct.': 'Correcto.',
            'Review the food web and try again.':
                'Revisa la red trófica e inténtalo de nuevo.',
            'Reset layout': 'Restablecer distribución',
            'Expand graph': 'Ampliar grafo',
            'Exit expanded view': 'Salir de la vista ampliada',
            'Show competition': 'Mostrar competencia',
            'Hide competition': 'Ocultar competencia',
            Score: 'Puntuación',
            'Questions score': 'Puntuación de preguntas',
        },
        en: {
            Producer: 'Producer',
            'Primary consumer': 'Primary consumer',
            'Secondary consumer': 'Secondary consumer',
            'Tertiary consumer': 'Tertiary consumer',
            Omnivore: 'Omnivore',
            Decomposer: 'Decomposer',
            eats: 'eats',
            decomposes: 'decomposes',
            'competes with': 'competes with',
            'parasite of': 'parasite of',
            Traits: 'Traits',
            Importance: 'Importance',
            Relations: 'Relations',
            'No direct relations available.': 'No direct relations available.',
            Practice: 'Practice',
            Check: 'Check',
            'Show answer': 'Show answer',
            True: 'True',
            False: 'False',
            'Write your prediction.': 'Write your prediction.',
            'Ecological scenarios': 'Ecological scenarios',
            'Open response recorded.': 'Open response recorded.',
            'Correct.': 'Correct.',
            'Review the food web and try again.':
                'Review the food web and try again.',
            'Reset layout': 'Reset layout',
            'Expand graph': 'Expand graph',
            'Exit expanded view': 'Exit expanded view',
            'Show competition': 'Show competition',
            'Hide competition': 'Hide competition',
            Score: 'Score',
            'Questions score': 'Questions score',
        },
        ca: {
            Producer: 'Productor',
            'Primary consumer': 'Consumidor primari',
            'Secondary consumer': 'Consumidor secundari',
            'Tertiary consumer': 'Consumidor terciari',
            Omnivore: 'Omnívor',
            Decomposer: 'Descomponedor',
            eats: "s'alimenta de",
            decomposes: 'descompon',
            'competes with': 'competeix amb',
            'parasite of': 'parasita',
            Traits: 'Rasgos',
            Importance: 'Importància',
            Relations: 'Relacions',
            'No direct relations available.': 'No hi ha relacions directes.',
            Practice: 'Pràctica',
            Check: 'Comprova',
            'Show answer': 'Mostra la resposta',
            True: 'Vertader',
            False: 'Fals',
            'Write your prediction.': 'Escriu la teua predicció.',
            'Ecological scenarios': 'Escenaris ecològics',
            'Open response recorded.': 'Resposta oberta registrada.',
            'Correct.': 'Correcte.',
            'Review the food web and try again.':
                'Revisa la xarxa tròfica i torna-ho a intentar.',
            'Reset layout': 'Restableix la disposició',
            'Expand graph': 'Amplia el graf',
            'Exit expanded view': "Ix de la vista ampliada",
            'Show competition': 'Mostrar competència',
            'Hide competition': 'Ocultar competència',
            Score: 'Puntuació',
            'Questions score': 'Puntuació de preguntes',
        },
    },
    gamificationCatalog: {
        es: {
            msgScoreScorm:
                'La puntuación no se puede guardar porque esta página no forma parte de un paquete SCORM.',
            msgYouScore: 'Tu puntuación',
            msgScore: 'Puntuación',
            msgWeight: 'Peso',
            msgYouLastScore: 'La última puntuación guardada es',
            msgOnlySaveScore: 'Solo puedes guardar la puntuación una vez.',
            msgOnlySaveAuto:
                'Tu puntuación se guardará después de cada pregunta. Solo puedes jugar una vez.',
            msgSaveAuto:
                'Tu puntuación se guardará automáticamente después de cada pregunta.',
            msgSeveralScore: 'Puedes guardar la puntuación tantas veces como quieras',
            msgPlaySeveralTimes: 'Puedes realizar esta actividad tantas veces como quieras',
            msgActityComply: 'Ya has realizado esta actividad.',
            msgUncompletedActivity: 'Actividad incompleta',
            msgSuccessfulActivity: 'Actividad: Superada. Puntuación: %s',
            msgUnsuccessfulActivity: 'Actividad: No superada. Puntuación: %s',
            msgTypeGame: 'Red trófica',
            msgSaveScore: 'Guardar puntuación',
        },
        en: {
            msgScoreScorm:
                'The score cannot be saved because this page is not part of a SCORM package.',
            msgYouScore: 'Your score',
            msgScore: 'Score',
            msgWeight: 'Weight',
            msgYouLastScore: 'The last saved score is',
            msgOnlySaveScore: 'You can only save the score once.',
            msgOnlySaveAuto:
                'Your score will be saved after each question. You can only play once.',
            msgSaveAuto: 'Your score will be automatically saved after each question.',
            msgSeveralScore: 'You can save the score as many times as you want',
            msgPlaySeveralTimes: 'You can do this activity as many times as you want',
            msgActityComply: 'You have already done this activity.',
            msgUncompletedActivity: 'Incomplete activity',
            msgSuccessfulActivity: 'Activity: Passed. Score: %s',
            msgUnsuccessfulActivity: 'Activity: Not passed. Score: %s',
            msgTypeGame: 'Food web',
            msgSaveScore: 'Save score',
        },
        ca: {
            msgScoreScorm:
                'La puntuació no es pot guardar perquè esta pàgina no forma part d’un paquet SCORM.',
            msgYouScore: 'La teua puntuació',
            msgScore: 'Puntuació',
            msgWeight: 'Pes',
            msgYouLastScore: "L'última puntuació guardada és",
            msgOnlySaveScore: 'Només pots guardar la puntuació una vegada.',
            msgOnlySaveAuto:
                'La teua puntuació es guardarà després de cada pregunta. Només pots jugar una vegada.',
            msgSaveAuto:
                'La teua puntuació es guardarà automàticament després de cada pregunta.',
            msgSeveralScore: 'Pots guardar la puntuació tantes vegades com vulgues',
            msgPlaySeveralTimes: 'Pots fer esta activitat tantes vegades com vulgues',
            msgActityComply: 'Ja has fet esta activitat.',
            msgUncompletedActivity: 'Activitat incompleta',
            msgSuccessfulActivity: 'Activitat: Superada. Puntuació: %s',
            msgUnsuccessfulActivity: 'Activitat: No superada. Puntuació: %s',
            msgTypeGame: 'Red tròfica',
            msgSaveScore: 'Guardar puntuació',
        },
    },
    roleOrder: [
        'producer',
        'primary-consumer',
        'secondary-consumer',
        'tertiary-consumer',
        'omnivore',
        'decomposer',
    ],
    roleLabels: {
        producer: 'Producer',
        'primary-consumer': 'Primary consumer',
        'secondary-consumer': 'Secondary consumer',
        'tertiary-consumer': 'Tertiary consumer',
        omnivore: 'Omnivore',
        decomposer: 'Decomposer',
    },
    rolePalette: {
        producer: '#3a7d44',
        'primary-consumer': '#dda15e',
        'secondary-consumer': '#bc6c25',
        'tertiary-consumer': '#7f5539',
        omnivore: '#6d597a',
        decomposer: '#4d908e',
    },
    relationLabels: {
        eats: 'eats',
        decomposes: 'decomposes',
        competes: 'competes with',
        'parasite-of': 'parasite of',
    },

    getLocale: function () {
        const lang =
            (document.documentElement &&
                document.documentElement.lang &&
                document.documentElement.lang.toLowerCase()) ||
            'es';
        if (lang.indexOf('ca') === 0 || lang.indexOf('va') === 0) return 'ca';
        if (lang.indexOf('en') === 0) return 'en';
        return 'es';
    },

    t: function (key) {
        const locale = this.getLocale();
        return this.i18n[locale]?.[key] || this.i18n.es[key] || key;
    },

    getGamificationMessages: function () {
        const locale = this.getLocale();
        return (
            this.gamificationCatalog[locale] ||
            this.gamificationCatalog.es
        );
    },

    normalizeData: function (rawData) {
        const data = rawData || {};
        return {
            ideviceId: data.ideviceId || '',
            title: data.title || '',
            subtitle: data.subtitle || '',
            instructions: data.instructions || '',
            ecosystemContext: data.ecosystemContext || {},
            displayOptions: {
                showLegend: data.displayOptions?.showLegend !== false,
                showSpeciesCards: data.displayOptions?.showSpeciesCards !== false,
                showArrows: data.displayOptions?.showArrows !== false,
                showRelationLabels: !!data.displayOptions?.showRelationLabels,
                randomizeQuestions: !!data.displayOptions?.randomizeQuestions,
                allowRevealAnswers: data.displayOptions?.allowRevealAnswers !== false,
                layout: data.displayOptions?.layout || 'levels',
            },
            species: Array.isArray(data.species) ? data.species : [],
            relations: Array.isArray(data.relations) ? data.relations : [],
            questions: Array.isArray(data.questions) ? data.questions : [],
            scenarios: Array.isArray(data.scenarios) ? data.scenarios : [],
            evaluation: !!data.evaluation,
            evaluationID: data.evaluationID || '',
            isScorm: Number.isFinite(parseInt(data.isScorm, 10))
                ? parseInt(data.isScorm, 10)
                : 0,
            textButtonScorm: data.textButtonScorm || '',
            repeatActivity:
                typeof data.repeatActivity === 'boolean'
                    ? data.repeatActivity
                    : true,
            weighted: Number.isFinite(parseInt(data.weighted, 10))
                ? parseInt(data.weighted, 10)
                : 100,
            scorep: 0,
            scorerp: 0,
            msgs: data.msgs || {},
        };
    },

    prepareRuntimeData: function (rawData, root, ideviceId) {
        const data = this.normalizeData(rawData);
        const isInExe =
            typeof eXe !== 'undefined' &&
            eXe.app &&
            typeof eXe.app.isInExe === 'function'
                ? !!eXe.app.isInExe()
                : false;
        const hostNode = root?.closest('.idevice_node') || null;
        const id =
            ideviceId ||
            data.ideviceId ||
            hostNode?.id ||
            root?.dataset.foodWebId ||
            '';
        const main = root?.id || `${id}-content`;
        return {
            ...data,
            id: id,
            ideviceId: id,
            main: main,
            idevice: this.ideviceClass,
            isInExe: isInExe,
            idevicePath: isInExe
                ? eXe?.app?.getIdeviceInstalledExportPath?.('food-web-c1') || ''
                : hostNode?.getAttribute('data-idevice-path') || '',
            textButtonScorm:
                data.textButtonScorm ||
                data.msgs?.msgSaveScore ||
                this.getGamificationMessages().msgSaveScore,
            msgs: {
                ...this.getGamificationMessages(),
                ...(data.msgs || {}),
            },
            gameStarted: false,
            gameOver: false,
        };
    },

    renderView: function (rawData, accesibility, template, ideviceId) {
        const data = this.normalizeData(rawData);
        const id = ideviceId || data.ideviceId || `food-web-c1-${Date.now()}`;
        const sectionId = `${id}-content`;
        const detail = data.species[0] || null;
        const scormButtonText = this.escapeHtml(
            data.textButtonScorm ||
                data.msgs?.msgSaveScore ||
                this.getGamificationMessages().msgSaveScore
        );
        const scormButtonDisplay =
            document.body.classList.contains('exe-scorm') && data.isScorm > 0
                ? 'inline-block'
                : 'none';
        const htmlContent = `<div class="game-evaluation-ids js-hidden" data-id="${this.escapeAttribute(
            id
        )}" data-evaluationb="${data.evaluation}" data-evaluationid="${this.escapeAttribute(
            data.evaluationID
        )}"></div>
        <section class="${this.ideviceClass}" id="${this.escapeAttribute(sectionId)}" data-food-web-id="${this.escapeAttribute(
            id
        )}">
            <header class="fwx-head">
                <div>
                    <h2>${this.escapeHtml(data.title)}</h2>
                    ${
                        data.subtitle
                            ? `<p class="fwx-subtitle">${this.escapeHtml(data.subtitle)}</p>`
                            : ''
                    }
                </div>
                <div class="fwx-context">
                    ${
                        data.ecosystemContext.name
                            ? `<span>${this.escapeHtml(data.ecosystemContext.name)}</span>`
                            : ''
                    }
                    ${
                        data.ecosystemContext.level
                            ? `<span>${this.escapeHtml(data.ecosystemContext.level)}</span>`
                            : ''
                    }
                    ${
                        data.ecosystemContext.course
                            ? `<span>${this.escapeHtml(data.ecosystemContext.course)}</span>`
                            : ''
                    }
                </div>
            </header>
            ${
                data.instructions
                    ? `<div class="fwx-instructions">${data.instructions}</div>`
                    : ''
            }
            ${
                data.displayOptions.showLegend
                    ? `<section class="fwx-legend">${this.getLegendHtml()}</section>`
                    : ''
            }
            <section class="fwx-layout fwx-layout-${this.escapeAttribute(
                data.displayOptions.layout
            )}">
                <div class="fwx-graph-shell">
                    <div class="fwx-graph-toolbar">
                        <button type="button" class="btn btn-secondary fwx-reset-layout">${this.escapeHtml(
                            this.t('Reset layout')
                        )}</button>
                        ${
                            data.relations.some((relation) => relation.type === 'competes')
                                ? `<button type="button" class="btn btn-secondary fwx-toggle-competition" aria-pressed="false">${this.escapeHtml(
                                      this.t('Show competition')
                                  )}</button>`
                                : ''
                        }
                        <button type="button" class="btn btn-secondary fwx-expand-graph" aria-pressed="false">${this.escapeHtml(
                            this.t('Expand graph')
                        )}</button>
                    </div>
                    <div class="fwx-graph-stage" data-graph-stage="true">
                        <svg class="fwx-graph-svg" data-graph-svg="true" aria-hidden="true">
                            <defs>
                                <marker id="fwx-arrow-${this.escapeAttribute(
                                    id
                                )}" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto">
                                    <path d="M0,0 L12,6 L0,12 z" fill="#7c8d7f"></path>
                                </marker>
                            </defs>
                        </svg>
                        ${this.getGraphHtml(data)}
                    </div>
                </div>
                <aside class="fwx-side">
                    ${this.getDetailPanel(detail)}
                    ${this.getRelationsPanel(data, detail)}
                </aside>
            </section>
            ${this.getQuestionsHtml(data, id)}
            ${this.getScenariosHtml(data, id)}
            <section class="fwx-results">
                <p class="fwx-scoreboard">
                    <strong>${this.escapeHtml(this.t('Score'))}:</strong>
                    <span class="fwx-score-value">0%</span>
                </p>
                <div class="Games-BottonContainer">
                    <div class="Games-GetScore">
                        <input type="button" value="${scormButtonText}" class="feedbackbutton Games-SendScore fwx-send-score" style="display:${scormButtonDisplay}" />
                        <span class="Games-RepeatActivity"></span>
                    </div>
                </div>
            </section>
            <script type="application/json" class="fwx-data">${this.escapeHtml(
                JSON.stringify(data)
            )}</script>
        </section>`;
        return template.replace('{content}', htmlContent);
    },

    renderBehaviour: function (rawData, accesibility, ideviceId) {
        const data = this.normalizeData(rawData);
        const resolvedId = ideviceId || rawData?.ideviceId || data.ideviceId;
        const root = this.resolveRootNode(resolvedId);
        if (!root) return false;
        const parsed = this.parseEmbeddedData(root) || data;
        return this.initializeRoot(root, parsed, resolvedId);
    },

    initializeRoot: function (root, parsedData, ideviceId) {
        if (!root) return false;
        const parsed = this.normalizeData(parsedData);
        const resolvedId =
            ideviceId ||
            root.dataset.foodWebId ||
            root.closest('.idevice_node')?.id ||
            parsed.ideviceId ||
            '';
        const runtime = this.prepareRuntimeData(parsed, root, resolvedId);
        if (resolvedId && !root.dataset.foodWebId) {
            root.dataset.foodWebId = resolvedId;
        }
        if (root.dataset.fwxInitialized === 'true') {
            root._fwxData = runtime;
            this.scheduleGraphRender(root, runtime, resolvedId);
            return true;
        }
        root.dataset.fwxInitialized = 'true';
        root.dataset.showCompetition = 'false';
        root._fwxData = runtime;
        root._fwxScoreState = root._fwxScoreState || { answers: {} };
        root.querySelectorAll('.fwx-species-button').forEach((button) => {
            button.addEventListener('click', () => {
                const species = runtime.species.find((item) => item.id === button.dataset.speciesId);
                if (!species) return;
                root.querySelectorAll('.fwx-species-button').forEach((item) => {
                    item.classList.toggle('is-active', item === button);
                });
                this.updateDetailPanel(root, species);
                this.updateRelationsPanel(root, runtime, species);
                this.highlightGraph(root, species.id);
            });
        });
        root.querySelectorAll('.fwx-question').forEach((questionNode) => {
            const question = runtime.questions.find(
                (item) => item.id === questionNode.dataset.questionId
            );
            const button = questionNode.querySelector('.fwx-check-question');
            if (!button || !question) return;
            button.addEventListener('click', () => {
                this.checkQuestion(root, questionNode, question);
            });
            const revealButton = questionNode.querySelector('.fwx-reveal-question');
            if (revealButton) {
                revealButton.addEventListener('click', () => {
                    this.showQuestionFeedback(questionNode, question, true);
                });
            }
        });
        root.querySelectorAll('.fwx-scenario-button').forEach((button, index) => {
            button.addEventListener('click', () => {
                root.querySelectorAll('.fwx-scenario-card').forEach((card, cardIndex) => {
                    card.hidden = cardIndex !== index;
                });
            });
        });
        const firstScenario = root.querySelector('.fwx-scenario-card');
        if (firstScenario) firstScenario.hidden = false;
        const resetLayoutButton = root.querySelector('.fwx-reset-layout');
        if (resetLayoutButton) {
            resetLayoutButton.addEventListener('click', () => {
                this.resetGraphLayout(root, runtime, resolvedId);
            });
        }
        const expandGraphButton = root.querySelector('.fwx-expand-graph');
        if (expandGraphButton) {
            expandGraphButton.addEventListener('click', () => {
                this.toggleExpandedGraph(root, runtime, resolvedId);
            });
        }
        const toggleCompetitionButton = root.querySelector('.fwx-toggle-competition');
        if (toggleCompetitionButton) {
            toggleCompetitionButton.addEventListener('click', () => {
                this.toggleCompetition(root, runtime, resolvedId);
            });
        }
        const sendScoreButton = root.querySelector('.fwx-send-score');
        if (sendScoreButton) {
            sendScoreButton.addEventListener('click', () => {
                this.sendScore(root, false);
            });
        }
        if (!$('html').is('#exe-index')) {
            this.scormAPIwrapper = '../libs/SCORM_API_wrapper.js';
            this.scormFunctions = '../libs/SCOFunctions.js';
        }
        if (document.body.classList.contains('exe-scorm') && runtime.isScorm > 0) {
            if (typeof window.scorm !== 'undefined' && window.scorm.init()) {
                this.initScormData(runtime);
            } else {
                this.loadSCORM_API_wrapper(runtime);
            }
        } else if (runtime.isScorm > 0) {
            $exeDevices.iDevice.gamification.scorm.registerActivity(runtime);
        }
        if (runtime.evaluation && runtime.evaluationID && runtime.evaluationID.length > 4) {
            setTimeout(() => {
                $exeDevices.iDevice.gamification.report.updateEvaluationIcon(
                    runtime,
                    runtime.isInExe
                );
            }, 300);
        }
        this.updateScoreboard(root);
        if (typeof window !== 'undefined') {
            const activateGraph = () => {
                this.enableDragging(root, runtime, resolvedId);
                this.enablePanning(root, runtime, resolvedId);
                this.observeGraphLayout(root, runtime, resolvedId);
                this.scheduleGraphRender(root, runtime, resolvedId);
            };

            activateGraph();
            window.requestAnimationFrame(() => {
                activateGraph();
                window.requestAnimationFrame(activateGraph);
            });
            window.setTimeout(activateGraph, 180);
            window.setTimeout(activateGraph, 600);
            window.addEventListener('load', activateGraph, { once: true });
            window.addEventListener(
                'resize',
                () => this.scheduleGraphRender(root, parsed, resolvedId),
                { passive: true }
            );
        }
        return true;
    },

    resetGraphLayout: function (root, data, ideviceId) {
        root.querySelectorAll('.fwx-species-button').forEach((node) => {
            delete node.dataset.manualX;
            delete node.dataset.manualY;
            node.style.left = '';
            node.style.top = '';
        });
        const stage = root.querySelector('[data-graph-stage="true"]');
        if (stage) {
            stage.dataset.panX = '0';
            stage.dataset.panY = '0';
        }
        this.applyPanTransform(root);
        this.scheduleGraphRender(root, data, ideviceId);
    },

    toggleExpandedGraph: function (root, data, ideviceId, forceState) {
        const nextState =
            typeof forceState === 'boolean'
                ? forceState
                : !root.classList.contains('is-graph-expanded');
        root.classList.toggle('is-graph-expanded', nextState);
        if (typeof document !== 'undefined') {
            document.body.classList.toggle('fwx-graph-open', nextState);
        }
        const button = root.querySelector('.fwx-expand-graph');
        if (button) {
            button.textContent = this.t(
                nextState ? 'Exit expanded view' : 'Expand graph'
            );
            button.setAttribute('aria-pressed', nextState ? 'true' : 'false');
        }
        if (!root.__fwxKeyHandler && typeof window !== 'undefined') {
            root.__fwxKeyHandler = (event) => {
                if (event.key === 'Escape' && root.classList.contains('is-graph-expanded')) {
                    this.toggleExpandedGraph(root, data, ideviceId, false);
                }
            };
            window.addEventListener('keydown', root.__fwxKeyHandler);
        }
        this.scheduleGraphRender(root, data, ideviceId, 6);
    },

    toggleCompetition: function (root, data, ideviceId, forceState) {
        const nextState =
            typeof forceState === 'boolean'
                ? forceState
                : root.dataset.showCompetition !== 'true';
        root.dataset.showCompetition = nextState ? 'true' : 'false';
        const button = root.querySelector('.fwx-toggle-competition');
        if (button) {
            button.textContent = this.t(
                nextState ? 'Hide competition' : 'Show competition'
            );
            button.setAttribute('aria-pressed', nextState ? 'true' : 'false');
        }
        this.scheduleGraphRender(root, data, ideviceId, 4);
    },

    init: function (data, accesibility) {
    },

    loadSCORM_API_wrapper: function (data) {
        const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
        if (typeof pipwerks === 'undefined') {
            const escapedData = this.escapeForCallback(parsedData);
            eXe.app.loadScript(
                this.scormAPIwrapper,
                '$foodwebc1.loadSCOFunctions("' + escapedData + '")'
            );
        } else {
            this.loadSCOFunctions(parsedData);
        }
    },

    loadSCOFunctions: function (data) {
        const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
        if (typeof scorm === 'undefined') {
            const escapedData = this.escapeForCallback(parsedData);
            eXe.app.loadScript(
                this.scormFunctions,
                '$foodwebc1.initSCORM("' + escapedData + '")'
            );
        } else {
            this.initSCORM(parsedData);
        }
    },

    initSCORM: function (data) {
        const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
        this.mScorm = window.scorm;
        if (this.mScorm.init()) this.initScormData(parsedData);
    },

    initScormData: function (data) {
        this.mScorm = window.scorm;
        this.userName = $exeDevices.iDevice.gamification.scorm.getUserName(this.mScorm);
        this.previousScore = $exeDevices.iDevice.gamification.scorm.getPreviousScore(
            this.mScorm
        );
        this.mScorm.SetScoreMax(100);
        this.mScorm.SetScoreMin(0);
        $exeDevices.iDevice.gamification.scorm.registerActivity(data);
    },

    escapeForCallback: function (obj) {
        let json = JSON.stringify(obj);
        json = json.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        return json;
    },

    isScoreableQuestion: function (question) {
        return (
            question &&
            question.type !== 'predict-effect' &&
            Array.isArray(question.correctAnswers) &&
            question.correctAnswers.length > 0
        );
    },

    getAnsweredScorableCount: function (root) {
        const answers = root?._fwxScoreState?.answers || {};
        return Object.keys(answers).length;
    },

    getScorableQuestionCount: function (root) {
        const data = root?._fwxData;
        if (!data || !Array.isArray(data.questions)) return 0;
        return data.questions.filter((question) => this.isScoreableQuestion(question)).length;
    },

    getScorePercent: function (root) {
        const total = this.getScorableQuestionCount(root);
        if (!total) return 0;
        const answers = root?._fwxScoreState?.answers || {};
        const correct = Object.values(answers).filter(Boolean).length;
        return Math.round((correct / total) * 100);
    },

    getScoreOutOfTen: function (root) {
        return Math.round((this.getScorePercent(root) / 10) * 100) / 100;
    },

    updateScoreboard: function (root) {
        const scoreValue = root?.querySelector('.fwx-score-value');
        if (scoreValue) {
            scoreValue.textContent = `${this.getScorePercent(root)}%`;
        }
    },

    updateActivityState: function (root) {
        const data = root?._fwxData;
        if (!data) return;
        const answered = this.getAnsweredScorableCount(root);
        const total = this.getScorableQuestionCount(root);
        data.gameStarted = answered > 0;
        data.gameOver = total > 0 && answered >= total;
        data.scorep = this.getScoreOutOfTen(root);
        data.scorerp = data.scorep;
        this.updateScoreboard(root);
    },

    saveEvaluation: function (root) {
        const data = root?._fwxData;
        if (!data || !data.evaluation || !data.evaluationID) return;
        this.updateActivityState(root);
        $exeDevices.iDevice.gamification.report.saveEvaluation(data, data.isInExe);
    },

    sendScore: function (root, auto) {
        const data = root?._fwxData;
        if (!data || !data.isScorm) return;
        this.updateActivityState(root);
        data.previousScore = this.previousScore;
        data.userName = this.userName;
        $exeDevices.iDevice.gamification.scorm.sendScoreNew(auto, data);
        this.previousScore = data.previousScore;
    },

    resolveRootNode: function (ideviceId) {
        const roots = Array.from(document.querySelectorAll(`.${this.ideviceClass}`));
        if (!roots.length) return null;
        if (ideviceId) {
            const directMatch = roots.find(
                (node) =>
                    node.dataset.foodWebId === ideviceId || node.id === ideviceId
            );
            if (directMatch) return directMatch;
            const hostNode = document.getElementById(ideviceId);
            if (hostNode) {
                const nestedRoot = hostNode.querySelector(`.${this.ideviceClass}`);
                if (nestedRoot) return nestedRoot;
            }
        }
        return roots.length === 1 ? roots[0] : null;
    },

    bootRootFromNode: function (root) {
        if (!root) return false;
        const parsed = this.parseEmbeddedData(root);
        if (!parsed) return false;
        const resolvedId =
            root.dataset.foodWebId ||
            root.closest('.idevice_node')?.id ||
            parsed.ideviceId ||
            '';
        return this.initializeRoot(root, parsed, resolvedId);
    },

    bootExistingRoots: function (scope) {
        const container = scope && scope.querySelectorAll ? scope : document;
        if (!container) return 0;
        let count = 0;
        container.querySelectorAll(`.${this.ideviceClass}`).forEach((root) => {
            if (this.bootRootFromNode(root)) {
                count += 1;
            }
        });
        return count;
    },

    installAutoInit: function () {
        if (this.__autoInitInstalled || typeof document === 'undefined') return;
        this.__autoInitInstalled = true;
        const boot = () => this.bootExistingRoots(document);
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', boot, { once: true });
        } else {
            boot();
        }
        if (typeof window !== 'undefined') {
            window.addEventListener('load', boot, { once: true });
        }
        if (typeof MutationObserver !== 'undefined' && document.documentElement) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    mutation.addedNodes.forEach((node) => {
                        if (!(node instanceof Element)) return;
                        if (node.matches(`.${this.ideviceClass}`)) {
                            this.bootRootFromNode(node);
                            return;
                        }
                        const roots = node.querySelectorAll?.(`.${this.ideviceClass}`);
                        if (!roots) return;
                        roots.forEach((root) => {
                            this.bootRootFromNode(root);
                        });
                    });
                });
            });
            observer.observe(document.documentElement, {
                childList: true,
                subtree: true,
            });
            this.__autoInitObserver = observer;
        }
    },

    groupSpeciesByRole: function (species) {
        const grouped = {};
        this.roleOrder.forEach((role) => {
            grouped[role] = [];
        });
        species.forEach((item) => {
            const role = grouped[item.role] ? item.role : 'secondary-consumer';
            grouped[role].push(item);
        });
        return grouped;
    },

    getLegendHtml: function () {
        return this.roleOrder
            .map(
                (role) =>
                    `<span class="fwx-legend-item"><i style="background:${this.rolePalette[role]}"></i>${this.escapeHtml(
                        this.t(this.roleLabels[role])
                    )}</span>`
            )
            .join('');
    },

    getLevelHtml: function (role, species, data) {
        return `<section class="fwx-level">
            <h3>${this.escapeHtml(this.roleLabels[role])}</h3>
            <div class="fwx-level-items">
                ${
                    species.length
                        ? species
                              .map(
                                  (item, index) => `<button type="button" class="fwx-species-button ${
                                      index === 0 ? 'is-active' : ''
                                  }" data-species-id="${this.escapeAttribute(
                                      item.id
                                  )}" data-role="${this.escapeAttribute(
                                      item.role
                                  )}" style="--species-color:${this.rolePalette[item.role] || '#4d908e'}">
                                    <span class="fwx-species-name">${this.escapeHtml(item.name)}</span>
                                    ${
                                        data.displayOptions.showSpeciesCards && item.group
                                            ? `<span class="fwx-species-group">${this.escapeHtml(item.group)}</span>`
                                            : ''
                                    }
                                  </button>`
                              )
                              .join('')
                        : '<p class="fwx-empty-level">No species</p>'
                }
            </div>
        </section>`;
    },

    getGraphHtml: function (data) {
        const firstSpeciesId = data.species[0] ? data.species[0].id : '';
        return `<div class="fwx-graph-canvas" data-graph-canvas="true">
            ${data.species
                .map(
                    (item) => `<button type="button" class="fwx-species-button ${
                        item.id === firstSpeciesId ? 'is-active' : ''
                    }" data-species-id="${this.escapeAttribute(
                        item.id
                    )}" data-role="${this.escapeAttribute(
                        item.role
                    )}" style="--species-color:${this.rolePalette[item.role] || '#4d908e'}">
                        <span class="fwx-species-name">${this.escapeHtml(item.name)}</span>
                    </button>`
                )
                .join('')}
        </div>`;
    },

    getDetailPanel: function (species) {
        if (!species) return '<div class="fwx-detail-panel"></div>';
        return `<div class="fwx-detail-panel" data-detail-panel="true">
            <h3>${this.escapeHtml(species.name)}</h3>
            <p class="fwx-detail-role">${this.escapeHtml(this.t(this.roleLabels[species.role] || species.role))}</p>
            ${species.description ? `<p>${this.escapeHtml(species.description)}</p>` : ''}
            ${
                species.traits && species.traits.length
                    ? `<p><strong>${this.t('Traits')}:</strong> ${this.escapeHtml(species.traits.join(', '))}</p>`
                    : ''
            }
            ${
                species.importance
                    ? `<p><strong>${this.t('Importance')}:</strong> ${this.escapeHtml(species.importance)}</p>`
                    : ''
            }
        </div>`;
    },

    getRelationsPanel: function (data, species) {
        const filtered = species
            ? data.relations.filter(
                  (relation) =>
                      relation.from === species.id || relation.to === species.id
              )
            : data.relations;
        return `<div class="fwx-relations-panel" data-relations-panel="true">
            <h3>${this.t('Relations')}</h3>
            <ul>
                ${
                    filtered.length
                        ? filtered
                              .map((relation) => `<li>${this.formatRelation(data, relation)}</li>`)
                              .join('')
                        : `<li>${this.t('No direct relations available.')}</li>`
                }
            </ul>
        </div>`;
    },

    getQuestionsHtml: function (data, id) {
        if (!data.questions.length) return '';
        const questions = data.displayOptions.randomizeQuestions
            ? [...data.questions].sort(() => Math.random() - 0.5)
            : data.questions;
        return `<section class="fwx-questions">
            <h3>${this.t('Practice')}</h3>
            ${questions
                .map(
                    (question, index) => `<article class="fwx-question" data-question-id="${this.escapeAttribute(
                        question.id
                    )}">
                        <p class="fwx-question-prompt">${this.escapeHtml(question.prompt)}</p>
                        ${this.getQuestionInputs(question, `${id}-${index}`)}
                        <div class="fwx-question-actions">
                            <button type="button" class="btn btn-primary fwx-check-question">${this.t('Check')}</button>
                            ${
                                data.displayOptions.allowRevealAnswers
                                    ? `<button type="button" class="btn btn-secondary fwx-reveal-question">${this.t('Show answer')}</button>`
                                    : ''
                            }
                        </div>
                        <div class="fwx-question-feedback" aria-live="polite"></div>
                    </article>`
                )
                .join('')}
        </section>`;
    },

    getQuestionInputs: function (question, key) {
        if (question.type === 'true-false') {
            return [this.t('True'), this.t('False')]
                .map(
                    (label, index) => `<label class="fwx-option">
                        <input type="radio" name="question-${this.escapeAttribute(key)}" value="${index}" />
                        <span>${label}</span>
                    </label>`
                )
                .join('');
        }
        if (question.type === 'predict-effect') {
            return `<textarea class="fwx-open-answer" rows="3" placeholder="${this.escapeAttribute(this.t('Write your prediction.'))}"></textarea>`;
        }
        return question.options
            .map((option, index) => {
                const inputType = question.type === 'multi-select' ? 'checkbox' : 'radio';
                return `<label class="fwx-option">
                    <input type="${inputType}" name="question-${this.escapeAttribute(
                        key
                    )}" value="${index}" />
                    <span>${this.escapeHtml(option)}</span>
                </label>`;
            })
            .join('');
    },

    getScenariosHtml: function (data) {
        if (!data.scenarios.length) return '';
        return `<section class="fwx-scenarios">
            <h3>${this.t('Ecological scenarios')}</h3>
            <div class="fwx-scenario-tabs">
                ${data.scenarios
                    .map(
                        (scenario) => `<button type="button" class="btn btn-secondary fwx-scenario-button">${this.escapeHtml(
                            scenario.title
                        )}</button>`
                    )
                    .join('')}
            </div>
            ${data.scenarios
                .map(
                    (scenario, index) => `<article class="fwx-scenario-card" ${
                        index === 0 ? '' : 'hidden'
                    }>
                        <h4>${this.escapeHtml(scenario.title)}</h4>
                        <p>${this.escapeHtml(scenario.prompt)}</p>
                        ${
                            scenario.expectedEffects && scenario.expectedEffects.length
                                ? `<ul>${scenario.expectedEffects
                                      .map((item) => `<li>${this.escapeHtml(item)}</li>`)
                                      .join('')}</ul>`
                                : ''
                        }
                    </article>`
                )
                .join('')}
        </section>`;
    },

    updateDetailPanel: function (root, species) {
        const panel = root.querySelector('[data-detail-panel="true"]');
        if (!panel) return;
        panel.innerHTML = this.getDetailPanel(species).replace(/^<div[^>]*>|<\/div>$/g, '');
    },

    updateRelationsPanel: function (root, data, species) {
        const panel = root.querySelector('[data-relations-panel="true"]');
        if (!panel) return;
        panel.innerHTML = this.getRelationsPanel(data, species).replace(/^<div[^>]*>|<\/div>$/g, '');
    },

    scheduleGraphRender: function (root, data, ideviceId, attempts) {
        const maxAttempts = typeof attempts === 'number' ? attempts : 24;
        const stage = root.querySelector('[data-graph-stage="true"]');
        if (!stage) return;
        const tryRender = (remaining) => {
            const width = stage.clientWidth;
            const height = stage.clientHeight;
            if (width > 80 && height > 80) {
                this.drawGraph(root, data, ideviceId);
                if (data.species[0]) {
                    this.highlightGraph(root, data.species[0].id);
                }
                return;
            }
            if (remaining <= 0 || typeof window === 'undefined') return;
            window.setTimeout(() => tryRender(remaining - 1), 120);
        };
        tryRender(maxAttempts);
    },

    observeGraphLayout: function (root, data, ideviceId) {
        const stage = root.querySelector('[data-graph-stage="true"]');
        if (!stage || stage.__fwxObserved) return;
        stage.__fwxObserved = true;
        if (typeof ResizeObserver !== 'undefined') {
            const observer = new ResizeObserver(() => {
                this.scheduleGraphRender(root, data, ideviceId, 2);
            });
            observer.observe(stage);
            stage.__fwxResizeObserver = observer;
        }
        if (typeof MutationObserver !== 'undefined') {
            const observer = new MutationObserver(() => {
                this.scheduleGraphRender(root, data, ideviceId, 2);
            });
            observer.observe(root, {
                attributes: true,
                childList: false,
                subtree: false,
            });
            stage.__fwxMutationObserver = observer;
        }
    },

    drawGraph: function (root, data, ideviceId) {
        const stage = root.querySelector('[data-graph-stage="true"]');
        const svg = root.querySelector('[data-graph-svg="true"]');
        if (!stage || !svg) return;
        this.positionNodes(root, data);
        const stageRect = stage.getBoundingClientRect();
        if (!stageRect.width || !stageRect.height) return;
        svg.setAttribute('viewBox', `0 0 ${stageRect.width} ${stageRect.height}`);
        svg.setAttribute('width', stageRect.width);
        svg.setAttribute('height', stageRect.height);
        const markerId = `fwx-arrow-${ideviceId}`;
        const showCompetition = root.dataset.showCompetition === 'true';
        const paths = data.relations
            .map((relation) => {
                if (relation.type === 'competes' && !showCompetition) return '';
                const fromNode = root.querySelector(
                    `.fwx-species-button[data-species-id="${relation.from}"]`
                );
                const toNode = root.querySelector(
                    `.fwx-species-button[data-species-id="${relation.to}"]`
                );
                if (!fromNode || !toNode) return '';
                const fromRect = fromNode.getBoundingClientRect();
                const toRect = toNode.getBoundingClientRect();
                const fromCenter = this.getNodeCenter(fromRect, stageRect);
                const toCenter = this.getNodeCenter(toRect, stageRect);
                const start = this.getEdgePoint(fromRect, stageRect, toCenter);
                const end = this.shortenSegmentEnd(
                    start,
                    this.getEdgePoint(toRect, stageRect, fromCenter),
                    12
                );
                const curve = this.buildCurve(start, end);
                const edgeColor =
                    this.rolePalette[fromNode.dataset.role] || '#2f7d32';
                const label = this.relationLabels[relation.type] || relation.type;
                const labelX = (start.x + end.x) / 2;
                const labelY = (start.y + end.y) / 2 - 8;
                const isCompetition = relation.type === 'competes';
                return `<g class="fwx-edge" data-from="${this.escapeAttribute(
                    relation.from
                )}" data-to="${this.escapeAttribute(relation.to)}" style="--fwx-edge-color:${edgeColor}">
                    <path d="${curve}" class="fwx-edge-halo"></path>
                    <path d="${curve}" class="fwx-edge-path ${
                        isCompetition ? 'fwx-edge-path-competition' : ''
                    }" ${
                        isCompetition ? '' : `marker-end="url(#${markerId})"`
                    }></path>
                    ${
                        data.displayOptions.showRelationLabels
                            ? `<text x="${labelX}" y="${labelY}" class="fwx-edge-label">${this.escapeHtml(
                                  label
                              )}</text>`
                            : ''
                    }
                </g>`;
            })
            .join('');
        svg.innerHTML = `<defs>
            <marker id="${markerId}" markerWidth="18" markerHeight="18" refX="14" refY="9" orient="auto" markerUnits="userSpaceOnUse">
                <path d="M0,0 L18,9 L0,18 z" fill="context-stroke"></path>
            </marker>
        </defs>${paths}`;
        this.applyPanTransform(root);
    },

    applyPanTransform: function (root) {
        const stage = root.querySelector('[data-graph-stage="true"]');
        const canvas = root.querySelector('[data-graph-canvas="true"]');
        const svg = root.querySelector('[data-graph-svg="true"]');
        if (!stage || !canvas || !svg) return;
        const panX = parseFloat(stage.dataset.panX || '0');
        const panY = parseFloat(stage.dataset.panY || '0');
        const transform = `translate(${panX}px, ${panY}px)`;
        canvas.style.transform = transform;
        svg.style.transform = transform;
    },

    getNodeAnchor: function (rect, stageRect, side) {
        const x = rect.left - stageRect.left + rect.width / 2;
        const y =
            side === 'bottom'
                ? rect.top - stageRect.top + rect.height
                : rect.top - stageRect.top;
        return { x: x, y: y };
    },

    getNodeCenter: function (rect, stageRect) {
        return {
            x: rect.left - stageRect.left + rect.width / 2,
            y: rect.top - stageRect.top + rect.height / 2,
        };
    },

    getEdgePoint: function (rect, stageRect, towardPoint) {
        const center = this.getNodeCenter(rect, stageRect);
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;
        const dx = towardPoint.x - center.x;
        const dy = towardPoint.y - center.y;
        if (dx === 0 && dy === 0) return center;
        const scale = 1 / Math.max(Math.abs(dx) / halfWidth, Math.abs(dy) / halfHeight);
        return {
            x: center.x + dx * scale,
            y: center.y + dy * scale,
        };
    },

    shortenSegmentEnd: function (start, end, amount) {
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const distance = Math.hypot(dx, dy);
        if (!distance || distance <= amount) return end;
        const unitX = dx / distance;
        const unitY = dy / distance;
        return {
            x: end.x - unitX * amount,
            y: end.y - unitY * amount,
        };
    },

    buildCurve: function (start, end) {
        const deltaX = end.x - start.x;
        const deltaY = end.y - start.y;
        const distance = Math.hypot(deltaX, deltaY);
        const tension = Math.max(40, Math.min(110, distance * 0.28));
        const control1X = start.x + deltaX * 0.3;
        const control2X = end.x - deltaX * 0.3;
        const control1Y = start.y + (deltaY >= 0 ? tension : -tension);
        const control2Y = end.y - (deltaY >= 0 ? tension : -tension);
        return `M ${start.x} ${start.y} C ${control1X} ${control1Y}, ${control2X} ${control2Y}, ${end.x} ${end.y}`;
    },

    highlightGraph: function (root, speciesId) {
        root.querySelectorAll('.fwx-edge').forEach((edge) => {
            const active =
                edge.dataset.from === speciesId || edge.dataset.to === speciesId;
            edge.classList.toggle('is-active', active);
        });
    },

    positionNodes: function (root, data) {
        const stage = root.querySelector('[data-graph-stage="true"]');
        const canvas = root.querySelector('[data-graph-canvas="true"]');
        if (!stage || !canvas) return;
        const stageWidth = stage.clientWidth;
        const stageHeight = stage.clientHeight;
        if (!stageWidth || !stageHeight) return;

        const roleAnchors = {
            producer: { x: 0.14, y: 0.18 },
            'primary-consumer': { x: 0.4, y: 0.42 },
            'secondary-consumer': { x: 0.68, y: 0.44 },
            'tertiary-consumer': { x: 0.86, y: 0.18 },
            omnivore: { x: 0.84, y: 0.74 },
            decomposer: { x: 0.18, y: 0.78 },
        };
        const nodesById = {};
        Array.from(canvas.querySelectorAll('.fwx-species-button')).forEach((node) => {
            nodesById[node.dataset.speciesId] = node;
        });
        this.roleOrder.forEach((role) => {
            const nodes = Array.from(
                canvas.querySelectorAll(`.fwx-species-button[data-role="${role}"]`)
            );
            if (!nodes.length) return;
            const anchor = roleAnchors[role] || { x: 0.5, y: 0.5 };
            const bandWidth = Math.min(stageWidth * 0.14, 140);
            const bandHeight = Math.min(stageHeight * 0.12, 90);
            nodes.forEach((node, index) => {
                if (node.dataset.manualX && node.dataset.manualY) {
                    node.style.left = `${node.dataset.manualX}px`;
                    node.style.top = `${node.dataset.manualY}px`;
                    return;
                }
                const rect = node.getBoundingClientRect();
                const width = rect.width || 180;
                const height = rect.height || 76;
                const offsetX =
                    nodes.length > 1
                        ? ((index % 3) - 1) * bandWidth
                        : 0;
                const offsetY =
                    nodes.length > 1
                        ? (Math.floor(index / 3) - Math.floor((nodes.length - 1) / 6)) *
                          bandHeight
                        : 0;
                const x = anchor.x * stageWidth + offsetX - width / 2;
                const y = anchor.y * stageHeight + offsetY - height / 2;
                node.style.left = `${Math.max(12, Math.min(stageWidth - width - 12, x))}px`;
                node.style.top = `${Math.max(12, Math.min(stageHeight - height - 12, y))}px`;
            });
        });
        this.resolveNodeCollisions(canvas, stageWidth, stageHeight);
    },

    resolveNodeCollisions: function (canvas, stageWidth, stageHeight) {
        const nodes = Array.from(canvas.querySelectorAll('.fwx-species-button'));
        for (let pass = 0; pass < 4; pass += 1) {
            nodes.forEach((node, index) => {
                const rectA = {
                    left: parseFloat(node.style.left || '0'),
                    top: parseFloat(node.style.top || '0'),
                    width: node.offsetWidth || 180,
                    height: node.offsetHeight || 76,
                };
                nodes.slice(index + 1).forEach((other) => {
                    const rectB = {
                        left: parseFloat(other.style.left || '0'),
                        top: parseFloat(other.style.top || '0'),
                        width: other.offsetWidth || 180,
                        height: other.offsetHeight || 76,
                    };
                    const overlapX =
                        Math.min(rectA.left + rectA.width, rectB.left + rectB.width) -
                        Math.max(rectA.left, rectB.left);
                    const overlapY =
                        Math.min(rectA.top + rectA.height, rectB.top + rectB.height) -
                        Math.max(rectA.top, rectB.top);
                    if (overlapX <= 0 || overlapY <= 0) return;
                    const pushX = overlapX / 2 + 10;
                    const pushY = overlapY / 2 + 10;
                    const directionX = rectA.left <= rectB.left ? -1 : 1;
                    const directionY = rectA.top <= rectB.top ? -1 : 1;
                    const nextALeft = Math.max(
                        12,
                        Math.min(stageWidth - rectA.width - 12, rectA.left + directionX * pushX)
                    );
                    const nextBLeft = Math.max(
                        12,
                        Math.min(stageWidth - rectB.width - 12, rectB.left - directionX * pushX)
                    );
                    const nextATop = Math.max(
                        12,
                        Math.min(stageHeight - rectA.height - 12, rectA.top + directionY * pushY)
                    );
                    const nextBTop = Math.max(
                        12,
                        Math.min(stageHeight - rectB.height - 12, rectB.top - directionY * pushY)
                    );
                    node.style.left = `${nextALeft}px`;
                    other.style.left = `${nextBLeft}px`;
                    node.style.top = `${nextATop}px`;
                    other.style.top = `${nextBTop}px`;
                    if (node.dataset.manualX && node.dataset.manualY) {
                        node.dataset.manualX = String(nextALeft);
                        node.dataset.manualY = String(nextATop);
                    }
                    if (other.dataset.manualX && other.dataset.manualY) {
                        other.dataset.manualX = String(nextBLeft);
                        other.dataset.manualY = String(nextBTop);
                    }
                    rectA.left = nextALeft;
                    rectA.top = nextATop;
                });
            });
        }
    },

    enableDragging: function (root, data, ideviceId) {
        const stage = root.querySelector('[data-graph-stage="true"]');
        if (!stage) return;
        root.querySelectorAll('.fwx-species-button').forEach((node) => {
            if (node.dataset.dragReady === 'true') return;
            node.dataset.dragReady = 'true';
            const startDrag = (event, mode) => {
                if (mode === 'mouse' && event.button !== undefined && event.button !== 0) return;
                if (event.cancelable) event.preventDefault();
                if (event.stopPropagation) event.stopPropagation();
                const stageRect = stage.getBoundingClientRect();
                const nodeRect = node.getBoundingClientRect();
                const startPoint = this.getClientPoint(event);
                if (!startPoint) return;
                if (
                    mode === 'pointer' &&
                    node.setPointerCapture &&
                    event.pointerId !== undefined
                ) {
                    node.setPointerCapture(event.pointerId);
                }
                const offsetX = startPoint.x - nodeRect.left;
                const offsetY = startPoint.y - nodeRect.top;
                const move = (moveEvent) => {
                    const point = this.getClientPoint(moveEvent);
                    if (!point) return;
                    if (moveEvent.cancelable) moveEvent.preventDefault();
                    if (moveEvent.stopPropagation) moveEvent.stopPropagation();
                    const maxX = stage.clientWidth - nodeRect.width - 12;
                    const maxY = stage.clientHeight - nodeRect.height - 12;
                    const nextX = Math.max(
                        12,
                        Math.min(maxX, point.x - stageRect.left - offsetX)
                    );
                    const nextY = Math.max(
                        12,
                        Math.min(maxY, point.y - stageRect.top - offsetY)
                    );
                    node.dataset.manualX = String(nextX);
                    node.dataset.manualY = String(nextY);
                    node.style.left = `${nextX}px`;
                    node.style.top = `${nextY}px`;
                    this.drawGraph(root, data, ideviceId);
                    if (node.classList.contains('is-active')) {
                        this.highlightGraph(root, node.dataset.speciesId);
                    }
                };
                const stop = () => {
                    window.removeEventListener('pointermove', move);
                    window.removeEventListener('pointerup', stop);
                    window.removeEventListener('pointercancel', stop);
                    window.removeEventListener('mousemove', move);
                    window.removeEventListener('mouseup', stop);
                    window.removeEventListener('touchmove', move);
                    window.removeEventListener('touchend', stop);
                    window.removeEventListener('touchcancel', stop);
                    if (
                        mode === 'pointer' &&
                        node.releasePointerCapture &&
                        event.pointerId !== undefined
                    ) {
                        try {
                            node.releasePointerCapture(event.pointerId);
                        } catch (error) {
                        }
                    }
                    node.classList.remove('is-dragging');
                };
                node.classList.add('is-dragging');
                if (mode === 'pointer') {
                    window.addEventListener('pointermove', move);
                    window.addEventListener('pointerup', stop);
                    window.addEventListener('pointercancel', stop);
                } else if (mode === 'mouse') {
                    window.addEventListener('mousemove', move);
                    window.addEventListener('mouseup', stop);
                } else if (mode === 'touch') {
                    window.addEventListener('touchmove', move, { passive: false });
                    window.addEventListener('touchend', stop);
                    window.addEventListener('touchcancel', stop);
                }
            };
            node.addEventListener('pointerdown', (event) => startDrag(event, 'pointer'));
            node.addEventListener('mousedown', (event) => {
                if (window.PointerEvent) return;
                startDrag(event, 'mouse');
            });
            node.addEventListener('touchstart', (event) => {
                if (window.PointerEvent) return;
                startDrag(event, 'touch');
            }, { passive: false });
        });
    },

    enablePanning: function (root, data, ideviceId) {
        const stage = root.querySelector('[data-graph-stage="true"]');
        const canvas = root.querySelector('[data-graph-canvas="true"]');
        if (!stage || !canvas || stage.dataset.panReady === 'true') return;
        stage.dataset.panReady = 'true';
        const startPan = (event, mode) => {
            if (event.target.closest('.fwx-species-button')) return;
            if (mode === 'mouse' && event.button !== undefined && event.button !== 0) return;
            const startPoint = this.getClientPoint(event);
            if (!startPoint) return;
            if (event.cancelable) event.preventDefault();
            const initialX = parseFloat(stage.dataset.panX || '0');
            const initialY = parseFloat(stage.dataset.panY || '0');
            stage.classList.add('is-panning');
            const move = (moveEvent) => {
                const point = this.getClientPoint(moveEvent);
                if (!point) return;
                if (moveEvent.cancelable) moveEvent.preventDefault();
                const nextX = initialX + (point.x - startPoint.x);
                const nextY = initialY + (point.y - startPoint.y);
                stage.dataset.panX = String(nextX);
                stage.dataset.panY = String(nextY);
                this.applyPanTransform(root);
            };
            const stop = () => {
                window.removeEventListener('pointermove', move);
                window.removeEventListener('pointerup', stop);
                window.removeEventListener('pointercancel', stop);
                window.removeEventListener('mousemove', move);
                window.removeEventListener('mouseup', stop);
                window.removeEventListener('touchmove', move);
                window.removeEventListener('touchend', stop);
                window.removeEventListener('touchcancel', stop);
                stage.classList.remove('is-panning');
            };
            if (mode === 'pointer') {
                window.addEventListener('pointermove', move);
                window.addEventListener('pointerup', stop);
                window.addEventListener('pointercancel', stop);
            } else if (mode === 'mouse') {
                window.addEventListener('mousemove', move);
                window.addEventListener('mouseup', stop);
            } else {
                window.addEventListener('touchmove', move, { passive: false });
                window.addEventListener('touchend', stop);
                window.addEventListener('touchcancel', stop);
            }
        };
        stage.addEventListener('pointerdown', (event) => startPan(event, 'pointer'));
        stage.addEventListener('mousedown', (event) => {
            if (window.PointerEvent) return;
            startPan(event, 'mouse');
        });
        stage.addEventListener(
            'touchstart',
            (event) => {
                if (window.PointerEvent) return;
                startPan(event, 'touch');
            },
            { passive: false }
        );
    },

    getClientPoint: function (event) {
        if (event.touches && event.touches[0]) {
            return {
                x: event.touches[0].clientX,
                y: event.touches[0].clientY,
            };
        }
        if (event.changedTouches && event.changedTouches[0]) {
            return {
                x: event.changedTouches[0].clientX,
                y: event.changedTouches[0].clientY,
            };
        }
        if (typeof event.clientX === 'number' && typeof event.clientY === 'number') {
            return {
                x: event.clientX,
                y: event.clientY,
            };
        }
        return null;
    },

    formatRelation: function (data, relation) {
        const from = data.species.find((item) => item.id === relation.from);
        const to = data.species.find((item) => item.id === relation.to);
        const label = this.t(this.relationLabels[relation.type] || relation.type);
        return `${this.escapeHtml(from?.name || relation.from)} ${this.escapeHtml(
            label
        )} ${this.escapeHtml(to?.name || relation.to)}${
            relation.note ? `: ${this.escapeHtml(relation.note)}` : ''
        }`;
    },

    checkQuestion: function (root, questionNode, question) {
        if (question.type === 'predict-effect') {
            this.showQuestionFeedback(questionNode, question, true, this.t('Open response recorded.'));
            return;
        }
        const selected = Array.from(
            questionNode.querySelectorAll('input:checked')
        ).map((input) => Number(input.value));
        const expected = [...question.correctAnswers].sort().join(',');
        const received = [...selected].sort().join(',');
        const isCorrect = expected === received;
        this.showQuestionFeedback(
            questionNode,
            question,
            isCorrect
        );
        if (this.isScoreableQuestion(question)) {
            root._fwxScoreState.answers[question.id] = isCorrect;
            this.updateActivityState(root);
            if (root._fwxData.evaluation && root._fwxData.evaluationID) {
                this.saveEvaluation(root);
            }
            if (root._fwxData.isScorm === 1) {
                this.sendScore(root, true);
            }
        }
    },

    showQuestionFeedback: function (questionNode, question, isCorrect, customText) {
        const feedback = questionNode.querySelector('.fwx-question-feedback');
        if (!feedback) return;
        const baseText =
            customText ||
            (isCorrect
                ? this.t('Correct.')
                : this.t('Review the food web and try again.'));
        feedback.className = `fwx-question-feedback ${isCorrect ? 'is-correct' : 'is-incorrect'}`;
        feedback.innerHTML = `<p>${this.escapeHtml(baseText)}</p>${
            question.explanation ? `<p>${this.escapeHtml(question.explanation)}</p>` : ''
        }`;
    },

    parseEmbeddedData: function (root) {
        const hostNode = root.closest('.idevice_node');
        const hostData = hostNode?.getAttribute('data-idevice-json-data');
        if (hostData) {
            try {
                return JSON.parse(hostData);
            } catch (error) {
            }
        }
        const node = root.querySelector('.fwx-data');
        if (!node) return null;
        try {
            return JSON.parse(node.textContent);
        } catch (error) {
            try {
                return JSON.parse(this.decodeHtmlEntities(node.textContent));
            } catch (decodeError) {
                return null;
            }
        }
    },

    decodeHtmlEntities: function (value) {
        if (typeof document === 'undefined') return value;
        const textarea = document.createElement('textarea');
        textarea.innerHTML = value;
        return textarea.value;
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

$foodwebc1.installAutoInit();
