import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  createform;
  constructor(private fb:FormBuilder, private ds:DataService) { }

  ngOnInit(): void {
    this.createform = this.fb.group({
      taskname: ['',Validators.required],
      completed: ['',Validators.required],
    })
  }
  onsubmit(){
    const taskname = this.createform.get('taskname').value;
    const completed = this.createform.get('completed').value;
    const data = {'task_name': taskname, 'completed': completed};
    this.ds.createtask(data).subscribe((data)=>{
      console.log(data);
    })
  }

}
