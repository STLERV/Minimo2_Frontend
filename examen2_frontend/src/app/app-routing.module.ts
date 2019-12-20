import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'subjectgeneral', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'subjectdetalle/:name',
    loadChildren: () => import('./subjectdetalle/subjectdetalle.module').then( m => m.SubjectdetallePageModule)
  },
  {
    path: 'subjectgeneral',
    loadChildren: () => import('./subjectgeneral/subjectgeneral.module').then( m => m.SubjectgeneralPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
