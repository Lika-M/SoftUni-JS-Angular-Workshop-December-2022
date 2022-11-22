import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private userService: UserService, private router: Router) {
    this.userService.user = {
      _id: '',
      tel: '',
      email: '',
      username: 'John',
      password: '',
      themes: [],
      posts: [],
      created_at: '',
      updatedAt: '',
      __v: 0
    }

    this.router.navigate(['/']);

  }

  loginHandler(): void {
    //TODO: fetch
    this.userService.login();
    this.router.navigate(['/']);
  }

}
