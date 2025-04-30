import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener',
})
export class ShortenerPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): unknown {
    if (value.length > 40) {
      return `${value.slice(0, 40)}...`;
    }
    return value;
  }
}
