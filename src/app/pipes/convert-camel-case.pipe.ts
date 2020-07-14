import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertCamelCase'
})
export class ConvertCamelCasePipe implements PipeTransform {
  transform(value: string, args: any[]): string {
    if (value) {
      const label = value.replace(/([A-Z]+)/g, ' $1').replace(/([A-Z][a-z])/g, ' $1');
      if (label.split(' ')[0] === 'cust') {
        return 'Customer ' + label.split('  ')[1];
      } else {
        return label;
      }
    }
  }
}
