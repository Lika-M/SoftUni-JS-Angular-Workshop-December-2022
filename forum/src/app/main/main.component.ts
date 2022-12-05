import { Component, DoCheck } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})


export class MainComponent {

  isLogged$ = this.userService.isLogged$

  constructor(private userService: UserService) { }

 
}
