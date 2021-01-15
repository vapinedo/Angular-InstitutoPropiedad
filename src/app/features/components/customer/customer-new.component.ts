import { Component, OnDestroy, OnInit } from '@angular/core';

import { v4 as uuidv4} from 'uuid';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/shared/models/customer.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/core/services/customer.service';

@Component({
  selector: 'app-customer-new',
  templateUrl: './customer-new.component.html',
  styleUrls: ['./styles.component.scss']
})
export class CustomerNewComponent implements OnInit, OnDestroy {

  public customerForm: FormGroup;
  public customer = new Customer();
  private subscription1 = new Subscription();

  readonly NAME_MINLENGTH = 6;
  readonly NAME_MAXLENGTH = 20;
  readonly FIREBASE_COLLECTION = 'customers';
  readonly VALID_EMAIL_STRING = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  public customerCategory = [
    {value: 'Principiante', viewValue: 'Principiante'},
    {value: 'Bronce', viewValue: 'Bronce'},
    {value: 'Plata', viewValue: 'Plata'},
    {value: 'Oro', viewValue: 'Oro'},
    {value: 'Platino', viewValue: 'Platino'}
  ];

  constructor(
    private fb: FormBuilder,
    private customerSvc: CustomerService
  ) { 
    this.customerForm = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(this.NAME_MINLENGTH),
        Validators.maxLength(this.NAME_MAXLENGTH)
      ]],
      lastname: ['', [ Validators.required ]],
      email: ['', [ 
        Validators.required, 
        Validators.pattern(this.VALID_EMAIL_STRING) ]],
      birthdate: ['', [ Validators.required ]],
      gender: ['', [ Validators.required ]],
      agreeTerms: [false, [ Validators.requiredTrue ]],
      category: ['', [ Validators.required ]]      
    });
  }

  get name() { return this.customerForm.get('name'); }
  get lastname() { return this.customerForm.get('lastname'); }
  get email() { return this.customerForm.get('email'); }
  get birthdate() { return this.customerForm.get('birthdate'); }
  get gender() { return this.customerForm.get('gender'); }
  get agreeTerms() { return this.customerForm.get('agreeTerms'); }
  get category() { return this.customerForm.get('category'); }

  ngOnInit(): void {
  }

  onSubmit() {
    if ( this.customerForm.valid ) {
      
      const id = uuidv4();
      this.customer = { id, ...this.customerForm.value };
      this.customer.birthdate = this.customerForm.value.birthdate.getTime();

      this.subscription1 = this.customerSvc.create(this.customer)
        .subscribe(response => {
          console.log(response)
        })
    }
    return;
  }

  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }

}
