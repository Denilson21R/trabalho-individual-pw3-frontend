import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../../model/animal";
import {WebService} from "../../web.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-modal-editar-animal',
  templateUrl: './modal-editar-animal.component.html',
  styleUrls: ['./modal-editar-animal.component.scss']
})
export class ModalEditarAnimalComponent implements OnInit {
  @Input() modal!: boolean
  @Input() animal!: Animal
  @Output() emitCloseModalEditar = new EventEmitter<boolean>();
  @Output() emitUpdateAnimals = new EventEmitter<boolean>();

  constructor(private web: WebService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal = false
    this.emitCloseModalEditar.emit(true)
  }

  salvarAnimal(form: NgForm) {
    if(form.valid){
      this.web.updateAnimal(this.animal).subscribe((res)=>{
        if(res.ok){
          this.emitUpdateAnimals.emit(true)
        }else{
          //TODO: show error
        }
        this.closeModal()
      })
    }else{
      //TODO: show error
    }
  }
}
