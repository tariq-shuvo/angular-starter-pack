import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'calculateAge'
})
export class CalculateAgePipe implements PipeTransform {

  transform(date: string, ...args: unknown[]): unknown {
    return new Date().getFullYear() - new Date(date).getFullYear();
  }

}
