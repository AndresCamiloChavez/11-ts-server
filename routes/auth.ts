import { Request, Response, Router } from "express";
import Usuario from "../models/usuario";
import bycript from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import generarToken from "../helpers/generar-token";
const router = Router();

router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const usuario = await Usuario.findOne({ where: { email } });
  
  const isValidPassword = bycript.compareSync(
    password,
    usuario?.getDataValue("password")
  );

  if (!isValidPassword) {
    return res.status(400).json({
      msg: "Las credenciales no son válidas",
    });
  }
  //Generar jwt
  const token = generarToken(usuario?.getDataValue('id'));


  return res.status(200).json({
    msg: "Todo OK!",
    token
  });
});

export default router;
