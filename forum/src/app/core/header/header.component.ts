import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  user$ = this.userService.currentUser$;
  isLogged$ = this.userService.isLogged$;

  constructor(private userService: UserService, private router: Router) { }



}
