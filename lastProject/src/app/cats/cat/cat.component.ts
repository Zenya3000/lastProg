import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.sass']
})
export class CatComponent implements OnInit {

  @Output() addCat = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  addCategory(newCat){
    this.addCat.emit(newCat.value);
    newCat.value = '';
  }
}
