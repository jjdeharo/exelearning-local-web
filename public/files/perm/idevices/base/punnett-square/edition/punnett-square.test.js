/* eslint-disable no-undef */
import '../../../../../../../public/vitest.setup.js';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { vi } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadIdevice(code) {
    const modifiedCode = code.replace(/var\s+\$exeDevice\s*=/, 'global.$exeDevice =');
    (0, eval)(modifiedCode);
    return global.$exeDevice;
}

describe('punnett-square edition', () => {
    let $exeDevice;

    beforeEach(() => {
        global.$exeDevice = undefined;
        document.documentElement.setAttribute('lang', 'en');
        document.body.setAttribute('lang', 'en');
        window.eXeLearning = globalThis.eXeLearning;
        window.eXeLearning.config.locale = 'en';
        const filePath = join(__dirname, 'punnett-square.js');
        $exeDevice = loadIdevice(readFileSync(filePath, 'utf-8'));
        $exeDevice.ensureLocaleAliases();
    });

    it('uses local i18n when there is no global translation', () => {
        document.documentElement.setAttribute('lang', 'ca');
        document.body.setAttribute('lang', 'ca');
        window.eXeLearning.config.locale = 'ca';

        expect($exeDevice.t('Punnett square')).toBe('Quadre de Punnett');
    });

    it('prefers a global eXe translation when available', () => {
        document.documentElement.setAttribute('lang', 'ca');
        document.body.setAttribute('lang', 'ca');
        window.eXeLearning.config.locale = 'ca';
        const originalC = global.c_;
        try {
            global.c_ = vi.fn((key) =>
                key === 'Punnett square' ? 'Traducció oficial Punnett' : key
            );
            window.c_ = global.c_;

            expect($exeDevice.t('Punnett square')).toBe('Traducció oficial Punnett');
            expect($exeDevice.t('Monohybrid')).toBe('Monohíbrid');
        } finally {
            global.c_ = originalC;
            window.c_ = originalC;
        }
    });
});
