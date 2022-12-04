import { Component, DoCheck, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements DoCheck {

  isLogged: boolean = false;

  constructor(private userService: UserService) { }

  ngDoCheck(): void {
    this.isLogged = this.userService.isLogged;
  }

}
