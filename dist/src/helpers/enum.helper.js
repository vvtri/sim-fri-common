"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getValEnumStr = exports.getValEnumNumber = exports.getEnumStr = void 0;
const getEnumStr = (enumData) => {
    const arrayVals = Object.values(enumData);
    let resultStr = '';
    arrayVals.forEach((val, index) => {
        const lastStr = index === arrayVals.length - 1 ? '' : ', ';
        resultStr = resultStr + `'${val}'` + lastStr;
    });
    return resultStr;
};
exports.getEnumStr = getEnumStr;
const getValEnumNumber = (enumData) => {
    return Object.values(enumData).filter((v) => Number.isFinite(v));
};
exports.getValEnumNumber = getValEnumNumber;
const getValEnumStr = (enumData) => {
    return Object.values(enumData).filter((v) => !Number.isFinite(v));
};
exports.getValEnumStr = getValEnumStr;
