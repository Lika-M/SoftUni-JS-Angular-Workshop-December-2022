import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreateUserDto } from 'src/app/interfaces/createUserDto';
import { UserService } from 'src/app/user.service';
import { emailValidator, passMatch } from '../util';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  passFormControl = new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern(/^([a-zA-z]*[0-9]*)*$/)]);

  get passwordsGroup(): FormGroup {
    // console.log(this.registerFormGroup.controls['passwords']);
    return this.registerFormGroup.controls['passwords'] as FormGroup;
  }

  registerFormGroup: FormGroup = this.fb.group({
    username: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    email: new FormControl(null, [Validators.required, emailValidator]),

    passwords: new FormGroup({
      password: this.passFormControl,
      rePassword: new FormControl(null, [passMatch(this.passFormControl)])
      // rePassword: new FormControl(null, [passMatch2])
    }),
    tel: new FormControl(null, []),
    telRegion: new FormControl(null, [])

  })

  constructor(
    private userService: UserService,
    private router: Router,
    private fb: FormBuilder
  ) { }


  onRegister(): void {
    //TODO: fetch
    if (this.registerFormGroup.invalid) {
      return;
    }
    // console.log(this.registerFormGroup.value);
    const { username, email, passwords, tel, telRegion } = this.registerFormGroup.value;

    const body: CreateUserDto = {
      username,
      email,
      password: passwords.password,
      rePassword: passwords.rePassword,
      ...(tel && { tel: telRegion + tel })
    }

    if (tel && telRegion) {
      body['tel'] = telRegion + tel
    }
    // console.log(body)
    this.userService.register$(body).subscribe(user => {
      this.router.navigate(['/themes']);
    });

  }

  showErrors(controlName: string, group: FormGroup = this.registerFormGroup) {
    return group.controls[controlName].touched && group.controls[controlName].invalid
  }

}
