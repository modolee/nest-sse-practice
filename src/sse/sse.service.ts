import { Injectable } from '@nestjs/common';
import { Subject, filter, map } from 'rxjs';
import { User } from 'src/user/entities/user.entity';

@Injectable()
export class SseService {
  private user$: Subject<User> = new Subject();
  private userObserver = this.user$.asObservable();

  sendUserInfo(id: number) {
    return this.userObserver.pipe(
      filter((user) => {
        console.log('filter');
        return user.id === id;
      }),
      map((user) => {
        console.log('map');
        return { data: user };
      }),
    );
  }

  onUserInfoChange(user: User) {
    this.user$.next(user);
  }
}
