import { Todo } from './../components/interface/todo';
import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http:HttpClient) { }

  // private heroesUrl = 'api/todos'
  // todosApi='http://localhost:3000/posts';

  todosApi='api/todos'

  htppOptions={
    headers:new HttpHeaders({'Content-Type': 'application/json'})
  };

  //post new todos
  postTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosApi,todo)
  }

  // getTodos

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosApi)
  }

  //delete todos

  deleteTodo(todo:Todo):Observable<Todo>{
    // const url=`${this.todosApi}/${todo.id}`
    return this.http.delete<Todo>(this.todosApi,this.htppOptions)
  }

  // toggle complete
  toggleDelete(todo:Todo):Observable<any>{
    // const url=`${this.todosApi}/${todo.id}`
    return this.http.put<Todo>(this.todosApi,this.htppOptions)
  }
}
