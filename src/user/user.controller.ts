import { Controller, Get, HttpStatus, Param, Put } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(':id')
  readOne(@Param('id') id: number) {
    const data = this.userService.readOne(+id);

    return {
      statusCode: HttpStatus.OK,
      message: '사용자 조회에 성공했습니다.',
      data,
    };
  }

  @Put(':id/level')
  levelUp(@Param('id') id: number) {
    const data = this.userService.levelUp(+id);

    return {
      statusCode: HttpStatus.OK,
      message: '사용자 레벨이 올랐습니다.',
      data,
    };
  }
}
