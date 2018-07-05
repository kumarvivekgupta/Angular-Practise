import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../validation.form';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  forms: FormGroup;
  username = new FormControl(null, [ Validators.required]);
  password = new FormControl(null, [ Validators.required, CustomValidators.greaterLength(this.username)]);


  constructor() {
    this.forms = new FormGroup({
      username: this.username ,
      password: this.password,
    });
  }

  ngOnInit() {

  }

  login() {
    console.log(this.username);


  }
  signUp(){

  }

}
