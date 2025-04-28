import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ProductCreateComponent } from '../product-create/product-create.component';

@Component({
  selector: 'app-product-list',
  imports: [NgFor, ProductCreateComponent],
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  myProduct = {
    title: 'mirror',
    price: 45,
    height: 30,
    wide: 70,
  };

  products = [
    {
      name: 'product 1',
      price: 10000,
    },
    {
      name: 'product 2',
      price: 20000,
    },
    {
      name: 'product 3',
      price: 30000,
    },
    {
      name: 'product 4',
      price: 40000,
    },
  ];
}
