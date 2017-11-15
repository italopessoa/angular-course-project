import { Component, OnInit, ViewEncapsulation, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class InactiveUsersComponent implements OnInit {
  @Input() users: string[] = [];
  @Output() userSetToActive: EventEmitter<number> = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onSetToActive(id: number) {
    this.userSetToActive.emit(id);
  }
}
