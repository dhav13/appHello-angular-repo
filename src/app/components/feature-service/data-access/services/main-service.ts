import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  dataMsg:string = 'Msg from Main Service'
  counter = new Subject<number>();
  counterBehaviour = new BehaviorSubject<number>(5)

  calculationOfMarks(component : string){
    console.log("This was triggered by ", component)
  }
}
