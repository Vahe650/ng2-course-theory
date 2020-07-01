import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';


@Component({
  selector: 'app-root',
  providers: [CarsService],
//   template: `
//     <div class="container">
//       <div class="row">
//         <div class="col-8 col-offset-2">
//           <input type="text" class="form-control" [(ngModel)]="searchCar">
//           <button class="btn btn-primary" (click)="addCar()"> add</button>
//           <hr>
//           <ul class="list-group">
//             <li class="list-group-item"
//                 *ngFor="let car of cars | appFilter:searchCar: 'name'; let i = index
// "><b>{{i + 1}}</b>{{' ' + car.name}}    <i>{{car.descr}}</i></li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   `,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  cars = [];
  searchCar = '';
  carName = '';


  constructor(private carsService: CarsService) {
  }



  ngOnInit(): void {
    this.cars = this.carsService.cars;

  }
}
