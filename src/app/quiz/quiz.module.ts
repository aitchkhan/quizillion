import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { QuizRoutingModule } from './quiz-routing.module';
import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ ViewComponent, CreateComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,

    QuizRoutingModule,
  ]
})
export class QuizModule { }
