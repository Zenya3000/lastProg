import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'
import { NgPipesModule } from 'ngx-pipes';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './-service/auth.service';



import { AppComponent } from './app.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { DashComponent } from './dash/dash.component';
import { CatsComponent } from './cats/cats.component';
import { CatComponent } from './cats/cat/cat.component';
import { OpersComponent } from './opers/opers.component';
import { OperComponent } from './oper/oper.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SwitcherComponent,
    DashComponent,
    CatsComponent,
    CatComponent,
    OpersComponent,
    OperComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    NgPipesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
