import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';
// import { AngularFirestore } from 'angularfire2/firestore';
// import { Observable } from 'rxjs/Observable';


@Injectable()
export class CatsService {

  data;

  constructor(
    private http: Http,
    public af: AngularFireDatabase
  ) { 
    
  }

  // getCats(type, id = 0){
  //   return this.http.get('http://moneyapp.dev/api/cats/'+id+'?type='+type)
  //   .map( res => {
  //     return res.json();
  //   })
  // }

  getCats(type){
    // let query = firebase.database().ref('MyApp/'+type.url);
    // let test = [];
    // this.data = query.on('value', function(snap){
    //   let scores = snap.val();
    //   let res = Object.keys(scores);
      
    //   for (let i = 0; i < res.length; i++) {
    //     test[i] = res[i];
    //   }
    // });





    let query = firebase.database().ref('MyApp/'+type.url);
    let test = [];
    this.data = query.on('value', function(snap){
      let result = snap.val();
      let i = 0;
      for(let key in result){
        test[i] = {
           'cat' : key,
           'icon': result[key].icon 
        };
        i++;
      }
    });

    // let test = [];
    // this.data = this.af.list('MyApp/'+type.url);
    // let items = this.data.subscribe(items => {

    //   for (let i = 0; i < items.length; i++) {
    //     let icon = 'fa fa-line-chart';
    //     if(items[i].icon){
    //       test.push({ 
    //         'cat' : items[i].$key,
    //         'icon': items[i].icon
    //       })
    //     }
    //   }
    //   console.log('test', test);
    // });


    return test;
  }
  deleteCat(type, cat){
    let query = firebase.database().ref('MyApp/'+type.url+ "/" + cat +'');
    query.remove();
  }
  addCat(data){
    console.log(data);
    let query = firebase.database().ref('MyApp/'+data.type.url+"");
    var date = new Date();
    let scope = date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2);
    
    query.child(data.cat).set({
        date: scope,
        icon: data.icon
    });
  }
}
