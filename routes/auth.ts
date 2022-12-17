import { Request, Response, Router } from "express";
import Usuario from "../models/usuario";
import bycript from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import generarToken from "../helpers/generar-token";
import { login } from "../controller/auth";
const router = Router();

router.post("/login", login);

export default router;
