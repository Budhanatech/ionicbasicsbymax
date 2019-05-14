import { Component, OnInit, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {

  recipes: Recipe[];

  constructor(private recipeService: RecipesService) { }

  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.recipes);
  }

  // these life cycle methods are implemented just like this no implements
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    this.recipes = this.recipeService.getAllRecipes();
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

}
