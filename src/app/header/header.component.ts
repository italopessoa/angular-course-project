import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {
  @Output() onChangeView: EventEmitter<string> = new EventEmitter<string>();
  changeView(view: string) {
    this.onChangeView.emit(view);
  }
}
