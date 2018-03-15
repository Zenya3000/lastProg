import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Injectable()
export class OpersService {
  data;
  todos$: FirebaseListObservable<any[]>;
  constructor(
    private http: Http,
    private af: AngularFireDatabase
  ) { 
    
   }

  



  getOpers(type){
    // let events = firebase.database().ref('MyApp/'+type.url+'');
    // let res;
    // let scores;
    // let query = events.limitToFirst(1);
    //  query.on('value', snap => {
    //   console.log(snap.val());
    //   console.log('OpersScores', scores);
    //   res = Object.keys(scores);
    //   return snap.val();
    this.todos$ = this.af.list('MyApp/'+type.url+'', {
      query: {
        limitToFirst: 1
      }
    });
    console.log('!', this.todos$);
  };

  addOper(type, data){
    let query = firebase.database().ref('MyApp/'+type.url+'/'+data.cat+'');
    var date = new Date();
    let scope = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    query.push({
        date: scope,
        money: data.money,
        description: data.descr
    });
  }

  saveOper(item, type, cat){
  console.log(item);
  let query = firebase.database().ref('MyApp/'+type.url+'/'+cat+'/'+item.$key+'');
  query.update({ description: item.description,  money: item.money})
  }
  
  removeOper(item, type, cat){
    let query = firebase.database().ref('MyApp/'+type.url+'/'+cat+'/'+item.$key+'');
    query.remove();
  }
  
}
