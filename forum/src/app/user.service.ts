import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUserDto } from './interfaces/createUserDto';
import { IUser } from './interfaces/user';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  currentUser: IUser | null = null;

  get isLogged(): boolean {
    return Boolean(this.currentUser);
  }

  constructor(private http: HttpClient) { }


  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>(
      `${environment.dataURL}/login`,
      userData,
      { withCredentials: true }) //set cookie
      .pipe(
        tap(loginUser => this.currentUser = loginUser),
       
      )
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.http.post<IUser>(
      `${environment.dataURL}/register`,
      userData,
      { withCredentials: true } //set cookie
    )
  }



}
