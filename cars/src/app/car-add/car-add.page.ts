import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.page.html',
  styleUrls: ['./car-add.page.scss'],
})
export class CarAddPage implements OnInit {

  constructor(private carService: CarService) { }

  ngOnInit() {
  }

  onSubmit(form) {
    let newCar = form.value;
    newCar.id = this.carService.cars.length;
    this.carService.cars.push(newCar);
  }

  onEmpty(form) {
    form.reset();
  }
}
