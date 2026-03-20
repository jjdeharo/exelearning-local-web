/* eslint-disable no-undef */
import '../../../../../../../public/vitest.setup.js';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

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
        expect(html).toContain('Ecological scenarios');
    });
});
