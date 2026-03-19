/**
 * Punnett square iDevice (export)
 *
 * Adapted for this repository as a custom iDevice for eXeLearning.
 * Based on the eXeLearning iDevice architecture and UI patterns.
 *
 * Author: Juan José de Haro / Codex collaboration
 * License: GNU Affero General Public License v3.0 (see repository LICENSE)
 */
/* eslint-disable no-undef */
var $punnettsquare = {
    scormAPIwrapper: 'libs/SCORM_API_wrapper.js',
    scormFunctions: 'libs/SCOFunctions.js',
    localStrings: {
        en: {
            punnettSquare: 'Punnett square',
            possibleGametes: 'Possible gametes',
            parent1Gametes: 'Parent 1 gametes',
            parent2Gametes: 'Parent 2 gametes',
            punnettSquareCell: 'Punnett square cell',
            parent1: 'Parent 1',
            parent2: 'Parent 2',
            writeGametes: 'Write the gametes separated by commas.',
            genotypeRatio: 'Genotype ratio',
            phenotypeRatio: 'Phenotype ratio',
            ratioHelp: 'Write the ratio as counts, not percentages. Example: 1, 2, 1.',
            solution: 'Solution',
            next: 'Next',
            previous: 'Previous',
            progress: 'Activity %s of %s',
            totalScore: 'Total score',
            currentScore: 'Current score',
            score: 'Score',
        },
        es: {
            punnettSquare: 'Cuadro de Punnett',
            possibleGametes: 'Gametos posibles',
            parent1Gametes: 'Gametos del progenitor 1',
            parent2Gametes: 'Gametos del progenitor 2',
            punnettSquareCell: 'Celda del cuadro de Punnett',
            parent1: 'Progenitor 1',
            parent2: 'Progenitor 2',
            writeGametes: 'Escribe los gametos separados por comas.',
            genotypeRatio: 'Proporción genotípica',
            phenotypeRatio: 'Proporción fenotípica',
            ratioHelp: 'Escribe la proporción como cantidades, no como porcentajes. Ejemplo: 1, 2, 1.',
            solution: 'Solución',
            next: 'Siguiente',
            previous: 'Anterior',
            progress: 'Actividad %s de %s',
            totalScore: 'Puntuación total',
            currentScore: 'Puntuación de esta actividad',
            score: 'Puntuación',
        },
        ca: {
            punnettSquare: 'Quadre de Punnett',
            possibleGametes: 'Gàmetes possibles',
            parent1Gametes: 'Gàmetes del progenitor 1',
            parent2Gametes: 'Gàmetes del progenitor 2',
            punnettSquareCell: 'Cel·la del quadre de Punnett',
            parent1: 'Progenitor 1',
            parent2: 'Progenitor 2',
            writeGametes: 'Escriu els gàmetes separats per comes.',
            genotypeRatio: 'Proporció genotípica',
            phenotypeRatio: 'Proporció fenotípica',
            ratioHelp: 'Escriu la proporció com a quantitats, no com a percentatges. Exemple: 1, 2, 1.',
            solution: 'Solució',
            next: 'Següent',
            previous: 'Anterior',
            progress: 'Activitat %s de %s',
            totalScore: 'Puntuació total',
            currentScore: 'Puntuació d\'esta activitat',
            score: 'Puntuació',
        },
        va: {},
    },

    renderView(data, accessibility, template, ideviceId) {
        const ldata = this.updateConfig(data, ideviceId);
        const textAfter = ldata.textAfter || '';
        const scormButtonText = this.escapeHtml(ldata.textButtonScorm);
        const scormButtonDisplay =
            document.body.classList.contains('exe-scorm') && ldata.isScorm > 0
                ? 'inline-block'
                : 'none';
        const html = `
            <div class="game-evaluation-ids js-hidden" data-id="${ldata.id}" data-evaluationb="${ldata.evaluation}" data-evaluationid="${this.escapeHtmlAttribute(ldata.evaluationID)}"></div>
            <div id="punnett-square-${ldata.id}" class="exe-punnett-square" data-punnett-id="${ldata.id}">
                <div class="punnett-game-container">
                    <div class="punnett-scoreboard">
                        <div class="punnett-score-number">
                            <strong>${this.escapeHtml(this.t('score'))}:</strong>
                            <span class="punnett-score-value">0%</span>
                        </div>
                    </div>
                    <div class="punnett-slider-controls">
                        <button type="button" class="punnett-slider-control punnett-prev" aria-label="${this.escapeHtmlAttribute(this.t('previous'))}" title="${this.escapeHtmlAttribute(this.t('previous'))}">
                            <span aria-hidden="true">&#9664;</span>
                        </button>
                        <span class="punnett-progress-label"></span>
                        <button type="button" class="punnett-slider-control punnett-next" aria-label="${this.escapeHtmlAttribute(this.t('next'))}" title="${this.escapeHtmlAttribute(this.t('next'))}">
                            <span aria-hidden="true">&#9654;</span>
                        </button>
                    </div>
                    <div class="punnett-stage"></div>
                </div>
                <div class="punnett-feedback" aria-live="polite"></div>
                <div class="Games-BottonContainer">
                    <div class="Games-GetScore">
                        <input type="button" value="${scormButtonText}" class="feedbackbutton Games-SendScore punnett-send-score" style="display:${scormButtonDisplay}" />
                        <span class="Games-RepeatActivity"></span>
                    </div>
                </div>
                ${textAfter ? `<div class="punnett-after">${textAfter}</div>` : ''}
            </div>
        `;
        return template.replace('{content}', html);
    },

    renderBehaviour(data, accessibility, ideviceId) {
        const ldata = this.updateConfig(data, ideviceId);
        const root = document.getElementById(`punnett-square-${ldata.id}`);
        if (!root) return false;

        root._punnettData = ldata;
        root._punnettState = {
            order: this.buildOrder(ldata),
            currentIndex: 0,
            scores: [],
        };

        if (!$('html').is('#exe-index')) {
            this.scormAPIwrapper = '../libs/SCORM_API_wrapper.js';
            this.scormFunctions = '../libs/SCOFunctions.js';
        }

        if (document.body.classList.contains('exe-scorm') && ldata.isScorm > 0) {
            if (typeof window.scorm !== 'undefined' && window.scorm.init()) {
                this.initScormData(ldata);
            } else {
                this.loadSCORM_API_wrapper(ldata);
            }
        } else if (ldata.isScorm > 0) {
            $exeDevices.iDevice.gamification.scorm.registerActivity(ldata);
        }

        if (ldata.evaluation && ldata.evaluationID && ldata.evaluationID.length > 4) {
            setTimeout(() => {
                $exeDevices.iDevice.gamification.report.updateEvaluationIcon(
                    ldata,
                    ldata.isInExe
                );
            }, 300);
        }

        root.querySelector('.punnett-prev').addEventListener('click', () => {
            this.goToActivity(root, root._punnettState.currentIndex - 1);
        });
        root.querySelector('.punnett-next').addEventListener('click', () => {
            this.goToActivity(root, root._punnettState.currentIndex + 1);
        });
        root.querySelector('.punnett-send-score').addEventListener('click', () => {
            this.sendScore(root, false);
        });
        this.renderCurrentActivity(root);
        return true;
    },

    updateConfig(odata, ideviceId) {
        const data = JSON.parse(JSON.stringify(odata || {}));
        const isInExe = eXe.app.isInExe() ?? false;
        data.idevicePath = isInExe
            ? eXe.app.getIdeviceInstalledExportPath('punnett-square')
            : $('.idevice_node.punnett-square').eq(0).attr('data-idevice-path');
        data.id = ideviceId ?? data.ideviceId ?? data.id;
        data.isInExe = isInExe;
        data.msgs = data.msgs || {};
        data.mode = data.mode === 'random' ? 'random' : 'sequence';
        data.randomCount = Math.max(0, parseInt(data.randomCount, 10) || 0);
        data.activities = this.normalizeActivities(data);
        data.evaluation = !!data.evaluation;
        data.evaluationID = data.evaluationID || '';
        data.isScorm = data.isScorm || 0;
        data.textButtonScorm =
            data.textButtonScorm || data.msgs.msgSaveScore || 'Save score';
        data.repeatActivity =
            typeof data.repeatActivity === 'boolean' ? data.repeatActivity : true;
        data.weighted = data.weighted ?? 100;
        data.scorerp = data.scorerp ?? 0;
        data.scorep = data.scorep ?? 0;
        return data;
    },

    normalizeActivities(data) {
        let activities = Array.isArray(data.activities) ? data.activities : [];
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
        return activities.map((activity, index) => {
            const normalized = JSON.parse(JSON.stringify(activity || {}));
            normalized.title = String(normalized.title || '').trim() || this.t('punnettSquare') + ' ' + (index + 1);
            normalized.geneCount = normalized.geneCount === 2 ? 2 : 1;
            normalized.parent1 = this.cleanGenotype(normalized.parent1);
            normalized.parent2 = this.cleanGenotype(normalized.parent2);
            normalized.traits = Array.isArray(normalized.traits) ? normalized.traits : [];
            while (normalized.traits.length < 2) normalized.traits.push({});
            normalized.traits = normalized.traits.map((trait, traitIndex) => ({
                geneLetter: String(trait.geneLetter || (traitIndex === 0 ? 'A' : 'B'))
                    .replace(/[^A-Za-z]/g, '')
                    .toUpperCase()
                    .slice(0, 1),
                dominantLabel: String(trait.dominantLabel || '').trim(),
                recessiveLabel: String(trait.recessiveLabel || '').trim(),
            }));
            normalized.askGametes = !!normalized.askGametes;
            normalized.askGrid = normalized.askGrid !== false;
            normalized.askGenotypeRatio = normalized.askGenotypeRatio !== false;
            normalized.askPhenotypeRatio = normalized.askPhenotypeRatio !== false;
            normalized.showSolutions = normalized.showSolutions !== false;
            return normalized;
        });
    },

    buildOrder(data) {
        const base = data.activities.map((_, index) => index);
        if (data.mode !== 'random') return base;
        const shuffled = base.slice().sort(() => Math.random() - 0.5);
        const count =
            data.randomCount > 0
                ? Math.min(data.randomCount, shuffled.length)
                : shuffled.length;
        return shuffled.slice(0, count);
    },

    getCurrentLang() {
        const lang =
            document.documentElement.lang ||
            $('html').attr('lang') ||
            navigator.language ||
            'en';
        const normalized = String(lang).toLowerCase().replace('_', '-');
        if (normalized.startsWith('ca')) return 'ca';
        if (normalized.startsWith('va')) return 'va';
        if (normalized.startsWith('es')) return 'es';
        return 'en';
    },

    t(key) {
        const lang = this.getCurrentLang();
        const catalog = this.localStrings[lang] || this.localStrings.en;
        return catalog[key] || this.localStrings.en[key] || key;
    },

    tf(key, one, two) {
        return this.t(key).replace('%s', one).replace('%s', two);
    },

    renderCurrentActivity(root) {
        const data = root._punnettData;
        const state = root._punnettState;
        const activity = data.activities[state.order[state.currentIndex]];
        const structure = this.buildStructure(activity);
        root._punnettStructure = structure;
        root._punnettActivity = activity;

        const stage = root.querySelector('.punnett-stage');
        stage.innerHTML = this.renderActivityView(data, activity, structure);
        stage.querySelector('.punnett-check').addEventListener('click', () => {
            this.checkActivity(root);
        });
        stage.querySelector('.punnett-reset').addEventListener('click', () => {
            this.resetActivity(root);
        });
        const solutionButton = stage.querySelector('.punnett-show-solution');
        if (solutionButton) {
            solutionButton.addEventListener('click', () => {
                const solution = stage.querySelector('.punnett-solution');
                solution.hidden = !solution.hidden;
            });
        }

        root.querySelector('.punnett-progress-label').textContent = this.tf(
            'progress',
            state.currentIndex + 1,
            state.order.length
        );
        root.querySelector('.punnett-prev').disabled = state.currentIndex === 0;
        root.querySelector('.punnett-next').disabled =
            state.currentIndex >= state.order.length - 1;
        root.querySelector('.punnett-slider-controls').classList.toggle(
            'is-hidden',
            state.order.length < 2
        );
        this.updateFeedback(root, state.scores[state.currentIndex] || null);
    },

    renderActivityView(data, activity, structure) {
        const instructions = data.instructions || '';
        return `
            <div class="punnett-context">
                <h3>${this.escapeHtml(activity.title)}</h3>
                ${instructions ? `<div class="punnett-instructions">${instructions}</div>` : ''}
            </div>
            <div class="punnett-help">
                <span class="punnett-badge">${this.escapeHtml(activity.parent1)} x ${this.escapeHtml(activity.parent2)}</span>
                ${structure.parentTraitsHtml}
            </div>
            ${activity.askGametes ? this.renderGametesPanel(data, structure) : ''}
            ${activity.askGrid ? this.renderGridPanel(data, structure) : ''}
            ${activity.askGenotypeRatio ? this.renderRatioPanel(data, structure, 'genotype') : ''}
            ${activity.askPhenotypeRatio ? this.renderRatioPanel(data, structure, 'phenotype') : ''}
            <div class="punnett-actions">
                <button type="button" class="btn btn-primary punnett-check">${this.escapeHtml(data.msgs.msgCheck || 'Check')}</button>
                <button type="button" class="btn btn-secondary punnett-reset">${this.escapeHtml(data.msgs.msgReset || 'Restart')}</button>
                ${
                    activity.showSolutions
                        ? `<button type="button" class="btn btn-light punnett-show-solution">${this.escapeHtml(c_('Show solutions'))}</button>`
                        : ''
                }
            </div>
            <div class="punnett-solution" hidden>
                ${this.renderSolution(structure)}
            </div>
        `;
    },

    buildStructure(activity) {
        const genes = [];
        for (let i = 0; i < activity.geneCount; i++) genes.push(activity.traits[i]);
        const parent1Loci = this.getLoci(activity.parent1, genes);
        const parent2Loci = this.getLoci(activity.parent2, genes);
        const parent1Gametes = this.getGametes(parent1Loci);
        const parent2Gametes = this.getGametes(parent2Loci);
        const grid = [];
        const genotypeCounts = {};
        const phenotypeCounts = {};
        parent2Gametes.forEach((rowGamete) => {
            const row = [];
            parent1Gametes.forEach((colGamete) => {
                const genotype = this.combineGametes(rowGamete, colGamete, genes);
                const phenotypeKey = this.getPhenotypeKey(genotype, genes);
                row.push({ genotype, phenotypeKey });
                genotypeCounts[genotype] = (genotypeCounts[genotype] || 0) + 1;
                phenotypeCounts[phenotypeKey] = (phenotypeCounts[phenotypeKey] || 0) + 1;
            });
            grid.push(row);
        });
        return {
            genes,
            parent1Gametes,
            parent2Gametes,
            grid,
            genotypeItems: Object.keys(genotypeCounts)
                .sort()
                .map((key) => ({ key, label: key, count: genotypeCounts[key] })),
            phenotypeItems: Object.keys(phenotypeCounts)
                .sort()
                .map((key) => ({
                    key,
                    label: this.getPhenotypeLabel(key, genes),
                    count: phenotypeCounts[key],
                })),
            parentTraitsHtml: genes
                .map(
                    (gene) =>
                        `<span class="punnett-badge">${this.escapeHtml(gene.geneLetter)}: ${this.escapeHtml(gene.dominantLabel)} / ${this.escapeHtml(gene.recessiveLabel)}</span>`
                )
                .join(''),
        };
    },

    getLoci(genotype, genes) {
        const clean = this.cleanGenotype(genotype);
        const loci = [];
        for (let i = 0; i < genes.length; i++) {
            const first = clean[i * 2] || genes[i].geneLetter;
            const second = clean[i * 2 + 1] || genes[i].geneLetter.toLowerCase();
            loci.push(this.normalizePair(first + second, genes[i].geneLetter));
        }
        return loci;
    },

    getGametes(loci) {
        let result = [''];
        loci.forEach((pair) => {
            const alleles = Array.from(new Set(pair.split('')));
            const next = [];
            result.forEach((prefix) => {
                alleles.forEach((allele) => {
                    next.push(prefix + allele);
                });
            });
            result = next;
        });
        return Array.from(new Set(result)).sort();
    },

    combineGametes(gameteA, gameteB, genes) {
        let output = '';
        for (let i = 0; i < genes.length; i++) {
            output += this.normalizePair(
                (gameteA[i] || '') + (gameteB[i] || ''),
                genes[i].geneLetter
            );
        }
        return output;
    },

    normalizePair(pair, geneLetter) {
        const dominant = geneLetter.toUpperCase();
        const recessive = geneLetter.toLowerCase();
        const chars = String(pair || '')
            .split('')
            .filter(Boolean)
            .map((char) => {
                if (char === dominant) return dominant;
                if (char === recessive) return recessive;
                return char === char.toUpperCase() ? dominant : recessive;
            })
            .sort((a, b) => {
                if (a === dominant && b === recessive) return -1;
                if (a === recessive && b === dominant) return 1;
                return a.localeCompare(b);
            });
        return (chars[0] || dominant) + (chars[1] || recessive);
    },

    cleanGenotype(value) {
        return String(value || '').replace(/[^A-Za-z]/g, '');
    },

    getPhenotypeKey(genotype, genes) {
        const parts = [];
        for (let i = 0; i < genes.length; i++) {
            const pair = genotype.slice(i * 2, i * 2 + 2);
            const dominant = genes[i].geneLetter.toUpperCase();
            parts.push(pair.includes(dominant) ? 'D' : 'r');
        }
        return parts.join('|');
    },

    getPhenotypeLabel(key, genes) {
        return key
            .split('|')
            .map((part, index) =>
                part === 'D'
                    ? genes[index].dominantLabel
                    : genes[index].recessiveLabel
            )
            .join(' + ');
    },

    renderGametesPanel(data, structure) {
        return `
            <div class="punnett-panel">
                <h4>${this.escapeHtml(this.t('possibleGametes'))}</h4>
                <div class="punnett-gametes-grid">
                    <div>
                        <label class="form-label">${this.escapeHtml(this.t('parent1'))}</label>
                        <input class="punnett-input punnett-gametes-input" data-parent="1" placeholder="${this.escapeHtml(structure.parent1Gametes.join(', '))}" />
                        <p class="punnett-small">${this.escapeHtml(this.t('writeGametes'))}</p>
                    </div>
                    <div>
                        <label class="form-label">${this.escapeHtml(this.t('parent2'))}</label>
                        <input class="punnett-input punnett-gametes-input" data-parent="2" placeholder="${this.escapeHtml(structure.parent2Gametes.join(', '))}" />
                        <p class="punnett-small">${this.escapeHtml(c_('Example'))}: ${this.escapeHtml(structure.parent2Gametes.join(', '))}</p>
                    </div>
                </div>
            </div>
        `;
    },

    renderGridPanel(data, structure) {
        const headerCells = structure.parent1Gametes
            .map((gamete) => `<th scope="col">${this.escapeHtml(gamete)}</th>`)
            .join('');
        const rows = structure.grid
            .map((row, rowIndex) => {
                const cells = row
                    .map(
                        (cell, colIndex) => `
                            <td>
                                <input class="punnett-input punnett-grid-input" data-row="${rowIndex}" data-col="${colIndex}" aria-label="${this.escapeHtml(this.t('punnettSquareCell'))} ${rowIndex + 1}-${colIndex + 1}" />
                            </td>`
                    )
                    .join('');
                return `<tr><th scope="row">${this.escapeHtml(
                    structure.parent2Gametes[rowIndex]
                )}</th>${cells}</tr>`;
            })
            .join('');
        return `
            <div class="punnett-panel">
                <h4>${this.escapeHtml(this.t('punnettSquare'))}</h4>
                <table class="punnett-grid-table">
                    <thead><tr><th></th>${headerCells}</tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    },

    renderRatioPanel(data, structure, type) {
        const items = type === 'genotype' ? structure.genotypeItems : structure.phenotypeItems;
        const title = type === 'genotype' ? this.t('genotypeRatio') : this.t('phenotypeRatio');
        const inputs = items
            .map(
                (item) => `
                    <div>
                        <label class="form-label">${this.escapeHtml(item.label)}</label>
                        <input type="number" min="0" class="punnett-number-input punnett-ratio-input" data-role="${type}" data-key="${this.escapeHtmlAttribute(item.key)}" />
                    </div>
                `
            )
            .join('');
        return `
            <div class="punnett-panel">
                <h4>${this.escapeHtml(title)}</h4>
                <p class="punnett-small punnett-ratio-help">${this.escapeHtml(this.t('ratioHelp'))}</p>
                <div class="punnett-ratios-grid">${inputs}</div>
            </div>
        `;
    },

    renderSolution(structure) {
        const gridRows = structure.grid
            .map(
                (row, rowIndex) => `
                    <tr>
                        <th scope="row">${this.escapeHtml(
                            structure.parent2Gametes[rowIndex]
                        )}</th>
                        ${row.map((cell) => `<td>${this.escapeHtml(cell.genotype)}</td>`).join('')}
                    </tr>
                `
            )
            .join('');
        return `
            <h4>${this.escapeHtml(this.t('solution'))}</h4>
            <p><strong>${this.escapeHtml(this.t('parent1Gametes'))}:</strong> ${this.escapeHtml(structure.parent1Gametes.join(', '))}</p>
            <p><strong>${this.escapeHtml(this.t('parent2Gametes'))}:</strong> ${this.escapeHtml(structure.parent2Gametes.join(', '))}</p>
            <table class="punnett-grid-table">
                <thead><tr><th></th>${structure.parent1Gametes.map((gamete) => `<th>${this.escapeHtml(gamete)}</th>`).join('')}</tr></thead>
                <tbody>${gridRows}</tbody>
            </table>
        `;
    },

    checkActivity(root) {
        const data = root._punnettData;
        const state = root._punnettState;
        const structure = root._punnettStructure;
        let total = 0;
        let hits = 0;
        const feedbackLines = [];
        root.querySelectorAll('.punnett-check-ok, .punnett-check-ko').forEach((el) => {
            el.classList.remove('punnett-check-ok', 'punnett-check-ko');
        });

        const gameteInputs = root.querySelectorAll('.punnett-gametes-input');
        gameteInputs.forEach((input) => {
            total++;
            const expected =
                input.dataset.parent === '1'
                    ? structure.parent1Gametes
                    : structure.parent2Gametes;
            const actual = this.parseGameteInput(input.value);
            const ok = this.sameArray(actual, expected);
            this.markInput(input, ok);
            if (ok) hits++;
        });
        if (gameteInputs.length) feedbackLines.push(`${this.escapeHtml(c_('Gametes'))}: ${hits}/${total}`);

        const beforeGridHits = hits;
        const beforeGridTotal = total;
        root.querySelectorAll('.punnett-grid-input').forEach((input) => {
            total++;
            const row = parseInt(input.dataset.row, 10);
            const col = parseInt(input.dataset.col, 10);
            const expected = structure.grid[row][col].genotype;
            const actual = this.normalizeGenotypeInput(input.value, structure.genes);
            const ok = actual === expected;
            this.markInput(input, ok);
            if (ok) hits++;
        });
        if (total > beforeGridTotal) {
            feedbackLines.push(
                `${this.escapeHtml(this.t('punnettSquare'))}: ${
                    hits - beforeGridHits
                }/${total - beforeGridTotal}`
            );
        }

        [
            { role: 'genotype', items: structure.genotypeItems, label: this.t('genotypeRatio') },
            { role: 'phenotype', items: structure.phenotypeItems, label: this.t('phenotypeRatio') },
        ].forEach((section) => {
            const inputs = root.querySelectorAll(`.punnett-ratio-input[data-role="${section.role}"]`);
            if (!inputs.length) return;
            const beforeHits = hits;
            const beforeTotal = total;
            inputs.forEach((input) => {
                total++;
                const item = section.items.find((candidate) => candidate.key === input.dataset.key);
                const actual = parseInt(input.value, 10);
                const ok = Number.isFinite(actual) && item && actual === item.count;
                this.markInput(input, ok);
                if (ok) hits++;
            });
            feedbackLines.push(`${this.escapeHtml(section.label)}: ${hits - beforeHits}/${total - beforeTotal}`);
        });

        const score = total === 0 ? 0 : Math.round((hits / total) * 100);
        state.scores[state.currentIndex] = { score, feedbackLines };
        data.scorep = this.getTotalScore(root);
        data.scorerp = data.scorep;
        this.updateFeedback(root, state.scores[state.currentIndex]);
        if (data.isScorm > 0) this.sendScore(root, true);
    },

    updateFeedback(root, currentScore) {
        const data = root._punnettData;
        const totalScore = this.getTotalScore(root);
        const feedback = root.querySelector('.punnett-feedback');
        if (!currentScore) {
            feedback.classList.remove('is-success', 'is-error');
            feedback.innerHTML = `<p><strong>${this.escapeHtml(this.t('totalScore'))}:</strong> ${totalScore}%</p>`;
            root.querySelector('.punnett-score-value').textContent = `${totalScore}%`;
            return;
        }
        const passed = currentScore.score >= 60;
        feedback.classList.toggle('is-success', passed);
        feedback.classList.toggle('is-error', !passed);
        root.querySelector('.punnett-score-value').textContent = `${totalScore}%`;
        feedback.innerHTML = `
            <p><strong>${this.escapeHtml(this.t('currentScore'))}:</strong> ${currentScore.score}%</p>
            <p><strong>${this.escapeHtml(this.t('totalScore'))}:</strong> ${totalScore}%</p>
            <p>${currentScore.feedbackLines.join('<br>')}</p>
        `;
    },

    getTotalScore(root) {
        const scores = root._punnettState.scores.filter((item) => item && Number.isFinite(item.score));
        if (!scores.length) return 0;
        return Math.round(scores.reduce((sum, item) => sum + item.score, 0) / scores.length);
    },

    goToActivity(root, index) {
        const state = root._punnettState;
        if (index < 0 || index >= state.order.length) return;
        state.currentIndex = index;
        this.renderCurrentActivity(root);
    },

    sendScore(root, auto) {
        const data = root._punnettData;
        if (!data) return;
        data.scorep = this.getTotalScore(root);
        data.scorerp = data.scorep;
        $exeDevices.iDevice.gamification.scorm.sendScoreNew(auto, data);
    },

    resetActivity(root) {
        root.querySelectorAll('.punnett-stage input').forEach((input) => {
            if (input.type === 'button') return;
            input.value = '';
            input.classList.remove('punnett-check-ok', 'punnett-check-ko');
        });
        const solution = root.querySelector('.punnett-solution');
        if (solution) solution.hidden = true;
        root._punnettState.scores[root._punnettState.currentIndex] = null;
        this.updateFeedback(root, null);
    },

    markInput(input, ok) {
        input.classList.toggle('punnett-check-ok', ok);
        input.classList.toggle('punnett-check-ko', !ok);
    },

    parseGameteInput(value) {
        return Array.from(
            new Set(
                String(value || '')
                    .split(',')
                    .map((item) => item.trim())
                    .filter(Boolean)
            )
        ).sort();
    },

    sameArray(a, b) {
        return JSON.stringify(a) === JSON.stringify(b);
    },

    normalizeGenotypeInput(value, genes) {
        const clean = this.cleanGenotype(value);
        if (!clean) return '';
        let output = '';
        for (let i = 0; i < genes.length; i++) {
            const pair = clean.slice(i * 2, i * 2 + 2);
            output += this.normalizePair(pair, genes[i].geneLetter);
        }
        return output;
    },

    loadSCORM_API_wrapper(data) {
        let parsedData = typeof data === 'string' ? JSON.parse(data) : data;
        if (typeof pipwerks === 'undefined') {
            const escapedData = this.escapeForCallback(parsedData);
            eXe.app.loadScript(
                this.scormAPIwrapper,
                '$punnettsquare.loadSCOFunctions("' + escapedData + '")'
            );
        } else {
            this.loadSCOFunctions(parsedData);
        }
    },

    loadSCOFunctions(data) {
        let parsedData = typeof data === 'string' ? JSON.parse(data) : data;
        if (typeof scorm === 'undefined') {
            const escapedData = this.escapeForCallback(parsedData);
            eXe.app.loadScript(
                this.scormFunctions,
                '$punnettsquare.initSCORM("' + escapedData + '")'
            );
        } else {
            this.initSCORM(parsedData);
        }
    },

    initSCORM(ldata) {
        let parsedData = typeof ldata === 'string' ? JSON.parse(ldata) : ldata;
        this.mScorm = window.scorm;
        if (this.mScorm.init()) this.initScormData(parsedData);
    },

    initScormData(ldata) {
        this.mScorm = window.scorm;
        this.userName = $exeDevices.iDevice.gamification.scorm.getUserName(this.mScorm);
        this.previousScore = $exeDevices.iDevice.gamification.scorm.getPreviousScore(this.mScorm);
        this.mScorm.SetScoreMax(100);
        this.mScorm.SetScoreMin(0);
        this.initialScore = this.previousScore;
        $exeDevices.iDevice.gamification.scorm.registerActivity(ldata);
    },

    escapeForCallback(obj) {
        let json = JSON.stringify(obj);
        json = json.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
        return json;
    },

    escapeHtml(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    },

    escapeHtmlAttribute(value) {
        return this.escapeHtml(value).replace(/`/g, '&#96;');
    },

    init() {},
};
