import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";

@Injectable({
  providedIn: "root"
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: "r1",
      title: "Scnizel",
      imageUrl:
        "https://thecozyapron.com/wp-content/uploads/2012/02/schnitzel_thecozyapron_1.jpg",
      ingredients: ["French Fries", "Pork Meat", "Salad"]
    },
    {
      id: "r2",
      title: "Spaghetti",
      imageUrl:
        "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
      ingredients: ["Spaghetti", "Meat", "Salad"]
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    });
  }
}
