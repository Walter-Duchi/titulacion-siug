import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrecionEstudianteComponent } from './correcion-estudiante.component';

describe('CorrecionEstudianteComponent', () => {
  let component: CorrecionEstudianteComponent;
  let fixture: ComponentFixture<CorrecionEstudianteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CorrecionEstudianteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CorrecionEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
