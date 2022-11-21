import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-modal-adicionar-especie',
  templateUrl: './modal-adicionar-especie.component.html',
  styleUrls: ['./modal-adicionar-especie.component.scss']
})
export class ModalAdicionarEspecieComponent implements OnInit {
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
