// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute, Params, Router } from '@angular/router';

// import { Recipe } from '../recipe.model';
// import { RecipeService } from '../recipe.service';

// @Component({
//   selector: 'app-recipe-detail',
//   templateUrl: './recipe-detail.component.html',
//   styleUrls: ['./recipe-detail.component.css']
// })
// export class RecipeDetailComponent implements OnInit {

//  recipe : Recipe;
//  private id : Number;
//   constructor(private recipeService:RecipeService,
//     private route:ActivatedRoute, 
//     private router: Router
//     ) { }

//     ngOnInit() {
//       this.route.params
//         .subscribe(
//           (params: Params) => {
//             this.id = +params['id'];
//             this.recipe = this.recipeService.getRecipeById(this.id);
//           }
//         );
//     }
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
         this.recipe = this.recipeService.getRecipe(this.id);
          console.log(this.recipe);
        }
      );
  }

  onAddShoppingList()
  {
    this.recipeService.addIngredeientsToShoppingList(this.recipe.ingredients);
  }

}
