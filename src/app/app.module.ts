import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import {AppRouterModule} from './app-router.module';


import {AppComponent} from './app.component';
import {SearchComponent} from './search/search.component';
import {FavouriteComponent} from './favourite/favourite.component';


import {SearchService} from './shared/search.service';
import {FavouriteService} from './shared/favourite.service';


@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRouterModule,
    HttpClientModule
  ],
  providers: [
    SearchService,
    FavouriteService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
