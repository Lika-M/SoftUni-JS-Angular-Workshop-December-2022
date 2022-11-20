import { Component, Input, OnChanges } from '@angular/core';
import { ITheme } from '../interfaces/theme';
import { UserService } from '../user.service';

@Component({
  selector: 'app-theme-list-item',
  templateUrl: './theme-list-item.component.html',
  styleUrls: ['./theme-list-item.component.scss']
})
export class ThemeListItemComponent implements OnChanges {

  isLogged: boolean = this.userService.isLogged;
  canSubscribe: boolean = false;

  @Input() theme!: ITheme;

  constructor(private userService: UserService) { }

  ngOnChanges(): void {
    this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
  }

}
