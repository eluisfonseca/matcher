import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { log } from 'util';

@Component({
  selector: 'matcher-modal',
  templateUrl: './matcher-modal.component.html',
  styleUrls: ['./matcher-modal.component.scss']
})
export class MatcherModalComponent implements OnInit {
  @Output() closing = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  closeModal() {
    console.log('sf');
    this.closing.emit();
  }
}
