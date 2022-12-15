import { NextFunction, Request, Response } from "express";
import Usuario from "../models/usuario";

export const existeUsuarioByEmail = async (email: string) => {
  const usuario = await Usuario.findOne({ where: { email } });

  if (usuario) {
    throw new Error(`Ya existe un usuario con ese correo ${email}`);
  }
  return true
};
