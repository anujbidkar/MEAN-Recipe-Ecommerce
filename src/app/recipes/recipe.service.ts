import {Recipe} from './recipe.model';

import { Component, EventEmitter, Injectable} from '@angular/core';
import { Ingredients } from '../shared/Ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService
{

    recipeSelected = new EventEmitter<Recipe>();
    private recipes : Recipe[] =
    [
        new Recipe('Pav Bhaji','it is the best','assets/image1.jpg',
        [new Ingredients('meat',1),
        new Ingredients('french fries',10),
        ]),
        new Recipe('2Pav Bhaji','it is the best','assets/image1.jpg',
        [new Ingredients('pav',16),
        new Ingredients('bhaji',105),
        ])

    ];

    constructor(private slService:ShoppingListService)
    {

    }
    getRecipe(index: number) {
        return this.recipes[index];
      }

    getRecipes()
    {
        return this.recipes.slice();
    }

    addIngredeientsToShoppingList(ingredients:Ingredients[])
    {
        this.slService.OnAddNewIngredients(ingredients);

    }

    

}