import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogListsComponent } from './components/blog-lists/blog-lists.component';
import { ProductListComponent } from './components/product-list/product-list.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'blog', component: BlogListsComponent },
  { path: 'products', component: ProductListComponent },
];
