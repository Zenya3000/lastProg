import { OpersService } from './../-service/opers.service';
import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'oneoperlist',
  templateUrl: './oneoperlist.component.html',
  styleUrls: ['./oneoperlist.component.sass'],
  providers: [OpersService]
})
export class OneoperlistComponent implements OnInit {
  @Input() icon;
  @Input() item;
  @Input() catName;
  @Input() class;
  @Input() type;
  @Input() index;
  @Output() removeOper = new EventEmitter()
  constructor(
    private os: OpersService
  ) { 
    
  }
  ChangeEdit = true;
  ngOnInit() {
   
  }
  
  edit(){
    this.ChangeEdit = !this.ChangeEdit
  }
  saveEdit(){
    this.os.saveOper(this.item, this.type, this.catName)
    this.ChangeEdit = !this.ChangeEdit
    
  }
  remove(){
    if(confirm('Вы точно хотите удалить запись?')){
      console.log(this.index)
      this.removeOper.emit(this.index);
      this.os.removeOper(this.item, this.type, this.catName)
      
    }
    
  }
}
