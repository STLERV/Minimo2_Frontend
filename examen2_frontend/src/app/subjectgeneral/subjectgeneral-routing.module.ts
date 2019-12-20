import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubjectgeneralPage } from './subjectgeneral.page';

const routes: Routes = [
  {
    path: '',
    component: SubjectgeneralPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubjectgeneralPageRoutingModule {}
