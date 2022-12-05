import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, map, take } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> {

    return this.userService.currentUser$.pipe(
      take(1),
      map(user => {
        const loginRequired = route.data['loginRequired']
        if (loginRequired === undefined || this.userService.isLogged === loginRequired) {
          return true;
        }

        const returnUrl = route.url.map(u => u.path).join('/');
        console.log(returnUrl)
        return this.router.createUrlTree(['/login'], { queryParams: { returnUrl } });
      })
    )

  }



}
