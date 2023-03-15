import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  tasks: Task[] = [
    { id: 1, text: 'Learn Angular', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ];

  getTasks() {
    return this.tasks;
  }

  addTask(text: string) {
    const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;
    this.tasks.push({ id: maxId + 1, text });
  }

  toggleCompleted(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }
}
