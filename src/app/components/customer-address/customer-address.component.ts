import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit {
  @Input('customerAddress') customerAddress;

  constructor() { }

  ngOnInit() {
  }

}
