import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectgeneralPageRoutingModule } from './subjectgeneral-routing.module';

import { SubjectgeneralPage } from './subjectgeneral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectgeneralPageRoutingModule
  ],
  declarations: [SubjectgeneralPage]
})
export class SubjectgeneralPageModule {}
