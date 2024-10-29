import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ToDo} from '../shered/interfaces/todo.interface';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : ToDo[] = [];

  addTodo(todo:string) : void {
    this.todos.push({name : todo,isComplete: false});
    console.log('Akt list todo: ',this.todos);
  }
  // defaultValue = "Test"; tu mozna dac jakis tekst
  changeTodoStatus(todo: ToDo) {
    todo.isComplete = !todo.isComplete;

  }
}
