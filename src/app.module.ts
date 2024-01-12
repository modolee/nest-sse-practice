import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { SseModule } from './sse/sse.module';

@Module({
  imports: [SseModule, UserModule],
})
export class AppModule {}
