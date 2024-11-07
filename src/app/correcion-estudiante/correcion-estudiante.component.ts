import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatChipsModule } from '@angular/material/chips';

@Component({
  selector: 'app-correcion-estudiante',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatChipsModule
  ],
  templateUrl: './correcion-estudiante.component.html',
  styleUrl: './correcion-estudiante.component.css'
})
export class CorrecionEstudianteComponent implements OnInit {
  estudiante: string = 'Lindao Alejandro Joseph';
  carrera: string = 'Ingeniería en Software';
  semestre: string = '10mo Semestre';
  revisor: string = 'MSc. Johanna Zumba';
  tituloTesis: string = 'Implementación de un Sistema de Gestión de Aprendizaje Adaptativo utilizando Inteligencia Artificial para Instituciones de Educación Superior';
  
  estado: string = 'Con Observaciones';
  observaciones: string = `Se requieren las siguientes modificaciones en el documento:

1. En el capítulo 2, marco teórico, profundizar más sobre los algoritmos de machine learning utilizados.
2. Revisar el formato APA en las citas bibliográficas.
3. Incluir más referencias actualizadas (2022-2024) sobre sistemas adaptativos.
4. Mejorar la justificación de la metodología seleccionada.
5. Agregar diagramas de arquitectura del sistema propuesto.`;

  historialRevisiones = [
    {
      fecha: '2024-03-21 15:30',
      estado: 'Con Observaciones',
      revisor: 'MSc. Johanna Zumba',
      observaciones: 'Se han revisado las correcciones anteriores. Se observa mejora en la estructura del documento. Pendiente ajustes en marco teórico y metodología.'
    },
    {
      fecha: '2024-03-14 10:15',
      estado: 'Con Observaciones',
      revisor: 'MSc. Johanna Zumba',
      observaciones: 'Documento inicial requiere ajustes importantes en marco teórico. Referencias desactualizadas. Metodología debe ser más específica.'
    },
    {
      fecha: '2024-03-07 09:00',
      estado: 'Pendiente',
      revisor: 'Secretaría Académica',
      observaciones: 'Documento recibido para primera revisión'
    }
  ];

  archivoSeleccionado: File | null = null;
  comentariosAdicionales: string = '';

  onFileSelected(event: any) {
    this.archivoSeleccionado = event.target.files[0];
  }

  enviarCorrecciones() {
    console.log('Enviando correcciones...');
  }

  ngOnInit() {
  }
}
