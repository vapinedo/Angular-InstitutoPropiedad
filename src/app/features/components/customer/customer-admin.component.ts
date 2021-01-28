import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';


import { Subscription } from 'rxjs';
import { SelectionModel } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { Customer } from 'src/app/core/models/customer.model';
import { DialogService } from 'src/app/core/services/dialog.service';
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

  @ViewChild(MatPaginator) paginator: any;
  @ViewChild(MatTable) table!: MatTable<any>;
  selection = new SelectionModel<Customer>(true, []);
  displayColumns = ['select', 'name', 'lastname', 'email', 'gender', 'birthdate', 'category', 'id'];

  constructor(
    private dialogSvc: DialogService,
    private customerSvc: CustomerService
  ) { }

  ngOnInit(): void {
    this.showSpinner = true;

    this.subscription1 = this.customerSvc.getAll()
      .subscribe({
        next: data => {
          this.dataSource = new MatTableDataSource(data);
          this.dataSource.paginator = this.paginator;
        },
        error: err => this.dialogSvc.error(err),
        complete: () => this.showSpinner = false
      });
  }

  onDeleteRow(customer: Customer): void {
    this.showProgressBar = true;
    let dataSourceArr = this.dataSource.filteredData;
    const index = dataSourceArr.indexOf(customer, 0);

    this.subscription2 = this.customerSvc.delete(customer.id)
      .subscribe({
        next: data => {
          if (index > -1) { 
            dataSourceArr.splice(index, 1);
            this.table.renderRows(); 
          }        
        },
        error: err => this.dialogSvc.error(err),
        complete: () => this.showProgressBar = false
      });
  }

  onSearch(event: Event): void {
    const queryString = (event.target as HTMLInputElement).value;
    this.dataSource.filter = queryString.trim().toLowerCase();
  }

   isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  masterToggle(): void {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  checkboxLabel(row?: Customer) {
    // console.log(row)
    // if (!row) {
    //   return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    // }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
    this.subscription2.unsubscribe()
  }

}