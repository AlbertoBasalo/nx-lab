import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  getUserName(): string {
    return 'John Doe';
  }
}
