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
    });
  }

  get name() { return this.form.get('name'); }
  get lastname() { return this.form.get('lastname'); }
  get email() { return this.form.get('email'); }

  onSubmit() {
    if ( this.form.valid ) {
      const { name } = this.form.value;
      console.log(true)
    }
    return;
  }

  ngOnInit(): void {
  }

}
