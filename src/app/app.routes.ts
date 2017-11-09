import {Routes} from '@angular/router';

import {HomeComponent} from  './home/home.component';
import {AboutComponent} from './about/about.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantDetalhiComponent} from './restaurant-detalhi/restaurant-detalhi.component';

export const ROUTES: Routes = [
  {path: '' ,component: HomeComponent},
  {path: 'about' ,component: AboutComponent},
  {path: 'restaurant' ,component: RestaurantsComponent},
  {path: 'restaurant/:id' ,component: RestaurantDetalhiComponent}
];
