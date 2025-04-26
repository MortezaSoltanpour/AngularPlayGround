import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  imports: [],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  isDisabled: boolean = true;

  handleChangeTitle(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.isDisabled = input.value.trim() !== 'morteza';
    console.log(input.value);
  }
}
