import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from '../../models/products-interface';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductDetailService } from '../../services/product-details.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})

export class AddproductComponent implements OnInit {

  title: string;
  price: number;
  stock: number;

  @Input() productLists: IProducts[];
  productList: IProducts;

  showHide: boolean;

  addProductDetails = new FormGroup({
    title: new FormControl('' ,Validators.required),
    price: new FormControl(1 ,Validators.required),
    stock: new FormControl(1 ,Validators.required)
  })

  constructor(public productService: ProductDetailService) { }

  ngOnInit() {
    this.title = "";
    this.price = 0;
    this.price = 0;
    this.showHide = false;
  }

  showForm(event) {
    this.showHide = true;
  }

  addProduct(addProd: NgForm) {
    let id = this.productLists.length + 1;
    this.title = addProd.controls['title'].value;
    this.price = addProd.controls['price'].value;
    this.stock = addProd.controls['stock'].value;

    this.productList = {id: id, title: this.title, price: this.price, stock: this.stock}
    this.productLists.push(this.productList);

    this.addProductDetails.reset();

    this.productService.addData(this.productList);
    ''
    this.addProductDetails.patchValue ({
      title: '',
      price: 1,
      stock: 1
    })


  }
  
  hideForm(event) {
    this.showHide = false;
  }

}
