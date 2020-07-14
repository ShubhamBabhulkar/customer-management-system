import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-cust-details',
  templateUrl: './cust-details.component.html',
  styleUrls: ['./cust-details.component.scss']
})
export class CustDetailsComponent implements OnInit {
  @Input('customers') customers;
  @Output() custDetail = new EventEmitter<object>();

  displayedColumns: string[];
  dataSource: any;
  selectedCust: any;
  counter: any = 0;
  columnsToDisplay: string[];
  constructor() { }

  ngOnInit() {
    this.displayedColumns = ['custName', 'dob', 'custAge'];
    this.columnsToDisplay = this.displayedColumns.slice();
    this.dataSource = this.customers;
    this.custDetail.emit(this.dataSource[0]);
    this.selectedCust = 0;
  }

  custDetails = (custDetails) => {
    this.selectedCust = this.dataSource.indexOf(custDetails);
    this.custDetail.emit(custDetails);
  }

  toggleColuman = (colName, colIndex) => {
    const index = this.columnsToDisplay.indexOf(colName);
    if (index > -1) {
      this.columnsToDisplay.splice(index, 1);
    } else {
      this.columnsToDisplay.splice(colIndex, 0, colName);
    }
  }
}
