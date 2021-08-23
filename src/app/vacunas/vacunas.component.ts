import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-vacunas',
  template: `
  <div [style.background]="vaccined === 0 ? 'red' : 'green'"
       style="float: left; margin: 10px; padding: 20px;">

	  <p>Nombre: {{name | uppercase}}</p>
    <p>Color: {{color}}</p>
	  <p>age: {{age}}</p>
    <p>date: {{date}}</p>
    <p>vaccineType: {{vaccineType}}</p>
	  <p>vaccined: {{ vaccined ? ('yes' | lowercase) : ('no' | lowercase) }}</p>
    <p>doses: {{doses}}</p>

	  
	  <button *ngIf="!vacunado" 
            (click)="onVacunar()"
            [disabled]="doses === 3 || disease || age < 18 || vaccined">
      Vacunar
    </button>
  </div>
  `
})
export class VacunasComponent {
  @Input() name: string;
  @Input() age: string;
  @Input() date: string;
  @Input() disease: boolean;
  @Input() vaccineType: string;
  @Input() vaccined: number;
  @Input() doses: number;
  @Output() vacunar = new EventEmitter();

  constructor() {  }

  onVacunar() {
    this.vacunar.emit();
  }
 
}