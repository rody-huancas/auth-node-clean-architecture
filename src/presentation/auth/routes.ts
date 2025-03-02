import { Router } from "express";

export class AuthRoutes {
  constructor() {}

  static get routes(): Router {
    const router = Router();

    router.post("/login", (req, res) => {
      res.send("Login");
    });

    router.post("/register", (req, res) => {
      res.send("Register");
    });

    return router;
  }
}
