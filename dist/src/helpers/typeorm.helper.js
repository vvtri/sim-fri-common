"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DecimalColumnTransformer = void 0;
const utils_1 = require("../../utils");
class DecimalColumnTransformer {
    to(data) {
        if ((0, utils_1.isNullOrUndefined)(data))
            return null;
        return data;
    }
    from(data) {
        if ((0, utils_1.isNullOrUndefined)(data))
            return null;
        const res = parseFloat(data);
        if (isNaN(res)) {
            return null;
        }
        else {
            return res;
        }
    }
}
exports.DecimalColumnTransformer = DecimalColumnTransformer;
