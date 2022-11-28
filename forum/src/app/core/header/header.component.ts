import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  get isLogged(): boolean {
    return this.userService.isLogged;
  }
  get user():IUser | null{
    return this.userService.currentUser;
  }
  constructor(private userService: UserService, private router:Router) { }

  

}
