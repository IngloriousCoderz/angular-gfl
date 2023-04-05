import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { Task } from './task';
import { HttpClient } from '@angular/common/http';
import { ListActions } from './app.actions';
import { exhaustMap, map } from 'rxjs';

@Injectable()
export class TaskEffects {
  fetchTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.fetchTasks),
      exhaustMap(() =>
        this.http
          .get<Task[]>('http://localhost:3000/tasks')
          .pipe(map((tasks) => ListActions.receiveTasks({ tasks })))
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.addTask),
      exhaustMap(({ text }) =>
        this.http
          .post('http://localhost:3000/tasks/', { text })
          .pipe(map(() => ListActions.fetchTasks({})))
      )
    )
  );

  toggleCompleted$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.toggleCompleted),
      concatLatestFrom(() => this.store.select('tasks')),
      exhaustMap(([{ id }, tasks]) =>
        this.http
          .patch(`http://localhost:3000/tasks/${id}`, {
            completed: !tasks.find((task) => task.id === id)?.completed,
          })
          .pipe(map(() => ListActions.fetchTasks({})))
      )
    )
  );

  removeTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ListActions.removeTask),
      exhaustMap(({ id }) =>
        this.http
          .delete(`http://localhost:3000/tasks/${id}`)
          .pipe(map(() => ListActions.fetchTasks({})))
      )
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ tasks: Task[] }>,
    private http: HttpClient
  ) {}
}
