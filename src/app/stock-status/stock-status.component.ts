import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-stock-status',
  templateUrl: './stock-status.component.html',
  styleUrls: ['./stock-status.component.css']
})
export class StockStatusComponent implements OnInit {

  @Input() productDetails: IProductDetails;

  productStock:number;

  constructor() { }

  ngOnInit() {
    
  }

}
