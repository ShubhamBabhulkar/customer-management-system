import { DashboardComponent } from './../dashboard/dashboard.component';
import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.scss']
})
export class CustDetailsComponent implements OnInit {
  @Input('customers') customers;
  displayedColumns: string[];
  dataSource: any;
  selectedCust: any;

  constructor(
    private dashboardComponent: DashboardComponent
  ) { }

  ngOnInit() {
    this.displayedColumns = ['custName', 'dob', 'custAge', 'action'];
    this.dataSource = this.customers;
    this.dashboardComponent.customerdetails(this.dataSource[0]);
    this.selectedCust = 0;
  }

  custDetails = (custDetails) => {
    this.selectedCust = this.dataSource.indexOf(custDetails);
    this.dashboardComponent.customerdetails(custDetails);
  }
}
