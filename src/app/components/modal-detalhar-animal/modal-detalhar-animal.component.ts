import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../../model/animal";

@Component({
  selector: 'app-modal-detalhar-animal',
  templateUrl: './modal-detalhar-animal.component.html',
  styleUrls: ['./modal-detalhar-animal.component.scss']
})
export class ModalDetalharAnimalComponent implements OnInit {
  @Input() modal!: boolean
  @Input() animal!: Animal
  @Output() emitCloseModalDetalhar = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal = false
    this.emitCloseModalDetalhar.emit(true)
  }
}
