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
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const usuario_1 = __importDefault(require("../models/usuario"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield usuario_1.default.findAll();
    res.status(200).json({ usuarios });
});
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const usuario = yield usuario_1.default.findByPk(id);
    const emailUsuario = usuario === null || usuario === void 0 ? void 0 : usuario.getDataValue("email");
    if (!usuario) {
        return res.status(404).json({
            msg: `No existe un usuario por el id ${id}`,
        });
    }
    res.status(200).json({ usuario });
});
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { nombre, email } = req.body;
    const password = bcrypt_1.default.hashSync(req.body.password, 10);
    try {
        const usuario = yield usuario_1.default.create({ nombre, email, password });
        return res.status(200).json(usuario);
    }
    catch (error) {
        console.log('Ocurrió un error al momento de crear un usuario');
        return res.status(400).json({
            msg: 'Ocurrió un error (grave), por comuníquese con el administrador!'
        });
    }
});
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const body = req.body;
    console.log(`LOG valor body ${req.body}`);
    const usuarios = yield usuario_1.default.findAll();
    res.status(200).json(usuarios);
});
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "Hola a todos los usuarios",
        id,
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.js.map