import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  // pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], searchText: string): any {
    if(searchText=="") return value;
    return value.filter((info:any)=>info.name.startsWith(searchText));
  }

}
