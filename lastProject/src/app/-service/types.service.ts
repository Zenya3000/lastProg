import { Injectable } from '@angular/core';
import { TYPES } from '../TYPES';

@Injectable()
export class TypesService {

  constructor() { }
  getTypes(){
    return TYPES;
  }
  getCurrentType(){
    return TYPES[1];
  }
}
