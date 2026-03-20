/* eslint-disable no-undef */
import '../../../../../../../public/vitest.setup.js';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadIdevice(code) {
    const modifiedCode = code.replace(/var\s+\$exeDevice\s*=/, 'global.$exeDevice =');
    (0, eval)(modifiedCode);
    return global.$exeDevice;
}

describe('food-web-c1 edition', () => {
    let $exeDevice;

    beforeEach(() => {
        global.$exeDevice = undefined;
        eXe.app.clearHistory();
        const filePath = join(__dirname, 'food-web-c1.js');
        $exeDevice = loadIdevice(readFileSync(filePath, 'utf-8'));
    });

    it('parses simplified text into normalized data', () => {
        const data = $exeDevice.parseSimplifiedText(`TITLE: Red trófica
ECOSYSTEM: Bosque mediterráneo
SPECIES: Encina | producer | planta | Produce materia orgánica
SPECIES: Conejo | primary-consumer | mamífero | Herbívoro frecuente
SPECIES: Zorro | secondary-consumer | mamífero | Depredador
RELATION: Conejo | eats | Encina | medium
RELATION: Zorro | eats | Conejo | high
QUESTION: multiple-choice | ¿Qué pasa si disminuye la encina? | Disminuye el conejo* | Aumenta el zorro | No cambia nada`);

        expect(data.title).toBe('Red trófica');
        expect(data.species).toHaveLength(3);
        expect(data.relations).toHaveLength(2);
        expect(data.questions[0].correctAnswers).toEqual([0]);
    });

    it('detects broken relations during validation', () => {
        const data = $exeDevice.getDefaultData();
        data.relations[0].to = 'sp-missing';

        expect($exeDevice.validateData(data)).toContain('referencias rotas');
    });

    it('reopens previous data and collects the same core values', () => {
        const mockElement = document.createElement('div');
        document.body.appendChild(mockElement);
        const previousData = $exeDevice.getDefaultData();

        $exeDevice.init(mockElement, previousData);
        const collected = $exeDevice.collectFormData();

        expect(mockElement.querySelector('#fwc1-title').value).toBe(previousData.title);
        expect(collected.title).toBe(previousData.title);
        expect(collected.species[0].id).toBe(previousData.species[0].id);
        expect(collected.questions[0].prompt).toBe(previousData.questions[0].prompt);
        expect($exeDevice.validateData(collected)).toBe('');
    });
});
