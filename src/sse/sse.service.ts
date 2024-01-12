import { Injectable } from '@nestjs/common';
import { Observable, filter, map } from 'rxjs';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SseService {
  private userObservable$: Observable<User>;

  constructor() {
    this.userObservable$ = new Observable<User>((observer) => {
      this.userObserver = observer;
    });
  }

  private userObserver: any;

  sendUserInfo(id: number) {
    return this.userObservable$.pipe(
      filter((user) => user.id === id),
      map((user) => ({ data: user })),
    );
  }

  onUserInfoChange(user: User) {
    if (this.userObserver) {
      this.userObserver.next(user);
    }
  }
}
