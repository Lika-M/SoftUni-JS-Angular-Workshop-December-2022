import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  isLogged: boolean = this.userService.isLogged;
  
  constructor(private userService: UserService) { }


  ngOnInit(): void {
  }

}
