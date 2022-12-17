import { NextFunction, Request, Response } from "express";
import Usuario from "../models/usuario";

export const existeUsuarioByEmail = async (email: string) => {
  try {
    const usuario = await Usuario.findOne({ where: { email } });
    if (usuario) {
      throw new Error(`Ya existe un usuario con ese correo ${email}`);
    }
  } catch (error) {
    console.log("Ocurrió por parte del usuario");
    throw new Error(`El correo ${email}, ya se encuentra registrado`);
  }
};
