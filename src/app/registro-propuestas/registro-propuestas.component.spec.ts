import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPropuestasComponent } from './registro-propuestas.component';

describe('RegistroPropuestasComponent', () => {
  let component: RegistroPropuestasComponent;
  let fixture: ComponentFixture<RegistroPropuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroPropuestasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
