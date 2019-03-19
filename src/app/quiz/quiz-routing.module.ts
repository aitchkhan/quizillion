import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

const QuizRoutes: Routes = [
  {
    path: '',
    component: ViewComponent,
  },
  {
    path: 'create',
    component: CreateComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(QuizRoutes),
  ],
  exports: [
    RouterModule
  ]
})
export class QuizRoutingModule { }
