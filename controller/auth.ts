import Usuario from "../models/usuario";
import bycript from "bcrypt";
import generarToken from "../helpers/generar-token";
import { Request, Response } from "express";

export const  login = async (req: Request, res: Response) => {
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
  const token = generarToken(usuario?.getDataValue("id"));

  return res.status(200).json({
    token,
    usuario,
  });
};
