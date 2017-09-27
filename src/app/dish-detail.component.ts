import { Component, OnInit } from '@angular/core';
import { Dish } from './dish';
import { ActivatedRoute } from '@angular/router';
import { DishService } from './dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish: Dish
  errorMessage: string
  imageWidth: 30

  constructor(private _route: ActivatedRoute,
  private _dishService:DishService) {}

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id')
    this._dishService.getDish(id)
    .subscribe(
        dish=>this.dish = dish,
        error=>this.errorMessage = <any>error,
    )   
  }

}
