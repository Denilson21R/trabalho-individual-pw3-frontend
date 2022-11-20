import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetalharAnimalComponent } from './modal-detalhar-animal.component';

describe('ModalDetalharAnimalComponent', () => {
  let component: ModalDetalharAnimalComponent;
  let fixture: ComponentFixture<ModalDetalharAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetalharAnimalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetalharAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
