import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { CartService } from 'src/app/service/cart/cart.service';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  searchKey: string = '';
  page = 1;
  constructor(
    private productService: ProductService,
    private cartService: CartService
  ) {
    this.productService.getProducts().subscribe((res) => {
      this.productList = res['products'];
    });
  }

  ngOnInit(): void {
    this.productService.searchKey.subscribe((value) => {
      this.productService.searchByProduct(value).subscribe((res) => {
        console.log(value);
        if (value === '') {
          this.productService.getProducts().subscribe((res) => {
            this.productList = res['products'];
          });
        }
        this.productList = res['products'];
      });
    });

    this.productService.categoryKey.subscribe((value) => {
      this.productService.getProductByCategory(value).subscribe((res) => {
        if (value === '') {
          this.productService.getProducts().subscribe((res) => {
            this.productList = res['products'];
          });
        }
        this.productList = res['products'];
      });
    });
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
  }

  handlePageChange(event: any): void {
    this.page = event;
  }
}
