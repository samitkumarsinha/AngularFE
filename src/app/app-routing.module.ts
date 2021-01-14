import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './user/register/register.component';
import { LoginComponent } from './user/login/login.component';
import { CreateComponent } from './task/create/create.component';
import { ListComponent } from './task/list/list.component';
import { UpdateComponent } from './task/update/update.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path : 'user', children: [
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent}
  ]},
  {path : 'task', children: [
    {path: 'create', component: CreateComponent},
    {path: 'list', component: ListComponent},
    {path: 'update', component: UpdateComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
