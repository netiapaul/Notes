import { TodosService } from './../../services/todos.service';
import { Todo } from './../interface/todo';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor(private todoservice:TodosService) { }

  todos:Todo[];

  
  // gets todo list upon page load
  ngOnInit() {
    this.todoservice.getTodos().subscribe(todo => this.todos =todo);
  }

  // adds new todo
  addNewTodo(todo:Todo){
    this.todoservice.postTodo(todo).subscribe(newTodo => this.todos.push(newTodo))
  }

  //delete todo
  deleteTodo(todo:Todo){
    this.todos=this.todos.filter(t => t.id !== todo.id);
    this.todoservice.deleteTodo(todo).subscribe();
  }

}
