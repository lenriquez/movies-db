import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';

import { SearchService } from './search.service'
import { GenreService } from './genre.service'

import { routing } from "./app.routing";
import { DropdownDirective, ImageUrlPipe } from './shared/';
import { TranslateGenrePipe } from './translate-genre.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DetailsComponent,
    DropdownDirective,
    ImageUrlPipe,
    TranslateGenrePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [ SearchService, GenreService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
