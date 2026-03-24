/* eslint-disable no-undef */
import '../../../../../../../public/vitest.setup.js';

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

describe('rating-scale edition', () => {
    let $exeDevice;

    beforeEach(() => {
        global.$exeDevice = undefined;
        eXe.app.clearHistory();
        document.documentElement.setAttribute('lang', 'en');
        document.body.setAttribute('lang', 'en');
        window.eXeLearning = globalThis.eXeLearning;
        window.eXeLearning.config.locale = 'en';
        global.$exeDevicesEdition.iDevice.tabs = {
            init: vi.fn(),
        };
        $exeDevice = global.loadIdevice(join(__dirname, 'rating-scale.js'));
    });

    it('round-trips saved data through init/load without losing fields', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const input = {
            title: 'Laboratory report scale',
            intro: 'Rate each indicator from 1 to 4.',
            locale: 'en',
            allowComment: true,
            commentLabel: 'Teacher note',
            levels: [
                { id: 'l1', label: 'Emerging', points: 1 },
                { id: 'l2', label: 'Secure', points: 3 },
            ],
            items: [
                { id: 'i1', text: 'Uses evidence from the experiment.', help: 'Cite data.' },
                { id: 'i2', text: 'Explains the conclusion clearly.', help: '' },
            ],
        };

        $exeDevice.init(element, input);
        const saved = $exeDevice.save();

        const secondElement = document.createElement('div');
        document.body.appendChild(secondElement);
        $exeDevice.init(secondElement, saved);
        const reopened = $exeDevice.save();

        expect(reopened).toEqual(saved);
    });

    it('rejects a scale with fewer than two valid levels', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);

        $exeDevice.init(element, {
            title: 'Short scale',
            levels: [{ id: 'l1', label: 'Only', points: 1 }],
            items: [{ id: 'i1', text: 'Item', help: '' }],
        });

        expect($exeDevice.save()).toBe(false);
        expect(eXe.app.getLastAlert()).toBe('You need at least two levels with a label and a score.');
    });

    it('imports a simplified AI text format into levels and items', () => {
        const parsed = $exeDevice.parseAIText(`TITLE: Lab skills scale
INTRO: Use the scale to review the report.
COMMENT: Teacher note
LEVELS: Emerging=1 | Developing=2 | Proficient=3 | Excellent=4
ITEM: Uses evidence from observations # Mention concrete data
ITEM: Explains the conclusion clearly`);

        expect(parsed.title).toBe('Lab skills scale');
        expect(parsed.levels).toHaveLength(4);
        expect(parsed.levels[2].label).toBe('Proficient');
        expect(parsed.items).toHaveLength(2);
        expect(parsed.items[0].help).toBe('Mention concrete data');
        expect(parsed.commentLabel).toBe('Teacher note');
    });

    it('uses a large textarea for the AI assessment description field', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);

        $exeDevice.init(element, {});

        const label = element.querySelector('label[for="ratingScaleAITopic"]');
        const textarea = element.querySelector('#ratingScaleAITopic');
        const wrapper = element.querySelector('.rating-scale-ai-topic');

        expect(label.textContent).toBe('Describe in detail what will be assessed');
        expect(textarea.tagName).toBe('TEXTAREA');
        expect(wrapper).not.toBeNull();
    });

    it('uses only the user description text in the AI prompt', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);

        $exeDevice.init(element, {});
        element.querySelector('#ratingScaleAITopic').value = 'Assess lab report quality and scientific accuracy.';
        $exeDevice.updateAIPrompt();

        const prompt = element.querySelector('#ratingScaleAIPrompt').value;

        expect(prompt).toContain('Assess lab report quality and scientific accuracy.');
        expect(prompt).not.toContain('Describe in detail what will be assessed:');
        expect(prompt).toContain('Return exactly 6 indicators and 4 levels.');
    });

    it('saves formatted instructions from TinyMCE', () => {
        const element = document.createElement('div');
        document.body.appendChild(element);
        const originalGet = global.tinyMCE.get;

        $exeDevice.init(element, {});
        global.tinyMCE.get = vi.fn((id) => {
            if (id === 'ratingScaleIntro') {
                return {
                    getContent: () => '<p><strong>Intro</strong> con formato.</p>',
                    setContent: vi.fn(),
                    remove: vi.fn(),
                };
            }
            return originalGet ? originalGet(id) : null;
        });

        const saved = $exeDevice.save();

        expect(saved.intro).toBe('<p><strong>Intro</strong> con formato.</p>');
        global.tinyMCE.get = originalGet;
    });
});
