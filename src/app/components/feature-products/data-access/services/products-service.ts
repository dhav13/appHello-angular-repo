import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  observable = new Observable(function subscribe(subscriber) {
    // Observable code: Which receive values from Network Layer APIs or from any other component 
    // Observable Block
    const id = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
  });
}
