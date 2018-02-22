import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Fish Tacos", "What's better than tacos and fish?", "https://c1.staticflickr.com/5/4091/4836139726_fdf79e1e6b_b.jpg"),
    new Recipe("BBQ Ribs", "Mmmmmmm... Get in my Belly!", "https://c1.staticflickr.com/4/3067/2855239227_a267e71cb8_b.jpg"),
    new Recipe("Shrip Salad", "This is no small salad.", "https://static.pexels.com/photos/51948/gourmet-salad-lunch-breakfast-51948.jpeg")
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
