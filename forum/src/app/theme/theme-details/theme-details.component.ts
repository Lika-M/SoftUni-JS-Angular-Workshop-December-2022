import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../data.service';
import { IPost } from '../../interfaces/post';
import { ITheme } from '../../interfaces/theme';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-theme-details',
  templateUrl: './theme-details.component.html',
  styleUrls: ['./theme-details.component.scss']
})
export class ThemeDetailsComponent implements OnInit {

  theme!: ITheme;

  isLogged: boolean = this.userService.isLogged
  canSubscribe: boolean = false;

  constructor(private activatedRoute: ActivatedRoute,
    private dataService: DataService,
    private userService: UserService) { }

  ngOnInit(): void {
    const themeId = this.activatedRoute.snapshot.params['themeId'];
    this.dataService.loadThemeById(themeId).subscribe({
      next: (theme) => {
        this.theme = theme;
        this.canSubscribe = !this.theme.subscribers.includes('5fa64b162183ce1728ff371d');
      }
    });
  }

  canLike(post: IPost) {
    return !post.likes.includes('5fa64b162183ce1728ff371d');
  }

}
