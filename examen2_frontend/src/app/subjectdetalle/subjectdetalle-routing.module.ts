import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectdetallePage } from './subjectdetalle.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectdetallePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectdetallePageRoutingModule {}
