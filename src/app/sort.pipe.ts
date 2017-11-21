import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  pure: false
})
export class SortPipe implements PipeTransform {

  transform(value: any, propertyName: string, desc: boolean = false): any {
    return value.sort((a, b) => {
      const result = (a[propertyName] > b[propertyName]) ? 1 : -1;
      return desc ? result * -1 : result;
    });
  }

}
