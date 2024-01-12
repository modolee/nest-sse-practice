import { Controller, Sse, MessageEvent, Param, Req } from '@nestjs/common';
import { Observable } from 'rxjs';
import { SseService } from './sse.service';
import { Request } from 'express';

@Controller('sse')
export class SseController {
  constructor(private readonly sseService: SseService) {}

  @Sse('users/:userId')
  sse(
    @Req() req: Request,
    @Param('userId') userId: number,
  ): Observable<MessageEvent> {
    req.on('close', () => {
      console.log(`${userId} 사용자가 접속을 종료했습니다.`);
    });

    return this.sseService.sendUserInfo(+userId);
  }
}
