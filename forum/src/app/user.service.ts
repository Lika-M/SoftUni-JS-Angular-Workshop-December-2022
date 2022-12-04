import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CreateUserDto } from './interfaces/createUserDto';
import { IUser } from './interfaces/user';
import { tap, map } from 'rxjs/operators';

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
    return this.http.post<IUser>('/api/login', userData);
  }

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.http.post<IUser>('/api/register', userData);
  }

  logout$(): Observable<void> {
    return this.http.post<void>('/api/logout', {});
  }

  getProfile$(): Observable<IUser> {
    return this.http.get<IUser>('/api/users/profile');
  }

  // updateProfile$(): Observable<IUser> {
  //   return this.http.post<IUser>(`${environment.dataURL}/users/profile`, { withCredentials: true })
  // }

}
