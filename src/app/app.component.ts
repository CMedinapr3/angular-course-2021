import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  allVacunados = [
    {name: "juan", age: 16, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "A", vaccined:0, doses: 0},
    {name: "maria", age: 23, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "B", vaccined:1, doses: 2},
    {name: "carla", age: 45, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "C", vaccined:0, doses: 0},
    {name: "marco", age: 50, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined:1, doses: 1},
    {name: "marta", age: 12, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined:0, doses: 0},
    {name: "jorge", age: 36, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "C", vaccined:1, doses: 3},
    {name: "maritza", age: 18, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "C", vaccined:0, doses: 0},
    {name: "leonardo", age: 35, date: "2019-09-07T15:50+00Z", disease: true, vaccineType: "B", vaccined:0, doses: 0},
    {name: "ramiro", age: 24, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "B", vaccined:1, doses: 2},
    {name: "juana", age: 13, date: "2019-09-07T15:50+00Z", disease: false, vaccineType: "A", vaccined:0, doses: 0}
   ];

   
  personas = {
    vacunados: this.allVacunados.filter(p => p.vaccined === 1),
    novacunados: this.allVacunados.filter(p => p.vaccined === 0)
  };

  verifyAllVacunados() {
    const novacunados = this.personas.novacunados.filter(p => p.doses === 0);
    return novacunados.length === 0;
  }

  vacunar(persona, tipo) {
    const index = this.personas[tipo].findIndex(p => p === persona);
    this.personas[tipo].splice(index, 1);
    this.personas.vacunados.push({...persona, vacunado: true});
  }
}
