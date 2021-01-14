import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regform;
  constructor(private fb:FormBuilder, private ds:DataService) { }

  ngOnInit(): void {
    this.regform = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    })
  }
  onregister(){
    const username = this.regform.get('username').value;
    const email = this.regform.get('email').value;
    const password = this.regform.get('password').value;
    const data = {'name': username, 'email': email, 'password': password};
    this.ds.register(data).subscribe((item) => {
      console.log(item);
    })
  }
}
