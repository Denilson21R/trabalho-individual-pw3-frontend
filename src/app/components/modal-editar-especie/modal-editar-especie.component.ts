import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Especie} from "../../model/especie";
import {NgForm} from "@angular/forms";
import {WebService} from "../../web.service";

@Component({
  selector: 'app-modal-editar-especie',
  templateUrl: './modal-editar-especie.component.html',
  styleUrls: ['./modal-editar-especie.component.scss']
})
export class ModalEditarEspecieComponent implements OnInit {
  @Input() modal!: boolean
  @Input() especie!: Especie
  @Output() emitCloseModalEditar = new EventEmitter<boolean>();
  @Output() emitUpdateEspecie = new EventEmitter<boolean>();

  constructor(private web: WebService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal = false
    this.emitCloseModalEditar.emit(true)
  }

  salvarEspecie(form: NgForm) {
    if(form.valid){
      this.web.updateEspecie(this.especie).subscribe((res)=>{
        if(res.ok){
          this.emitUpdateEspecie.emit(true)
          //TODO: show success
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
