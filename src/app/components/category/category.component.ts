import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/service/product/product.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
})
export class CategoryComponent implements OnInit {
  categories: string[] = [];
  checkBoxList: string[] = [];
  form: FormGroup;
  constructor(
    private product: ProductService,
    private formBuilder: FormBuilder
  ) {
    this.product.getCategories().subscribe((res) => {
      this.categories = res;
    });
    this.form = this.formBuilder.group({
      orders: [],
    });
  }

  ngOnInit(): void {}

  // function to listen to chechedbox and when there is no box checked return all products
  categoryChangeMethod(event: string): void {
  
    let index = this.checkBoxList.indexOf(event);
    if (index > -1) {
      this.checkBoxList.splice(index, 1);
      if (this.checkBoxList.length == 0) {
        this.product.searchKey.next('');
      }
    } else {
      this.checkBoxList.push(event);
    }
    console.log();
    console.log(event);
    this.product.categoryKey.next(event);
  }
}
