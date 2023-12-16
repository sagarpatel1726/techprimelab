import { IUser } from '../interface/user.interface.js';
import User from '../models/user.model.js';


export class UserService {
  constructor() { }

  public async userLogin(user: IUser): Promise<any>{
     return await User.findOne({$and: [{email: user.email},{password: user.password}]});
  }
}