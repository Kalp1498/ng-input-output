import { Component, OnInit, Input } from '@angular/core';
import { IProducts } from '../../models/products-interface';

@Component({
  selector: 'app-stockstatus',
  templateUrl: './stockstatus.component.html',
  styleUrls: ['./stockstatus.component.css']
})
export class StockstatusComponent implements OnInit {

  constructor() { }

  @Input() productDetails : IProducts[];

  ngOnInit() {
    
  }

}
