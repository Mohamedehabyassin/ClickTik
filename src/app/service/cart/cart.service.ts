import { Injectable } from '@angular/core';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartProducts: Product[] = [];
  constructor() {}

  //TODO: add to cart method
  addToCart(product: Product): void {
    //TODO: check product
    const index = this.cartProducts.findIndex((obj) => obj.id === product.id);
    if (index > -1) {
      //TODO: Implement Product Quantity
      alert(`${product.title} Already in Cart`);

    } else {
      this.cartProducts.push(product);
      alert(`${product.title} Added to Cart`);
    }
  }

  //TODO: get cart method
  getCart(): Product[] {
    return this.cartProducts;
  }

  //TODO: delete from cart method
  removeFromCart(product: Product): void {
    this.cartProducts = this.cartProducts.filter((obj) => obj !== product);
    alert(`${product.title} Deleted to Cart`);
  }
}
