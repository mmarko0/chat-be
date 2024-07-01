import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(readonly usersService: UsersService) {}

  async validateUser(username: string, pwd: string) {
    const user = await this.usersService.findOne(username);

    if (!user) {
      return null;
    }

    if (!this.validatePassword(pwd, user)) {
      return null;
    }

    return user;
  }

  validatePassword(pwd: string, user): boolean {
    return pwd === user.password;
  }
}
