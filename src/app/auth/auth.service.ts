import * as firebase from 'firebase';

export class AuthService {
  token: string = '';
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => console.log('usuario cadastrado com sucesso'))
      .catch(error => {
        console.log(error);
      })
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => {
        this.getToken();
        console.log(response)
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
}
