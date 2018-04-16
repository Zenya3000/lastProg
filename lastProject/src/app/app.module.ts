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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularSvgIconModule } from 'angular-svg-icon';

import { CatsDialog} from '../app/cats/cats.component';
import { AppComponent } from './app.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { DashComponent } from './dash/dash.component';
import { CatsComponent } from './cats/cats.component';
import { CatComponent } from './cats/cat/cat.component';
import { OpersComponent } from './opers/opers.component';
import { OperComponent } from './oper/oper.component';
import { AuthComponent } from './auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OneoperlistComponent } from './oneoperlist/oneoperlist.component';
import { RouterModule, Routes } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

const router: Routes = [
  {path: '', component: DashComponent, data: {depth: 1 }},
  {path: 'login', component: AuthComponent, data: {depth: 2 }}
]


@NgModule({
  declarations: [
    AppComponent,
    SwitcherComponent,
    DashComponent,
    CatsComponent,
    CatComponent,
    OpersComponent,
    OperComponent,
    AuthComponent,
    OneoperlistComponent,
    CatsDialog,
  ],
  entryComponents: [CatsDialog],
  imports: [
    BrowserModule,
    HttpModule,
    NgPipesModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    Angular2FontawesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule, MatInputModule, MatSidenavModule, MatIconModule, MatToolbarModule, MatDialogModule,
    AngularSvgIconModule,
    FormsModule,
    FlexLayoutModule,
    RouterModule.forRoot(router),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
