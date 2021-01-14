import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../task';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  task:Task;
  @Output('details')
  detail = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }
  details(){
    this.detail.emit(this.task);
  }

}
