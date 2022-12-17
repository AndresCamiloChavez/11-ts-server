"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const usuario_1 = __importDefault(require("../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const generar_token_1 = __importDefault(require("../helpers/generar-token"));
const router = (0, express_1.Router)();
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const usuario = yield usuario_1.default.findOne({ where: { email } });
    const isValidPassword = bcrypt_1.default.compareSync(password, usuario === null || usuario === void 0 ? void 0 : usuario.getDataValue("password"));
    if (!isValidPassword) {
        return res.status(400).json({
            msg: "Las credenciales no son válidas",
        });
    }
    //Generar jwt
    const token = (0, generar_token_1.default)(usuario === null || usuario === void 0 ? void 0 : usuario.getDataValue('id'));
    return res.status(200).json({
        token
    });
}));
exports.default = router;
//# sourceMappingURL=auth.js.map