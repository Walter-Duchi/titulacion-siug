import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificacionPeriodoComponent } from './planificacion-periodo.component';

describe('PlanificacionPeriodoComponent', () => {
  let component: PlanificacionPeriodoComponent;
  let fixture: ComponentFixture<PlanificacionPeriodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanificacionPeriodoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificacionPeriodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
