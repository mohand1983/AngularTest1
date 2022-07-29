import { Component } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent {
  pizzas = [
    {
      category: 'crème',
      name: 'savoyarde',
      ingredients: ['raclette', 'roblochon', 'champignon', 'patates'],
    },
    {
      category: 'tomate',
      name: 'royale',
      ingredients: ['fromage', 'olives', 'jambon'],
    },
    {
      category: 'crème',
      name: 'créole',
      ingredients: ['poulet', 'curry', 'lardon'],
    },
  ];
  selectedPizza: any;
  
  selectPizza(selected: string) {
    this.selectedPizza = this.pizzas.find(p => p.name == selected);
  }
}