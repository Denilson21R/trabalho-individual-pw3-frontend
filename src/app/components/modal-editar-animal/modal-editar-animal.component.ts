import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../../model/animal";

@Component({
  selector: 'app-modal-editar-animal',
  templateUrl: './modal-editar-animal.component.html',
  styleUrls: ['./modal-editar-animal.component.scss']
})
export class ModalEditarAnimalComponent implements OnInit {
  @Input() modal!: boolean
  @Input() animal!: Animal
  @Output() emitCloseModalEditar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal = false
    this.emitCloseModalEditar.emit(true)
  }

}
