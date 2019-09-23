import { TodosService } from './../../services/todos.service';
import { Todo } from './../interface/todo';
import { Component, OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {

  constructor(private todoservice:TodosService) { }

  @Input() todo:Todo;
  @Output() deleteTodo:EventEmitter<any>=new EventEmitter()

 

  ngOnInit() {
  }

  onDelete(todo){
    this.deleteTodo.emit(todo)
  }

  //set classes to component if true
  setClasses(){
    let classes={
      todo:true,
      'is-complete':this.todo.completed
    }
    return classes;
  }

  // mark complete if true
  onChange(todo:Todo){
    // affects the UI
    this.todo.completed=!this.todo.completed
    // save on the server
    this.todoservice.toggleDelete(todo).subscribe()
  }
}
