import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/servicios/auth.service';
@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.css']
})
export class RegistrarseComponent implements OnInit {

  correo : string;
  contrasenia : string;
  reingresarContrasenia : string;

  miFormulario : FormGroup;
  constructor(private authS : AuthService,
    private formBuilder: FormBuilder,
    private router : Router,
      private firestore: AngularFirestore,) {

    this.miFormulario = this.formBuilder.group({
      correo: ['', [Validators.required, Validators.email] ],
      password: ['', [Validators.required, Validators.pattern('^[a-z0-9_-]{6,18}$')]],
      passwordTwo: ['', [Validators.required, Validators.pattern('^[a-z0-9_-]{6,18}$')]],
   },
   {
     validators :  this.MustMatch('password', 'passwordTwo'),
   }
   
   );
  }
  ngOnInit(): void {
  }

   MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}
  


registrarUsuario(correo : string, password :string)
{
  this.authS.registrarUsuario(correo,password);

}
  

}
