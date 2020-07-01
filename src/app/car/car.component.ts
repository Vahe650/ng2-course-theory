import {AfterViewInit, Component, Input} from '@angular/core';
import {ConsoleService} from '../console.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements AfterViewInit {

  @Input()
  car;


  constructor(private conoleService: ConsoleService) {
  }

  ngAfterViewInit(): void {
  }


  getClass() {
    return {
      'list-group-item-success': !this.car.isSold,
      'list-group-item-danger': this.car.isSold,
      'list-group-item': true,
    };

  }

  onAction(buy: string) {
    this.car.isSold = buy === 'buy' ? true : false;
    this.conoleService.log(this.car.name + ' asdad ' + buy);

  }
}
