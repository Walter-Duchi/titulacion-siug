import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

interface Propuesta {
  titulo: string;
  descripcion: string;
  estudiante: string;
  codigoEstudiante: string;
  fechaCarga: string;
  comisionAsignada: string | null;
  archivosAdjuntos: { nombre: string; url: string }[];
}

interface Comision {
  nombre: string;
  descripcion: string;
  fechaCreacion: string;
  estado: string;
}

@Component({
  selector: 'app-creacion-comision',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './creacion-comision.component.html',
  styleUrls: ['./creacion-comision.component.css']
})
export class CreacionComisionComponent implements OnInit {
  comisionForm: FormGroup;
  comisiones: Comision[] = [];
  propuestas: Propuesta[] = [];
  propuestaSeleccionada: Propuesta | null = null;
  mensajeExito: string | null = null;

  miembrosDisponibles = [
    { id: 1, nombre: 'Madeline Carolina' },
    { id: 2, nombre: 'Narcisa Carrillo' },
    { id: 3, nombre: 'Walter Duchi' },
    { id: 4, nombre: 'Lindao Alejandro' },
    { id: 5, nombre: 'Christopher Vélez' }
  ];

  constructor(private fb: FormBuilder) {
    this.comisionForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      miembros: this.fb.array([], Validators.required),
      coordinador: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.comisiones = this.obtenerComisiones();
    this.propuestas = this.obtenerPropuestas();
  }

  crearComision() {
    if (this.comisionForm.valid) {
      const nuevaComision = { ...this.comisionForm.value };
      nuevaComision.fechaCreacion = new Date().toISOString();
      nuevaComision.estado = 'Activa';
      this.comisiones.push(nuevaComision);
      this.comisionForm.reset();
    }
  }

  editarComision(comision: Comision) {
    // Lógica de edición
  }

  eliminarComision(index: number) {
    this.comisiones.splice(index, 1);
  }

  asignarPropuesta(propuesta: Propuesta, comisionNombre: string | null) {
    if (comisionNombre) {  // Verificar que comisionNombre no sea null
      propuesta.comisionAsignada = comisionNombre;
      this.mensajeExito = `Propuesta "${propuesta.titulo}" asignada a la comisión "${comisionNombre}" correctamente.`;
    }
  }
  

  verDetallePropuesta(propuesta: Propuesta) {
    this.propuestaSeleccionada = propuesta;
  }

  cerrarDetallePropuesta() {
    this.propuestaSeleccionada = null;
  }

  obtenerComisiones(): Comision[] {
    return [
      { nombre: 'Comisión de Tecnología', descripcion: 'Revisión de proyectos de tecnología', fechaCreacion: '2024-01-01', estado: 'Activa' }
    ];
  }

  obtenerPropuestas(): Propuesta[] {
    return [
      {
        titulo: 'Proyecto A',
        descripcion: 'Descripción del Proyecto A',
        estudiante: 'Juan Pérez',
        codigoEstudiante: 'E123456',
        fechaCarga: '2024-02-01',
        comisionAsignada: null,
        archivosAdjuntos: [{ nombre: 'Tesis.pdf', url: '/ruta/al/archivo/Tesis.pdf' }]
      },
      {
        titulo: 'Proyecto B',
        descripcion: 'Descripción del Proyecto B',
        estudiante: 'Ana Gómez',
        codigoEstudiante: 'E654321',
        fechaCarga: '2024-02-02',
        comisionAsignada: null,
        archivosAdjuntos: [{ nombre: 'Investigación.pdf', url: '/ruta/al/archivo/Investigación.pdf' }]
      }
    ];
  }

  get miembros(): FormArray {
    return this.comisionForm.get('miembros') as FormArray;
  }

  onCheckboxChange(e: any) {
    const miembros: FormArray = this.comisionForm.get('miembros') as FormArray;

    if (e.target.checked) {
      miembros.push(this.fb.control(e.target.value));
    } else {
      const index = miembros.controls.findIndex(x => x.value === e.target.value);
      if (index !== -1) {
        miembros.removeAt(index);
      }
    }
  }
}
