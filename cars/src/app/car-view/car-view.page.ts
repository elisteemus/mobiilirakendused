import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car-view',
  templateUrl: './car-view.page.html',
  styleUrls: ['./car-view.page.scss'],
})
export class CarViewPage implements OnInit {
  car;
  id;

  //paneme service-i konstruktorisse, et saada kasutada
  //tema funktsioone ja muutujaid

  // route constructorisse, et saada ligipääs URL-i omadustele
  constructor(private carService: CarService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    // küsime parameetreid route kaudu ja subscribime, et
    // ta jääks kuulama URLi muutusi
    this.route.paramMap.subscribe(params => {
      // panen id-le väärtuse, mis saan URL parameetritest,
      // võti on sama, mis app-routingu sees olev muutuja (: järel)
      this.id = params.get ('id');
    })
    // autole anname väärtuse service-i seest
    // võtame kõik autod
    // kandiliste sulgudega ütleme järjekorranumbri
    this.car = this.carService.cars[this.id];
  }

  onDelete() {
    this.carService.cars.splice(this.id, 1);
  } 
}
