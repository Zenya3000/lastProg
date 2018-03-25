import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CatsService } from '../-service/cats.service';
import { trigger, state, style, stagger, transition, animate, keyframes, useAnimation, query } from '@angular/animations';
import { fadeOut } from 'ng-animate';
import { fadeIn } from 'ng-animate';
import { bounceIn } from 'ng-animate';
import { lightSpeedOut } from 'ng-animate';
@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
  providers: [ CatsService],
  // animations: [
  //   trigger('listAnimation', [
  //     transition('* <=> *', [
  //       query(':enter', style({opacity: 0}), {optional: true}),

  //       query(':enter', stagger('150ms', [
  //         animate('300ms ease-in', keyframes([
  //           style({opacity: 0, transform: 'translateX(-50px)', offset: 0}),
  //           style({opacity: 0.5, transform: 'translateX(-25px)', offset: 0.5}),
  //           style({opacity: 1, transform: 'translateX(0)', offset: 1}),
  //         ]))
  //       ]), {optional: true})

  //     ])
  //   ]),
  // ],
})
export class CatsComponent implements OnInit {
  @Input() type;
  @Output() selectedCat = new EventEmitter()
  @Output() removeSelect = new EventEmitter()
  @Input() class;
  cats = [];
  defCategory;
  status;
  clicked;
  
  constructor(
    private cs: CatsService,

  ) { }

  ngOnInit() {
    
  }
  ngOnChanges(change){
    this.getCats();
  }

  getCats(){
    this.cats = [];
    this.cats = this.cs.getCats(this.type);
    this.clicked = false;
  }
  choseCat(cat){
    
    this.selectedCat.emit(cat);
    this.status = true;
  }
  deleteCat(c, i){


    if(confirm('you really want to remove '+ c +' category?')){
      this.cats.splice(i, 1);
      this.cs.deleteCat(this.type, c);
      this.removeSelect.emit(c); 

      //не решено!!!, надо разобраться почему
      //перегружаються  категории
      // this.getCats();
      // ------------------------------------------------

    }
    
  }
  addCat(addCat){
    let data = {
      cat: addCat.value,
      type: this.type,
      icon: addCat.icon
    }
    this.cs.addCat(data);
    
    // this.cats.push({
    //   cat : addCat.value,
    //   icon : addCat.icon
    // })
    console.log('cats', this.cats);
  }



}
