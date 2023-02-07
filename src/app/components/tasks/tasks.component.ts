import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { ITask } from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasksArray: ITask[] = [];

  constructor(private taskService: TaskService) {}
  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasksArray = tasks));
  }

  deleteTask(task: ITask) {
    this.taskService
      .deleteTask(task)
      .subscribe(
        () =>
          (this.tasksArray = this.tasksArray.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: ITask) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }
}
