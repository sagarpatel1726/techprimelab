import { IUser } from '../interface/user.interface.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';

 export class UserService {
  private static userServiceInstance: UserService;

  constructor() { }

  public static getInstance(): UserService{
    if(UserService.userServiceInstance){
        return UserService.userServiceInstance;
    } else{
      UserService.userServiceInstance = new UserService();
      return UserService.userServiceInstance;
    }
  }

  public async userLogin(user: IUser): Promise<any> {
    return await User.findOne({ $and: [{ email: user.email }, { password: user.password }] });
  }

  public createToken(email: string) {
    const jwtSecretKey: string = (process.env.JWT_SECRET_KEY) as string;
    const data = {
      time: Date(),
      email,
    }
    const expiry = {
      expiresIn: '10h'
    }
    const token = jwt.sign(data, jwtSecretKey, expiry);
    return token;
  }

  public varifyToken(token: string) {
    const verified = jwt.verify(token, process.env.JWT_SECRET_KEY as string);
    return verified;
  }
}

export const userService = UserService.getInstance();