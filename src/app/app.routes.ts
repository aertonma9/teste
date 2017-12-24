import {Routes} from '@angular/router';

import {HomeComponent} from  './home/home.component';
import {AboutComponent} from './about/about.component';
import {RestaurantsComponent} from './restaurants/restaurants.component';
import {RestaurantDetalhiComponent} from './restaurant-detalhi/restaurant-detalhi.component';
import {MenuComponent} from './restaurant-detalhi/menu/menu.component';
import {ReviewsComponent} from './restaurant-detalhi/reviews/reviews.component';
import {OrderComponent} from './order/order.component';
import { OrderSummaryComponent } from 'app/order-summary/order-summary.component';

export const ROUTES: Routes = [
  {path: '' ,component: HomeComponent},
  {path: 'about' ,component: AboutComponent},
  {path: 'restaurant' ,component: RestaurantsComponent},
  {path: 'restaurant/:id' ,component: RestaurantDetalhiComponent,
   children: [
     {path: '', redirectTo: 'menu', pathMatch: 'full'},
     {path: 'menu', component: MenuComponent},
     {path: 'reviews', component: ReviewsComponent},
   ]
  },
  {path: 'order-summary' ,component: OrderSummaryComponent},
  {path: 'order' ,component: OrderComponent},
];
