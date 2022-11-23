import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Animal} from "./model/animal";
import {Especie} from "./model/especie";

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseURL: string = "http://localhost:8080/api"

  constructor(private http: HttpClient) { }

  getAllAnimals(){
    return this.http.get<Animal[]>(this.baseURL+"/animals", {observe: "response"})
  }

  getAllEspecies(){
    return this.http.get<Especie[]>(this.baseURL+"/especies", {observe: "response"})
  }

  deletaAnimal(animal: Animal) {
    return this.http.delete<Animal>(this.baseURL+"/animal/"+animal.id, {observe: "response"})
  }

  updateAnimal(animal: Animal) {
    let animalData = new HttpParams()
    animalData = animalData.set("nome", animal.nome)
    animalData = animalData.set("observacao", animal.observacao!)
    animalData = animalData.set("descricao", animal.descricao)
    animalData = animalData.set("tamanho", this.converterParaIndexTamanho(animal.tamanho))
    return this.http.put<Animal>(this.baseURL+"/animal/"+animal.id, animalData, {observe: "response"})
  }

  updateEspecie(especie: Especie) {
    let especieData = new HttpParams()
    especieData = especieData.set("nome", especie.nome)
    especieData = especieData.set("status", this.converterParaIndexStatus(especie.status))
    especieData = especieData.set("descricao", especie.descricao)
    return this.http.put<Especie>(this.baseURL+"/especie/"+especie.id, especieData, {observe: "response"})
  }

  saveAnimal(animal: Animal){
    let animalData = new HttpParams()
    animalData = animalData.set("nome", animal.nome)
    animalData = animalData.set("descricao", animal.descricao)
    animalData = animalData.set("tamanho", this.converterParaIndexTamanho(animal.tamanho))
    if(animal.observacao != null){
      animalData = animalData.set("observacao", String(animal.observacao))
    }
    animalData = animalData.set("dono", animal.nome_dono)
    animalData = animalData.set("especie", String(animal.especie.id))
    return this.http.post<Animal>(this.baseURL+"/animal", animalData, {observe: "response"})
  }

  saveEspecie(especie: Especie) {
    let especieData = new HttpParams()
    especieData = especieData.set("nome", especie.nome)
    especieData = especieData.set("descricao", especie.descricao)
    return this.http.post<Especie>(this.baseURL+"/especie", especieData, {observe: "response"})
  }

  private converterParaIndexStatus(status: string) {
    if(status == "INATIVO"){
      return "1"
    }else{
      return "0"
    }
  }

  private converterParaIndexTamanho(tamanho: string) {
    switch (tamanho) {
      case "MUITO_PEQUENO":
        return "0"
      case "PEQUENO":
        return "1"
      case "MEDIO":
        return "2"
      case "GRANDE":
        return "3"
      case "MUITO_GRANDE":
        return "4"
      default:
        return "2"
    }
  }
}
