import { Component } from '@angular/core';
import { BlogDto } from '../../db/blogDto';
import { getAllBlogs, getBlogById } from '../../db/blogDb';
import { NgFor, NgIf } from '@angular/common';
import { BlogDetailsComponent } from '../blog-details/blog-details.component';

@Component({
  selector: 'app-blog-lists',
  imports: [NgFor, NgIf, BlogDetailsComponent],
  templateUrl: './blog-lists.component.html',
  styleUrl: './blog-lists.component.css',
})
export class BlogListsComponent {
  blogs: BlogDto[];
  idSelected: number = 0;

  constructor() {
    this.blogs = getAllBlogs();
  }

  handleBtnClicked(e: Event) {
    const button = e.target as HTMLButtonElement;
    const blogIdAttr = button.getAttribute('blogid');
    this.idSelected = blogIdAttr ? parseInt(blogIdAttr, 10) : 0;
  }

  handleLikeClickedFromDetails(id: any) {
    console.log(id, ' clicked');
    let thisBlog = getBlogById(id);
    console.table(thisBlog);
    if (thisBlog) {
      thisBlog.liked = !thisBlog.liked;
    }
    console.table(thisBlog);
  }
}
