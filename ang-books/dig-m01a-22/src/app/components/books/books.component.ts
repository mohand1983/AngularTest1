import { Component, OnInit } from '@angular/core';
import { generate } from 'rxjs';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
userInput="";
 books=[
  {
    id:'1f768b72-e9fe-473f-bdfb-0a39ec63bae5',
    title: 'Il était une fois',
      available: true,
      price: 12,
      description: 'Tenetur alias sit quam asperiores voluptates culpa. Rem rem autem itaque recusandae placeat dolores. Minima non voluptatibus quasi alias nulla corporis autem aliquam sint. Recusandae placeat consequatur et molestiae suscipit velit aut. Quia nemo voluptatem quidem consequatur ut facere dolor. Similique qui qui.'
  },
  {
    id: '194eca51-4368-4247-bd11-ac9d60dad690',
    title: 'Il était deux fois',
    available: false,
    price: 10.99,
    description: 'Tenetur alias sit quam asperiores voluptates culpa. Rem rem autem itaque recusandae placeat dolores. Minima non voluptatibus quasi alias nulla corporis autem aliquam sint. Recusandae placeat consequatur et molestiae suscipit velit aut. Quia nemo voluptatem quidem consequatur ut facere dolor. Similique qui qui.'
  },
  {
    id: 'f17c5376-9cb0-4afb-a931-c1c220c5de79',
    title: 'Biographie',
    available: false,
    price: 7,
    description: 'Tenetur alias sit quam asperiores voluptates culpa. Rem rem autem itaque recusandae placeat dolores. Minima non voluptatibus quasi alias nulla corporis autem aliquam sint. Recusandae placeat consequatur et molestiae suscipit velit aut. Quia nemo voluptatem quidem consequatur ut facere dolor. Similique qui qui.'
  },
  {
    id: '62a47818-73f5-48a2-819a-0490a2ccf674',
    title: 'Recettes sympa',
    available: true,
    price: 89.50,
    description: 'Tenetur alias sit quam asperiores voluptates culpa. Rem rem autem itaque recusandae placeat dolores. Minima non voluptatibus quasi alias nulla corporis autem aliquam sint. Recusandae placeat consequatur et molestiae suscipit velit aut. Quia nemo voluptatem quidem consequatur ut facere dolor. Similique qui qui.'
  },
];
onTest(){
  console.log("hello");
}
onInput(e:any){
  console.log(e);
  this.userInput=e.target.value;
}
  constructor() { }

  ngOnInit(): void {
  }

}
