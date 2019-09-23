import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'add-todo',
  templateUrl: './addtodo.component.html',
  styleUrls: ['./addtodo.component.css']
})
export class AddtodoComponent implements OnInit {

  title:string;
  @Output() addNewTodo:EventEmitter<any>=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const todo={
      title:this.title,
      completed:false
    }
    this.addNewTodo.emit(todo)
  }
}
