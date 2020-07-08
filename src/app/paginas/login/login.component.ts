import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  correo : string;
  contrasenia : string;

  miFormulario : FormGroup;
  constructor(private authS : AuthService,
    private formBuilder: FormBuilder,
    private router : Router,
      private firestore: AngularFirestore,) {

    this.miFormulario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.pattern('^[a-z0-9_-]{6,18}$')]],
   });
  }
  ngOnInit(): void {
  }

  iniciarSesion(correo  : string, contraseña : string)
  {
    this.authS.login(correo,contraseña);
  }

}
