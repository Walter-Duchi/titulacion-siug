import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionComisionComponent } from './creacion-comision.component';

describe('CreacionComisionComponent', () => {
  let component: CreacionComisionComponent;
  let fixture: ComponentFixture<CreacionComisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreacionComisionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreacionComisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
