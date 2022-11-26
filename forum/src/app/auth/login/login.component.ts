import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { emailValidator } from '../util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginFormGroup: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  onLogin(): void {

    console.log(this.loginFormGroup.value)
    //TODO: fetch
    this.userService.user = {
      username: 'John',
    } as any;

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl' || '/']
    this.router.navigate([returnUrl]);

  }

}
