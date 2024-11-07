import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-planificacion-periodo',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './planificacion-periodo.component.html',
  styleUrls: ['./planificacion-periodo.component.css']
})
export class PlanificacionPeriodoComponent {
  estadoPeriodo: string = 'activo';
  fechaInicio: string = '2024-01-10';
  fechaFin: string = '2024-06-15';
  ciclo: string = 'CII 2024-2025';  // Ciclo actual

  // Método onSubmit
  onSubmit() {
    console.log('Estado:', this.estadoPeriodo);
    console.log('Fecha de Inicio:', this.fechaInicio);
    console.log('Fecha de Fin:', this.fechaFin);
    alert('Periodo registrado correctamente');
  }
}



