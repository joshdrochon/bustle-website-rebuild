import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CurrentDateComponent } from './current-date/current-date.component';
import { HomeComponent } from './home/home.component';
import { ToggleBarComponent } from './toggle-bar/toggle-bar.component';
// import { DirectoryComponent } from './directory/directory.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CurrentDateComponent,
    HomeComponent,
    ToggleBarComponent
    // DirectoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
