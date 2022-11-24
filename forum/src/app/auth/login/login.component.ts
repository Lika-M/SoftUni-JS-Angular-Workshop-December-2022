import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) { }

  loginHandler(): void {
    //TODO: fetch
    this.userService.user = {
      username: 'John',
    } as any;

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl' || '/']
    this.router.navigate([returnUrl]);
  }

}
