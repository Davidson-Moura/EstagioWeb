import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorEditarComponent } from './computador-editar.component';

describe('ComputadorEditarComponent', () => {
  let component: ComputadorEditarComponent;
  let fixture: ComponentFixture<ComputadorEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputadorEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
