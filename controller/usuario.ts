import { Request, Response } from "express";

export const getUsuarios = (req: Request, res: Response) => {
  res.status(200).json({
    msg: "Hola a todos los usuarios",
  });
};

export const getUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    msg: "Hola a todos los usuarios",
    id,
  });
};
export const postUsuario = (req: Request, res: Response) => {
  const { body } = req;
  res.status(200).json({
    msg: "Hola a todos los usuarios",
    body,
  });
};
export const putUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  const body  = req.body;

  console.log(`LOG valor body ${ req.body }`);
  
  res.status(200).json({
    msg: "Hola a todos los usuarios",
    body,
    id
  });
};
export const deleteUsuario = (req: Request, res: Response) => {
  const { id } = req.params;
  res.status(200).json({
    msg: "Hola a todos los usuarios",
    id
  });
};
