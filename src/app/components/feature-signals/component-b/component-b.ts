import { Component, inject, OnInit } from '@angular/core';
import { MainService } from '../data-access/services/main-service';

@Component({
  selector: 'app-component-b',
  imports: [],
  templateUrl: './component-b.html',
  styleUrl: './component-b.css',
})
export class ComponentB  {
  #mainService = inject(MainService)
  counterSignal = this.#mainService.counter
  
  updateFromSignalCounterB(){
    this.#mainService.counter.set(this.counterSignal() + 1)
  }
}
