import { Todo } from './../components/interface/todo';
import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';


@Injectable({
  providedIn: 'root'
})


  export class InMemoryDataService implements InMemoryDbService {
    createDb() {
      const todos = [
        {
          "id": 1,
          "title": "HTML5",
          "completed": false,
          "email": "sebastian@codingthesmartway.com"
        },
        {
          "id": 2,
          "title": "CSS3",
          "completed": false,
          "email": "john@codingthesmartway.com"
        },
        {
          "id": 3,
          "title": "Javascript",
          "completed": false,
          "email": "paul@codingthesmartway.com"
        }
    ];
      return {todos};
  }

  genId(todos: Todo[]): number {
    return todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 11;
  }
}
