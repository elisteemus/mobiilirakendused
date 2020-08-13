import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  numbers= [
    { id: 0, number: 10, text: "kümme" },
    { id: 1, number: 20, text: "kakskümmend" },
    { id: 2, number: 15, text: "viisteist" },
    { id: 3, number: 17, text: "seitseteist" },
    { id: 4, number: 19, text: "üheksateist" },
    { id: 5, number: 42, text: "nelikümmend kaks" }
  ];
  constructor() {}

}
