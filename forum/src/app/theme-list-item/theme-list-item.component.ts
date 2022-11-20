import { Component, OnInit, Input } from '@angular/core';
import { ITheme } from '../interfaces/theme';
import { UserService } from '../user.service';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.scss']
})
export class ThemeListItemComponent implements OnInit {
  
  @Input() theme!: ITheme;
  
  isLogged:boolean = this.userService.isLogged;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
