import {
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { BlogDto } from '../../db/blogDto';
import { NgIf } from '@angular/common';
import { getBlogById } from '../../db/blogDb';

@Component({
  selector: 'app-blog-details',
  imports: [NgIf],
  templateUrl: './blog-details.component.html',
  styleUrl: './blog-details.component.css',
})
export class BlogDetailsComponent {
  @Input('blogId')
  blogId: number = 0;
  blog: BlogDto | undefined;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['blogId']) {
      const newId = changes['blogId'].currentValue;
      console.log('Blog ID changed to:', newId);

      // Call your method to reload details
      this.loadBlogDetails(newId);
    }
  }

  loadBlogDetails(id: number) {
    this.blog = getBlogById(this.blogId);
  }

  @Output('isLiked')
  buttonLikeEventEmitter = new EventEmitter<number>();

  handleLikeButton(id: number) {
    this.buttonLikeEventEmitter.emit(id);
  }
}
