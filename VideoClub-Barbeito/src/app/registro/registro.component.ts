import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  
  constructor(private fb: FormBuilder) { }

  usuarioForm = this.fb.group({
    mail: ['',Validators.email],
    password: ['',Validators.minLength(8)],
    name: [''],
    lastname: [''],
    age: ['']
  }) 
  

  ngOnInit(): void {
  }

  submitted = false;

  onSubmit() { this.submitted = true; }

  newUsuario() {
    this.usuarioForm;
  }


  get mail() {
    return this.usuarioForm.get('mail');
  }

  get password() {
    return this.usuarioForm.get('password');
  }

  get name() {
    return this.usuarioForm.get('name');
  }
 
  get lastname() {
    return this.usuarioForm.get('lastname');
  }
  
  get age() {
    return this.usuarioForm.get('age');
  }
  


}
