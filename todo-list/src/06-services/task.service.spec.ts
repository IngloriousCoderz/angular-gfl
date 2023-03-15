import { TestBed } from '@angular/core/testing';

import { TaskService } from './task.service';

describe('TaskService', () => {
  let service: TaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve all tasks', () => {
    expect(service.getTasks()).toEqual([
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
    ]);
  });

  it('should create a new task', () => {
    service.addTask('New task');

    expect(service.getTasks()).toEqual([
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: false },
      { id: 3, text: 'Forget everything' },
      { id: 4, text: 'New task' },
    ]);
  });

  it('should toggle the "completed" property on a task', () => {
    service.toggleCompleted(1);

    expect(service.getTasks()).toEqual([
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 2, text: 'Look for a job', completed: true },
      { id: 3, text: 'Forget everything' },
    ]);
  });

  it('should remove a task', () => {
    service.removeTask(1);

    expect(service.getTasks()).toEqual([
      { id: 1, text: 'Learn Angular', completed: true },
      { id: 3, text: 'Forget everything' },
    ]);
  });
});
