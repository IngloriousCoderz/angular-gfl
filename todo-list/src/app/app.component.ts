import { Component } from '@angular/core';
import { Task } from './task';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tasks: Task[] = [
    { id: 1, text: 'Learn Angular', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ];

  handleSubmit(text: string) {
    const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;
    this.tasks.push({ id: maxId + 1, text });
  }
}
