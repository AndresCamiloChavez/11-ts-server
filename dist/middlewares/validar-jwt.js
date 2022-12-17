"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validartJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const validartJWT = (req, res, next) => {
    const xtoken = req.headers["x-token"];
    if (!xtoken) {
        return res.status(400).json({ msg: "Falta agregar token" });
    }
    try {
        jsonwebtoken_1.default.verify(xtoken, process.env.PRIVATE_KEY_JSON);
    }
    catch (error) {
        return res.status(401).json({
            msg: 'Token no válido'
        });
    }
    next();
};
exports.validartJWT = validartJWT;
//# sourceMappingURL=validar-jwt.js.map