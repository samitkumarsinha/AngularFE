import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  login(data):Observable<any>{
    return this.http.post('http://localhost:8000/api/login', data);
  }
  register(data):Observable<any>{
    return this.http.post('http://localhost:8000/api/register',data);
  }
  createtask(data):Observable<any>{
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.post('http://localhost:8000/api/task',data, httpoptions);
  }
  tasklist():Observable<any>{
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.get('http://localhost:8000/api/task',httpoptions);
  }
  deltask(id){
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    return this.http.delete('http://localhost:8000/api/task/' + id ,httpoptions);
  }
  updatetask(data){
    const httpoptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json', 'Authorization' : 'Bearer '+localStorage.getItem('token') })
    }
    console.log(data);
    return this.http.put('http://localhost:8000/api/task/' + data.id, data ,httpoptions);
  }
}
