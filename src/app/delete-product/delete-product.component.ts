import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  @Input() btnID: number;
  @Output() productIDtoDelete = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteProduct(event) {
    this.productIDtoDelete.emit(event.target.id);
  }

}
