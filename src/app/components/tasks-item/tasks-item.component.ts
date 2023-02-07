import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from '../../Task';
import { TASKS } from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css'],
})
export class TasksItemComponent {
  @Input() task: ITask;
  @Output() deleteTask: EventEmitter<ITask> = new EventEmitter<ITask>();
  @Output() toggleReminder: EventEmitter<ITask> = new EventEmitter<ITask>();
  faTimes = faTimes;

  constructor() {
    this.task = TASKS[0];
  }

  onDelete(task: ITask) {
    this.deleteTask.emit(task);
  }

  onToggle(task: ITask) {
    this.toggleReminder.emit(task);
  }
}
