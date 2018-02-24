import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  errMessage;
  userForm = new FormGroup({

    email: new FormControl('', Validators.email),
    pass: new FormControl('', Validators.minLength(5)),

  });

  ngOnInit() { }

  onClickLogin(form: FormGroup) {



    if (form.valid) {

      console.log(form.value);
    }


  }
}
