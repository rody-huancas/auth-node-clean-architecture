import { Router } from "express";
import { AuthController } from "./controller";
import { AuthDatasourceImpl, AuthRepositoryImpl } from "../../infraestructure";

export class AuthRoutes {
  constructor() {}

  static get routes(): Router {
    const router         = Router();
    const database       = new AuthDatasourceImpl();
    const authRepository = new AuthRepositoryImpl(database);
    const controller     = new AuthController(authRepository);

    router.post("/login", controller.loginUser);
    router.post("/register", controller.registerUser);

    return router;
  }
}
