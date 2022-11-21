import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-adicionar-animal',
  templateUrl: './modal-adicionar-animal.component.html',
  styleUrls: ['./modal-adicionar-animal.component.scss']
})
export class ModalAdicionarAnimalComponent implements OnInit {
  @Input() modal!: boolean
  @Output() emitCloseModalEditar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal = false
    this.emitCloseModalEditar.emit(true)
  }
}
