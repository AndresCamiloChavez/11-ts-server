import { NextFunction, Request, Response } from "express";
import jsonwebtoken from "jsonwebtoken";

export const validartJWT = (req: Request, res: Response, next: NextFunction) => {
  const xtoken = req.headers["x-token"] as string;

  if (!xtoken) {
    return res.status(400).json({ msg: "Falta agregar token" });
  }
  try {
    jsonwebtoken.verify(xtoken, process.env.PRIVATE_KEY_JSON!);
  } catch (error) {
    return res.status(401).json({
      msg: 'Token no válido'
    });
  }
  next();
};
