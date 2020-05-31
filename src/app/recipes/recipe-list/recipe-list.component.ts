import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import { Recipe} from '../recipe.model';
import {  } from 'protractor';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {


   recipe : Recipe[];

  constructor(private recipeService :RecipeService) { }
 
  ngOnInit():void {
    this.recipe = this.recipeService.getRecipes();
  }


}
