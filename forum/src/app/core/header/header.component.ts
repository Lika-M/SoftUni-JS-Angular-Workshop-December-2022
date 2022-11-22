import { Component} from '@angular/core';
import { Router } from '@angular/router';
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
  get user(){
    return this.userService.user;
  }
  constructor(private userService: UserService, private router:Router) { }

  

}
