import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IProductDetails } from '../ProductDetailsInterface';
import { ProductDetailService } from '../product-details/product-details.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  @Input() productLists: IProductDetails[];
  @Input() productList: IProductDetails;

  ngOnInit() {
    
  }

  deleteProduct(event) {
    if (confirm('Are you sure you want to delete this product')) {
      let index = this.productLists.indexOf(this.productList);
      this.productLists.splice(index, 1);
      this.productLists.map((item, index) => {
        return item.id = index + 1;
      })
      let a = new ProductDetailService
      console.log(a.getProductDetails())
    }
  }

}
