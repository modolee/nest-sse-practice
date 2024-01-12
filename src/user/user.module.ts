import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { SseModule } from 'src/sse/sse.module';

@Module({
  imports: [SseModule],
  providers: [UserService, UserRepository],
  controllers: [UserController],
})
export class UserModule {}
