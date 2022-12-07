import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
})
export class ProductItemComponent {
  @Input() product?: Product;
  constructor(private cartService: CartService) {}

  addToCart(): void {
    this.cartService.addToCart(this.product!);
  }
}
