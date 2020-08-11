import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  carTitle = "List autodest";
  cars = ["Audi", "Bmw", "Tesla", "Ferrari", "Mercedes"];

  constructor() {}

}
