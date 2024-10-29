import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {ToDo} from '../shered/interfaces/todo.interface';


@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgStyle,
    NgClass
  ],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos : ToDo[] = [];

  ErrorMessage : string = '';

  addTodo(todo:string) : void {
    if(todo.length <= 3){
      this.ErrorMessage = "Zadanie musi miec wiecej niz 3 znaki Fjucie"
      return;
    }
    this.ErrorMessage = '';
    this.todos.push({name : todo,isComplete: false});
    console.log('Akt list todo: ',this.todos);
  }
  // defaultValue = "Test"; tu mozna dac jakis tekst
  changeTodoStatus(todo: ToDo) {
    todo.isComplete = !todo.isComplete;

  }

  clearErrorMessage() {
    this.ErrorMessage = '';
  }
}
