/* eslint-disable no-undef */
import '../../../../../../../public/vitest.setup.js';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { vi } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadExport(code) {
    const modifiedCode = code.replace(/var\s+\$foodwebc1\s*=/, 'global.$foodwebc1 =');
    (0, eval)(modifiedCode);
    return global.$foodwebc1;
}

describe('food-web-c1 export', () => {
    let $foodwebc1;

    beforeEach(() => {
        global.$foodwebc1 = undefined;
        global.$exeDevices.iDevice.gamification = {
            ...(global.$exeDevices.iDevice.gamification || {}),
            scorm: {
                ...(global.$exeDevices.iDevice.gamification?.scorm || {}),
                registerActivity: vi.fn(),
                sendScoreNew: vi.fn(),
                getUserName: vi.fn(() => ''),
                getPreviousScore: vi.fn(() => ''),
            },
            report: {
                ...(global.$exeDevices.iDevice.gamification?.report || {}),
                updateEvaluationIcon: vi.fn(),
                saveEvaluation: vi.fn(),
            },
        };
        const filePath = join(__dirname, 'food-web-c1.js');
        $foodwebc1 = loadExport(readFileSync(filePath, 'utf-8'));
    });

    it('renders the main sections without crashing', () => {
        const data = {
            title: 'Red trófica del bosque',
            subtitle: 'Bosque mediterráneo',
            instructions: '<p>Explora la red.</p>',
            ecosystemContext: { name: 'Bosque mediterráneo', level: 'ESO', course: '1.º ESO' },
            displayOptions: { showLegend: true, allowRevealAnswers: true, layout: 'levels' },
            species: [
                { id: 'sp-encina', name: 'Encina', role: 'producer', group: 'planta', description: 'Base del sistema', traits: ['native'] },
                { id: 'sp-conejo', name: 'Conejo', role: 'primary-consumer', group: 'mamífero', description: 'Herbívoro', traits: ['prey'] },
                { id: 'sp-zorro', name: 'Zorro', role: 'secondary-consumer', group: 'mamífero', description: 'Depredador', traits: ['predator'] },
            ],
            relations: [
                { from: 'sp-conejo', to: 'sp-encina', type: 'eats', note: 'Consume brotes' },
                { from: 'sp-zorro', to: 'sp-conejo', type: 'eats', note: 'Caza con frecuencia' },
            ],
            questions: [
                { id: 'q1', type: 'multiple-choice', prompt: '¿Quién es el productor?', options: ['Encina', 'Conejo'], correctAnswers: [0], explanation: 'La encina produce materia orgánica.' },
            ],
            scenarios: [
                { id: 'sc1', title: 'Sequía', prompt: 'Predice un efecto.', expectedEffects: ['Menos biomasa vegetal'] },
            ],
        };
        const template = '<div>{content}</div>';
        const html = $foodwebc1.renderView(data, 0, template, 'fw-test');

        expect(html).toContain('Red trófica del bosque');
        expect(html).toContain('fwx-questions');
        expect(html).toContain('fwx-scenarios');
        expect(html).toContain('fwx-expand-graph');
        expect(html).toContain('fwx-send-score');
    });

    it('adds a competition toggle when the graph contains competition relations', () => {
        const data = {
            title: 'Red trófica',
            displayOptions: { showLegend: true, allowRevealAnswers: true, layout: 'levels' },
            species: [
                { id: 'oak', name: 'Encina', role: 'producer', group: 'planta' },
                { id: 'rabbit', name: 'Conejo', role: 'primary-consumer', group: 'mamífero' },
                { id: 'hare', name: 'Liebre', role: 'primary-consumer', group: 'mamífero' },
            ],
            relations: [{ from: 'rabbit', to: 'hare', type: 'competes' }],
            questions: [],
            scenarios: [],
        };

        const html = $foodwebc1.renderView(data, 0, '<div>{content}</div>', 'fw-test');

        expect(html).toContain('fwx-toggle-competition');
    });

    it('renders species images in graph nodes and in the detail panel', () => {
        const data = {
            title: 'Red trófica',
            ecosystemContext: { locale: 'es' },
            displayOptions: { showLegend: false, allowRevealAnswers: true, layout: 'levels' },
            species: [
                {
                    id: 'oak',
                    name: 'Encina',
                    role: 'producer',
                    group: 'planta',
                    image: 'asset://oak/encina.png',
                },
                {
                    id: 'rabbit',
                    name: 'Conejo',
                    role: 'primary-consumer',
                    group: 'mamífero',
                },
            ],
            relations: [{ from: 'rabbit', to: 'oak', type: 'eats' }],
            questions: [],
            scenarios: [],
        };

        const html = $foodwebc1.renderView(data, 0, '<div>{content}</div>', 'fw-test');

        expect(html).toContain('fwx-species-thumb');
        expect(html).toContain('fwx-detail-image');
        expect(html).toContain('asset://oak/encina.png');
    });

    it('draws trophic arrows from prey to predator while preserving stored relation semantics', () => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <section class="food-web-c1-content">
                <div class="fwx-graph-stage" data-graph-stage="true">
                    <svg class="fwx-graph-svg" data-graph-svg="true"></svg>
                    <div class="fwx-graph-canvas" data-graph-canvas="true">
                        <button class="fwx-species-button" data-species-id="oak" data-role="producer"></button>
                        <button class="fwx-species-button" data-species-id="rabbit" data-role="primary-consumer"></button>
                    </div>
                </div>
            </section>
        `;
        const root = wrapper.querySelector('.food-web-c1-content');
        const stage = wrapper.querySelector('[data-graph-stage="true"]');
        const oak = wrapper.querySelector('.fwx-species-button[data-species-id="oak"]');
        const rabbit = wrapper.querySelector('.fwx-species-button[data-species-id="rabbit"]');
        const svg = wrapper.querySelector('[data-graph-svg="true"]');
        const data = {
            displayOptions: { showRelationLabels: false },
            relations: [{ from: 'rabbit', to: 'oak', type: 'eats' }],
        };

        stage.getBoundingClientRect = () => ({
            left: 0,
            top: 0,
            width: 400,
            height: 240,
            right: 400,
            bottom: 240,
        });
        oak.getBoundingClientRect = () => ({
            left: 20,
            top: 40,
            width: 120,
            height: 48,
            right: 140,
            bottom: 88,
        });
        rabbit.getBoundingClientRect = () => ({
            left: 240,
            top: 130,
            width: 120,
            height: 48,
            right: 360,
            bottom: 178,
        });

        $foodwebc1.drawGraph(root, data, 'fw-test');

        const edge = svg.querySelector('.fwx-edge');
        const path = svg.querySelector('.fwx-edge-path');
        const curveStart = path
            ?.getAttribute('d')
            ?.match(/^M\s+([0-9.]+)\s+([0-9.]+)\s+C.*,\s+([0-9.]+)\s+([0-9.]+)$/);
        expect(edge?.dataset.from).toBe('rabbit');
        expect(edge?.dataset.to).toBe('oak');
        expect(curveStart).not.toBeNull();
        expect(Number(curveStart[1])).toBeLessThan(150);
        expect(Number(curveStart[3])).toBeGreaterThan(220);
    });

    it('translates relation labels in the graph using the idevice locale', () => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <section class="food-web-c1-content">
                <div class="fwx-graph-stage" data-graph-stage="true">
                    <svg class="fwx-graph-svg" data-graph-svg="true"></svg>
                    <div class="fwx-graph-canvas" data-graph-canvas="true">
                        <button class="fwx-species-button" data-species-id="oak" data-role="producer"></button>
                        <button class="fwx-species-button" data-species-id="rabbit" data-role="primary-consumer"></button>
                    </div>
                </div>
            </section>
        `;
        const root = wrapper.querySelector('.food-web-c1-content');
        const stage = wrapper.querySelector('[data-graph-stage="true"]');
        const oak = wrapper.querySelector('.fwx-species-button[data-species-id="oak"]');
        const rabbit = wrapper.querySelector('.fwx-species-button[data-species-id="rabbit"]');
        const svg = wrapper.querySelector('[data-graph-svg="true"]');
        const data = {
            ecosystemContext: { locale: 'es' },
            displayOptions: { showRelationLabels: true },
            relations: [{ from: 'rabbit', to: 'oak', type: 'eats' }],
        };

        stage.getBoundingClientRect = () => ({
            left: 0,
            top: 0,
            width: 400,
            height: 240,
            right: 400,
            bottom: 240,
        });
        oak.getBoundingClientRect = () => ({
            left: 20,
            top: 40,
            width: 120,
            height: 48,
            right: 140,
            bottom: 88,
        });
        rabbit.getBoundingClientRect = () => ({
            left: 240,
            top: 130,
            width: 120,
            height: 48,
            right: 360,
            bottom: 178,
        });

        $foodwebc1.drawGraph(root, data, 'fw-test');

        expect(svg.querySelector('.fwx-edge-label')?.textContent).toBe('se alimenta de');
    });

    it('uses the idevice locale instead of the page lang when rendering labels', () => {
        document.documentElement.lang = 'en';
        const data = {
            title: 'Red trófica',
            ecosystemContext: { locale: 'es' },
            displayOptions: { showLegend: true, allowRevealAnswers: true, layout: 'levels' },
            species: [
                { id: 'oak', name: 'Encina', role: 'producer', group: 'planta' },
                { id: 'rabbit', name: 'Conejo', role: 'primary-consumer', group: 'mamífero' },
            ],
            relations: [{ from: 'rabbit', to: 'oak', type: 'eats' }],
            questions: [],
            scenarios: [],
        };

        const html = $foodwebc1.renderView(data, 0, '<div>{content}</div>', 'fw-test');

        expect(html).toContain('Restablecer distribución');
        expect(html).toContain('Productor');
    });

    it('renders species detail labels in Spanish without Catalan leakage', () => {
        const data = {
            ecosystemContext: { locale: 'es' },
        };
        const species = {
            id: 'oak',
            name: 'Encina',
            role: 'producer',
            description: 'Árbol mediterráneo.',
            traits: ['autótrofa', 'perenne'],
            importance: 'productor principal',
        };

        const html = $foodwebc1.getDetailPanel(species, data);

        expect(html).toContain('<strong>Rasgos:</strong>');
        expect(html).toContain('<strong>Importancia:</strong>');
        expect(html).not.toContain('Trets');
    });

    it('prefers a global eXe translation when available during export', () => {
        document.documentElement.lang = 'ca';
        const originalC = global.c_;
        try {
            global.c_ = vi.fn((key) =>
                key === 'Reset layout' ? 'Redistribució oficial' : key
            );
            window.c_ = global.c_;

            const data = {
                title: 'Xarxa tròfica',
                ecosystemContext: { locale: 'ca' },
                displayOptions: { showLegend: true, allowRevealAnswers: true, layout: 'levels' },
                species: [
                    { id: 'oak', name: 'Alzina', role: 'producer', group: 'planta' },
                    { id: 'rabbit', name: 'Conill', role: 'primary-consumer', group: 'mamífer' },
                ],
                relations: [{ from: 'rabbit', to: 'oak', type: 'eats' }],
                questions: [],
                scenarios: [],
            };

            const html = $foodwebc1.renderView(data, 0, '<div>{content}</div>', 'fw-test');

            expect(html).toContain('Redistribució oficial');
            expect(html).toContain('Productor');
        } finally {
            global.c_ = originalC;
            window.c_ = originalC;
        }
    });

    it('initializes from ideviceId embedded in JSON data when renderBehaviour receives no third argument', () => {
        const data = {
            ideviceId: 'idevice-food-web-test',
            title: 'Red trófica del bosque',
            displayOptions: { showLegend: true, allowRevealAnswers: true, layout: 'levels' },
            species: [
                { id: 'sp-encina', name: 'Encina', role: 'producer', group: 'planta' },
                { id: 'sp-conejo', name: 'Conejo', role: 'primary-consumer', group: 'mamífero' },
            ],
            relations: [{ from: 'sp-conejo', to: 'sp-encina', type: 'eats' }],
            questions: [],
            scenarios: [],
        };
        const template = '<div>{content}</div>';
        const host = document.createElement('div');
        host.id = data.ideviceId;
        host.className = 'idevice_node food-web-c1';
        host.setAttribute('data-idevice-json-data', JSON.stringify(data));
        host.innerHTML = $foodwebc1.renderView(data, 0, template);
        document.body.appendChild(host);

        const enableDraggingSpy = vi
            .spyOn($foodwebc1, 'enableDragging')
            .mockImplementation(() => {});
        const scheduleGraphRenderSpy = vi
            .spyOn($foodwebc1, 'scheduleGraphRender')
            .mockImplementation(() => {});
        const observeGraphLayoutSpy = vi
            .spyOn($foodwebc1, 'observeGraphLayout')
            .mockImplementation(() => {});

        $foodwebc1.renderBehaviour(data, 0);

        expect(enableDraggingSpy).toHaveBeenCalledTimes(1);
        expect(scheduleGraphRenderSpy).toHaveBeenCalled();
        expect(observeGraphLayoutSpy).toHaveBeenCalledTimes(1);
        expect(host.querySelector('.food-web-c1-content')?.dataset.foodWebId).toBe(
            data.ideviceId
        );

        enableDraggingSpy.mockRestore();
        scheduleGraphRenderSpy.mockRestore();
        observeGraphLayoutSpy.mockRestore();
        host.remove();
    });

    it('boots from embedded JSON without host data attributes', () => {
        const data = {
            ideviceId: 'fw-html-only',
            title: 'Food web',
            displayOptions: { showLegend: true, allowRevealAnswers: true, layout: 'levels' },
            species: [
                { id: 'oak', name: 'Oak', role: 'producer', group: 'plant' },
                { id: 'rabbit', name: 'Rabbit', role: 'primary-consumer', group: 'mammal' },
            ],
            relations: [{ from: 'rabbit', to: 'oak', type: 'eats' }],
            questions: [],
            scenarios: [],
        };
        const wrapper = document.createElement('div');
        wrapper.className = 'idevice_node food-web-c1';
        wrapper.innerHTML = $foodwebc1.renderView(data, 0, '<div>{content}</div>', data.ideviceId);
        document.body.appendChild(wrapper);

        const enableDraggingSpy = vi
            .spyOn($foodwebc1, 'enableDragging')
            .mockImplementation(() => {});
        const scheduleGraphRenderSpy = vi
            .spyOn($foodwebc1, 'scheduleGraphRender')
            .mockImplementation(() => {});
        const observeGraphLayoutSpy = vi
            .spyOn($foodwebc1, 'observeGraphLayout')
            .mockImplementation(() => {});

        expect($foodwebc1.bootExistingRoots(document)).toBe(1);

        const root = wrapper.querySelector('.food-web-c1-content');
        expect(root?.dataset.fwxInitialized).toBe('true');
        expect(enableDraggingSpy).toHaveBeenCalledTimes(1);
        expect(scheduleGraphRenderSpy).toHaveBeenCalled();
        expect(observeGraphLayoutSpy).toHaveBeenCalledTimes(1);

        enableDraggingSpy.mockRestore();
        scheduleGraphRenderSpy.mockRestore();
        observeGraphLayoutSpy.mockRestore();
        wrapper.remove();
    });

    it('resets node positions and pan offsets', () => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <section class="food-web-c1-content">
                <div class="fwx-graph-stage" data-graph-stage="true" data-pan-x="40" data-pan-y="-20">
                    <svg class="fwx-graph-svg" data-graph-svg="true"></svg>
                    <div class="fwx-graph-canvas" data-graph-canvas="true">
                        <button class="fwx-species-button" data-manual-x="10" data-manual-y="20" style="left:10px;top:20px"></button>
                    </div>
                </div>
            </section>
        `;
        const root = wrapper.querySelector('.food-web-c1-content');
        const stage = wrapper.querySelector('[data-graph-stage="true"]');
        const node = wrapper.querySelector('.fwx-species-button');
        const drawGraphSpy = vi.spyOn($foodwebc1, 'drawGraph').mockImplementation(() => {});
        const data = { species: [], relations: [], displayOptions: {} };

        $foodwebc1.resetGraphLayout(root, data, 'fw-test');

        expect(stage.dataset.panX).toBe('0');
        expect(stage.dataset.panY).toBe('0');
        expect(node.style.left).toBe('');
        expect(node.style.top).toBe('');

        drawGraphSpy.mockRestore();
    });

    it('distributes trophic levels across the graph width without overlapping nodes', () => {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = `
            <section class="food-web-c1-content">
                <div class="fwx-graph-stage" data-graph-stage="true">
                    <svg class="fwx-graph-svg" data-graph-svg="true"></svg>
                    <div class="fwx-graph-canvas" data-graph-canvas="true">
                        <button class="fwx-species-button" data-species-id="oak" data-role="producer"></button>
                        <button class="fwx-species-button" data-species-id="rabbit" data-role="primary-consumer"></button>
                        <button class="fwx-species-button" data-species-id="snake" data-role="secondary-consumer"></button>
                        <button class="fwx-species-button" data-species-id="eagle" data-role="tertiary-consumer"></button>
                    </div>
                </div>
            </section>
        `;
        const root = wrapper.querySelector('.food-web-c1-content');
        const stage = wrapper.querySelector('[data-graph-stage="true"]');
        const nodes = Array.from(wrapper.querySelectorAll('.fwx-species-button'));
        const data = {
            species: [
                { id: 'oak', role: 'producer' },
                { id: 'rabbit', role: 'primary-consumer' },
                { id: 'snake', role: 'secondary-consumer' },
                { id: 'eagle', role: 'tertiary-consumer' },
            ],
            relations: [
                { from: 'rabbit', to: 'oak', type: 'eats' },
                { from: 'snake', to: 'rabbit', type: 'eats' },
                { from: 'eagle', to: 'snake', type: 'eats' },
                { from: 'eagle', to: 'rabbit', type: 'eats' },
            ],
        };

        Object.defineProperty(stage, 'clientWidth', { value: 760, configurable: true });
        Object.defineProperty(stage, 'clientHeight', { value: 520, configurable: true });
        nodes.forEach((node) => {
            Object.defineProperty(node, 'offsetWidth', { value: 180, configurable: true });
            Object.defineProperty(node, 'offsetHeight', { value: 140, configurable: true });
        });

        $foodwebc1.positionNodes(root, data);

        const boxes = Object.fromEntries(
            nodes.map((node) => [
                node.dataset.speciesId,
                {
                    left: parseFloat(node.style.left || '0'),
                    top: parseFloat(node.style.top || '0'),
                    width: node.offsetWidth,
                    height: node.offsetHeight,
                },
            ])
        );

        expect(boxes.oak.left).toBeLessThan(boxes.rabbit.left);
        expect(boxes.rabbit.left).toBeLessThan(boxes.snake.left);
        expect(boxes.snake.left).toBeLessThan(boxes.eagle.left);

        const speciesIds = Object.keys(boxes);
        for (let i = 0; i < speciesIds.length; i += 1) {
            for (let j = i + 1; j < speciesIds.length; j += 1) {
                const a = boxes[speciesIds[i]];
                const b = boxes[speciesIds[j]];
                const overlapX =
                    Math.min(a.left + a.width, b.left + b.width) - Math.max(a.left, b.left);
                const overlapY =
                    Math.min(a.top + a.height, b.top + b.height) - Math.max(a.top, b.top);
                expect(overlapX > 0 && overlapY > 0).toBe(false);
            }
        }
    });

});
