import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  imports: [NgFor],
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
