import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }

  get isLogged(): boolean {
    return this.userService.isLogged;
  }

  logoutHandler():void{
    this.userService.logout();
    this.router.navigate(['/home'])
  }
  

  ngOnInit(): void {
  }

}
