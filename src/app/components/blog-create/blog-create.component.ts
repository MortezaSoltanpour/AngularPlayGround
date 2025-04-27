import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { BlogDto } from '../../db/blogDto';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog-create',
  imports: [FormsModule],
  templateUrl: './blog-create.component.html',
})
export class BlogCreateComponent {
  blog: BlogDto = {
    id: 0,
    author: '',
    body: '',
    brief: '',
    liked: false,
    title: '',
  };

  @Output('newblog')
  newBlogEventEmitter: EventEmitter<BlogDto> = new EventEmitter<BlogDto>();

  handleBtn() {
    console.log(this.blog);
    this.newBlogEventEmitter.emit(this.blog);
  }
}
