# decimal2fraction
A node.js typescript function to convert any decimal number to its respective fraction.

&nbsp;
## How to use
```js
const decimal2fraction = require("decimal2fraction")

let fraction = decimal2fraction(-1.375, 2)
console.log(fraction)
//logs "{ num: -227, den: 165 }" because -227/165 = -1.3757575...
```

The function "decimal2fraction" wants 3 arguments:
- The decimal to convert;
- The repeating digits of the given decimal (default: 0);
- A boolean value that represents whether to reduce the fraction to its lowest terms (default: true).

&nbsp;
## Changelog & Breaking Changes

- **v1.0.0**
<br>- First commit.

&nbsp;
## Found a bug and/or need help?
Please [open an issue](https://github.com/zWolfrost/decimal2fraction/issues) on Github to request a change, report a bug or ask for help about something and i will gladly look into it.

If you like this library, consider giving it a star on [Github](https://github.com/zWolfrost/decimal2fraction). It means a lot :)