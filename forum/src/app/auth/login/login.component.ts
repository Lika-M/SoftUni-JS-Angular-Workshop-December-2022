import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { emailValidator } from '../util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  errorMessage!: string;

  loginFormGroup: FormGroup = this.fb.group({
    email: new FormControl('', [Validators.required, emailValidator]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)])
  });

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  onLogin(): void {
    this.errorMessage = '';
    const { email, password } = this.loginFormGroup.value
    this.userService.login$({ email, password }).subscribe({
      next: (user) => {
        this.userService.currentUser = user;
        this.router.navigate(['/themes'])
      },
      complete: () => { },
      error: (err) => {
        // console.log(err.error.message)
        this.errorMessage = err.error.message
      }
    });
  }


}
