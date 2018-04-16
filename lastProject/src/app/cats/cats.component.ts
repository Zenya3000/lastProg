import { Component, OnInit, Input, Output, EventEmitter, OnChanges, Inject } from '@angular/core';
import { CatsService } from '../-service/cats.service';
import { trigger, state, style, stagger, transition, animate, keyframes, useAnimation, query } from '@angular/animations';
import { fadeOut } from 'ng-animate';
import { fadeIn } from 'ng-animate';
import { bounceIn } from 'ng-animate';
import { lightSpeedOut } from 'ng-animate';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
  providers: [ CatsService],
  animations: [
    trigger('listAnimation', [
      transition('void => *', [
        style({transform: "translateX(-100%)", opacity: 0 }),
        animate('0.2s ease-out', style({transform: "translateX(0)", opacity: 1 }))
      ]),
      transition(":leave", [
        // animate(500, style({ opacity: 0 }))
      ])
    ]),
  ],
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
    public dialog: MatDialog

  ) { }

  ngOnInit() {
    
  }
  ngOnChanges(change){
    this.getCats();
  }
  openDialog() {
    this.dialog.open(CatsDialog, {
      data: {
        data: this.type
      }
    });
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
@Component({
  selector: 'cats-dialog',
  templateUrl: 'cats-dialog.html',
})
export class CatsDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}