interface Fraction {
    num: number;
    den: number;
}
/**
 * Converts a decimal number to its respective fraction.
 * @example
 * decimal2fraction(-1.375, 2)
 * //returns "{ num: -227, den: 165 }" because -227/165 = -1.3757575...
 * @param {number} decimal The decimal to convert.
 * @param {number} repeatingDigits The repeating digits of the given decimal (default: 0)
 * @param {boolean} simplify Whether to reduce the fraction to its lowest terms (e.g: 25/10 ➜ 5/2) (default: true).
 * @returns {Fraction} An object that contains the numerator "num" and the denominator "den" of the decimal's fraction.
 */
declare function decimal2fraction(decimal: number, repeatingDigits?: number, simplify?: boolean): Fraction;
export = decimal2fraction;
//# sourceMappingURL=decimal2fraction.d.ts.map