import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesComponent } from "./heroes/heroes.component";
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { QuoteDetailsComponent } from "./quote-details/quote-details.component";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterLink } from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [
    BrowserModule,
    FormsModule,
    HeroesComponent,
    HeroDetailComponent,
    QuoteDetailsComponent,
    HttpClientModule,
    AppRoutingModule,
],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
