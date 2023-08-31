interface Fraction {
   num: number,
   den: number
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
function decimal2fraction(decimal: number, repeatingDigits=0, simplify=true): Fraction
{
   //Initialize Fraction
   let fract: Fraction = {
      num: Math.abs(decimal),
      den: 1,
   }

   //Calculate decimals digits number by type
   let allDigits = countDecimals(fract.num)
   repeatingDigits = minmax(repeatingDigits, 0, allDigits)
   let regularDigits = allDigits - repeatingDigits

   //Convert repeating decimal to a fraction with a decimal numerator
   if (repeatingDigits > 0)
   {
      let repeatingDigitsPower = 10**repeatingDigits

      fract.num = (fract.num * repeatingDigitsPower) - toFixedTrunc(fract.num, regularDigits);
      fract.den = repeatingDigitsPower - 1;
   }

   //Multiply the both values of the fraction to make the numerator an integer
   let regularDigitsPower = 10**regularDigits;
   fract.num *= regularDigitsPower
   fract.den *= regularDigitsPower

   //Floating point precision fix
   fract.num = Math.trunc(fract.num);

   //Reduce the fraction to its lowest terms
   if (simplify)
   {
      let gcd = GCD(fract.num, fract.den);

      fract.num /= gcd;
      fract.den /= gcd;
   }

   //Make the numerator negative if decimal was
   if (decimal < 0) fract.num *= -1

   return fract
}


function countDecimals(decimal: string|number): number
{
   return decimal.toString().split(".").at(1)?.length ?? 0;
}

function toFixedTrunc(decimal: number, removeNumber: number): number
{
   let digitsToRemove = countDecimals(decimal) - removeNumber
   return +decimal.toString().slice(0, -digitsToRemove)
}

function GCD(a: number, b: number): number
{
   return b ? GCD(b, a % b) : a;
}

function minmax(num: number, min=-Infinity, max=Infinity): number
{
   return (num < min) ? min : (num > max) ? max : num;
}


export = decimal2fraction