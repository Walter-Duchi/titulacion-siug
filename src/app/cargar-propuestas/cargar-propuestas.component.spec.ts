import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarPropuestasComponent } from './cargar-propuestas.component';

describe('CargarPropuestasComponent', () => {
  let component: CargarPropuestasComponent;
  let fixture: ComponentFixture<CargarPropuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CargarPropuestasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargarPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
