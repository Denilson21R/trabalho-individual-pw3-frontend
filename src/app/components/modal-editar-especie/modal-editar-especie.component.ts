import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Especie} from "../../model/especie";

@Component({
  selector: 'app-modal-editar-especie',
  templateUrl: './modal-editar-especie.component.html',
  styleUrls: ['./modal-editar-especie.component.scss']
})
export class ModalEditarEspecieComponent implements OnInit {
  @Input() modal!: boolean
  @Input() especie!: Especie
  @Output() emitCloseModalEditar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal = false
    this.emitCloseModalEditar.emit(true)
  }

}
