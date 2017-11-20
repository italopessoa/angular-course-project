import { Component, ViewChild, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('f') form: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = ['Advanced'];

  ngOnInit() {

  }

  onSubmit() {
    if (this.form.valid)
      console.log(this.form.value);
  }
}
