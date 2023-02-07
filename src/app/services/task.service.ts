import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {ITask} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
private apiURL = 'http://localhost:500/tasks';
  constructor() { }

  getTasks(): Observable<ITask[]> {
    return of(TASKS)
  }
}
