import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from 'src/app/model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productList: Product[] = [];
  public searchKey = new BehaviorSubject<string>('');
  public categoryKey = new BehaviorSubject<string>('');

  constructor(private http: HttpClient) {}

  getProductList(): Product[] {
    this.http.get<any>('https://dummyjson.com/products').subscribe((res)=>{
      this.productList = res['products'];
    });

    return this.productList;
  }
  getProducts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  getCategories(): Observable<any> {
    return this.http.get('https://dummyjson.com/products/categories');
  }
  searchByProduct(name: string): Observable<any> {
    return this.http.get(`https://dummyjson.com/products/search?q=${name}`);
  }
  getProductByCategory(name:string): Observable<any>{
    return this.http.get(`https://dummyjson.com/products/category/${name}`);

  }
}
