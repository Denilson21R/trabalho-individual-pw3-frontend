import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditarAnimalComponent } from './modal-editar-animal.component';

describe('ModalEditarAnimalComponent', () => {
  let component: ModalEditarAnimalComponent;
  let fixture: ComponentFixture<ModalEditarAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalEditarAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalEditarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
