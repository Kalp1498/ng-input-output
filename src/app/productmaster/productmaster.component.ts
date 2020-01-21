import { Component, OnInit, Output } from '@angular/core';
import { IProductDetails } from './ProductDetailsInterface';
import { ProductDetailService } from '../productmaster/product-details/product-details.service';

@Component({
  selector: 'app-productmaster',
  templateUrl: './productmaster.component.html',
  styleUrls: ['./productmaster.component.css'],
  providers: [ProductDetailService]
  
})
export class ProductmasterComponent implements OnInit {

  constructor(private productListsService: ProductDetailService) { }

  productLists: IProductDetails[];

  errorMsg: string;
  loginSuccess: boolean;

  ngOnInit() {
    this.loginSuccess = false;
  }

  getProductLists(productLists: IProductDetails[]) {
    // this.productListsService.productLists = productLists
  }

  getTotalPrice() {
    let total: number = 0;
    this.productListsService.productLists.forEach(element => {
      total += element.price;
    });
    return total;
  }

  getTotalStock() {
    let totalStock: number = 0;
    this.productListsService.productLists.forEach(element => {
      totalStock += element.stock;
    });
    return totalStock;
  }

  getTotalOfTotalPrices() {
    let totalPrice: number = 0;
    this.productListsService.productLists.forEach(element => {
      totalPrice += (element.price * element.stock);
    });
    return totalPrice;
  }

  // getErrorMsgFromMaster(errorMsg: string) {
  //   this.errorMsg = errorMsg;
  // }

  getLoginStatus(success: boolean) {
    this.loginSuccess = success;
  }
}
