import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAdicionarAnimalComponent } from './modal-adicionar-animal.component';

describe('ModalAdicionarAnimalComponent', () => {
  let component: ModalAdicionarAnimalComponent;
  let fixture: ComponentFixture<ModalAdicionarAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAdicionarAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalAdicionarAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
