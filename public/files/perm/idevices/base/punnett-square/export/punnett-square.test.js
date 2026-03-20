/* eslint-disable no-undef */
import '../../../../../../../public/vitest.setup.js';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { vi } from 'vitest';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadExport(code) {
    const modifiedCode = code.replace(
        /var\s+\$punnettsquare\s*=/,
        'global.$punnettsquare ='
    );
    (0, eval)(modifiedCode);
    return global.$punnettsquare;
}

describe('punnett-square export', () => {
    let $punnettsquare;

    beforeEach(() => {
        global.$punnettsquare = undefined;
        document.documentElement.setAttribute('lang', 'en');
        const filePath = join(__dirname, 'punnett-square.js');
        $punnettsquare = loadExport(readFileSync(filePath, 'utf-8'));
    });

    it('uses local strings when there is no global translation', () => {
        document.documentElement.setAttribute('lang', 'ca');

        expect($punnettsquare.t('punnettSquare')).toBe('Quadre de Punnett');
    });

    it('prefers a global eXe translation when available', () => {
        document.documentElement.setAttribute('lang', 'ca');
        const originalC = global.c_;
        try {
            global.c_ = vi.fn((key) =>
                key === 'score' ? 'Puntuació oficial' : key
            );
            window.c_ = global.c_;

            expect($punnettsquare.t('score')).toBe('Puntuació oficial');
            expect($punnettsquare.t('next')).toBe('Següent');
        } finally {
            global.c_ = originalC;
            window.c_ = originalC;
        }
    });
});
