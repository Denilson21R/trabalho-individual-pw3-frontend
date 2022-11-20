import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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
}
