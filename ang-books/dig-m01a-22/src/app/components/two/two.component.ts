import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent {
  @Output()
  emitter = new EventEmitter<string>();

  @Input() pizzas: any[] = [];
  @Input() pizza: any;
  
  onPizzaSelected(selected: string) {
    this.emitter.emit(selected);
  }
}