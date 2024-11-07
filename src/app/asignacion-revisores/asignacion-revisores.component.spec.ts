import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsignacionRevisoresComponent } from './asignacion-revisores.component';

describe('AsignacionRevisoresComponent', () => {
  let component: AsignacionRevisoresComponent;
  let fixture: ComponentFixture<AsignacionRevisoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsignacionRevisoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsignacionRevisoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
