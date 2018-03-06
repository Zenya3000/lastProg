import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.sass']
})
export class SwitcherComponent implements OnInit {
  @Input() type;
  @Input() types;
  @Output() changeType = new EventEmitter
  
  constructor() { }

  ngOnInit() {
  }

  switch(type){
    this.changeType.emit(type);
  }

}
