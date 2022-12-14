"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUsuario = exports.putUsuario = exports.postUsuario = exports.getUsuario = exports.getUsuarios = void 0;
const getUsuarios = (req, res) => {
    res.status(200).json({
        msg: "Hola a todos los usuarios",
    });
};
exports.getUsuarios = getUsuarios;
const getUsuario = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "Hola a todos los usuarios",
        id,
    });
};
exports.getUsuario = getUsuario;
const postUsuario = (req, res) => {
    const { body } = req;
    res.status(200).json({
        msg: "Hola a todos los usuarios",
        body,
    });
};
exports.postUsuario = postUsuario;
const putUsuario = (req, res) => {
    const { id } = req.params;
    const body = req.body;
    console.log(`LOG valor body ${req.body}`);
    res.status(200).json({
        msg: "Hola a todos los usuarios",
        body,
        id
    });
};
exports.putUsuario = putUsuario;
const deleteUsuario = (req, res) => {
    const { id } = req.params;
    res.status(200).json({
        msg: "Hola a todos los usuarios",
        id
    });
};
exports.deleteUsuario = deleteUsuario;
//# sourceMappingURL=usuario.js.map