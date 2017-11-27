import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../../store/app.reducers'
import * as authActions from '../store/auth.actions';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SigupComponent implements OnInit {

  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    // this.authService.signupUser(form.value.email, form.value.password, form.value.name);
    this.store.dispatch(new authActions.TrySignup({ username: form.value.email, password: form.value.password, displayName: form.value.name }))
  }
}
