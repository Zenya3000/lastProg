import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { OpersService } from '../-service/opers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { trigger, state, style, stagger, transition, animate, keyframes, useAnimation, query } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { lightSpeedIn } from 'ng-animate';
import { lightSpeedOut } from 'ng-animate';
import { bounceIn } from 'ng-animate';

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
        useAnimation(bounceIn)
      ]),
      transition(':leave', [
        useAnimation(lightSpeedOut)
      ])
    ]),
    trigger('insideOperInput', [
      transition(':enter', [
        useAnimation(bounceIn)
      ]),
      transition(':leave', [
        useAnimation(lightSpeedOut)
      ])
    ]),
    trigger('chooseCat',[
      transition(':enter', [
        useAnimation(bounceIn)
      ]),
      transition(':leave', [
        useAnimation(lightSpeedOut)
      ])
    ]),
    trigger('operModal', [
      transition(':enter', [
        useAnimation(bounceIn)
      ]),
      transition(':leave', [
        useAnimation(lightSpeedOut)
      ])
    ])
  ],
})
export class OperComponent implements OnInit {
  @Input() cat;
  @Input() class;
  @Input() type;
  complexForm : FormGroup;

  constructor(
    private os: OpersService,
    private fb: FormBuilder
  ) { 
    this.complexForm = fb.group({
      'sum' : [null, Validators.required],
      'description': [null, Validators.required],
    })
   }

  ngOnInit() {
  }
  ngOnChanges(changes){
    for( const c in changes){
        if(c === "type"){
          //  console.log(c)
        }
    }
  }
  // submitForm(value: any):void{
  //   console.log('Reactive Form Data: ')
  //   console.log(value);
  // }

  addOper(newCatMoney, newCatDescr){
    let data = {
      money: newCatMoney.value,
      descr: newCatDescr.value,
      cat: this.cat,
    }
    this.os.addOper(this.type, data);
    this.complexForm = this.fb.group({
      'sum' : '',
      'description': '',
    })
    console.log('newNote', data);
  }
}
