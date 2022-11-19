import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Animal} from "./model/animal";
import {Especie} from "./model/especie";

@Injectable({
  providedIn: 'root'
})
export class WebService {
  baseURL: string = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getAllAnimals(){
    return this.http.get<Animal[]>(this.baseURL+"/api/animals", {observe: "response"})
  }

  getAllEspecies(){
    return this.http.get<Especie[]>(this.baseURL+"/api/especies", {observe: "response"})
  }
}
