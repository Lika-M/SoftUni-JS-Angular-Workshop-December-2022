import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  registerHandler(): void {
    //TODO: fetch
    this.userService.register();
    this.router.navigate(['/home'])
  }

}
