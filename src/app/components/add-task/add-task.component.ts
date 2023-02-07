import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() submitTaskForm = new EventEmitter();
  text = '';
  day = '';
  reminder = false;

  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.submitTaskForm.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
