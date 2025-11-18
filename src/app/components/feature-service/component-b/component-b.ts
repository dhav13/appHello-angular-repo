import { Component, inject } from '@angular/core';
import { MainService } from '../data-access/services/main-service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.html',
  styleUrl: './component-b.css',
})
export class ComponentB {
  #mainBService = inject(MainService)
  componentBMsg: string = this.#mainBService.dataMsg
  

  updateBService(){
    console.log("Component B trigger")
    this.#mainBService.dataMsg = "Changing Main service dataMsg from Component B"
    this.#mainBService.calculationOfMarks("ComponentB")
  }

  // constructor(public mainService:MainService){
  // }
}
