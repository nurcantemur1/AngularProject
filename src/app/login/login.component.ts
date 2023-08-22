import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,Validators,FormGroup} from '@angular/forms';
import { logWarnings } from 'protractor/built/driverProviders';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus:any;
  focus1:any;
  loginForm: FormGroup
  constructor(private formBuilder:FormBuilder,
    private authService:AuthService,
    private toastrService:ToastrService) { }

  ngOnInit() {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({ 
      email : [Validators.required],
      password:[Validators.required]
    });
  }
  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(
        response=>{
          console.log(response);
          this.toastrService.show(response.message);
          localStorage.setItem("token",response.data.token);
        },
        responseError=>{
          this.toastrService.error(responseError.error);
        }
      );
    }
    else{
      console.log("çalışmadım");
    }
  }
}
