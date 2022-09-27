import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  exform: FormGroup | any;

  ngOnInit() {

  this.exform = new FormGroup({
    name : new FormControl(
      '',
    [ Validators.required,
      Validators.pattern("^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$")
    ]),
    email : new FormControl('', [Validators.required, Validators.email]),
    phone : new FormControl(
      '',
      [
        Validators.required,
        Validators.maxLength(10),
        Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")
      ]),
    message : new FormControl('', [Validators.required, Validators.minLength(10)])
  });
  }

  clicksub() {
    console.log(this.exform.value);
    this.exform.reset();
  }
  get name() {
    return this.exform.get('name');
  }
  get email() {
    return this.exform.get('email');
  }
  get phone() {
    return this.exform.get('phone');
  }
  get message() {
    return this.exform.get('message');
  }

}