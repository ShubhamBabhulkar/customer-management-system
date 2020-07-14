import { CustomerService } from './../../service/customer.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  customer: any;
  customerAddress: any;
  customerDetail: any;
  customerAccounts: any;
  constructor(
    private customerService: CustomerService
  ) { }

  ngOnInit() {
    this.fetchAllCustomers();
  }

  fetchAllCustomers = () => {
    this.customer = this.customerService.getCustomer();
  }

  customerdetails = (data) => {
    this.customerAddress = data.custAddress;
    this.customerDetail = data;
    this.customerAccounts = data.custAccounts;
  }
}
