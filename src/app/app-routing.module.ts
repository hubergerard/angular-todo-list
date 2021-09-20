import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DeletedTodosPageComponent } from './deleted-todos-page/deleted-todos-page.component';
import { TodoListPageComponent } from './todo-list-page/todo-list-page.component';

const routes: Routes = [
  {
    path: '',
    component: TodoListPageComponent
  },{
    path: 'deleted',
    component: DeletedTodosPageComponent
  },{
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
