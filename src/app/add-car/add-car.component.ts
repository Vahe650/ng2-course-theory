import {Component, OnInit} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css'],
})
export class AddCarComponent implements OnInit {

  carName: any = '';


  constructor(private carsService: CarsService) {
  }

  ngOnInit(): void {
  }

  addCarr() {
    this.carsService.addCar(this.carName);
    this.carName = '';


  }


}
