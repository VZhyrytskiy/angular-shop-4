import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = true;
  // store the URL so we can redirect after logging in
  redirectUrl: string | undefined;

  login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(val => this.isLoggedIn = val)
    );
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}
