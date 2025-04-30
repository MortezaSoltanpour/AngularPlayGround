import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shortener',
})
export class ShortenerPipe implements PipeTransform {
  transform(
    value: string,
    stringLength: number,
    moreCharacter: string = '...',
    ...args: unknown[]
  ): unknown {
    if (value.length > stringLength) {
      return `${value.slice(0, stringLength)}${moreCharacter}`;
    }
    return value;
  }
}
