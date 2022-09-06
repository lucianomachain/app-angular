import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {Task} from '../Task';
import {TASKS} from '../mock-tasks';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:5001/tasks'

  constructor(
    private http: HttpClient
  ) { }
    
  getTasks(): Observable<Task[]>{

    return this.http.get<Task[]>(this.apiUrl)
   

  }
}
