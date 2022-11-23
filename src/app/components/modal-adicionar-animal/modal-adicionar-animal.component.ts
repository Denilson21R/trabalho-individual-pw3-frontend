import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Animal} from "../../model/animal";
import {NgForm} from "@angular/forms";
import {Especie} from "../../model/especie";
import {WebService} from "../../web.service";

@Component({
  selector: 'app-modal-adicionar-animal',
  templateUrl: './modal-adicionar-animal.component.html',
  styleUrls: ['./modal-adicionar-animal.component.scss']
})
export class ModalAdicionarAnimalComponent implements OnInit {
  @Input() modal!: boolean
  @Output() emitCloseModalEditar = new EventEmitter<boolean>();
  @Output() emitUpdateAnimals = new EventEmitter<boolean>();
  @Output() emitErroAdicionar = new EventEmitter<boolean>();
  @Output() emitSucessoAdicionar = new EventEmitter<boolean>();
  animal: Animal = new Animal()
  especies: Especie[] = []

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.getEspecies();
  }

  closeModal() {
    this.modal = false
    this.emitCloseModalEditar.emit(true)
    this.animal = new Animal()
  }

  salvarAnimal(form: NgForm) {
    if(form.valid){
      this.web.saveAnimal(this.animal).subscribe((res)=>{
        if(res.ok){
          this.emitUpdateAnimals.emit(true)
          this.emitSucessoAdicionar.emit(true)
        }else{
          this.emitErroAdicionar.emit(true)
        }
        this.closeModal()
      })
    }
  }

  private getEspecies() {
    this.web.getAllEspecies().subscribe((res) => {
      if (res.ok) {
        res.body?.forEach((especie)=>{
          if(especie.status == "ATIVO"){
            this.especies.push(especie)
          }
        })
      }
    })
  }
}
