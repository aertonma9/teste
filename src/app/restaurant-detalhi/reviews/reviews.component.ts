import { Component, OnInit } from '@angular/core';
import {RestaurantsService} from '../../restaurants/restaurants.service';

import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: Observable<any>;
  constructor(private restauranteService: RestaurantsService,
              private route: ActivatedRoute ) { }

  ngOnInit() {

  this.reviews = this.restauranteService
    .reviewsOfRestaurant(this.route.parent.snapshot.params['id']);
  }

}