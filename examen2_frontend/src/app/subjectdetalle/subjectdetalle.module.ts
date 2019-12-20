import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubjectdetallePageRoutingModule } from './subjectdetalle-routing.module';

import { SubjectdetallePage } from './subjectdetalle.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubjectdetallePageRoutingModule
  ],
  declarations: [SubjectdetallePage]
})
export class SubjectdetallePageModule {}
