import { Component } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  tasks$: Observable<Task[]> = this.taskService.refetch.pipe(
    switchMap(() => this.taskService.getTasks())
  );

  constructor(private taskService: TaskService) {}

  handleSpanClick(task: Task) {
    this.taskService.toggleCompleted(task).subscribe();
  }

  handleButtonClick(task: Task) {
    this.taskService.removeTask(task).subscribe();
  }
}
