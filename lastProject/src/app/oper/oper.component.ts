import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { OpersService } from '../-service/opers.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { trigger, state, style, stagger, transition, animate, keyframes, useAnimation, query } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { lightSpeedIn } from 'ng-animate';
import { lightSpeedOut } from 'ng-animate';
import { bounceIn } from 'ng-animate';
import { FormControl } from '@angular/forms/src/model';

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
    ]),
    trigger('iconUnderLine', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms', style({ opacity: 0.6 }))
      ]),
      transition(':leave', [
        style({transform: 'translateX(0)', opacity: 0}),
        animate('300ms', style({transform: 'translateX(100%)', opacity: 0}))
      ])
    ]),

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
    // this.complexForm = fb.group({
    //   'sum' : [null, Validators.compose([Validators.required, Validators.maxLength(9)])],
    //   'description': [null, Validators.compose([Validators.required, Validators.maxLength(40)])],
    // })
   }

  ngOnInit() {
 
  }
  ngOnChanges(changes){
    for( const c in changes){
        if(c === "cat"){

        }
    }
    this.complexForm = this.fb.group({
      'sum' : [null, Validators.compose([Validators.required, Validators.maxLength(6)])],
      'description': [null, Validators.compose([Validators.required, Validators.maxLength(40)])],
    }) 
    
  }

  submitForm(value: any){
    let data = {
      money: value.sum,
      descr: value.description,
      cat: this.cat.cat,
    }
    this.os.addOper(this.type, data);
    this.complexForm.reset();

  }

}
