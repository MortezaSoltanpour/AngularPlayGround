import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  effect,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [CommonModule],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  handleIncreasePrice() {
    this.price.set(this.price() + 1);
  }
  counter: WritableSignal<number> = signal(0);
  price: WritableSignal<number> = signal(1000);

  doubleCounter: Signal<number> = computed(() => this.counter() * this.price());

  handleDecrease() {
    this.counter.set(this.counter() - 1);
  }

  handleIncrease() {
    this.counter.set(this.counter() + 1);
  }

  constructor() {
    effect(() => {
      console.log(this.counter());
      console.log(this.price());
    });
  }
}
