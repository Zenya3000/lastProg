import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CatsService } from '../-service/cats.service';
import { trigger, state, style, stagger, transition, animate, keyframes, useAnimation, query } from '@angular/animations';
import { fadeOut } from 'ng-animate';
import { fadeIn } from 'ng-animate';
@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
  providers: [ CatsService],
  animations: [
    trigger('listAnimation', [
      transition('* <=> *', [
        query(':enter', style({opacity: 0}), {optional: true}),

        query(':enter', stagger('150ms', [
          animate('300ms ease-in', keyframes([
            style({opacity: 0, transform: 'translateX(-50px)', offset: 0}),
            style({opacity: 0.5, transform: 'translateX(-25px)', offset: 0.5}),
            style({opacity: 1, transform: 'translateX(0)', offset: 1}),
          ]))
        ]), {optional: true})
      ])
    ]),
    // trigger('animCats', [
    //   transition('* <=> *', [
    //     query(':enter', style({opacity: 0, transform: 'translateY(-40px)'}), {optional: true}),
    //     query(':enter', stagger('500ms', [
    //       animate('800ms 1.2s ease-out', style({opacity: 1, transform: 'translateX(0)'}))
    //     ]),{optional: true})
    //   ])
    // ]),
  ],
})
export class CatsComponent implements OnInit {
  @Input() type;
  @Output() selectedCat = new EventEmitter()
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
  ngOnChanges(){
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
    if(confirm('are you sure?')){
      this.cs.deleteCat(this.type, c, i);
      this.cats.splice(i, 1);

    }
  }
  addCat(addCat){
    console.log('addCat', addCat);
    let data = {
      cat: addCat,
      type: this.type
    }
    this.cs.addCat(data);
  }



}
