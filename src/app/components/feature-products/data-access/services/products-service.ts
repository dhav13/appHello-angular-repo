import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { filter, map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  #httpClient = inject(HttpClient)

  observable = new Observable(function subscribe(subscriber) {
    // Observable code: Which receive values from Network Layer APIs or from any other component 
    // Observable Block
    const id = setInterval(() => {
      subscriber.next('hi');
    }, 1000);
  });

  getProductList() {
    return this.#httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .pipe(
        tap(() => console.log('Started')),
        map(res => {
          const filterData = res.filter(item => item.id % 2 === 0);
          console.log('FILTER DATA =>', filterData);
          return filterData; // return the filtered array
        }),
        tap(response => console.log('Ended:', response))
      );
  }
}