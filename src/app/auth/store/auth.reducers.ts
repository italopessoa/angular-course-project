import * as AuthActions from './auth.actions'
export interface State {
  token: string;
  authenticated: boolean;
  userName: string;
}

const initialState: State = {
  token: null,
  authenticated: false,
  userName: null,
}

export function authReducer(state = initialState, action: AuthActions.AuthActions) {
  switch (action.type) {
    case AuthActions.SIGNIN:
      return {
        ...state,
        authenticated: true,
        userName: action.payload,
      }
    case AuthActions.SIGNUP:
      return {
        ...state,
        authenticated: true,
      }
    case AuthActions.LOGOUT:
      return {
        ...state,
        authenticated: false,
        token: null,
        userName: null,
      }
    case AuthActions.SET_TOKEN:
      return {
        ...state,
        token: action.payload
      }
    default:
      return state;
  }
}
