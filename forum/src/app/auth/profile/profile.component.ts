import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @ViewChild('editProfileForm') editProfileForm!: NgForm;

  isInEditMode: boolean = false;
  currentUser!: IUser;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => { this.currentUser = user },
      error: (err) => { this.router.navigate(['/user/login']) }
    })
  }

  onEditMode(): void {
    this.isInEditMode = true;
    setTimeout(() => {
      this.editProfileForm.setValue({
        email: this.currentUser.email,
        username: this.currentUser.username,
        //TODO continue
        'select-tel': this.currentUser.tel && this.currentUser.tel.length > 4
        ? this.currentUser.tel.substring(0, 4) : '',
        tel: this.currentUser.tel && this.currentUser.tel.length > 4
        ? this.currentUser.tel.substring(4) : this.currentUser.tel
      })
    })
  }

  updateProfile():void {
    //TODO continue
    console.log(this.editProfileForm.value);
    // this.userService.updateProfile$
    // this.isInEditMode = false;
  }

}
