import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';




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
  dataSource;
  displayedColumns = ['title' , 'description', 'status'];

  ngOnInit() {


    this.apiService.getTodos().subscribe(res => {
      console.log(this.todos);

      this.dataSource = new MatTableDataSource(res.data);


     });


  }


  applyFilter(filterValue: string) {

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
    console.log(this.dataSource);
  }

  todoFormSubmit(todoForm) {

    // Form Validation //
    if (this.todoForm.valid) {
      console.log(todoForm);


      this.apiService.addTodo(todoForm).subscribe(res => { this.ngOnInit(); });
    }


    // this.apiService.addTodo(todoForm).subscribe(res => { this.ngOnInit(); });

  }

}
