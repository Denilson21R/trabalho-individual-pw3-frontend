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

  constructor(private web: WebService) { }

  ngOnInit(): void {
    this.web.getAllAnimals().subscribe((res)=>{
      if(res.ok){
        this.animals = res.body!
      }else{

      }
    })
  }

}
