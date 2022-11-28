import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent{

  constructor(private userService: UserService, private router: Router) {
    this.userService.currentUser = null;
    this.router.navigate(['/']);

  }

}
