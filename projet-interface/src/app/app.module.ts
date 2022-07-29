import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListeComponent } from './components/liste/liste.component';
import { FormulaireComponent } from './components/formulaire/formulaire.component';
import { ListeTacheComponent } from './components/liste-tache/liste-tache.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListeComponent,
    FormulaireComponent,
    ListeTacheComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
