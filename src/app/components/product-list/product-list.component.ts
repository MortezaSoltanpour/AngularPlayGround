import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  myProduct = {
    title: 'mirror',
    price: 45,
    height: 30,
    wide: 70,
  };
}
