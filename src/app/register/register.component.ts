import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  errMessage;

  registerForm = new FormGroup({

    firstname: new FormControl('', [Validators.pattern(/([A-Z]).*/), Validators.minLength(5), Validators.required] ),
    lastname: new FormControl('', [Validators.pattern(/([A-Z]).*/), Validators.minLength(5), Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(5), Validators.required])


  });

  ngOnInit() {
  }

  onClickRegister(form: FormControl) {
if (form.valid) {
  console.log(form) ; }

  }
}
