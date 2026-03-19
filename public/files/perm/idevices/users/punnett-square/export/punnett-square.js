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
            solution: 'Solution',
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
            solution: 'Solución',
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
            solution: 'Solució',
        },
        va: {
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
            solution: 'Solució',
        },
    },

    renderView(data, accessibility, template, ideviceId) {
        const ldata = this.updateConfig(data, ideviceId);
        const structure = this.buildStructure(ldata);
        const title = this.escapeHtml(ldata.title);
        const instructions = ldata.instructions || '';
        const textAfter = ldata.textAfter || '';
        const scormButtonText = this.escapeHtml(ldata.textButtonScorm);
        const scormButtonDisplay =
            document.body.classList.contains('exe-scorm') && ldata.isScorm > 0
                ? 'inline-block'
                : 'none';

        const html = `
            <div class="game-evaluation-ids js-hidden" data-id="${ldata.id}" data-evaluationb="${ldata.evaluation}" data-evaluationid="${this.escapeHtmlAttribute(ldata.evaluationID)}"></div>
            <div id="punnett-square-${ldata.id}" class="exe-punnett-square" data-punnett-id="${ldata.id}">
                <div class="punnett-context">
                    <h3>${title}</h3>
                    ${instructions ? `<div class="punnett-instructions">${instructions}</div>` : ''}
                </div>
                <div class="punnett-help">
                    <span class="punnett-badge">${this.escapeHtml(ldata.parent1)} x ${this.escapeHtml(ldata.parent2)}</span>
                    ${structure.parentTraitsHtml}
                </div>
                ${ldata.askGametes ? this.renderGametesPanel(ldata, structure) : ''}
                ${ldata.askGrid ? this.renderGridPanel(ldata, structure) : ''}
                ${ldata.askGenotypeRatio ? this.renderRatioPanel(ldata, structure, 'genotype') : ''}
                ${ldata.askPhenotypeRatio ? this.renderRatioPanel(ldata, structure, 'phenotype') : ''}
                <div class="punnett-actions">
                    <button type="button" class="btn btn-primary punnett-check">${this.escapeHtml(ldata.msgs.msgCheck || 'Check')}</button>
                    <button type="button" class="btn btn-secondary punnett-reset">${this.escapeHtml(ldata.msgs.msgReset || 'Restart')}</button>
                    ${
                        ldata.showSolutions
                            ? `<button type="button" class="btn btn-light punnett-show-solution">${this.escapeHtml(c_('Show solutions'))}</button>`
                            : ''
                    }
                </div>
                <div class="punnett-feedback" aria-live="polite"></div>
                <div class="punnett-solution" hidden>
                    ${this.renderSolution(structure)}
                </div>
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
        const structure = this.buildStructure(ldata);
        const root = document.getElementById(`punnett-square-${ldata.id}`);
        if (!root) return false;

        root.dataset.ideviceJsonData = JSON.stringify(ldata);
        root._punnettData = ldata;
        root._punnettStructure = structure;

        if (!$('html').is('#exe-index')) {
            this.scormAPIwrapper = '../libs/SCORM_API_wrapper.js';
            this.scormFunctions = '../libs/SCOFunctions.js';
        }

        if (
            document.body.classList.contains('exe-scorm') &&
            ldata.isScorm > 0
        ) {
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

        root.querySelector('.punnett-check').addEventListener('click', () => {
            this.checkActivity(root);
        });
        root.querySelector('.punnett-reset').addEventListener('click', () => {
            this.resetActivity(root);
        });
        const solutionButton = root.querySelector('.punnett-show-solution');
        if (solutionButton) {
            solutionButton.addEventListener('click', () => {
                const solution = root.querySelector('.punnett-solution');
                solution.hidden = !solution.hidden;
            });
        }
        const scoreButton = root.querySelector('.punnett-send-score');
        if (scoreButton) {
            scoreButton.addEventListener('click', () => {
                this.sendScore(root, false);
            });
        }
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
        data.geneCount = data.geneCount === 2 ? 2 : 1;
        data.parent1 = this.cleanGenotype(data.parent1);
        data.parent2 = this.cleanGenotype(data.parent2);
        data.traits = Array.isArray(data.traits) ? data.traits : [];
        while (data.traits.length < 2) data.traits.push({});
        data.traits = data.traits.map((trait, index) => ({
            geneLetter: String(trait.geneLetter || (index === 0 ? 'A' : 'B'))
                .replace(/[^A-Za-z]/g, '')
                .toUpperCase()
                .slice(0, 1),
            dominantLabel:
                trait.dominantLabel ||
                (index === 0
                    ? 'Dominant phenotype'
                    : 'Dominant phenotype 2'),
            recessiveLabel:
                trait.recessiveLabel ||
                (index === 0
                    ? 'Recessive phenotype'
                    : 'Recessive phenotype 2'),
        }));
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
        data.title = data.title || this.t('punnettSquare');
        return data;
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

    buildStructure(data) {
        const genes = [];
        for (let i = 0; i < data.geneCount; i++) {
            genes.push(data.traits[i]);
        }
        const parent1Loci = this.getLoci(data.parent1, genes);
        const parent2Loci = this.getLoci(data.parent2, genes);
        const parent1Gametes = this.getGametes(parent1Loci);
        const parent2Gametes = this.getGametes(parent2Loci);
        const grid = [];
        const genotypeCounts = {};
        const phenotypeCounts = {};

        parent2Gametes.forEach((rowGamete) => {
            const row = [];
            parent1Gametes.forEach((colGamete) => {
                const genotype = this.combineGametes(
                    rowGamete,
                    colGamete,
                    genes
                );
                const phenotypeKey = this.getPhenotypeKey(genotype, genes);
                row.push({
                    genotype,
                    phenotypeKey,
                });
                genotypeCounts[genotype] = (genotypeCounts[genotype] || 0) + 1;
                phenotypeCounts[phenotypeKey] =
                    (phenotypeCounts[phenotypeKey] || 0) + 1;
            });
            grid.push(row);
        });

        const genotypeItems = Object.keys(genotypeCounts)
            .sort()
            .map((key) => ({
                key,
                label: key,
                count: genotypeCounts[key],
            }));
        const phenotypeItems = Object.keys(phenotypeCounts)
            .sort()
            .map((key) => ({
                key,
                label: this.getPhenotypeLabel(key, genes),
                count: phenotypeCounts[key],
            }));

        return {
            genes,
            parent1Loci,
            parent2Loci,
            parent1Gametes,
            parent2Gametes,
            grid,
            genotypeItems,
            phenotypeItems,
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
            const hasDominant = pair.includes(dominant);
            parts.push(hasDominant ? 'D' : 'r');
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
                        <label for="punnett-gametes-p1-${data.id}" class="form-label">${this.escapeHtml(this.t('parent1'))}</label>
                        <input id="punnett-gametes-p1-${data.id}" class="punnett-input punnett-gametes-input" data-role="gametes" data-parent="1" placeholder="${this.escapeHtml(structure.parent1Gametes.join(', '))}" />
                        <p class="punnett-small">${this.escapeHtml(this.t('writeGametes'))}</p>
                    </div>
                    <div>
                        <label for="punnett-gametes-p2-${data.id}" class="form-label">${this.escapeHtml(this.t('parent2'))}</label>
                        <input id="punnett-gametes-p2-${data.id}" class="punnett-input punnett-gametes-input" data-role="gametes" data-parent="2" placeholder="${this.escapeHtml(structure.parent2Gametes.join(', '))}" />
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
                                <input
                                    class="punnett-input punnett-grid-input"
                                    data-role="grid"
                                    data-row="${rowIndex}"
                                    data-col="${colIndex}"
                                    aria-label="${this.escapeHtml(this.t('punnettSquareCell'))} ${rowIndex + 1}-${colIndex + 1}"
                                />
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
                    <thead>
                        <tr>
                            <th></th>
                            ${headerCells}
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
        `;
    },

    renderRatioPanel(data, structure, type) {
        const items =
            type === 'genotype'
                ? structure.genotypeItems
                : structure.phenotypeItems;
        const title =
            type === 'genotype'
                ? this.t('genotypeRatio')
                : this.t('phenotypeRatio');
        const inputs = items
            .map(
                (item, index) => `
                    <div>
                        <label class="form-label" for="punnett-${type}-${data.id}-${index}">${this.escapeHtml(item.label)}</label>
                        <input
                            id="punnett-${type}-${data.id}-${index}"
                            type="number"
                            min="0"
                            class="punnett-number-input punnett-ratio-input"
                            data-role="${type}"
                            data-key="${this.escapeHtmlAttribute(item.key)}"
                        />
                    </div>
                `
            )
            .join('');

        return `
            <div class="punnett-panel">
                <h4>${this.escapeHtml(title)}</h4>
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
                        ${row
                            .map(
                                (cell) =>
                                    `<td>${this.escapeHtml(cell.genotype)}</td>`
                            )
                            .join('')}
                    </tr>
                `
            )
            .join('');
        const genotypeList = structure.genotypeItems
            .map(
                (item) =>
                    `<li><strong>${this.escapeHtml(item.label)}:</strong> ${item.count}</li>`
            )
            .join('');
        const phenotypeList = structure.phenotypeItems
            .map(
                (item) =>
                    `<li><strong>${this.escapeHtml(item.label)}:</strong> ${item.count}</li>`
            )
            .join('');

        return `
            <h4>${this.escapeHtml(this.t('solution'))}</h4>
            <p><strong>${this.escapeHtml(this.t('parent1Gametes'))}:</strong> ${this.escapeHtml(
                structure.parent1Gametes.join(', ')
            )}</p>
            <p><strong>${this.escapeHtml(this.t('parent2Gametes'))}:</strong> ${this.escapeHtml(
                structure.parent2Gametes.join(', ')
            )}</p>
            <table class="punnett-grid-table">
                <thead>
                    <tr>
                        <th></th>
                        ${structure.parent1Gametes
                            .map((gamete) => `<th>${this.escapeHtml(gamete)}</th>`)
                            .join('')}
                    </tr>
                </thead>
                <tbody>${gridRows}</tbody>
            </table>
            <h5>${this.escapeHtml(c_('Genotype ratio'))}</h5>
            <ul>${genotypeList}</ul>
            <h5>${this.escapeHtml(c_('Phenotype ratio'))}</h5>
            <ul>${phenotypeList}</ul>
        `;
    },

    checkActivity(root) {
        const data = root._punnettData;
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
        if (gameteInputs.length) {
            feedbackLines.push(
                `${this.escapeHtml(c_('Gametes'))}: ${hits}/${total}`
            );
        }

        const beforeGridHits = hits;
        const beforeGridTotal = total;
        root.querySelectorAll('.punnett-grid-input').forEach((input) => {
            total++;
            const row = parseInt(input.dataset.row, 10);
            const col = parseInt(input.dataset.col, 10);
            const expected = structure.grid[row][col].genotype;
            const actual = this.normalizeGenotypeInput(
                input.value,
                structure.genes
            );
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

        const ratioSections = [
            {
                role: 'genotype',
                items: structure.genotypeItems,
                label: c_('Genotype ratio'),
            },
            {
                role: 'phenotype',
                items: structure.phenotypeItems,
                label: c_('Phenotype ratio'),
            },
        ];

        ratioSections.forEach((section) => {
            const inputs = root.querySelectorAll(
                `.punnett-ratio-input[data-role="${section.role}"]`
            );
            if (!inputs.length) return;
            const beforeHits = hits;
            const beforeTotal = total;
            inputs.forEach((input) => {
                total++;
                const item = section.items.find(
                    (candidate) => candidate.key === input.dataset.key
                );
                const actual = parseInt(input.value, 10);
                const ok = Number.isFinite(actual) && item && actual === item.count;
                this.markInput(input, ok);
                if (ok) hits++;
            });
            feedbackLines.push(
                `${this.escapeHtml(section.label)}: ${hits - beforeHits}/${
                    total - beforeTotal
                }`
            );
        });

        const score = total === 0 ? 0 : Math.round((hits / total) * 100);
        data.hits = hits;
        data.errors = total - hits;
        data.scorep = score;
        data.scorerp = score;
        root.dataset.score = String(score);

        const feedback = root.querySelector('.punnett-feedback');
        const passed = score >= 60;
        feedback.classList.toggle('is-success', passed);
        feedback.classList.toggle('is-error', !passed);
        feedback.innerHTML = `
            <p><strong>${this.escapeHtml(data.msgs.msgYouScore || 'Your score')}:</strong> ${score}%</p>
            <p>${feedbackLines.join('<br>')}</p>
        `;

        if (data.isScorm > 0) {
            this.sendScore(root, true);
        }
    },

    sendScore(root, auto) {
        const data = root._punnettData;
        if (!data) return;
        if (typeof data.scorep === 'undefined') data.scorep = 0;
        if (typeof data.scorerp === 'undefined') data.scorerp = data.scorep;
        $exeDevices.iDevice.gamification.scorm.sendScoreNew(auto, data);
    },

    resetActivity(root) {
        root.querySelectorAll('input').forEach((input) => {
            if (input.type === 'button') return;
            input.value = '';
            input.classList.remove('punnett-check-ok', 'punnett-check-ko');
        });
        const feedback = root.querySelector('.punnett-feedback');
        feedback.classList.remove('is-success', 'is-error');
        feedback.innerHTML = '';
        const solution = root.querySelector('.punnett-solution');
        if (solution) solution.hidden = true;
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
        if (this.mScorm.init()) {
            this.initScormData(parsedData);
        }
    },

    initScormData(ldata) {
        this.mScorm = window.scorm;
        this.userName = $exeDevices.iDevice.gamification.scorm.getUserName(
            this.mScorm
        );
        this.previousScore =
            $exeDevices.iDevice.gamification.scorm.getPreviousScore(this.mScorm);
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
