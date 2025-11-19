import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MainService } from '../data-access/services/main-service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  styleUrl: './component-a.css',
})
export class ComponentA implements OnInit {
  #mainService = inject(MainService)
  componentAMsg: string = this.#mainService.dataMsg
  valueOfCounter = 0;
  
  // constructor(mainService:MainService){
  // }

  ngOnInit(): void {
    this.listeningToSubject()
  }
  
  updateService(){
    console.log("Component A trigger")
    this.#mainService.dataMsg = "Chaning Main service dataMsg from Component A"
    this.#mainService.calculationOfMarks("ComponentA")
  }

  updateCounter(){
    this.#mainService.counter.next(this.valueOfCounter + 1)
  }

  listeningToSubject(){
     this.#mainService.counter.subscribe((value) => {
      this.valueOfCounter = value
      //observer block
      console.log("Component A - Counter Value", value)
    })
  }
}
