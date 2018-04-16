

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconsService } from './../../-service/icons.service';
import { CatsService } from './../../-service/cats.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.sass'],
  providers: [IconsService, CatsService]
})
export class CatComponent implements OnInit {
  complexForm : FormGroup;
  @Output() addCat = new EventEmitter();
  @Input() type;
  constructor(
    private is: IconsService,
    private fb: FormBuilder,
    private cs: CatsService,
    public dialog: MatDialog
  ) {}

 icons;
 currentIcon;

  ngOnInit() {
    this.getIcons();
    this.currentIconValue();
    this.complexForm = this.fb.group({
      'cat' : [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20)])],
    }) 
  }
  currentIconValue(){
    this.currentIcon = this.is.getCurrentIcon();
  }
  changeVal(url){
    this.currentIcon = "";
    this.currentIcon = url;
  }
  getIcons(){
    this.icons = this.is.getIcons();
  }
  addCategory(newCat){
    let data = {
      value: newCat.value,
      icon: this.currentIcon
    }
    this.addCat.emit(data);
  }
  submitForm(value: any){
    let data = {
      value: value.cat,
      icon: this.currentIcon
    }
    this.addCat.emit(data);
    this.complexForm.reset();

  }
  mobile_submit_form(value: any){
    // console.log('type', this.type)
    let data = {
      cat: value.cat,
      type: this.type,
      icon: this.currentIcon
    }
    // console.log("1", data)
    this.cs.addCat(data);
    this.dialog.closeAll();
  }
  onNoClick(): void {
    this.dialog.closeAll();
  }

}
