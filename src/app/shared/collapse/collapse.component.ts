import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { slideIn } from '../animations/animation';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    slideIn
  ]
})
export class CollapseComponent implements OnInit {
  @Input() collapse = true;
  @Input() title = '';
  @Input() type = 'edit';
  @Output() maximize: EventEmitter<any> = new EventEmitter();

  showMenu = false;

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  toggleContent() {
    this.collapse = !this.collapse;
  }

  onHide() {
    this.collapse = true;
  }

  onMaximize() {
    this.maximize.emit('event fired');
  }

  onMinimize() {
    this.collapse = false;
  }
}
