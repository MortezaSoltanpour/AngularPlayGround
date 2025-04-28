import { Component, OnInit } from '@angular/core';
import { BlogDto } from '../../db/blogDto';
import { getBlogById } from '../../db/blogDb';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blog-info',
  imports: [],
  templateUrl: './blog-info.component.html',
})
export class BlogInfoComponent implements OnInit {
  blog: BlogDto = {
    author: '',
    body: '',
    brief: '',
    id: 0,
    liked: false,
    title: '',
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.loadBlogDetails(+id); // using "+" for quick parseInt
      }
    });
  }

  loadBlogDetails(id: number) {
    const foundBlog = getBlogById(id);
    if (foundBlog) {
      this.blog = foundBlog;
    } else {
      console.warn('Blog not found for id:', id);
    }
  }
}
