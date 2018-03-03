import { Injectable, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Fish Tacos',
      'What\'s better than tacos and fish?',
      'https://c1.staticflickr.com/5/4091/4836139726_fdf79e1e6b_b.jpg',
      [
        new Ingredient('Fish Meat', 1),
        new Ingredient('Tomato', 2),
        new Ingredient('Shredded Cheese', 1),
        new Ingredient('Lettuce', 1)
      ]),
    new Recipe('BBQ Ribs',
      'Mmmmmmm... Get in my Belly!',
      'https://c1.staticflickr.com/4/3067/2855239227_a267e71cb8_b.jpg',
      [
        new Ingredient('Pork Ribs', 2),
        new Ingredient('BBQ Sauce', 1)
      ]),
    new Recipe('Shrip Salad',
      'This is no small salad.',
      'https://static.pexels.com/photos/51948/gourmet-salad-lunch-breakfast-51948.jpeg',
      [
        new Ingredient('Salad Mix', 1),
        new Ingredient('Shrimp', 12),
        new Ingredient('Carrot', 2),
        new Ingredient('Dressing', 1)
      ])
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

}
