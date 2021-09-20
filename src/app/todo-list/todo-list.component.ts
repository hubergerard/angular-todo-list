import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Todo } from '../todo.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  @Input()
  todos: Todo[];

  @Input()
  hideCompleted: boolean = false;

  @Input()
  hideUncompleted: boolean = false;

  buttonAction: string;

  displayedColumns: string[] = ['id', 'label', 'complete'];

  @Output()
  completeTodo: EventEmitter<number> = new EventEmitter();

  readonly BUTTON_ACTIONS = { COMPLETE: 'Compléter', UNCOMPLETE: 'Décompléter' };

  constructor() {console.log('test',this.todos); }

  public toggleComplete(id: number) {
    this.completeTodo.emit(id);
  }

  public getAction(todo: Todo): string {
    return todo.isDone ? this.BUTTON_ACTIONS.UNCOMPLETE : this.BUTTON_ACTIONS.COMPLETE;
  }

  public getDisplayableTodos(){
    return this.todos.filter(todo => todo.isDone === !this.hideCompleted && todo.isDone === this.hideUncompleted);
  }

}
