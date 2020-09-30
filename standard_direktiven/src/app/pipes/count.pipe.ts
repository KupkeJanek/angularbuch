import {Pipe, PipeTransform} from '@angular/core';
@Pipe({
  name: 'count',
  pure: false
})
export class CountPipe implements PipeTransform {
  transform(value: any) {
    if (!this.checkInput(value)) {
      return 0;
    }
    return value.length;
  }
  private checkInput(obj: any): boolean {
    return obj && (typeof obj === 'string' || Array.isArray(obj) );
  }
}
