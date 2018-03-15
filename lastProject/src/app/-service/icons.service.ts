import { Injectable } from '@angular/core';
import { ICONS } from '../ICONS';

@Injectable()
export class IconsService {

  constructor() { }

  getIcons(){
    return ICONS;
    
  }
  getCurrentIcon(){

    return ICONS[ICONS.length -1].url;
  }
}
