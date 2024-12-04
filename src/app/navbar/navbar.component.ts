import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  notificaciones = [
    {
      titulo: 'Sistema de Gestión de Recursos Educativos Basado en la Nube',
      mensaje:
        'Tu propuesta "Sistema de Gestión de Recursos Educativos Basado en la Nube" fue aprobada por el revisor.',
      fecha: '2024-11-25',
      observacionRevisor:
        'La propuesta cumple con todos los requisitos establecidos.',
      comentarioEstudiante: null,
      estadoAprobacion: true,
    },
    {
      titulo: 'Plataforma de Gestión de Proyectos de Software',
      mensaje:
        'El revisor ha dejado observaciones en tu propuesta "Plataforma de Gestión de Proyectos de Software".',
      fecha: '2024-11-24',
      observacionRevisor:
        'Es necesario mejorar la descripción de los objetivos específicos y agregar más referencias bibliográficas.',
      comentarioEstudiante:
        'Revisaré y realizaré las correcciones necesarias pronto.',
      estadoAprobacion: null,
    },
    {
      titulo: 'Sistema de Monitoreo de Rendimiento Académico',
      mensaje:
        'Has enviado una nueva versión de tu propuesta "Sistema de Monitoreo de Rendimiento Académico".',
      fecha: '2024-11-23',
      observacionRevisor: null,
      comentarioEstudiante: null,
      estadoAprobacion: null,
    },
    {
      titulo: 'Aplicación Móvil de Detección de Enfermedades Usando IA',
      mensaje:
        'Tu propuesta "Aplicación Móvil de Detección de Enfermedades Usando IA" fue desaprobada por el revisor.',
      fecha: '2024-11-22',
      observacionRevisor:
        'La propuesta no aborda adecuadamente el problema planteado. Es necesario realizar un replanteamiento completo del alcance.',
      comentarioEstudiante: null,
      estadoAprobacion: false,
    },
  ];

  get totalNotificaciones() {
    return this.notificaciones.length;
  }
}
