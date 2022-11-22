import { Component, DoCheck } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

// use DoCheck to check if props are changed

export class MainComponent implements DoCheck {

  // get isLogged() {
  //   return this.userService.isLogged;
  // }
  isLogged: boolean = false;

  constructor(private userService: UserService) { }

  ngDoCheck(): void {
    this.isLogged = this.userService.isLogged
  }
}
