import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class CatsService {
  // items: Observable<any[]>;
  constructor(
    private http: Http,
    // private db: AngularFirestore
  ) { 
    
  }

  // getCats(type, id = 0){
  //   return this.http.get('http://moneyapp.dev/api/cats/'+id+'?type='+type)
  //   .map( res => {
  //     return res.json();
  //   })
  // }



  
  // getCats(type, id = 0){
  //   return this.items;
  // }
}
