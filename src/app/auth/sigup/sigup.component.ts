import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from "@angular/forms";
@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SigupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSignUp(form: NgForm) {

  }
}
