import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorMostrarComponent } from './computador-mostrar.component';

describe('ComputadorMostrarComponent', () => {
  let component: ComputadorMostrarComponent;
  let fixture: ComponentFixture<ComputadorMostrarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputadorMostrarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorMostrarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
