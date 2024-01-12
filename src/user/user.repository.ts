import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository {
  private users: User[] = [
    {
      id: 1,
      nickname: 'David',
      level: 1,
    },
    {
      id: 2,
      nickname: 'Jerry',
      level: 2,
    },
    {
      id: 3,
      nickname: 'James',
      level: 3,
    },
  ];

  findOneById(id: number) {
    return this.users.find((user) => user.id === id);
  }

  update(id: number, partialUser: Partial<User>) {
    const index = this.users.findIndex((user) => user.id === id);
    const isUserExisted = index != -1;

    if (!isUserExisted) {
      return null;
    }

    this.users[index] = { ...this.users[index], ...partialUser };
    return this.users[index];
  }
}
