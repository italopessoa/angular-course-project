import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router) { }
  signupUser(email: string, password: string, displayName: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('usuario cadastrado com sucesso')
        firebase.auth().currentUser.updateProfile({ displayName: displayName,photoURL: null })
          .then(() => console.log('nome atualizado com sucesso'))
          .catch(() => console.error('erro ao atualizar profile'));
      }
      )
      .catch(error => {
        console.log(error);
      })
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.getToken();
        console.log(response)
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  }
  getToken() {
    firebase.auth().currentUser.getToken()
      .then(
      (token: string) => this.token = token
      );
    return this.token;
  }
  isAuthenticated() {
    return this.token != null;
  }
  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/signin'])
  }
  getUserName() {
    return firebase.auth().currentUser.displayName;
  }
}
