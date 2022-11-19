import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  isLogged: boolean = false;

  login(): void {
    this.isLogged = true;
  }

  register(): void {
    this.isLogged = true;
  }

  logout(): void {
    this.isLogged = false;
  }
}
