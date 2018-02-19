import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import { AuthService } from './-service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {

  title = 'app';
  topics: FirebaseListObservable<any[]>;
  user = null;
  top;
  data;

constructor(
  private auth: AuthService,
  public db: AngularFireDatabase) { }

 
  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);
          // console.log('!!', this.db.list('myApp'));
          this.top = firebase.database().ref('myApp/Income/Cats/Salary');
          this.data = this.top.on('value', function(snapshot){
            snapshot.forEach(function(data){
              console.log("the " + data.key + " value is: " + data.val());
            });
          });
          
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  isLoggedIn(){
    return this.auth.isLoggedIn();
  }
  logout(){
    this.auth.logout();
    

  }
  test(){
    var database = firebase.database();
    var ref = database.ref('myApp');
    ref.on('value', this.gotData);

    // console.log('!!', ref);
  }   

  gotData(data){
    console.log('data', data.val());
  }
}