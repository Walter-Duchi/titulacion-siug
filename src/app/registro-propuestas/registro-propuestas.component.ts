import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Propuesta {
  titulo: string;
  estudiante: string;
  fechaCarga: string;
  estado: string;
  archivo: string;
  esViable?: boolean;
  necesitaCorrecciones?: boolean;
  observaciones?: string;
}

@Component({
  selector: 'app-registro-propuestas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatInputModule
  ],
  templateUrl: './registro-propuestas.component.html',
  styleUrls: ['./registro-propuestas.component.css']
})
export class RegistroPropuestasComponent {
  propuestas: Propuesta[] = [
    {
      titulo: 'Desarrollo de un Sistema de Gestión de Inventario con IoT',
      estudiante: 'DUCHI RIVERA WALTER ALEJANDRO',
      fechaCarga: '2024-03-15',
      estado: 'Pendiente',
      archivo: 'propuesta_duchi.pdf'
    },
    {
      titulo: 'Aplicación Web para Gestión de Citas Médicas con IA',
      estudiante: 'VELEZ PULIDO CHRISTOPHER JEREMY',
      fechaCarga: '2024-03-14',
      estado: 'En Revisión',
      archivo: 'propuesta_velez.pdf'
    },
    {
      titulo: 'Sistema de Control de Asistencia con Reconocimiento Facial',
      estudiante: 'CARRILLO SANCHEZ NARCISA MARIA',
      fechaCarga: '2024-03-13',
      estado: 'Pendiente',
      archivo: 'propuesta_carrillo.pdf'
    },
    {
      titulo: 'Plataforma E-learning con Realidad Aumentada',
      estudiante: 'LINDAO ALEJANDRO JOSEPH GUILLERMO',
      fechaCarga: '2024-03-12',
      estado: 'Pendiente',
      archivo: 'propuesta_lindao.pdf'
    },
    {
      titulo: 'Sistema de Monitoreo Ambiental con Arduino',
      estudiante: 'TOALA MERCHAN MADELINE CAROLINA',
      fechaCarga: '2024-03-11',
      estado: 'Pendiente',
      archivo: 'propuesta_toala.pdf'
    }
  ];

  propuestaSeleccionada: Propuesta | null = null;

  seleccionarPropuesta(propuesta: Propuesta) {
    this.propuestaSeleccionada = propuesta;
  }

  enviarInforme(propuesta: Propuesta) {
    if (propuesta.esViable === false) {
      propuesta.estado = 'Rechazada';
      alert('Informe de rechazo enviado');
    } else if (propuesta.esViable && propuesta.necesitaCorrecciones) {
      propuesta.estado = 'Con Observaciones';
      alert('Observaciones enviadas al estudiante');
    } else if (propuesta.esViable && !propuesta.necesitaCorrecciones) {
      propuesta.estado = 'Aprobada';
      alert('Propuesta aprobada y notificación enviada');
    }
    this.propuestaSeleccionada = null;
  }
}
