import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  cars = [
    {id: 0, name: "Audi", year: 2017, imageSource: 'https://media.ed.edmunds-media.com/audi/a6/2017/oem/2017_audi_a6_sedan_30t-prestige-quattro_fq_oem_2_1600.jpg'},
    {id: 1, name: "Bmw", year: 1997, imageSource: 'https://bringatrailer.com/wp-content/uploads/2017/10/97-BMW-M3-Sedan-120.jpg?fit=940%2C705'},
    {id: 2, name: "Tesla", year: 2019, imageSource: 'https://media.ed.edmunds-media.com/tesla/model-s/2018/oem/2018_tesla_model-s_sedan_p100d_fq_oem_5_815.jpg'},
    {id: 3, name: "Ferrari", year: 1950, imageSource: 'https://artebellum-v2-mini.s3-eu-west-1.amazonaws.com/1950-ferrari-195-1jrsbhgla-1-fb.jpg'},
    {id: 4, name: "Mercedes", year: 1985, imageSource: 'https://bringatrailer.com/wp-content/uploads/2017/10/DSC_0875.jpg?fit=940%2C626'}
  ];
  
  constructor() { }
}
