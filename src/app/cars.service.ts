import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {


  constructor(private consoleService: ConsoleService) {
  }

  cars = [
    {name: 'Ford', isSold: false},
    {name: 'Mazda', isSold: false},
    {name: 'Audi', isSold: true},
    {name: 'LAda', isSold: false},
    {name: 'Mers', isSold: false}

  ];

  addCar(carName: string) {
    this.cars.push({
      name: carName,
      isSold: false
    });
    this.consoleService.log('it is ');
  }

}
