import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CurrentDateComponent } from './current-date/current-date.component';
import { HomeComponent } from './home/home.component';
import { ToggleBarComponent } from './toggle-bar/toggle-bar.component';
import { CommentBoxComponent } from './comment-box/comment-box.component';
import { CommentListComponent } from './comment-list/comment-list.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrentDateComponent,
    HomeComponent,
    ToggleBarComponent,
    CommentBoxComponent,
    CommentListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule{}
