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

});
