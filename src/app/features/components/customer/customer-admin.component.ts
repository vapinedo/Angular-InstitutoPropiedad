import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';

import { Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { Customer } from 'src/app/shared/models/customer.model';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-customer-admin',
  templateUrl: './customer-admin.component.html',
  styleUrls: ['./styles.component.scss']
})
export class CustomerAdminComponent implements OnInit, OnDestroy {

  private subscription1 = new Subscription();
  private subscription2 = new Subscription();

  public dataSource: any;
  public showSpinner = false;
  public showProgressBar = false;

  displayColumns = ['name', 'lastname', 'email', 'gender', 'birthdate', 'category', 'id'];
  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatTable) table!: MatTable<any>;

  constructor(private customerSvc: CustomerService) { }

  ngOnInit(): void {
    this.showSpinner = true;

    this.subscription1 = this.customerSvc.getAll()
      .subscribe(reponse=> {
        this.showSpinner = false;
        this.dataSource = new MatTableDataSource(reponse);
        this.dataSource.paginator = this.paginator;
    });
  }

  onDeleteRow(customer: Customer) {
    this.showProgressBar = true;
    let dataSourceArr = this.dataSource.filteredData;
    const index = dataSourceArr.indexOf(customer, 0);

    this.subscription2 = this.customerSvc.delete(customer.id)
      .subscribe( response => {
        if (index > -1) { 
          this.showProgressBar = false;
          dataSourceArr.splice(index, 1);
          this.table.renderRows(); 
        }        
      });
  }

  onSearch(event: Event) {
    const queryString = (event.target as HTMLInputElement).value;
    this.dataSource.filter = queryString.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe()
  }

}