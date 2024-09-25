function somar(num1, num2) {
    if (typeof num1 === 'number')
        return num1 + num2;
    else
        return "".concat(num1).concat(num2);
}
