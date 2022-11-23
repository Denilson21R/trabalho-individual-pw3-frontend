import { Component, OnInit } from '@angular/core';
import {WebService} from "../../web.service";
import {Animal} from "../../model/animal";

@Component({
  selector: 'app-animais',
  templateUrl: './animais.component.html',
  styleUrls: ['./animais.component.scss']
})
export class AnimaisComponent implements OnInit {
  animals!: Animal[]
  animalDetalhar!: Animal
  animalEditar!: Animal

  modalDetalhar: boolean = false
  modalEditar: boolean = false
  modalAdicionar!: boolean
  alertErroDeletar: boolean = false
  alertSucessoDeletar: boolean = false
  alertErroAdicionar: boolean = false;
  alertSucessoAdicionar: boolean = false;
  alertSucessoAtualizar: boolean = false;
  alertErroAtualizar: boolean = false;

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.getAnimals();
  }

  private getAnimals() {
    this.web.getAllAnimals().subscribe((res) => {
      if (res.ok) {
        this.animals = res.body!
      }
    })
  }

  deletaAnimal(animalDelete: Animal) {
    this.web.deletaAnimal(animalDelete).subscribe((res)=>{
      if(res.ok){
        this.removeAnimalByArrayIndex(animalDelete);
        this.alertSucessoDeletar = true
      }
    })
  }

  private removeAnimalByArrayIndex(animalDelete: Animal) {
    let index = this.animals.indexOf(animalDelete)
    if (index > -1) {
      this.animals.splice(index, 1)
    }
  }

  detalharAnimal(animal: Animal) {
    this.modalDetalhar = true
    this.animalDetalhar = animal
  }

  editarAnimal(animal: Animal){
    this.modalEditar = true
    this.animalEditar = animal
  }

  adicionarAnimal(){
    this.modalAdicionar = true
  }

  updateAnimals() {
    this.getAnimals();
  }

  retirarUnderscore(tamanho: string) {
    return tamanho.replace("_", " ")
  }
}
