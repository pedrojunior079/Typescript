"use strict";
function somar(num1, num2) {
    if (typeof num1 === 'number')
        return num1 + num2;
    else
        return `${num1}${num2}`;
}
