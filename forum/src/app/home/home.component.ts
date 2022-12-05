import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  isLogged!: boolean;
  private subscription!: Subscription;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.subscription = this.userService.isLogged$.subscribe(isLogged => {
      this.isLogged = isLogged
    })
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe()
  }

}
