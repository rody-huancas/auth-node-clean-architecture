import { Request, Response } from "express";
import { CustomError, RegisterUserDto } from "../../domain";
import { AuthRepository } from "../../domain/repositories/auth.repository";

export class AuthController {
  constructor(private readonly authRepository: AuthRepository) {}

  private handleError = (error: unknown, res: Response) => {
    if (error instanceof CustomError) {
      return res.status(error.statusCode).json({ error: error.message });
    }

    console.log(error);

    return res.status(500).json({ error: "Internal server error" });
  };

  registerUser = async (req: Request, res: Response) => {
    const [error, registerUserDto] = RegisterUserDto.create(req.body);

    if (error) throw res.status(400).json({ error });

    this.authRepository.register(registerUserDto!)
      .then((user) => res.json(user))
      .catch((error) => this.handleError(error, res));
  };

  loginUser = async (req: Request, res: Response) => {
    res.json("loginUser");
  };
}
