import { Component } from '@angular/core';
import {NgForOf} from '@angular/common';
import {ToDo} from '../shered/interfaces/todo.interface';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : ToDo[] = [];

  addTodo(todo:string) : void {
    this.todos.push({name : todo,isComplete: true});
    console.log('Akt list todo: ',this.todos);
  }
  // defaultValue = "Test"; tu mozna dac jakis tekst
}
