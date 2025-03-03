import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {
  login(email: string, password: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {
      // 1. Validar si el correo existe
      // 2. Hash del password
      // 3. Mapear la data y crear el usuario
      // 4. Crear el JWT
      // 5. Devolver el JWT

      return new UserEntity("1", name, email, password, ["USER_ROLE"]);
    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer();
    }
  }
}
