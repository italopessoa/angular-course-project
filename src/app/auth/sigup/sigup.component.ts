import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from '../auth.service';
import { loadavg } from 'os';
import { DELEGATE_CTOR } from '@angular/core/src/reflection/reflection_capabilities';
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SigupComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {
    console.log(form)
    // this.authService.signupUser(form.value.email, form.value.password);
  }
}
