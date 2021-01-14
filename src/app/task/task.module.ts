import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { CreateComponent } from './create/create.component';
import { ListComponent } from './list/list.component';
import { CardComponent } from './card/card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { UpdateComponent } from './update/update.component';


@NgModule({
  declarations: [CreateComponent, ListComponent, CardComponent, UpdateComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    CreateComponent,
    ListComponent,
    CardComponent
  ]
})
export class TaskModule { }
