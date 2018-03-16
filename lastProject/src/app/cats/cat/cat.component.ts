
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconsService } from './../../-service/icons.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.sass'],
  providers: [IconsService]
})
export class CatComponent implements OnInit {
  complexForm : FormGroup;
  @Output() addCat = new EventEmitter();
  
  constructor(
    private is: IconsService,
    private fb: FormBuilder
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
    console.log('123', data)
    this.addCat.emit(data);
    this.complexForm.reset();

  }

}
