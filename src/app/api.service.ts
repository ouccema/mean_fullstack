import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class ApiService {

  constructor(private http: Http) {}
  getTodos() {


    return this.http.get('http://localhost:3000/api/5a8f10c5a2ecea2354c3a40a/todos').map(res => {
    return res.json();
});



   }


  addTodo(todo) {


    return this.http.post('http://localhost:3000/api/5a8f10c5a2ecea2354c3a40a/todos', todo).map(res => {
      return res.json();
    });



  }



}
