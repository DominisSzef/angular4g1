import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : string[] = [];

  addTodo(todo:string) : void {
    this.todos.push(todo);
    console.log('Akt list todo: ',this.todos);
  }
  // defaultValue = "Test"; tu mozna dac jakis tekst
}
