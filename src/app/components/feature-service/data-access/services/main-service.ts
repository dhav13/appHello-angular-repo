import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  dataMsg:string = 'Msg from Main Service'

  calculationOfMarks(component : string){
    console.log("This was triggered by ", component)
  }
}
