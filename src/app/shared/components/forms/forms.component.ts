import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  public form: FormGroup;
  readonly NAME_MINLENGTH = 6;
  readonly NAME_MAXLENGTH = 20;
  customerCategory = [
    {value: 'starter', viewValue: 'Principiante'},
    {value: 'bronze', viewValue: 'Bronce'},
    {value: 'silver', viewValue: 'Plata'},
    {value: 'gold', viewValue: 'Oro'},
    {value: 'platinum', viewValue: 'Platino'}
  ];
  readonly VALID_EMAIL_STRING = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

  constructor(
    private fb: FormBuilder
  ) { 
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(this.NAME_MINLENGTH),
        Validators.maxLength(this.NAME_MAXLENGTH)
      ]],
      lastname: ['', [
        Validators.required
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern(this.VALID_EMAIL_STRING)
      ]],
      birthdate: ['', [
        Validators.required
      ]],
      gender: ['', [
        Validators.required
      ]],
      terms: [false, [
        Validators.requiredTrue
      ]],
      category: ['', [
        Validators.required
      ]]      
    });
  }

  get name() { return this.form.get('name'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }
  get birthdate() { return this.form.get('birthdate'); }
  get gender() { return this.form.get('gender'); }
  get terms() { return this.form.get('terms'); }
  get category() { return this.form.get('category'); }

  onSubmit() {
    if ( this.form.valid ) {
      const { name } = this.form.value;
      console.log(true)
    }
    return;
  }

  ngOnInit(): void {
  }

  onSetdate(event: any) {
    const { date } = event.value.toLocaleDateString(); 
  }

}
