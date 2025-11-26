import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ProductsService } from '../data-access/services/products-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products-list',
  imports: [],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList implements OnInit, OnDestroy {
  #productService = inject(ProductsService)
  subscriptionValue!: Subscription;
  ngOnInit() {
  // this.subscriptionValue = this.#productService.observable.subscribe((x) => {
  //     // Observer Block 
  //     console.log(x)
  //   });
  this.getAllPosts();
  }
  ngOnDestroy() {
    this.subscriptionValue.unsubscribe()
  }

  getAllPosts(){
    this.#productService.getProductList().subscribe((response:any)=>{
      console.log("Get All Post Fake API ", response)
    })
  }

}
