"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.chunk = exports.syncArrayPos = exports.isNullOrUndefined = exports.camelToSnakeCase = exports.genListUniqueRandomNumber = exports.getCurrentUnixTimestamp = exports.genRandomNumber = exports.shuffle = void 0;
const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        const temp = array[randomIndex];
        array[randomIndex] = array[currentIndex];
        array[currentIndex] = temp;
    }
    return array;
};
exports.shuffle = shuffle;
function genRandomNumber(min, max, isDecimal) {
    let result = Math.random() * (max - min) + min;
    if (!isDecimal)
        result = Math.floor(result);
    return result;
}
exports.genRandomNumber = genRandomNumber;
function getCurrentUnixTimestamp(date) {
    if (date) {
        return Math.floor(date.valueOf() / 1000);
    }
    else {
        return Math.floor(Date.now() / 1000);
    }
}
exports.getCurrentUnixTimestamp = getCurrentUnixTimestamp;
function genListUniqueRandomNumber(amount, min, max) {
    const result = new Set();
    while (result.size < amount) {
        const randomNumb = genRandomNumber(min, max, false);
        result.add(randomNumb);
    }
    return result;
}
exports.genListUniqueRandomNumber = genListUniqueRandomNumber;
const camelToSnakeCase = (str) => {
    return (str[0].toLowerCase() +
        str.slice(1).replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`));
};
exports.camelToSnakeCase = camelToSnakeCase;
function isNullOrUndefined(obj) {
    if (typeof obj === 'undefined' || obj === null)
        return true;
    return false;
}
exports.isNullOrUndefined = isNullOrUndefined;
function syncArrayPos(originArr, sortArr, field = 'id') {
    sortArr.sort((a, b) => originArr.findIndex((item) => item[field] === a[field]) <
        originArr.findIndex((item) => item[field] === b[field])
        ? -1
        : 1);
}
exports.syncArrayPos = syncArrayPos;
function chunk(input, size) {
    return input.reduce((arr, item, idx) => {
        return idx % size === 0
            ? [...arr, [item]]
            : [...arr.slice(0, -1), [...arr.slice(-1)[0], item]];
    }, []);
}
exports.chunk = chunk;
