import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { AppRoutingModule } from './app-routing.module';
import { AnnonceComponent } from './annonce/annonce.component';
import { ListannComponent } from './annonce/listann/listann.component';
import { AddannComponent } from './annonce/addann/addann.component';
import { AnnonceModule } from './annonce/annonce.module';
import { AddformComponent } from './addform/addform.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ListSuggestionComponent,
    NotfoundComponent,
    AddformComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnnonceModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [provideHttpClient(), provideClientHydration()],
  bootstrap: [AppComponent],
})
export class AppModule {}
