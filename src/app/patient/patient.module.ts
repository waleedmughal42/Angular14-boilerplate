import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';
import { RouterModule } from '@angular/router';
import { PatientRoutes } from './patient-routing.module';



@NgModule({
  declarations: [
    PatientDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(PatientRoutes)
  ]
})
export class PatientModule { }
