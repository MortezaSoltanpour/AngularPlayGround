import { Component, EventEmitter, NgModule, Output } from '@angular/core';
import { BlogDto } from '../../db/blogDto';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-blog-create',
  imports: [FormsModule],
  templateUrl: './blog-create.component.html',
})
export class BlogCreateComponent {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string) {
    this.toastr.success(message, 'Success', {
      progressBar: true,
    });
  }

  showError(message: string) {
    this.toastr.error(message, 'Error', {
      progressBar: true,
    });
  }

  showWarning(message: string) {
    this.toastr.warning(message, 'Warning', {
      progressBar: true,
    });
  }

  blog: BlogDto = this.resetBlogData();

  @Output('newblog')
  newBlogEventEmitter: EventEmitter<BlogDto> = new EventEmitter<BlogDto>();

  isEmpty(value: string): boolean {
    return value.trim() === '';
  }

  handleBtn() {
    let errorCount = 0;
    if (this.isEmpty(this.blog.author)) errorCount++;
    if (this.isEmpty(this.blog.title)) errorCount++;
    if (this.isEmpty(this.blog.body)) errorCount++;
    if (this.isEmpty(this.blog.brief)) errorCount++;
    if (errorCount >= 3) {
      this.showError('Please fill out all fields');
    } else if (errorCount >= 1 && errorCount < 3) {
      this.showWarning('Almost done. but there is still error');
    } else {
      this.newBlogEventEmitter.emit(this.blog);
      this.resetBlogData();
      this.showSuccess('New post has been added successfully');
    }
  }

  resetBlogData(): BlogDto {
    this.blog = {
      id: 0,
      author: '',
      body: '',
      brief: '',
      liked: false,
      title: '',
    };

    return this.blog;
  }
}
