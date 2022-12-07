import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ITheme } from '../../interfaces/theme';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.scss']
})
export class ThemeListComponent implements OnInit {

  themes: ITheme[] | null = null;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.loadThemes().subscribe({
      next: (value) => {
        this.themes = value;
      },
      error: (err) => console.error(err)
      
    })
  }

}
