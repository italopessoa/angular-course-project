import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ActiveUsersComponent implements OnInit {
  @Input() users: string[] = [];
  @Output() userSetToInactive: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  onSetToInactive(id: number) {
    this.userSetToInactive.emit(id);
  }

}
