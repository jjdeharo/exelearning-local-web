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
    let filemanagerShowMock;

    beforeEach(() => {
        global.$exeDevice = undefined;
        eXe.app.clearHistory();
        document.documentElement.setAttribute('lang', 'en');
        document.body.setAttribute('lang', 'en');
        filemanagerShowMock = vi.fn();
        window.eXeLearning = globalThis.eXeLearning;
        window.eXeLearning.config.locale = 'en';
        window.eXeLearning.app = {
            modals: {
                filemanager: {
                    show: filemanagerShowMock,
                },
            },
            project: {
                _yjsBridge: {
                    assetManager: {
                        resolveAssetURL: vi
                            .fn()
                            .mockResolvedValue('blob:http://localhost/species-image'),
                    },
                },
            },
        };
        global.$exeDevicesEdition.iDevice.tabs = {
            init: vi.fn(),
        };
        global.$exeDevicesEdition.iDevice.gamification = {
            scorm: {
                getTab: vi.fn(() => '<div class="exe-form-tab" title="SCORM"></div>'),
                init: vi.fn(),
                getValues: vi.fn(() => ({
                    isScorm: 0,
                    textButtonScorm: '',
                    repeatActivity: true,
                    weighted: 100,
                })),
            },
        };
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

    it('builds a 4-species localized default example', () => {
        document.documentElement.setAttribute('lang', 'ca');
        document.body.setAttribute('lang', 'ca');
        window.eXeLearning.config.locale = 'ca';

        const data = $exeDevice.getDefaultData();

        expect(data.ecosystemContext.locale).toBe('ca');
        expect(data.species).toHaveLength(4);
        expect(data.title).toBe('Xarxa tròfica del bosc mediterrani');
        expect(data.species[0].name).toBe('Alzina');
        expect(data.species[1].name).toBe('Conill europeu');
        expect(data.species[2].name).toBe('Serp verda-i-groga');
        expect(data.species[3].name).toBe('Àguila marcenca');
        expect(data.species[0].image).toBe(
            'https://raw.githubusercontent.com/jjdeharo/gist/main/idevice_web_food/encina.jpg'
        );
        expect(data.species[1].image).toBe(
            'https://raw.githubusercontent.com/jjdeharo/gist/main/idevice_web_food/conejo.jpg'
        );
        expect(data.species[2].image).toBe(
            'https://raw.githubusercontent.com/jjdeharo/gist/main/idevice_web_food/bastarda.jpg'
        );
        expect(data.species[3].image).toBe(
            'https://raw.githubusercontent.com/jjdeharo/gist/main/idevice_web_food/culebrera.jpg'
        );
        expect(
            data.relations.some(
                (relation) =>
                    relation.type === 'eats' &&
                    relation.from === 'sp-aguila' &&
                    relation.to === 'sp-conejo'
            )
        ).toBe(true);
        expect(data.relations.some((relation) => relation.type === 'competes')).toBe(
            true
        );
    });

    it('prefers a global eXe translation when available', () => {
        document.documentElement.setAttribute('lang', 'ca');
        document.body.setAttribute('lang', 'ca');
        window.eXeLearning.config.locale = 'ca';
        const originalC = global.c_;
        try {
            global.c_ = vi.fn((key) =>
                key === 'General settings' ? 'Configuració oficial' : key
            );
            window.c_ = global.c_;

            expect($exeDevice.t('General settings')).toBe('Configuració oficial');
            expect($exeDevice.t('Title')).toBe('Títol');
        } finally {
            global.c_ = originalC;
            window.c_ = originalC;
        }
    });

    it('detects broken relations during validation', () => {
        document.documentElement.setAttribute('lang', 'es');
        document.body.setAttribute('lang', 'es');
        window.eXeLearning.config.locale = 'es';
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

        expect(mockElement.querySelectorAll('.exe-form-tab').length).toBe(8);
        expect(mockElement.querySelector('#fwc1-title').value).toBe(previousData.title);
        expect(collected.title).toBe(previousData.title);
        expect(collected.species[0].id).toBe(previousData.species[0].id);
        expect(collected.questions[0].prompt).toBe(previousData.questions[0].prompt);
        expect(collected.weighted).toBe(100);
        expect($exeDevice.validateData(collected)).toBe('');
    });

    it('keeps the editor UI in the app locale when reopening data saved with another locale', () => {
        document.documentElement.setAttribute('lang', 'ca');
        document.body.setAttribute('lang', 'ca');
        window.eXeLearning.config.locale = 'ca';

        const mockElement = document.createElement('div');
        document.body.appendChild(mockElement);
        const previousData = $exeDevice.getDefaultData();
        previousData.ecosystemContext.locale = 'es';

        $exeDevice.init(mockElement, previousData);

        expect(mockElement.textContent).toContain('Configuració general');
        expect(mockElement.textContent).toContain('Títol');
        expect(mockElement.textContent).not.toContain('Configuración general');
    });

    it('shows an image URL field and uses the standard file manager for species images', async () => {
        const mockElement = document.createElement('div');
        document.body.appendChild(mockElement);

        $exeDevice.init(mockElement, $exeDevice.getDefaultData());

        expect(mockElement.textContent).toContain('Image URL');
        expect(mockElement.textContent).toContain('Select image');

        const firstSpeciesCard = mockElement.querySelector('[data-kind="species"]');
        expect(firstSpeciesCard?.querySelector('.fwc1-species-image-input')).toBeNull();
        const imageInput = firstSpeciesCard.querySelector('[data-field="species-image"]');
        const changeHandler = vi.fn();
        imageInput.addEventListener('change', changeHandler);

        firstSpeciesCard.querySelector('.fwc1-select-image').click();

        expect(filemanagerShowMock).toHaveBeenCalledOnce();
        expect(filemanagerShowMock.mock.calls[0][0].accept).toBe('image');

        const onSelect = filemanagerShowMock.mock.calls[0][0].onSelect;
        await onSelect({
            assetUrl: 'asset://species/test-image.png',
            blobUrl: 'blob:http://localhost/species-image',
        });

        const previewImage = firstSpeciesCard.querySelector('[data-image-preview="true"] img');
        expect(imageInput.value).toBe('asset://species/test-image.png');
        expect(imageInput.dataset.blobUrl).toBe('blob:http://localhost/species-image');
        expect(previewImage.getAttribute('src')).toBe('blob:http://localhost/species-image');
        expect(changeHandler).toHaveBeenCalledOnce();
    });
});
