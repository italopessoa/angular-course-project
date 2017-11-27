import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import * as authActions from '../store/auth.actions';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SiginComponent implements OnInit {

  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {
    this.store.dispatch(new authActions.TrySignin({ username: form.value.email, password: form.value.password }))
    // this.authService.signinUser(form.value.email, form.value.password);
  }
}
