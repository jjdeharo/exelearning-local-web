/* eslint-disable no-undef */
import '../../../../../../../public/vitest.setup.js';

import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

function loadExport(code) {
    const modifiedCode = code.replace(
        /var\s+\$ratingscale\s*=/,
        'global.$ratingscale ='
    );
    (0, eval)(modifiedCode);
    return global.$ratingscale;
}

describe('rating-scale export', () => {
    let $ratingscale;

    beforeEach(() => {
        global.$ratingscale = undefined;
        $ratingscale = loadExport(
            readFileSync(join(__dirname, 'rating-scale.js'), 'utf-8')
        );
    });

    it('renders the matrix with calculate and print actions', () => {
        const html = $ratingscale.renderView(
            {
                title: 'Scale',
                intro: 'Choose one level.',
                locale: 'en',
                allowComment: true,
                commentLabel: 'Teacher comment',
                levels: [
                    { id: 'l1', label: 'Low', points: 1 },
                    { id: 'l2', label: 'High', points: 3 },
                ],
                items: [
                    { id: 'i1', text: 'Explains the result', help: 'Use evidence.' },
                    { id: 'i2', text: 'Uses vocabulary', help: '' },
                ],
            },
            0,
            '<div>{content}</div>',
            'rs-test'
        );

        expect(html).toContain('rating-scale-main-rs-test');
        expect(html).toContain('Teacher comment');
        expect(html).toContain('Explains the result');
        expect(html).toContain('Calculate');
        expect(html).toContain('Fill in and print');
        expect(html).toContain('value="l2"');
        expect(html).not.toContain('Games-SendScore');
        expect(html).not.toContain('Check');
    });

    it('computes score metrics from selected levels', () => {
        const results = $ratingscale.computeResults(
            {
                levels: [
                    { id: 'l1', label: 'Low', points: 1 },
                    { id: 'l2', label: 'Medium', points: 2 },
                    { id: 'l3', label: 'High', points: 4 },
                ],
                items: [{ id: 'i1' }, { id: 'i2' }],
            },
            { i1: 'l2', i2: 'l3' }
        );

        expect(results.selectedScore).toBe(6);
        expect(results.maxScore).toBe(8);
        expect(results.percentage).toBe(75);
        expect(results.scoreOutOfTen).toBe(7.5);
        expect(results.levelLabel).toBe('Medium');
    });

    it('builds a printable sheet with student fields and notes', () => {
        const html = $ratingscale.buildPrintHtml(
            {
                title: 'Scale',
                locale: 'en',
                levels: [
                    { id: 'l1', label: 'Low', points: 1 },
                    { id: 'l2', label: 'High', points: 3 },
                ],
                items: [{ id: 'i1', text: 'Explains the result', help: 'Use evidence.' }],
            },
            { i1: 'l2' },
            'Remember to cite the source.'
        );

        expect(html).toContain('exe-rating-scale-print');
        expect(html).toContain('Student name');
        expect(html).toContain('Notes');
        expect(html).toContain('Remember to cite the source.');
        expect(html).toContain('Scale');
        expect(html).toContain('3/3 (100%)');
        expect(html).toContain('<style>');
        expect(html).toContain('window.print()');
    });
});
