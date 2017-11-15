import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentView: string = 'shopping-list';
  onViewChanged(view: string) {
    this.currentView = view;
  }
}
