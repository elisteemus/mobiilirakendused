import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  //pealkiri, mille me välja prindime (loogeliste sulgudega)
  carTitle = "List autodest";

  //autod, mille me välja prindime (ngFor abil)
  cars;

  //panen service-i siia klassi sisse, et saada kasutada service-i muutujaid ja funktsioone
  constructor(private carService: CarService) {}

  //ngOnInit on funktsioon, mis läheb käima kui siia lehele satutakse
  ngOnInit(): void {
    // anname autodele väärtuse service-i seest
    this.cars = this.carService.cars;
  }

}
