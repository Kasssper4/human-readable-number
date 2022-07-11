module.exports = function toReadable (number) {
    const toTwenty = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'] //единицы до 20
    const decades = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'] //десятки до 90, первые два пустых чтобы число равнялась порядковому индексу (2 = 20, 3 = 30 ...)
    let hundred = Math.trunc(number / 100);
    let decade = Math.trunc((number % 100) / 10);
    let oneAndDec = number % 100;
    let one = oneAndDec % 10;
    if (number < 20) {
        return (toTwenty[number]);
    } else if (number < 100 && number >= 20 && one !== 0) {
        return (`${decades[decade]} ${toTwenty[one]}`);
    } else if (number < 100 && number >= 20 && one === 0) {
        return (`${decades[decade]}`);
    } else if (number % 100 === 0) {
        return (`${toTwenty[hundred]} hundred`);
    } else if (number > 100 && oneAndDec < 20 && oneAndDec > 0) {
        return (`${toTwenty[hundred]} hundred ${toTwenty[oneAndDec]}`);
    } else if (number > 100 && oneAndDec >= 20 && one !== 0) {
        return (`${toTwenty[hundred]} hundred ${decades[decade]} ${toTwenty[one]}`);
    } else if (number > 100 && oneAndDec >= 20 && one === 0) {
        return (`${toTwenty[hundred]} hundred ${decades[decade]}`);
    }
}
