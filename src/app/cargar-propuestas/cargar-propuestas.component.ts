import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';

@Component({
  selector: 'app-cargar-propuestas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule
  ],
  templateUrl: './cargar-propuestas.component.html',
  styleUrls: ['./cargar-propuestas.component.css']
})
export class CargarPropuestasComponent {
  titulo: string = 'Desarrollo de una Aplicación Móvil para la Gestión de Clases';
  descripcion: string = 'Aplicación para gestionar clases y actividades académicas';
  nombreEstudiante: string = 'María Fernanda López Villafuerte';
  comentarios: string = 'Requiere aclaración en los objetivos';
  archivo: string = '';

  // Método onSubmit
  onSubmit() {
    console.log('Título:', this.titulo);
    console.log('Descripción:', this.descripcion);
    console.log('Estudiante:', this.nombreEstudiante);
    console.log('Comentarios:', this.comentarios);
    console.log('Archivo:', this.archivo);
    alert('Propuesta registrada correctamente');
  }
}
