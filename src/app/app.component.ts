import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  somethingForm: FormGroup;
  somethingArray = ['SomethingA', 'SomethingB', 'SomethingC'];
  selectedSomething = 'SomethingB';

  ngOnInit() {
    this.somethingForm = new FormGroup({
      'somethingData': new FormGroup({
        'email': new FormControl(null, [Validators.required]),
        'something': new FormControl(this.selectedSomething, [Validators.required])
      })
    });
    this.somethingForm.patchValue({
      'somethingData': {
        'something': this.selectedSomething
      }
    });
  }

  onSubmit() {
    console.log(this.somethingForm.value);
  }
}
