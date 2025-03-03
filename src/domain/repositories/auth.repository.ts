import { UserEntity } from "../entities/user.entity";
import { RegisterUserDto } from "../dtos/auth/register-user.dto";

export abstract class AuthRepository {

  abstract login(email: string, password: string): Promise<any>;

  abstract register(registerUserDto: RegisterUserDto): Promise<UserEntity>;
}
