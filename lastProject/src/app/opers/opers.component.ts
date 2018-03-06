import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { OpersService } from '../-service/opers.service';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
// import { trigger, state, style, transition, animate, keyframes, useAnimation } from '@angular/animations';
// import { bounce } from 'ng-animate';

@Component({
  selector: 'opers',
  templateUrl: './opers.component.html',
  styleUrls: ['./opers.component.sass'],
  providers: [OpersService],
  // animations: [
  //   trigger('bounce', [transition('* => *', useAnimation(bounce))])
  // ],
})
export class OpersComponent implements OnInit {
  todos$: Observable<any[]>;
  catName;
  output = [];
  tempObj = {};
  money = [];
  total = 0;
  
  @Input() class;
  @Input() type;
  @Input() cat;
  @Input() defCat;

  constructor(
    private os: OpersService,
    private af: AngularFireDatabase
  ) { }

  ngOnInit() {

  }
  ngOnChanges(changes){


    for (const c in changes) {
      if(c === 'cat'){
        this.getOpers();
        this.catName = this.cat;
      }
      if(c === 'type'){
        this.cat = null;
        this.sumMoney();
      }
    }
    
  }
  sumMoney(){
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
  getOpers(){
    this.output = [];
    this.todos$ = this.af.list('MyApp/'+ this.type.url+'/'+this.cat+''); 
    this.todos$.subscribe(items => {
      var b = 0;
      items.forEach(item => {
          if(item.date != null){
            this.output[b] = item;
            b++
          }
      });
  });

  }
}
