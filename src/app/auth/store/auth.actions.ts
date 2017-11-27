import { Action } from "@ngrx/store";

export const SIGNUP = 'SIGNUP';
export const SIGNIN = 'SIGNIN';
export const LOGOUT = 'LOGOUT';
export const SET_TOKEN = 'SET_TOKEN';
export const SET_USERNAME = 'SET_USERNAME';
export const TRY_SIGNUP = 'TRY_SIGNUP';

export class Signin implements Action {
  readonly type = SIGNIN;
  constructor(public payload: string) { }
}

export class Signup implements Action {
  readonly type = SIGNUP;
}

export class Logout implements Action {
  readonly type = LOGOUT;
}

export class SetToken implements Action {
  readonly type = SET_TOKEN;
  constructor(public payload: string) { }
}

export class TrySignup implements Action {
  readonly type = TRY_SIGNUP;
  constructor(public payload: { username: string, password: string }) { }
}

export type AuthActions = Signup | Signin | Logout | SetToken | TrySignup;
