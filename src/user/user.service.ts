import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { SseService } from 'src/sse/sse.service';

@Injectable()
export class UserService {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly sseService: SseService,
  ) {}

  readOne(id: number) {
    const user = this.userRepository.findOneById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  levelUp(id: number) {
    const user = this.readOne(id);

    const levelUpUser = this.userRepository.update(id, {
      level: user.level + 1,
    });

    this.sseService.onUserInfoChange(levelUpUser);

    return levelUpUser;
  }
}
