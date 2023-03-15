import { Component } from '@angular/core';
import { Task } from '../task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  tasks!: Task[];

  constructor(private taskService: TaskService) {
    this.tasks = this.taskService.getTasks();
  }

  handleSpanClick(index: number) {
    this.taskService.toggleCompleted(index);
  }

  handleButtonClick(index: number) {
    this.taskService.removeTask(index);
  }
}
