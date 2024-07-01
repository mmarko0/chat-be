import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'user1',
      password: 'pwd',
    },
    {
      userId: 2,
      username: 'user2',
      password: 'pwd2',
    },
  ];

  async findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
