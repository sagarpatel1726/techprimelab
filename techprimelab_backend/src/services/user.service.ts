import { IUser } from '../interface/user.interface.js';
import User from '../models/user.model.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
export class UserService {
  private static userServiceInstance: UserService;

  constructor() { }

  public static getInstance(): UserService {
    if (UserService.userServiceInstance) {
      return UserService.userServiceInstance;
    } else {
      UserService.userServiceInstance = new UserService();
      return UserService.userServiceInstance;
    }
  }

  public async createUser(user_data: IUser): Promise<any> {
    const user = new User();
    user.email = user_data.email;
    user.salt = crypto.randomBytes(16).toString('hex');
    user.hash = crypto.pbkdf2Sync(user_data.password, user.salt,1000, 64, `sha512`).toString(`hex`);
    return user.save();
  }

  public async userLogin(user_data: IUser): Promise<any> {
    const userData = await User.findOne({ email: user_data.email });
    if (userData === null) {
      return false;
    } else {
      let hash = crypto.pbkdf2Sync(user_data.password,
        userData.salt as string, 1000, 64, `sha512`).toString(`hex`);
      return userData.hash === hash;
    }
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