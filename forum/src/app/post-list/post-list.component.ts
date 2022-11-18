import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { IPost } from '../interfaces/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  posts: IPost[] = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.loadPosts(5).subscribe({
      next: (value) => {
        this.posts = value;
      },
      error: (err) => console.error(err)
    })

  }
}
