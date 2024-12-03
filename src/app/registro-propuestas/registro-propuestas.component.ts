import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf'; // Importar jsPDF

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
  generarPDF(propuesta: Propuesta) {
    const doc = new jsPDF();
    
    // Título
    doc.setFontSize(18);
    doc.setTextColor(0, 51, 102); // Azul oscuro
    doc.text('Informe de Revisión de Propuesta', 14, 20);
    
     // Línea de separación después del título
     doc.setDrawColor(0, 51, 102);
     doc.setLineWidth(0.5);
     doc.line(14, 22, 200, 22);

    // Detalles de la propuesta
    doc.setFontSize(12);
    doc.setTextColor(0, 0, 0); // Negro para el texto
    doc.text(`Título: ${propuesta.titulo}`, 14, 30);
    doc.text(`Estudiante: ${propuesta.estudiante}`, 14, 40);
    doc.text(`Fecha de Carga: ${propuesta.fechaCarga}`, 14, 50);
    doc.text(`Estado: ${propuesta.estado}`, 14, 60);
    
    // Comentario adicional dependiendo del estado
    let comentario = '';
    if (propuesta.estado === 'Rechazada') {
      comentario = 'La propuesta fue rechazada debido a que no se considera viable.';
    } else if (propuesta.estado === 'Con Observaciones') {
      comentario = propuesta.observaciones || 'Se requieren correcciones.';
    } else if (propuesta.estado === 'Aprobada') {
      comentario = 'La propuesta fue aprobada sin necesidad de correcciones.';
    }
    doc.text(`Comentario: ${comentario}`, 14, 70);
      // Línea de separación antes del pie de página
      doc.setDrawColor(0, 51, 102);
      doc.setLineWidth(0.5);
      doc.line(14, 85, 200, 85);
  
      // Pie de página con texto de copyright o información adicional
      doc.setFontSize(10);
      doc.setTextColor(150, 150, 150); // Gris para el pie de página
      doc.text('Generado por el sistema de revisión de propuestas', 14, 90);
    // Descargar el PDF
    doc.save(`${propuesta.titulo}_Informe.pdf`);
  }

  enviarInforme(propuesta: Propuesta) {
    if (propuesta.esViable === false) {
      propuesta.estado = 'Rechazada';
      alert('Informe de rechazo enviado');
      this.generarPDF(propuesta);
    } else if (propuesta.esViable && propuesta.necesitaCorrecciones) {
      propuesta.estado = 'Con Observaciones';
      alert('Observaciones enviadas al estudiante');
    } else if (propuesta.esViable && !propuesta.necesitaCorrecciones) {
      propuesta.estado = 'Aprobada';
      this.generarPDF(propuesta);
      alert('Propuesta aprobada y notificación enviada');
    }
    

    this.propuestaSeleccionada = null;
  }
}
