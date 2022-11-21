import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarEspecieComponent } from './modal-editar-especie.component';

describe('ModalEditarEspecieComponent', () => {
  let component: ModalEditarEspecieComponent;
  let fixture: ComponentFixture<ModalEditarEspecieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarEspecieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarEspecieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
