import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CarComponent} from './car/car.component';
import {FormsModule} from '@angular/forms';
import {AddCarComponent} from './add-car/add-car.component';
import {BackGroundDirective} from './directives/backGround.directive';
import {MyDirectiveDirective} from './directives/my-directive.directive';
import {PowPipe} from './pow.pipe';
import {CarFilterPipe} from './car-Filter.pipe';
import {ConsoleService} from './console.service';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent,
    BackGroundDirective,
    MyDirectiveDirective,
    PowPipe,
    CarFilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
