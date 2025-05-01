import { Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogListsComponent } from './components/blog-lists/blog-lists.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { BlogInfoComponent } from './components/blog-info/blog-info.component';
import { BlogApiComponent } from './components/blog-api/blog-api.component';
import { CounterComponent } from './components/counter/counter.component';

export const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'blog', component: BlogListsComponent },
  { path: 'bloginfo/:id', component: BlogInfoComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'blogapi', component: BlogApiComponent },
  { path: 'counter', component: CounterComponent },
];
