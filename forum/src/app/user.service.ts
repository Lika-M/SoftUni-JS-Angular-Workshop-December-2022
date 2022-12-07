import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { BehaviorSubject, EMPTY, Observable, Subscription } from 'rxjs';
import { CreateUserDto } from './interfaces/createUserDto';
import { IUser } from './interfaces/user';
import { tap, map, filter, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _user$$ = new BehaviorSubject<undefined | null | IUser>(undefined);
  
  currentUser$ = this._user$$.asObservable().pipe(filter((val): val is IUser | null => val !== undefined));
  isLogged$= this.currentUser$.pipe(map(user => Boolean(user)));


  constructor(private http: HttpClient) {}

  register$(userData: CreateUserDto): Observable<IUser> {
    return this.http.post<IUser>('/api/register', userData)
      .pipe(tap(user => {
        this._user$$.next(user);
      }));
  }

  login$(userData: { email: string, password: string }): Observable<IUser> {
    return this.http.post<IUser>('/api/login', userData)
      .pipe(tap(user => {
        this._user$$.next(user);
      }));
  }

  logout$(): Observable<void> {
    return this.http.post<void>('/api/logout', {})
      .pipe(tap(user => {
        this._user$$.next(null);
      }));
  }

  getProfile$(): Observable<IUser> {
    return this.http.get<IUser>('/api/users/profile')
      .pipe(tap(user => {
        this._user$$.next(user);
      }));
  }

 // persistance of logged in user
  authenticate(): Observable<IUser>{
    return this.http.get<IUser>('/api/users/profile')
    .pipe(tap(user => {
      this._user$$.next(user);
    }), catchError((err) => {
      //EMPTY is e special type of Observable ending the stream immediately
      return EMPTY;
    }));
  }

  // updateProfile$(): Observable<IUser> {
  //   return this.http.post<IUser>(`${environment.dataURL}/users/profile`, { withCredentials: true })
  // }

 
}
