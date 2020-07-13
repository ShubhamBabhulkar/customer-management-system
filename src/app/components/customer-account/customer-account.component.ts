import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-account',
  templateUrl: './customer-account.component.html',
  styleUrls: ['./customer-account.component.scss']
})
export class CustomerAccountComponent implements OnInit {
  @Input('customerAccounts') customerAccounts;
  displayedColumns: any;

  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['billId', 'amount', 'billDt'];
  }

}
