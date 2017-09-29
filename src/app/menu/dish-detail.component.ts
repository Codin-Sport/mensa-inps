import { Component, OnInit } from '@angular/core';
import { Dish } from './dish';
import { ActivatedRoute, Router } from '@angular/router';
import { DishService } from './dish.service';

@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.css']
})
export class DishDetailComponent implements OnInit {

  dish: Dish
  errorMessage: string
  imageWidth = 350

  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _dishService: DishService) { }

  onBack(): void {
      this._router.navigate(['/menu'])
  }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id')
    this._dishService.getDish(id)
      .subscribe(
      dish => this.dish = dish,
      error => this.errorMessage = <any>error,
    )
  }

}
