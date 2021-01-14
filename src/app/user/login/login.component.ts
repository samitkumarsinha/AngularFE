import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { DataService } from '../../data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform;
  constructor(private fb:FormBuilder, private ds:DataService) { }

  ngOnInit(): void {
    this.loginform = this.fb.group({
      username: ['',Validators.required],
      password: ['',Validators.required],
    })
  }
  onsubmit(){
    const username = this.loginform.get('username').value;
    const password = this.loginform.get('password').value;
    const data = {'email': username, 'password': password};
    this.ds.login(data).subscribe((data)=>{
      localStorage.setItem('token', data.token);
      console.log(data);
    })
  }
}
