import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Task } from '../../task';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  tasks:Task[];
  records:Task;
  editrec:Task;
  constructor(private ds:DataService) { }

  ngOnInit(): void {
   this.showlist();
  }
  showlist(){
    this.ds.tasklist().subscribe((item)=>{
      this.tasks = item.tasks;
    })
  }
  details(task){
    console.log(task);
    this.records = task;
  }
  del(item){
    this.ds.deltask(item.id).subscribe((item)=>{
      console.log(item);
      this.showlist();
    })
  }
  edit(item){
    this.editrec = item;
    console.log(this.editrec);
  }
  update(item){
    this.ds.updatetask(item).subscribe((item)=>{
      console.log(item);
      this.showlist();
    })
  }
}
