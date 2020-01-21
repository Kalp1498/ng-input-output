import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IProductDetails } from '../ProductDetailsInterface';
import { ProductDetailService } from './product-details.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
  providers: [ProductDetailService]
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  productLists: IProductDetails[] = [];
  filteredProdcuts: IProductDetails[] = [];

  @Input() title: string;
  @Output() productListsToMaster = new EventEmitter<IProductDetails[]>();
  @Output() errorMsgToParent = new EventEmitter<String>();

  constructor(private productService: ProductDetailService) { }

  ngOnChanges() {
    // this.filteredProdcuts = this.productLists.filter(item => {
    //   if (item.title.toLowerCase().includes(this.title.toLowerCase()))
    //   return item;
    // });
    // if (this.title == undefined) {
    //   this.errorMsgToParent.emit("")
    // }
    // else if (this.filteredProdcuts.length == 0 && this.title != "") {
    //   this.errorMsgToParent.emit("Oops! no data found.")
    //   this.productListsToMaster.emit(this.filteredProdcuts);
    // } else {
    //   this.productListsToMaster.emit(this.filteredProdcuts);
    //   this.errorMsgToParent.emit("");
    // }
  }

  ngOnInit() {
    
  }

}

// if (this.title == undefined || this.title == "") {
//   this.productListsToMaster.emit(this.productService.getProductDetails());
//   this.errorMsgToParent.emit("");
// } else if (this.filteredProdcuts.length == 0 && this.title != "") {
//   this.errorMsgToParent.emit("Oops! no data found.")
//   this.productListsToMaster.emit(this.filteredProdcuts);
// } else {
//   this.productListsToMaster.emit(this.filteredProdcuts);
//   this.errorMsgToParent.emit("");
// }
