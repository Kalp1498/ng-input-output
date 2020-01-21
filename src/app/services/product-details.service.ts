import { Injectable } from '@angular/core';
import { IProducts } from '../models/products-interface'

@Injectable()
export class ProductDetailService {
    productLists: IProducts[] = [
        {id: 1, title: "Mi A1", price:10000, stock:15},
        {id: 2, title: "Mi A2", price:20000, stock:22},
        {id: 3, title: "Mi A3", price:30000, stock:8},
        {id: 4, title: "Mi A4", price:40000, stock:42},
        {id: 5, title: "Mi A5", price:50000, stock:5},
        {id: 6, title: "Mi A6", price:60000, stock:19}
    ];

    addData(abc){
        this.productLists.push(abc);
    }
}