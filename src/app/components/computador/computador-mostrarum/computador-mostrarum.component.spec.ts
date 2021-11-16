import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorMostrarumComponent } from './computador-mostrarum.component';

describe('ComputadorMostrarumComponent', () => {
  let component: ComputadorMostrarumComponent;
  let fixture: ComponentFixture<ComputadorMostrarumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputadorMostrarumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorMostrarumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
