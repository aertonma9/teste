import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../restaurants/restaurants.service';
import {Restaurant} from '../restaurants/restaurant/restaurant.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'mt-restaurant-detalhi',
  templateUrl: './restaurant-detalhi.component.html',
  styleUrls: ['./restaurant-detalhi.component.css']
})
export class RestaurantDetalhiComponent implements OnInit {
      restaurant: Restaurant;
  constructor(private restauranteService: RestaurantsService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.restauranteService.restaurantById(this.route.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant );
  }

}
