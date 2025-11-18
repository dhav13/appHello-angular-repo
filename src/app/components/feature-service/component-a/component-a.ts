import { Component, inject, OnChanges, SimpleChanges } from '@angular/core';
import { MainService } from '../data-access/services/main-service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  styleUrl: './component-a.css',
})
export class ComponentA {
  #mainService = inject(MainService)
  componentAMsg: string = this.#mainService.dataMsg

  // constructor(mainService:MainService){
  // }

  updateService(){
    console.log("Component A trigger")
    this.#mainService.dataMsg = "Chaning Main service dataMsg from Component A"
    this.#mainService.calculationOfMarks("ComponentA")
  }
}
