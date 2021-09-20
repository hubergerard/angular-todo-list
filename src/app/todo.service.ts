import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  readonly API_URL: string = 'https://localhost:8080';

  todos: Todo[] = [{id: 1, label: 'Faire les courses', isDone: true}, {id: 2, label: 'Donner à mannger au coq', isDone: false}, {id: 3, label: 'Jeter les poubelles', isDone: false}];

  constructor(private http: HttpClient) { }

  // public getAllTodos(): Observable<Todo[]> {
  //   return this.http.get<Todo[]>(this.API_URL + '/todos');
  // }

  public getAllTodos(): Observable<Todo[]> {
    return of([...this.todos]);
  }

  public toggleCompleteOnTodoWithId(todoId: number): void {
    this.todos = this.todos.map((todo) => {
      if (todo.id === todoId) { todo.isDone = !todo.isDone }
      return todo;
    });
  }
}
