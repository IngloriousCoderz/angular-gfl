import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  tasks$: Observable<Task[]> = this.taskService.getTasks();

  constructor(private taskService: TaskService) {}

  handleSpanClick(index: number) {
    this.taskService.toggleCompleted(index);
  }

  handleButtonClick(index: number) {
    this.taskService.removeTask(index);
  }
}
