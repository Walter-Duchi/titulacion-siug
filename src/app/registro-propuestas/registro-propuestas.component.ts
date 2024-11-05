import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Propuesta {
  titulo: string;
  estudiante: string;
  fechaCarga: string;
  estado: string;
  revisor: string | null;
  archivo: string;
}

@Component({
  selector: 'app-registro-propuestas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule, 
    MatSelectModule, 
    MatOptionModule
  ], 
  templateUrl: './registro-propuestas.component.html',
  styleUrls: ['./registro-propuestas.component.css']
})
export class RegistroPropuestasComponent {
  propuestas: Propuesta[] = [
    {
      titulo: 'Sistema de Gestión de Recursos Educativos Basado en la Nube',
      estudiante: 'Walter Alejandro Duchi Rivera',
      fechaCarga: '2023-10-01',
      estado: 'Pendiente',
      revisor: null,
      archivo: 'path/to/documentA.pdf'
    },
    {
      titulo: 'Aplicación Móvil de Detección de Enfermedades Usando IA',
      estudiante: 'Christopher Jeremy Veléz Pulido',
      fechaCarga: '2023-10-02',
      estado: 'En Revisión',
      revisor: null,
      archivo: 'path/to/documentB.pdf'
    }
  ];

  revisores: string[] = [
    'Mgs. Verónica Mendoza', 
    'Mgs. Darwin Patiño', 
    'Mgs. Karla Abad', 
    'Mgs. Johanna Zumba'
  ];

  constructor() {
    console.log('Propuestas:', this.propuestas);
  }

  asignarPropuesta() {
    console.log('Propuestas asignadas:', this.propuestas);
    alert('Propuestas asignadas correctamente');
  }
}
