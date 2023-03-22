import { Component } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private taskService: TaskService) {}

  handleSubmit(text: string) {
    this.taskService.addTask(text).subscribe();
  }
}
