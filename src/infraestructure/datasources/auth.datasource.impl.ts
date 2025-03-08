import { UserModel } from "../../data/mongodb";
import { AuthDatasource, CustomError, RegisterUserDto, UserEntity } from "../../domain";

export class AuthDatasourceImpl implements AuthDatasource {
  login(email: string, password: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  async register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    const { name, email, password } = registerUserDto;

    try {
      // 1. Validar si el correo existe
      const exists = await UserModel.findOne({ email });
      if (exists) throw CustomError.badRequest("User already exists");
      
      // 2. Hash del password


      const user = await UserModel.create({
        name,
        email,
        password,
      });

      await user.save();

      // 3. Mapear la data y crear el usuario
      return new UserEntity(user.id, name, email, password, user.roles);
      
      // 4. Crear el JWT
      // 5. Devolver el JWT

    } catch (error) {
      if (error instanceof CustomError) {
        throw error;
      }

      throw CustomError.internalServer();
    }
  }
}
