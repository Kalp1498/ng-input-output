import { Component, OnInit, EventEmitter, Output, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  productLists: IProductDetails[] = [];
  filteredProdcuts: IProductDetails[] = [];
  price: number;

  @Output() productToMaster = new EventEmitter<IProductDetails[]>();
  @Input() title: string;
  @Output() errorMsgToParent = new EventEmitter<String>();

  constructor() { }

  ngOnChanges() {
    this.filteredProdcuts = this.productLists.filter(item => {
      if (item.title.toLowerCase().includes(this.title.toLowerCase()))
      return item;
    });
    if (this.title == undefined || this.title == "") {
      this.sendProductToMaster(this.productLists);
      this.errorMsgToParent.emit("");
    } else if (this.filteredProdcuts.length == 0 && this.title != "") {
      this.errorMsgToParent.emit("Oops! no data found.")
      this.sendProductToMaster(this.filteredProdcuts);
    } else {
      this.sendProductToMaster(this.filteredProdcuts);
      this.errorMsgToParent.emit("");
    }
  }

  ngOnInit() {
    this.productLists = [
      {id: 1, title: "Mi A1", price:10000, stock:15},
      {id: 2, title: "Mi A2", price:20000, stock:22},
      {id: 3, title: "Mi A3", price:30000, stock:8},
      {id: 4, title: "Mi A4", price:40000, stock:42},
      {id: 5, title: "Mi A5", price:50000, stock:5},
      {id: 6, title: "Mi A6", price:60000, stock:19},
    ]

    // this.products = this.products.map(item => Object.assign({}, item, { totalPrice : item.price * item.stock}))
    this.sendProductToMaster(this.productLists);
  }

  sendProductToMaster(products: IProductDetails[]) {
    this.productToMaster.emit(products);
  }

}
