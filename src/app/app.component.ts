import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgSwitchCase } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  products: IProductDetails[] = [];
  stockStatus: number;
  errorMsg: string;

  orderByArray = [];
  buttonTitle = [];

  ngOnInit() {
    this.orderByArray = ['idh2l', 'idl2h', 
                         'titleh2l', 'titlel2h', 
                         'priceh2l', 'pricel2h', 
                         'stockh2l', 'stockl2h', 
                         'totalh2l', 'totall2h'
                        ];

    this.buttonTitle = ['ID : High to Low', 'ID : Low to High',
                        'Title : High to Low', 'Title : Low to High',
                        'Price : High to Low', 'Price : Low to High',
                        'Stock : High to Low', 'Stock : Low to High',
                        'Total : High to Low', 'Total : Low to High'
                        ];
  }

  getProductFromProd(products: IProductDetails[]) {
    this.products = products;
  }

  getErrorMsgFromParent(errorMsg: string) {
    this.errorMsg = errorMsg;
  }

  deleteProductFromID(id: number) {
    let item = this.products.find(item => item.id == id)
    this.products.splice(this.products.indexOf(item), 1)
  }

  reorder(event, orderBy: string) {
    this.products.sort((a,b) => {
      switch (orderBy) {
        case 'idh2l':
          return b.id - a.id;
          break;
        case 'idl2h':
          return a.id - b.id;
          break;
        case 'titleh2l':
          return b.title.localeCompare(a.title);
          break;
        case 'titlel2h':
          return a.title.localeCompare(b.title);
          break;
        case 'priceh2l':
          return b.price - a.price;
          break;
        case 'pricel2h':
          return a.price - b.price;
          break;
        case 'stockh2l':
          return b.stock - a.stock;
          break;
        case 'stockl2h':
          return a.stock - b.stock;
          break;
        case 'totalh2l':
          return (b.price * b.stock) - (a.price * a.stock);
          break;
        case 'totall2h':
          return (a.price * a.stock) - (b.price * b.stock);
          break;
      }
    })
  }
}
