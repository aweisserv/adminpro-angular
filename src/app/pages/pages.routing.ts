import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Grafica1sComponent } from './grafica1/grafica1.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [
    { 
      path: 'dashboard', 
      component: PagesComponent,
      children: [
        { path: '', component: DashboardComponent },
        { path: 'grafica1', component: Grafica1sComponent },
        { path: 'progress', component: ProgressComponent }
      ]
    },
  ];
  
  
  @NgModule({
    declarations: [],
    imports: [
      RouterModule.forChild( routes )
    ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }