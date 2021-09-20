import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-deleted-todos-page',
  templateUrl: './deleted-todos-page.component.html',
  styleUrls: ['./deleted-todos-page.component.css']
})
export class DeletedTodosPageComponent implements OnInit {

  title: string = 'Tâches terminées';

  todos: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe(todos => this.todos = todos);
  }

  public toggleComplete(todoId: number) {
    this.todoService.toggleCompleteOnTodoWithId(todoId);
  }

}
