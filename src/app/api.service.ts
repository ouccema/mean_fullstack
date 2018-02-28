import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {}
  getTodos() {


    return this.http.get('http://localhost:3000/api/5a8f10c5a2ecea2354c3a40a/todos').map(res => {
    return res;
});



   }


  addTodo(todo) {


    return this.http.post('http://localhost:3000/api/5a91773e418702438c89d8c5/todos', todo).map(res => {
      return res;
    });



  }

login(logindata) {
  //console.log(logindata);
  return this.http.post('http://localhost:3000/auth/login', logindata);

  }



}
