import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ListActions } from './app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private store: Store) {}

  handleSubmit(text: string) {
    this.store.dispatch(ListActions.addTask({ text }));
  }
}
