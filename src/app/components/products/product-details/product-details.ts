import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css',
})
export class ProductDetails implements OnInit {
   #activatedRoute = inject(ActivatedRoute);

    ngOnInit() {
      this.#activatedRoute.params.subscribe(res => {
        console.log(res)
      })
      this.#activatedRoute.queryParams.subscribe(res => {
        console.log(res)
      })
    console.log(this.#activatedRoute);
   }
}
