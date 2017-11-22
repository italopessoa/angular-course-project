import * as firebase from 'firebase';

export class AuthService {
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(() => console.log('usuario cadastrado com sucesso'))
      .catch(error => {
        console.log(error);
      })
  }
  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response => console.log(response))
      .catch(error => console.log(error));
  }
}
