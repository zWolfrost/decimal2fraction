"use strict";
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
function decimal2fraction(decimal, repeatingDigits = 0, simplify = true) {
    //Initialize Fraction
    let fract = {
        num: Math.abs(decimal),
        den: 1,
    };
    //Calculate decimals digits number by type
    let allDigits = countDecimals(fract.num);
    repeatingDigits = minmax(repeatingDigits, 0, allDigits);
    let regularDigits = allDigits - repeatingDigits;
    //Convert repeating decimal to a fraction with a decimal numerator
    if (repeatingDigits > 0) {
        let repeatingDigitsPower = Math.pow(10, repeatingDigits);
        fract.num = (fract.num * repeatingDigitsPower) - toFixedTrunc(fract.num, regularDigits);
        fract.den = repeatingDigitsPower - 1;
    }
    //Multiply the both values of the fraction to make the numerator an integer
    let regularDigitsPower = Math.pow(10, regularDigits);
    fract.num *= regularDigitsPower;
    fract.den *= regularDigitsPower;
    //Floating point precision fix
    fract.num = Math.trunc(fract.num);
    //Reduce the fraction to its lowest terms
    if (simplify) {
        let gcd = GCD(fract.num, fract.den);
        fract.num /= gcd;
        fract.den /= gcd;
    }
    //Make the numerator negative if decimal was
    if (decimal < 0)
        fract.num *= -1;
    return fract;
}
function countDecimals(decimal) {
    var _a, _b;
    return (_b = (_a = decimal.toString().split(".").at(1)) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
}
function toFixedTrunc(decimal, removeNumber) {
    let digitsToRemove = countDecimals(decimal) - removeNumber;
    return +decimal.toString().slice(0, -digitsToRemove);
}
function GCD(a, b) {
    return b ? GCD(b, a % b) : a;
}
function minmax(num, min = -Infinity, max = Infinity) {
    return (num < min) ? min : (num > max) ? max : num;
}
module.exports = decimal2fraction;
