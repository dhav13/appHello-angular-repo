import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  counter = signal<number>(1);
  counterMulBy10 = computed(() => {
    const variableCounterToCalculate = this.counter()
    return variableCounterToCalculate * 10;
  })
}