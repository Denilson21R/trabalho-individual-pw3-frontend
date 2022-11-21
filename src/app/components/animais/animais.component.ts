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
  modalDetalhar: boolean = false
  modalEditar: boolean = false
  animalDetalhar!: Animal
  animalEditar!: Animal
  modalAdicionar!: boolean

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.web.getAllAnimals().subscribe((res)=>{
      if(res.ok){
        this.animals = res.body!
      }else{
        //TODO: show error
      }
    })
  }

  deletaAnimal(animalDelete: Animal) {
    this.web.deletaAnimal(animalDelete).subscribe((res)=>{
      if(res.ok){
        this.removeAnimalByArrayIndex(animalDelete);
        //TODO: show success
      }else{
        //TODO: show error
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
}
