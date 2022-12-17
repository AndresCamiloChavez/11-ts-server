"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const usuario_1 = require("../controller/usuario");
const validar_campos_1 = __importDefault(require("../middlewares/validar-campos"));
const validators_1 = require("../helpers/validators");
const validar_jwt_1 = require("../middlewares/validar-jwt");
const router = (0, express_1.Router)();
router.get('/', usuario_1.getUsuarios);
router.get('/:id', usuario_1.getUsuario);
router.post('/', [
    (0, express_validator_1.check)('nombre', 'El nombre es obigatorio').notEmpty(),
    (0, express_validator_1.check)('email', 'El correo es obigatorio').notEmpty(),
    (0, express_validator_1.check)('password', 'La contraseña es obigatoria').notEmpty(),
    (0, express_validator_1.check)("email").custom(validators_1.existeUsuarioByEmail),
    validar_jwt_1.validartJWT,
    validar_campos_1.default
], usuario_1.postUsuario);
router.put('/:id', usuario_1.putUsuario);
router.delete('/:id', usuario_1.deleteUsuario);
exports.default = router;
//# sourceMappingURL=usuario.js.map