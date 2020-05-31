import { Ingredients } from '../shared/Ingredients.model';
import { Component, EventEmitter} from '@angular/core';

export class ShoppingListService
{

    ingridentsChanged = new EventEmitter<Ingredients[]>();
    private ingredients : Ingredients[] =
    [
        new Ingredients('Apple',50),

        new Ingredients('Banana',10)
    ];

    getIngredients()
    {
        return this.ingredients.slice();
    }

    addIngredients(ingredients:Ingredients)
    {
        this.ingredients.push(ingredients);
        this.ingridentsChanged.emit(this.ingredients.slice());
    }

    OnAddNewIngredients(ingredients:Ingredients[])
    {
        this.ingredients.push(...ingredients);
        this.ingridentsChanged.emit(this.ingredients.slice());
    }

}