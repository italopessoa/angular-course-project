import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { setTimeout } from 'timers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  somethingForm: FormGroup;
  statusArray = ['Stable', 'Critical', 'Finished'];
  selectedStatus = 'Critical';

  ngOnInit() {
    this.somethingForm = new FormGroup({
      'somethingData': new FormGroup({
        'name': new FormControl(null, [Validators.required], this.forbiddenName),
        'email': new FormControl(null, [Validators.required, Validators.email]),
        'status': new FormControl(null, [Validators.required])
      })
    });
    // this.somethingForm.patchValue({
    //   'somethingData': {
    //     'status': this.selectedStatus
    //   }
    // });
  }

  onSubmit() {
    console.log(this.somethingForm.value);
  }
  forbiddenName(control: FormControl): Promise<any> | Observable<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test')
          resolve({ 'nameIsForbidden': true })
        else resolve(null);
      }, 1000);
    });
  }
}
