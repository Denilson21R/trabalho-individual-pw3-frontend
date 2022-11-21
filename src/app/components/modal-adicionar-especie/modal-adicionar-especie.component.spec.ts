import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarEspecieComponent } from './modal-adicionar-especie.component';

describe('ModalAdicionarEspecieComponent', () => {
  let component: ModalAdicionarEspecieComponent;
  let fixture: ComponentFixture<ModalAdicionarEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdicionarEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
