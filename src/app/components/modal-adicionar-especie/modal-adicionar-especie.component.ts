import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Especie} from "../../model/especie";
import {WebService} from "../../web.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-modal-adicionar-especie',
  templateUrl: './modal-adicionar-especie.component.html',
  styleUrls: ['./modal-adicionar-especie.component.scss']
})
export class ModalAdicionarEspecieComponent implements OnInit {
  especie: Especie = new Especie()
  @Input() modal!: boolean
  @Output() emitCloseModalEditar = new EventEmitter<boolean>();
  @Output() emitUpdateEspecies = new EventEmitter<boolean>();
  @Output() emitAlertSucessoAdicionar = new EventEmitter<boolean>();
  @Output() emitAlertErroAdicionar = new EventEmitter<boolean>();


  constructor(private web: WebService) { }

  ngOnInit(): void {
  }

  closeModal() {
    this.modal = false
    this.emitCloseModalEditar.emit(true)
    this.especie = new Especie()
  }

  salvarEspecie(form: NgForm) {
    if(form.valid){
      this.web.saveEspecie(this.especie).subscribe((res)=>{
        if(res.ok){
          this.emitUpdateEspecies.emit(true)
          this.emitAlertSucessoAdicionar.emit(true)
        }else{
          this.emitAlertErroAdicionar.emit(true)
        }
        this.closeModal()
      })
    }
  }
}
