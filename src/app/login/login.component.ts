import { Component, OnInit, } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private apiService: ApiService , private router: Router) { }
  errMessage ;
  userForm = new FormGroup({

    email: new FormControl('', Validators.email),
    password: new FormControl('', Validators.minLength(5)),

  });

  ngOnInit() { }

  onClickLogin(form: FormGroup) {

    if (form.valid) {
      //console.log(form.value);
      this.apiService.login(form.value).subscribe(res => {

        console.log(res);

        // if (res.status === 401) {
        //   this.errMessage = res.message;
        //   console.log('Loggin Error');
        // } else {

        //   localStorage.setItem('token', res.data.token);
        //   this.router.navigateByUrl('/');

        // }



      });
    }


  }
}
