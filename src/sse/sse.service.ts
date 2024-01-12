import { Injectable } from '@nestjs/common';
import { Subject, filter, map } from 'rxjs';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SseService {
  private user: Subject<User> = new Subject();
  private userObserverable$ = this.user.asObservable();

  sendUserInfo(id: number) {
    return this.userObserverable$.pipe(
      filter((user) => {
        return user.id === id;
      }),
      map((user) => {
        return { data: user };
      }),
    );
  }

  onUserInfoChange(user: User) {
    this.user.next(user);
  }
}
