import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputadorCreateComponent } from './computador-create.component';

describe('ComputadorCreateComponent', () => {
  let component: ComputadorCreateComponent;
  let fixture: ComponentFixture<ComputadorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComputadorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
