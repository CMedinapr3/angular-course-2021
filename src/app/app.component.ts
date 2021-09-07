import { NgIf } from '@angular/common';
import { Component, Input, ElementRef, ViewChild, OnInit } from '@angular/core';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import { filter, map, delay } from 'rxjs/operators';
import { VacunasService } from './vacunas.service';
import { VacunasComponent } from './vacunas/vacunas.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  unvaccinated=[]
  vaccinated=[]

  constructor(private vacuna: VacunasService) {
    
    this.vacuna.getAllUnvaccinated().subscribe(data => this.getDataUnvaccinated(data))
    this.vacuna.getAllVaccinated().subscribe(data => this.getVaccinated(data))

  }


  getDataUnvaccinated(data){

    this.unvaccinated=Object.entries(data);
  }

  getVaccinated(data){

    this.vaccinated=Object.entries(data);
    console.log(data)
  }

  verifyAllVacunados() {
    return this.unvaccinated.length;
  }

  vacunar(id: string, nombre: string, edad: string, fecha: string, enfermedad: boolean, tipo: string,  vacunado: number, dosis: number) {
    
    
    

      if(dosis === 0 && tipo === "C"){
        this.vacuna.patch(id, {"doses": 1 }).subscribe(res=>console.log(res))
        }

      if(dosis === 1 && tipo === "C"){
        this.vacuna.patch(id, {"doses": 2 }).subscribe(res=>console.log(res))
          }     
          
      if(dosis === 2 && tipo === "C"){
        
        this.vacuna.patch(id, {"doses": 3 }).subscribe(res=>console.log(res))
        this.vacuna.create({
          "age":edad ,
          "date":fecha,
          "disease":enfermedad,
          "doses":3,
          "name":nombre,
          "vaccineType":tipo,
          "vaccined":1
        }).subscribe(
          res => console.log(res))
      
        this.vacuna.deleteUnvaccinated(id).subscribe(
          res => console.log(res))
  
           }
     this.vacuna.getAllUnvaccinated().subscribe(data => this.getDataUnvaccinated(data))
     this.vacuna.getAllVaccinated().subscribe(data => this.getVaccinated(data))

     window.location.reload();

     
  }
    
}
