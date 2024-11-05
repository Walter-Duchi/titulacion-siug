import { Routes } from '@angular/router';
import { RegistroPropuestasComponent } from './registro-propuestas/registro-propuestas.component';
import { AsignacionRevisoresComponent } from './asignacion-revisores/asignacion-revisores.component';
import { PlanificacionPeriodoComponent } from './planificacion-periodo/planificacion-periodo.component';
import { CargarPropuestasComponent } from './cargar-propuestas/cargar-propuestas.component';
import { CorrecionEstudianteComponent } from './correcion-estudiante/correcion-estudiante.component';
import { CreacionComisionComponent } from './creacion-comision/creacion-comision.component';

export const routes: Routes = [
  {
    path: 'registro-propuesta',
    component: RegistroPropuestasComponent
  },
  {
    path: 'asignacion-revisores',
    component: AsignacionRevisoresComponent
  },
  {
    path: 'planificacion-periodo',
    component: PlanificacionPeriodoComponent
  },
  {
    path: 'cargar-propuestas',
    component: CargarPropuestasComponent
  },
  {
    path: 'correcion-estudiante',
    component: CorrecionEstudianteComponent
  },
  {
    path: 'creacion-comision',
    component: CreacionComisionComponent
  }
];
