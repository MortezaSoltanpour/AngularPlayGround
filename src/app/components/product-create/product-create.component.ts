import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-create',
  imports: [NgIf],
  templateUrl: './product-create.component.html',
  styleUrl: './product-create.component.css',
})
export class ProductCreateComponent {
  isDisabled: boolean = true;
  isAgreementChecked: boolean = false;

  handleChangeTitle(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;
    this.isDisabled = input.value.trim() !== 'morteza';
    console.log(input.value);
  }

  handleAgreementChanged(e: Event) {
    const input = e.target as HTMLInputElement;
    this.isAgreementChecked = input.checked;
  }
}
