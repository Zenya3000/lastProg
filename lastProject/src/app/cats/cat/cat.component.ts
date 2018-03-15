
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IconsService } from './../../-service/icons.service';

@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.sass'],
  providers: [IconsService]
})
export class CatComponent implements OnInit {

  @Output() addCat = new EventEmitter();
  
  constructor(
    private is: IconsService
  ) {}

 icons;
 currentIcon;

  ngOnInit() {
    this.getIcons();
    this.currentIconValue();
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
    newCat.value = '';
  }

}
