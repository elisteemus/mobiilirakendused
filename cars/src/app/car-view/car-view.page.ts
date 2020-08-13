import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
    private route: ActivatedRoute,
    private alert: AlertController,
    private router: Router) { }

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
    // this.car = this.carService.cars[this.id];


    //how to find a element in array by id
    this.car = this.carService.cars.find(car => car.id == this.id );
  }

  onDelete() {
    this.alert.create({
      header: 'Oled kindel?',
      message: 'Kas soovid kustutada?',
      buttons: [
        {text: 'Cancel', role: 'cancel'},
        {text: 'Delete', handler: ()=>{
          var carId = this.carService.cars.map(car =>car.id).indexOf(this.car.id);
          this.carService.cars.splice(carId, 1);
          this.router.navigateByUrl("/home")
        } }
      ]
    }).then(alertEl => {alertEl.present()})
    
  } 
}
