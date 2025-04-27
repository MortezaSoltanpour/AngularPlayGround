import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogListsComponent } from './components/blog-lists/blog-lists.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ProductListComponent,
    ProductCreateComponent,
    ContactUsComponent,
    BlogListsComponent,
    BlogDetailsComponent,
    BlogCreateComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'hello world';
}
