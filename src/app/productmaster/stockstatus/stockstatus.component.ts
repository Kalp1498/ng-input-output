import { Component, OnInit, Input } from '@angular/core';
import { IProductDetails } from '../ProductDetailsInterface';

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.css']
})
export class StockstatusComponent implements OnInit {

  constructor() { }

  @Input() productDetails : IProductDetails[];

  ngOnInit() {
    
  }

}
