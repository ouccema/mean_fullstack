import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';




@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  constructor(private apiService: ApiService) {

  }

  todoForm = new FormGroup({


    title: new FormControl('', Validators.required),
    desc: new FormControl('', [Validators.maxLength(20), Validators.required]),
    status: new FormControl('')
  });

  todos;

  ngOnInit() {


    this.apiService.getTodos().subscribe(res => { this.todos = res.data; });

  }

  todoFormSubmit(todoForm) {

    // Form Validation //
    if (this.todoForm.valid) {
      console.log(todoForm);

      alert(this);
    }


    // this.apiService.addTodo(todoForm).subscribe(res => { this.ngOnInit(); });

  }

}
