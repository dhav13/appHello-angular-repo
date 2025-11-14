import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule, RouterModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  #router = inject(Router);
  productId = 102
  redirectToProductDetails() {
    this.#router.navigate([`/product/product-details/${this.productId}`],{
      queryParams: { data: 'electronics' }
      }
    )
  }
}
