import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'cm'
})
export class CentimeterPipe implements PipeTransform {
  transform(value: number, decimals = 2) {
    if (value && !isNaN(value)) {
      const cm = value * 2.54;
      return cm.toFixed(decimals);
    }
    return null;
  }
}
