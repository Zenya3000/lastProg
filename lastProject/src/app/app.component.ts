import { Component, OnInit } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { Router } from '@angular/router';
import { trigger, transition, group, query, style, animate, useAnimation } from '@angular/animations';
import { slideInLeft } from 'ng-animate';
import { slideInRight } from 'ng-animate';
// import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import * as firebase from 'firebase/app';
import { AuthService } from './-service/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  animations: [
    trigger('routeAnimation', [
      transition('2 => 1', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(-100%)' })),
            ]),
            // and now reveal the enter
            query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
    ]),
    transition('1 => 2', [
        style({ height: '!' }),
        query(':enter', style({ transform: 'translateX(-100%)' })),
        query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
        // animate the leave page away
        group([
            query(':leave', [
                animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(100%)' })),
            ]),
            // and now reveal the enter
            query(':enter', animate('0.3s cubic-bezier(.35,0,.25,1)', style({ transform: 'translateX(0)' }))),
        ]),
    ]),
    ])
  ]
})
export class AppComponent implements OnInit {

  title = 'app';
  topics: FirebaseListObservable<any[]>;
  user = null;
  top;
  data;
  user2;
  name;
  
  private LoggedIn: boolean;

constructor(
  private auth: AuthService,
  public db: AngularFireDatabase,
  private af: AngularFireAuth,
  private router: Router) 
  { 
    this.auth.afAuth.authState.subscribe(
      (auth) =>{
        if(auth == null){
          //not logged in
          this.LoggedIn = false;
          this.user = null;
          this.name = null;
          this.router.navigateByUrl('login');
        } else {
          // console.log(auth);
          this.LoggedIn = true;
          this.user = auth;
          this.name = auth.displayName;
          this.router.navigateByUrl('');
        }
      }
    )
  }

 
  ngOnInit() {
    // this.auth.getAuthState().subscribe(
    //   (user) => this.user = user);   
    //   this.getName();
  }
  loginWithGoogle() {
    this.auth.loginWithGoogle();
  }
  isLoggedIn(){
    return this.LoggedIn
  }
  logout(){
    this.auth.logout();
    this.af.auth.signOut();
    

  }
  // getName(){
  //     this.af.authState.subscribe((auth) => {
  //     this.name = auth;
  //   });
  //   return this.name;
  // }
  test(){
    var database = firebase.database();
    var ref = database.ref('myApp');
    ref.on('value', this.gotData);

    // console.log('!!', ref);
  }   

  gotData(data){
    console.log('data', data.val());
  }
  getDepth(outlet){
    return outlet.activatedRouteData['depth'];
  }
}