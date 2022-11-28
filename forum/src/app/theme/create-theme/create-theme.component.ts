import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-create-theme',
  templateUrl: './create-theme.component.html',
  styleUrls: ['./create-theme.component.scss']
})
export class CreateThemeComponent implements OnInit {

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
  }

  onCreate(form: NgForm): void {
    console.log(form.value);

    this.dataService.addNewTheme(form.value).subscribe({
      next: (theme) => {
        console.log(theme);
        this.router.navigate(['/themes'])
      },
      error: (err) => { console.error(err) }
    })
  }

  onCanceled(): void {
    this.router.navigate(['/home'])
  }
}
