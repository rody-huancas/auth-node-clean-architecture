import {
  AuthDatasource,
  AuthRepository,
  RegisterUserDto,
  UserEntity,
} from "../../domain";

export class AuthRepositoryImpl implements AuthRepository {
  constructor(private readonly authDataSource: AuthDatasource) {}

  login(email: string, password: string): Promise<any> {
    throw new Error("Method not implemented.");
  }

  register(registerUserDto: RegisterUserDto): Promise<UserEntity> {
    return this.authDataSource.register(registerUserDto);
  }
}
