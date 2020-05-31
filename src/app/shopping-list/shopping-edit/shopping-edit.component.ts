import { Component, OnInit, ViewChild, ElementRef,EventEmitter, Output } from '@angular/core';
import {  } from 'protractor';
import { Ingredients } from 'src/app/shared/Ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('ingre_name') ingre_name : ElementRef;
  @ViewChild('ingre_qty') ingre_qty : ElementRef;


  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {

  }

  addClickButton()
  {
    const name = this.ingre_name.nativeElement.value;
    const qty = this.ingre_qty.nativeElement.value;

    const newIngredient = new Ingredients(name,qty);

    this.shoppingListService.addIngredients(newIngredient);
    
  }
}
