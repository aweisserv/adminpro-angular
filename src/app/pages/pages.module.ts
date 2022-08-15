import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { ProgressComponent } from '../pages/progress/progress.component';
import { Grafica1sComponent } from '../pages/grafica1/grafica1.component';
import { PagesComponent } from '../pages/pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';




@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1sComponent,
    PagesComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    Grafica1sComponent,
    PagesComponent,
  ],  
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule
  ],
})
export class PagesModule { }
