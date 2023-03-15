import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

interface Task {
  id: number;
  text?: string | null;
  completed?: boolean | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  form;

  tasks: Task[] = [
    { id: 1, text: 'Learn Angular', completed: true },
    { id: 2, text: 'Look for a job', completed: false },
    { id: 3, text: 'Forget everything' },
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      text: ['', Validators.required],
    });
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();

    const maxId = this.tasks.length ? this.tasks[this.tasks.length - 1].id : 0;
    this.tasks.push({ id: maxId + 1, text: this.form.value.text });
    this.form.patchValue({ text: '' });
  }

  handleSpanClick(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  handleButtonClick(index: number) {
    this.tasks.splice(index, 1);
  }
}
