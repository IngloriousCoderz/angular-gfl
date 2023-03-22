import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  refetch = new BehaviorSubject(null);

  constructor(private http: HttpClient) {}

  getTasks() {
    return this.http.get<Task[]>('http://localhost:3000/tasks');
  }

  addTask(text: string) {
    return this.http
      .post('http://localhost:3000/tasks/', { text })
      .pipe(tap(() => this.refetch.next(null)));
  }

  toggleCompleted(task: Task) {
    return this.http
      .put(`http://localhost:3000/tasks/${task.id}`, {
        ...task,
        completed: !task.completed,
      })
      .pipe(tap(() => this.refetch.next(null)));
  }

  removeTask(task: Task) {
    return this.http
      .delete(`http://localhost:3000/tasks/${task.id}`)
      .pipe(tap(() => this.refetch.next(null)));
  }
}
