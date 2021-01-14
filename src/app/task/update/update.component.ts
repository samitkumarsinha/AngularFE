import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit, OnChanges {
  updateform;
  @Input('task')
  task;
  @Output('list')
  list = new EventEmitter();
  recs;
  task_name;
  completed;
  constructor(private fb:FormBuilder, private ds:DataService) {
    this.updateform = this.fb.group({
      task_name: ['',Validators.required],
      completed: ['',Validators.required],
    })
  }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.recs = this.task;
    this.task_name = this.recs.task_name;
    this.completed = this.recs.completed;
    this.updateform.get('task_name').setValue(this.task_name);
    this.updateform.get('completed').setValue(this.completed);
  }
  onsubmit(){
    this.task_name = this.updateform.get('task_name').value;
    this.completed = this.updateform.get('completed').value;
    const data = {'task_name': this.task_name, 'completed': this.completed, 'id': this.task.id};
    console.log(data);
    this.ds.updatetask(data).subscribe((res)=>{
      console.log(res);
      this.list.emit();
    })
  }
  onChange(event: any) {
    this.task_name = event.target.value;
    console.log("New value = " + this.task_name)
};
}
