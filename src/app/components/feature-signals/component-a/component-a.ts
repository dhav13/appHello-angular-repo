import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MainService } from '../data-access/services/main-service';

@Component({
  selector: 'app-component-a',
  imports: [],
  templateUrl: './component-a.html',
  styleUrl: './component-a.css',
})
export class ComponentA {
  #mainService = inject(MainService)
  counterSignal = this.#mainService.counter
  computedCounterMulBy10 = this.#mainService.counterMulBy10
//counterSignal = this.#mainService.counter() <--- this is a mistake, not make it

  updateFromSignalCounterA(){
    this.#mainService.counter.set(this.counterSignal() + 1)
  }
}
