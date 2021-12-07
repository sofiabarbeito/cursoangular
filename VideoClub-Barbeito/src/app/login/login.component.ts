import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  loginForm = this.fb.group({
    mail: ['',Validators.email],
    password: ['',Validators.required],
  
  }) 
  

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }




  get mail() {
    return this.loginForm.get('mail');
  }

  get password() {
    return this.loginForm.get('password');
  }

  


}
