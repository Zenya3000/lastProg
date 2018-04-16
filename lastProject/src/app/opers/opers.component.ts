import { Component, OnInit, Input, Output, EventEmitter, OnChanges, ViewEncapsulation } from '@angular/core';
import { OpersService } from '../-service/opers.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, state, style, stagger, transition, animate, keyframes, useAnimation, query } from '@angular/animations';
import { fadeIn, bounce } from 'ng-animate';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
import { ObservableMedia } from '@angular/flex-layout';
// import { trigger, state, style, transition, animate, keyframes, useAnimation } from '@angular/animations';
// import { bounce } from 'ng-animate';

@Component({
  selector: 'opers',
  templateUrl: './opers.component.html',
  styleUrls: ['./opers.component.sass'],
  providers: [OpersService],
  encapsulation: ViewEncapsulation.None,
  animations: [
    trigger('listOpersAnimation', [
      transition('void => *', [
        style({transform: "translateX(100%)", opacity: 0 }),
        animate('0.2s ease-out', style({transform: "translateX(0)", opacity: 1 }))
      ]),
      transition(":leave", [
        // animate(500, style({ opacity: 0 }))
      ])
  ])
  ],

})
export class OpersComponent implements OnInit {
  todos$: Observable<any[]>;
  catName = false;
  output = [];
  tempObj = {};
  money = [];
  total = 0;
  ChangeEdit = true;
  @Input() class;
  @Input() type;
  @Input() cat;
  @Input() defCat;
  typeName = false;
  exp:string;

  constructor(
    private os: OpersService,
    private af: AngularFireDatabase,
    private observableMedia: ObservableMedia
  ) { }
  ngOnInit() {

  }
  ngOnChanges(changes){


    for (const c in changes) {
     
      if(c === 'cat'){
        this.getOpers(this.cat);
        this.typeName = this.type.text;
      }
      if(c === 'type'){
        this.typeName = this.type.text;
        this.cat = false;
        this.sumMoney();
      }
    }
    
  }
  sumMoney(){
    this.money = [];
    let sum = this.af.list('MyApp/'+ this.type.url+'');
    sum.subscribe(items => {
      var i = 0;
      items.forEach(items => {        
        for (var key in items) {
          this.money[i] = items[key];
          i++; 
        }
      });

      this.total = 0;
      for (let i = 0; i < this.money.length; i++) {
        if(this.money[i].money != null || undefined){
          this.total = (+this.total + +this.money[i].money); 
        }
      }
    });
    

  }
  getOpers(cat){
    this.output = [];
    this.todos$ = this.af.list('MyApp/'+ this.type.url+'/'+cat.cat+''); 
    this.todos$.subscribe(items => {
      
      var b = 0;
      items.forEach(item => {
          if(item.date != null){
            this.output[b] = item;
            b++
          }
      });
  });
  this.catName = cat.cat;
  }
  edit(){
    
    this.ChangeEdit = !this.ChangeEdit;

  }
  saveEdit(){
    
    this.ChangeEdit = !this.ChangeEdit;

  }
  removeOper(index){
    this.output.splice(index, 1);
  }
  goAnimate() {
    this.exp = 'goAnimate';
  }
}
