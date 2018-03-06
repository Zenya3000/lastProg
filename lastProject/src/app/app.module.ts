import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";


import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './-service/auth.service';


import { AppComponent } from './app.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { DashComponent } from './dash/dash.component';
import { CatsComponent } from './cats/cats.component';




@NgModule({
  declarations: [
    AppComponent,
    SwitcherComponent,
    DashComponent,
    CatsComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
