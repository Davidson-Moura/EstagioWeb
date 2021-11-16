import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorPesquisarComponent } from './computador-pesquisar.component';

describe('ComputadorPesquisarComponent', () => {
  let component: ComputadorPesquisarComponent;
  let fixture: ComponentFixture<ComputadorPesquisarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputadorPesquisarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
