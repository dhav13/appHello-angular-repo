import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  dataMsg:string = 'Msg from Main Service'
  counter = new Subject<number>();

  calculationOfMarks(component : string){
    console.log("This was triggered by ", component)
  }
}
