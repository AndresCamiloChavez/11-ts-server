import { Request, Response } from "express";
import Usuario from "../models/usuario";
import bycript from "bcrypt";

export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await Usuario.findAll();
  res.status(200).json({ usuarios });
};

export const getUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;

  const usuario = await Usuario.findByPk(id);
  const emailUsuario = usuario?.getDataValue("email");

  if (!usuario) {
    return res.status(404).json({
      msg: `No existe un usuario por el id ${id}`,
    });
  }
  res.status(200).json({ usuario });
};
export const postUsuario = async (req: Request, res: Response) => {
  const { nombre, email } = req.body;
  const password = bycript.hashSync(req.body.password, 10);
  try {
    const usuario = await Usuario.create({ nombre, email, password });
    return res.status(200).json( usuario );
  } catch (error) {
    console.log('Ocurrió un error al momento de crear un usuario');
    return res.status(400).json({
      msg: 'Ocurrió un error (grave), por comuníquese con el administrador!'
    });
  }
};
export const putUsuario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const body = req.body;

  console.log(`LOG valor body ${req.body}`);
  const usuarios = await Usuario.findAll();
  res.status(200).json(usuarios);
};
export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    msg: "Hola a todos los usuarios",
    id,
  });
};
