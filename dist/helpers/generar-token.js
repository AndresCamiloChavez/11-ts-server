"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const generarToken = (id) => {
    var _a;
    const token = jsonwebtoken_1.default.sign({ id }, (_a = process.env.PRIVATE_KEY_JSON) !== null && _a !== void 0 ? _a : 'DAF342423fadfa');
    return token;
};
exports.default = generarToken;
//# sourceMappingURL=generar-token.js.map