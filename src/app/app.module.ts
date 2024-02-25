import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ModelModule } from './model.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { DescriptionPipe } from './description.pipe';
import { ArtistDetailComponent } from './artist-detail/artist-detail.component';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app.routing.module';
import { HomeComponent } from './home/home.component';
import { MatSliderModule } from '@angular/material/slider';
import {  MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    AppComponent,
    DescriptionPipe,
    ArtistDetailComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ModelModule,
    FormsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    AppRoutingModule,
    MatSliderModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule
  ],
  providers: [DescriptionPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }