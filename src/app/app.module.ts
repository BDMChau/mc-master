import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';

import { AppRoutingModule } from './components/nav/app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ItemComponent } from './components/item/item.component';
import { Page404Component } from './components/page404/page404.component';
import { NavComponent } from './components/nav/nav.component';
import { ThemeModule } from './components/theme/theme.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ItemComponent,
    Page404Component,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    MatProgressBarModule,
    MatIconModule,
    ThemeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
