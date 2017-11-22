import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  currentView: string = 'shopping-list';
  onViewChanged(view: string) {
    this.currentView = view;
  }

  ngOnInit() {
    const config = {
      apiKey: "AIzaSyAZztSAJ1oWzCZI9yDrqV4z-UkN5pwi5Yg",
      authDomain: "ng-recipe-book-4eb79.firebaseapp.com",
    };
    firebase.initializeApp(config);
  }
}
