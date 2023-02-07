import {Component, Input} from '@angular/core';
import {ITask} from '../../Task';
import {TASKS} from '../../mock-tasks';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tasks-item',
  templateUrl: './tasks-item.component.html',
  styleUrls: ['./tasks-item.component.css']
})
export class TasksItemComponent {
@Input() task: ITask
  faTimes = faTimes

  constructor() {
  this.task = TASKS[0]
  }




}
