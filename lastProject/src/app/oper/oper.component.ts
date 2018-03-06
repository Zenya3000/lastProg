import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { OpersService } from '../-service/opers.service';
import { trigger, state, style, stagger, transition, animate, keyframes, useAnimation, query } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { lightSpeedIn } from 'ng-animate';
import { lightSpeedOut } from 'ng-animate';
@Component({
  selector: 'oper',
  templateUrl: './oper.component.html',
  styleUrls: ['./oper.component.sass'],
  providers: [OpersService],
  animations: [
    trigger('operAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 1 }))
        // useAnimation(fadeIn)
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 1}),
        animate('300ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]),
    trigger('insideOperLabel', [
      transition(':enter', [
        style({transform: 'translateX(30%)', opacity: 0}),
        animate('400ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        useAnimation(lightSpeedOut)
      ])
    ]),
    trigger('insideOperInput', [
      transition(':enter', [
        style({transform: 'translateX(18%)', opacity: 0}),
        animate('300ms', style({transform: 'translateX(0)', opacity: 1}))
      ]),
      transition(':leave', [
        useAnimation(lightSpeedOut)
      ])
    ]),
  ],
})
export class OperComponent implements OnInit {
  @Input() cat;
  @Input() class;
  @Input() type;
  constructor(
    private os: OpersService
  ) { }

  ngOnInit() {
  }
  ngOnChanges(changes){
    for( const c in changes){
        if(c === "type"){
          //  console.log(c)
        }
    }
  }

  addOper(newCatMoney, newCatDescr){
    let data = {
      money: newCatMoney.value,
      descr: newCatDescr.value,
      cat: this.cat,
    }
    this.os.addOper(this.type, data);
    console.log('newNote', data);
  }
}
