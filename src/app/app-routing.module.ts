import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { DashboardComponent } from './_main_content/dashboard/dashboard.component';

const ROUTES : Routes = [
  {
    path:'',
    component:DashboardComponent,
    pathMatch:'full'
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
