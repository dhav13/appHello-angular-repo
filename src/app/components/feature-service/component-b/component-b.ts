import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../data-access/services/main-service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.html',
  styleUrl: './component-b.css',
})
export class ComponentB implements OnInit {
  #mainBService = inject(MainService)
  componentBMsg: string = this.#mainBService.dataMsg
  valueOfBCounter = 0;
  // constructor(public mainService:MainService){
  // }

  ngOnInit(): void {
    this.listeningToSubject()
    //this.listeningToBehaviourSubject()
  }

  updateBService() {
    console.log("Component B trigger")
    this.#mainBService.dataMsg = "Changing Main service dataMsg from Component B"
    this.#mainBService.calculationOfMarks("ComponentB")
  }

  listeningToSubject() {
    this.#mainBService.counter.subscribe((value) => {
      //observer block
      console.log("Component B - Counter Value", value)
    })
  }

   listeningToBehaviourSubject() {
    this.#mainBService.counterBehaviour.subscribe((value) => {
      //observer block
      console.log("Component B - Behaviour Counter Value", value)
    })
  }

  updateToBehaviourBCounter(){
    this.#mainBService.counterBehaviour.next(this.valueOfBCounter + 1)
  }
}
