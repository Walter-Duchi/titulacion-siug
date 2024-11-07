import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

interface Propuesta {
  titulo: string;
  nombreEstudiante: string;
  fechaCarga: string;
  estado: string;
  revisor: string;
  archivos: string | null;
}

interface Revisor {
  id: string;
  nombre: string;
}

@Component({
  selector: 'app-asignacion-revisores',
  templateUrl: './asignacion-revisores.component.html',
  styleUrls: ['./asignacion-revisores.component.css']
})
export class AsignacionRevisoresComponent implements OnInit {
  propuestas: Propuesta[] = [];
  revisores: Revisor[] = [
    { id: '1', nombre: 'Ing. María Fernanda López Jiménez' },
    { id: '2', nombre: 'Ing. Juan Carlos Pérez Rodríguez' },
    { id: '3', nombre: 'Ing. Laura Isabel Torres Guzmán' },
    { id: '4', nombre: 'Ing. José Andrés Rojas Vargas'},
    { id: '5', nombre: 'Ing. Sebastián David Mendoza Castro'},


  ];

  displayedColumns: string[] = ['titulo', 'nombreEstudiante', 'fechaCarga', 'estado', 'revisor', 'archivos'];

  ngOnInit(): void {
    this.cargarPropuestas();
  }

  cargarPropuestas() {
    this.propuestas = [
      { titulo: 'Desarrollo de una Aplicación Web para la Gestión de Inventarios utilizando Arquitectura de Microservicios', nombreEstudiante: 'Carla Gabriela Romero Díaz', fechaCarga: '2024-11-01', estado: 'Pendiente', revisor: '', archivos: 'https://dspace.redclara.net/bitstream/10786/1277/1/93%20Arquitectura%20de%20Software%20basada%20en%20Microservicios%20para%20Desarrollo%20de%20Aplicaciones%20Web.pdf' },
      { titulo: 'Aplicación de Blockchain para la Seguridad de Datos en Sistemas Financieros', nombreEstudiante: 'Ana Lucía Morales Sánchez', fechaCarga: '2024-10-15', estado: 'En Revisión', revisor: '', archivos: 'https://dspace.ups.edu.ec/bitstream/123456789/27865/1/UPS-GT005356.pdf' },
      { titulo: 'Optimización de Procesos Logísticos en una Cadena de Suministro mediante Algoritmos de Computación en la Nube', nombreEstudiante: 'Ricardo Ernesto López Peña', fechaCarga: '2024-10-15', estado: 'En Revisión', revisor: '', archivos: 'https://dspace.ups.edu.ec/bitstream/123456789/23890/1/UPS-GT004099.pdf' },

    ];
  }

  asignarRevisor() {
    // Lógica para asignar el revisor a la propuesta seleccionada
    alert('Revisor asignado correctamente.');
  }
}
