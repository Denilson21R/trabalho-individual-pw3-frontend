import { Component, OnInit } from '@angular/core';
import {WebService} from "../../web.service";
import {Especie} from "../../model/especie";

@Component({
  selector: 'app-especies',
  templateUrl: './especies.component.html',
  styleUrls: ['./especies.component.scss']
})
export class EspeciesComponent implements OnInit {
  especies! :Especie[]
  modalEditar: boolean = false
  especieEditar!: Especie
  modalAdicionar!: boolean

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.web.getAllEspecies().subscribe((res)=>{
      if(res.ok){
        this.especies = res.body!
      }else{
        //TODO: show error
      }
    })
  }

  editarEspecie(especie: Especie){
    this.modalEditar = true
    this.especieEditar = especie
  }

  adicionarEspecie() {
    this.modalAdicionar = true
  }
}
