import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SearchComponent} from './search/search.component';
import {FavouriteComponent} from './favourite/favourite.component';

const routes: Routes = [
  {path: '', component: SearchComponent},
  {path: 'favourite', component: FavouriteComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRouterModule {
}
