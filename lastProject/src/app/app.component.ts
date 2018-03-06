import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';

// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import { AuthService } from './-service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


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
  user2;
  name;

constructor(
  private auth: AuthService,
  public db: AngularFireDatabase,
  private af: AngularFireAuth) { }

 
  ngOnInit() {
    this.auth.getAuthState().subscribe(
      (user) => this.user = user);   
      this.getName();
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
  getName(){
      this.af.authState.subscribe((auth) => {
      this.name = auth;
      console.log('name', this.name);
    });
    return this.name;
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