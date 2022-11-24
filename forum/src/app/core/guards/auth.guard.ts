import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private userService: UserService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {

    if (this.userService.isLogged) {

      return true;
    }

    const returnUrl = route.url.map(u => u.path).join('/');
    console.log(returnUrl)
    return this.router.createUrlTree(['/login'], { queryParams: {returnUrl } });
  }



}
