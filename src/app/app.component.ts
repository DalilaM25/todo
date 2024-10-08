import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Item } from '../app/item';
import { ItemComponent } from './item/item.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ItemComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'todo';

  filter: 'all' | 'active' | 'done' = 'all';

  allItems = [
    { description: 'поужинать со Светой', done: false },
    { description: 'посмотреть Властелина Колец', done: false },
    { description: 'сходить на тренировку', done: false },
    { description: 'написать todo на Angular', done: true },
  ];

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter((item) =>
      this.filter === 'done' ? item.done : !item.done
    );
  }
  addItem(description: string) {
    this.allItems.unshift({
      description,
      done: false,
    });
  }
  remove(item: Item) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }
}
