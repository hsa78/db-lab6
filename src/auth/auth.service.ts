
import { Injectable } from '@nestjs/common';
import { UserServices } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UserServices) {}

  async validateUser(userId: number, pass: string): Promise<any> {
    const user = await this.usersService.findOne(userId);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}