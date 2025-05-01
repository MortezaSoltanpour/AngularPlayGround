import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  ElementRef,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCreateComponent } from './components/product-create/product-create.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BlogListsComponent } from './components/blog-lists/blog-lists.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { BlogCreateComponent } from './components/blog-create/blog-create.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavbarComponent } from './components/common/navbar/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';

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
    UserListComponent,
    NavbarComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
})
export class AppComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewChecked,
    AfterViewInit,
    OnDestroy
{
  title = 'hello world';

  constructor() {
    console.log('constructor');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  @ViewChild('changable')
  divForChange!: ElementRef;

  handleBtnChangeText() {
    this.divForChange.nativeElement.innerText = 'Text has been changed';
  }
}
