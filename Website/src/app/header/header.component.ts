import {Component, ElementRef, OnInit, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  myValue: string;
  searchbar: FormControl;
  formGroup: FormGroup;
  @ViewChild('search') search: ElementRef;


  constructor() {
    this.searchbar = new FormControl();
    this.formGroup = new FormGroup({
      'searchbar': this.searchbar
  });
    this.searchbar.valueChanges.
      subscribe(v => this.myValue = v);

  }

  ngOnInit() {


  }



}
