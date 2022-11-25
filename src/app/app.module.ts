import { FeatherModule } from 'angular-feather';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { JobFilterComponent } from './home/job-filter/job-filter.component';
import { JobResultComponent } from './home/job-result/job-result.component';
import { Camera,Heart,Github,Search } from 'angular-feather/icons';

import { environment } from './../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { NgAisModule } from 'angular-instantsearch';



const icons = {
  'Camera': Camera,
  'Heart': Heart,
  'Github': Github,
  'Search': Search
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    JobFilterComponent,
    JobResultComponent,
  ],
  imports: [
    BrowserModule,
    NgAisModule,
    AppRoutingModule,
    FeatherModule.pick(icons),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
