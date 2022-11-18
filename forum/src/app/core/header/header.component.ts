import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private userService: UserService) { }

  get isLogged(): boolean {
    console.log(this.userService.isLogged);
    
    return this.userService.isLogged;
  }
  

  ngOnInit(): void {
  }

}
