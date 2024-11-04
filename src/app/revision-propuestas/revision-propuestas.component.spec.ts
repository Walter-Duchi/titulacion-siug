import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevisionPropuestasComponent } from './revision-propuestas.component';

describe('RevisionPropuestasComponent', () => {
  let component: RevisionPropuestasComponent;
  let fixture: ComponentFixture<RevisionPropuestasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RevisionPropuestasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RevisionPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
