import { Injectable } from '@angular/core';
import { IUser } from './interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: IUser | null = null;

  get isLogged (): boolean{
    return this.user !== null;
  }
  
  login(): void {
    
  }
  register(): void {
   
  }


  constructor() { }

}
