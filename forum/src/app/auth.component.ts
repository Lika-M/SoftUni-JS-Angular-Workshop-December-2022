import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  isAuthenticating: Boolean = true;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.userService.currentUser = user;
        this.isAuthenticating = false;
      },
      error: (err) => {
        this.userService.currentUser = null;
        this.isAuthenticating = false;
      }
    });
  }

}
