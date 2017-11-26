import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import * as fromApp from '../store/app.reducers';
import * as AuthActions from '../auth/store/auth.actions';

@Injectable()
export class AuthService {
  token: string;
  constructor(private router: Router, private store: Store<fromApp.AppState>) { }

  signupUser(email: string, password: string, displayName: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('usuario cadastrado com sucesso')
        this.store.dispatch(new AuthActions.Signup());
        firebase.auth().currentUser.updateProfile({ displayName: displayName,photoURL: null })
          .then(() => {
            console.log('nome atualizado com sucesso')
            }
          )
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
        this.store.dispatch(new AuthActions.Signin(response.displayName));
        console.log(response)
        this.router.navigate(['/']);
      })
      .catch(error => console.log(error));
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token: string) => {
          this.token = token
          this.store.dispatch(new AuthActions.SetToken(token));
        }
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
