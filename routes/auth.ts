import { Request, Response, Router } from "express";

const router = Router();

router.post("/login", (req: Request, res: Response) => {
  return res.status(200).json({
    msg: "Todo OK!",
  });
});

export default router;
