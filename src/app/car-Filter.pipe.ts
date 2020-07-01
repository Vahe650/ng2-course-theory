import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'appFilter',
  pure: false
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, searchString: string, field: string): unknown {
      return carList.length === 0 || searchString === '' ? carList :
      carList.filter((car) => car[field].toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
  }

}
