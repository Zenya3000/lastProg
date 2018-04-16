import { OpersService } from './../-service/opers.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, stagger, transition, animate, keyframes, useAnimation, query } from '@angular/animations';
import { fadeIn } from 'ng-animate';
@Component({
  selector: 'oneoperlist',
  templateUrl: './oneoperlist.component.html',
  styleUrls: ['./oneoperlist.component.sass'],
  providers: [OpersService],
  animations: [
  trigger('activeAnimation', [
    
    // state('in', style({transform: 'translateX(0)', opacity: 1})),
    // transition('void => *', [
    //   style({transform: 'translateX(100%)', opacity: 1}),
    //   animate(260)
    // ])
    // transition('void => *', [
    //   style({transform: 'translateX(-100%)'}),
    //   animate(100)
    // ]),
    // transition('* => void', [
    //   animate(100, style({transform: 'translateX(100%)'}))
    // ])
    ]) 
  ],


})
export class OneoperlistComponent implements OnInit {
  @Input() icon;
  @Input() item;
  @Input() catName;
  @Input() class;
  @Input() type;
  @Input() index;
  @Output() removeOper = new EventEmitter()
  
  constructor(
    private os: OpersService
  ) { 
    
  }
  panelOpenState: boolean = false;
  ChangeEdit = true;
  active: boolean = false;
  ngOnInit() {
    console.log(this.index);
  }
  
  edit(){
    this.ChangeEdit = !this.ChangeEdit
  }
  saveEdit(){
    this.os.saveOper(this.item, this.type, this.catName)
    this.ChangeEdit = !this.ChangeEdit
    
  }
  remove(){
    if(confirm('Вы точно хотите удалить запись?')){
      console.log(this.index)
      this.removeOper.emit(this.index);
      this.os.removeOper(this.item, this.type, this.catName)
      
    }
    
  }
  activeButton(){
    this.active = !this.active;
  }
}
