import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { CatsService } from '../-service/cats.service';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.sass'],
  providers: [ CatsService,  ]
})
export class CatsComponent implements OnInit {
  @Input() type;
  constructor(
    private cs: CatsService
  ) { }
  cats;

  ngOnInit() {
    
  }
  ngOnChanges(){
    // this.getCats();
  }

  getCats(){
    // this.cs.getCats(this.type.url)
    //   .subscribe(res => {
    //     this.cats = res.cats;
    //   })
    // this.cats = this.cs.getCats(this.type.url);
    // console.log("cats", this.cats);
    
  }

  

}
