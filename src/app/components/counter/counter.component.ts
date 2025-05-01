import {
  Component,
  computed,
  signal,
  Signal,
  WritableSignal,
} from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
})
export class CounterComponent {
  counter: WritableSignal<number> = signal(0);

  doubleCounter: Signal<number> = computed(() => this.counter() * 2);

  handleDecrease() {
    this.counter.set(this.counter() - 1);
  }

  handleIncrease() {
    this.counter.set(this.counter() + 1);
  }
}
