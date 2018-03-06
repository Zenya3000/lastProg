import { Component, OnInit } from '@angular/core';
import { TypesService } from '../-service/types.service';

@Component({
  selector: 'dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.sass'],
  providers: [TypesService]
})
export class DashComponent implements OnInit {
  types;
  currentType;



  constructor(
    private ts: TypesService
  ) { }

  ngOnInit() {
    this.getTypes();
    this.getCurrentType();
  }
  getTypes(){
    this.types = this.ts.getTypes();
  }
  getCurrentType(){
    this.currentType = this.ts.getCurrentType();
  }
  changingType(newType){
    this.currentType = newType;
  }
}
