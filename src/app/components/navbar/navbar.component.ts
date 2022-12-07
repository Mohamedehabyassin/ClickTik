import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  searchWord?: string;
  constructor(private product: ProductService) {}

  searchMethod(event: any): void {
    this.searchWord = (event.target as HTMLInputElement).value;
    this.product.searchKey.next(this.searchWord);
  }
}
