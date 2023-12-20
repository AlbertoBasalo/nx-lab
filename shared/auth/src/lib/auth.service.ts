import { Injectable } from '@angular/core';
import { User } from '@lab/domain';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUser(): User {
    return {
      id: 1,
      username: 'John Doe',
      email: 'johe@doe.com',
    };
  }
}
