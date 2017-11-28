import { Effect, Actions } from "@ngrx/effects";
import { Injectable } from "@angular/core";
import * as AuthActions from './auth.actions';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/do';
import { fromPromise } from 'rxjs/observable/fromPromise';
import * as firebase from 'firebase';
import { Router } from "@angular/router";

@Injectable()
export class AuthEffects {
  @Effect()
  authSignup = this.actions$
    .ofType(AuthActions.TRY_SIGNUP)
    .map((action: AuthActions.TrySignup) => {
      console.log('.map((action: AuthActions.TrySignup)')
      return action.payload;
    })
    .switchMap((authData: { username: string, password: string, displayName: string }) => {
      console.log('.switchMap((authData: { username: string, password: string }) => {')
      return fromPromise(
          firebase.auth().createUserWithEmailAndPassword(authData.username, authData.password)
          .then(() => {
            return firebase.auth().currentUser.updateProfile({ displayName: authData.displayName,photoURL: null })
          })
        );
      }
    )
    .switchMap(() => {
      console.log('return fromPromise(firebase.auth().currentUser.getIdToken());')
      return fromPromise(firebase.auth().currentUser.getIdToken());
    })
    .mergeMap((token: string) => {
      console.log('.mergeMap((token: string) => {')
      this.router.navigate(['/']);
      return [
        {
          type: AuthActions.SIGNUP
        },
        {
          type: AuthActions.SET_TOKEN,
          payload: token,
        }
      ];
    }
    );
    @Effect()
    authSignin = this.actions$
      .ofType(AuthActions.TRY_SIGNIN)
      .map((action: AuthActions.TrySignin) => {
        console.log('.map((action: AuthActions.TrySignin) => {')
        return action.payload;
      })
      .switchMap((userData: {username: string, password: string}) => {
        console.log('.switchMap((userData: {username: string, password: string}) => {')
        return fromPromise(
          firebase.auth().signInWithEmailAndPassword(userData.username, userData.password)
        )
      })
      .switchMap(() => {
        console.log('.switchMap(() => {')
        return fromPromise(firebase.auth().currentUser.getIdToken())
      })
      .mergeMap((token: string) =>{
        console.log('.mergeMap((token: string) =>{')
        this.router.navigate(['/']);
        return [
          {
            type: AuthActions.SIGNIN,
            payload: firebase.auth().currentUser.displayName
          },
          {
            type: AuthActions.SET_TOKEN,
            payload: token
          }
        ]
      })
      @Effect({dispatch: false})
      authLogout = this.actions$
        .ofType(AuthActions.LOGOUT)
        .do(() => {
          this.router.navigate(['/'])
        });
  constructor(private actions$: Actions, private router: Router) {
  }
}
