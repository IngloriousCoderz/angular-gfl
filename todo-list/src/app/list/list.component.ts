import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ListActions } from '../app.actions';
import { Task } from '../task';
import { ListState, selectTasks } from './list.reducer';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select(selectTasks);

  constructor(private store: Store<ListState>) {}

  ngOnInit(): void {
    this.store.dispatch(ListActions.fetchTasks({}));
  }

  handleSpanClick(id: number) {
    this.store.dispatch(ListActions.toggleCompleted({ id }));
  }

  handleButtonClick(id: number) {
    this.store.dispatch(ListActions.removeTask({ id }));
  }
}
