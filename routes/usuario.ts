import { Router } from 'express';
import { check } from 'express-validator';
import {
  deleteUsuario,
  getUsuario,
  getUsuarios,
  postUsuario,
  putUsuario,
} from '../controller/usuario';
import validarCampos from '../middlewares/validar-campos';
import { existeUsuarioByEmail } from "../helpers/validators";
import { validartJWT } from '../middlewares/validar-jwt';
const router = Router();

router.get('/', getUsuarios);
router.get('/:id', getUsuario);
router.post('/',[
  check('nombre', 'El nombre es obigatorio').notEmpty(),
  check('email', 'El correo es obigatorio').notEmpty(),
  check('password', 'La contraseña es obigatoria').notEmpty(),
  check("email").custom(existeUsuarioByEmail),
  validartJWT,
  validarCampos
],postUsuario);
router.put('/:id', putUsuario);
router.delete('/:id', deleteUsuario);

export default router;
