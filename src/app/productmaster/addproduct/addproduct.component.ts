import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  @Input() productLists: IProductDetails[] = [];

  title: string = "";
  price: number = 0;
  stock: number = 0;

  errorMsg: string = "";
  newProduct: IProductDetails;

  public showHide: boolean = false;

  ngOnInit() {
    console.log(this.productLists)
  }

  showForm(event) {
    this.showHide = true;
  }

  addProduct(event) {
    if (this.title == "") {
      this.errorMsg = 'Please enter title';
    } if (this.price < 0) {
        if (this.errorMsg == "") {
          this.errorMsg = "Please enter price greater than 0";
        } else {
          this.errorMsg += ", price > 0";
        }
    } if (this.price == null) {
        this.price = 0;
    } if (this.stock < 0) {
        if (this.errorMsg == "") {
          this.errorMsg = "Please enter stock greater than 0";
        } else {
          this.errorMsg += ", stock > 0";
        }
    } if (this.stock == null) {
      this.stock = 0;
    }

    if (this.errorMsg != "") {
      alert(this.errorMsg);
    } else {
      this.newProduct = {id: this.productLists.length + 1, title: this.title, price: this.price, stock: this.stock}
      this.productLists.push(this.newProduct);
      this.showHide = false;
      this.title = "";
      this.price = 0;
      this.stock = 0;
    }

  }
  
  hideForm(event) {
    this.showHide = false;
  }



}
