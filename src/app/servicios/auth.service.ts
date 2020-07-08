import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { User } from 'firebase';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user : User;

  constructor(public AFauth : AngularFireAuth,
    private router : Router) { }

  login(correo : string, contraseña : string){

    return new Promise((resolve, rejected) => {
  
    this.AFauth.signInWithEmailAndPassword(correo, contraseña)
    
    .then (user => resolve(user.user.getIdToken().then(token => {
      localStorage.setItem('token',token);
      this.router.navigate(['/']);
    })))
    .catch(err => rejected(err))
  
    });
  
  }
  
  registrarUsuario(correo : string, contraseña : string)
  {
    return new Promise((resolve, rejected) => {
  
      this.AFauth.createUserWithEmailAndPassword(correo, contraseña)
      
      .then (user => resolve(user.user.getIdToken().then(token => {
        localStorage.setItem('token',token);
        this.router.navigate(['/']);
      })))
      
      .catch(err => rejected(err))
    
      });
  }

  async logout()
  {
    await this.AFauth.signOut();
  }

 getCurrentUser()
  {
    return this.AFauth.authState.pipe(first()).toPromise();
  }



}
