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
      estudiante: 'DUCHI RIVERA WALTER ALEJANDRO',
      fechaCarga: '2023-10-01',
      estado: 'Pendiente',
      revisor: null,
      archivo: 'path/to/documentA.pdf'
    },
    {
      titulo: 'Aplicación Móvil de Detección de Enfermedades Usando IA',
      estudiante: 'VELEZ PULIDO CHRISTOPHER JEREMY',
      fechaCarga: '2023-10-02',
      estado: 'En Revisión',
      revisor: null,
      archivo: 'path/to/documentB.pdf'
    },
    {
      titulo: 'Sistema de Monitoreo de Rendimiento Académico',
      estudiante: 'CARRILLO SANCHEZ NARCISA MARIA',
      fechaCarga: '2023-10-03',
      estado: 'Pendiente',
      revisor: null,
      archivo: 'path/to/documentC.pdf'
    },
    {
      titulo: 'Plataforma de Gestión de Proyectos de Software',
      estudiante: 'LINDAO ALEJANDRO JOSEPH GUILLERMO',
      fechaCarga: '2023-10-04',
      estado: 'Pendiente',
      revisor: null,
      archivo: 'path/to/documentD.pdf'
    },
    {
      titulo: 'Sistema de Automatización de Procesos Administrativos',
      estudiante: 'TOALA MERCHAN MADELINE CAROLINA',
      fechaCarga: '2023-10-05',
      estado: 'Pendiente',
      revisor: null,
      archivo: 'path/to/documentE.pdf'
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
