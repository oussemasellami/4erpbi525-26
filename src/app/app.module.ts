import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from '@angular/forms';
import { ListSuggestionComponent } from './list-suggestion/list-suggestion.component'
import { RouterModule, Routes } from '@angular/router';


const j:Routes=[
  {path:'',redirectTo:'list',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'list',component:ListSuggestionComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ListSuggestionComponent

    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(j),
    FormsModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
