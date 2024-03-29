import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"]
})
export class RecipeDetailPage implements OnInit, OnDestroy {

  loadedRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router,
    private alertCtlr: AlertController) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("recipeId")) {
        // redirect
        this.router.navigate(['/recipes']);
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    });
  }

  onDeleteRecipe() {
    this.alertCtlr.create({
      header: 'Are you sure ?',
      message: 'Do you really want to delete the receipe',
      buttons: [{
        text: 'Cancle',
        role: 'cancle'
      },{
        text: 'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.router.navigate(['/recipes']);
        }
      }]
    }).then(alertEl => {
      alertEl.present();
    });
  }

    // these life cycle methods are implemented just like this no implements
    ionViewWillEnter() {
      console.log('ionViewWillEnter');
    }

    ionViewDidEnter() {
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
