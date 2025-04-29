import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { BlogDto } from '../../db/blogDto';

@Component({
  selector: 'app-blog-api',
  imports: [NgIf, NgFor],
  templateUrl: './blog-api.component.html',
})
export class BlogApiComponent {
  blogs: BlogDto[] | undefined;
  constructor(private httpClient: HttpClient) {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((result) => {
        this.blogs = result as BlogDto[];
      });
  }
}
