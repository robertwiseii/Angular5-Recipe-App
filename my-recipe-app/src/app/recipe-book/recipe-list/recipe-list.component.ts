import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A Test Recipe", "This is simply a test", "https://c1.staticflickr.com/5/4091/4836139726_fdf79e1e6b_b.jpg"),
    new Recipe("A Test Recipe", "This is simply a test", "https://c1.staticflickr.com/5/4091/4836139726_fdf79e1e6b_b.jpg"),
    new Recipe("A Test Recipe", "This is simply a test", "https://c1.staticflickr.com/5/4091/4836139726_fdf79e1e6b_b.jpg")
  ];

  constructor() { }

  ngOnInit() {
  }

}
