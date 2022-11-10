import { Routes } from '@angular/router';
import { PatientDashboardComponent } from './patient-dashboard/patient-dashboard.component';

export const PatientRoutes: Routes = [
    {
     path: '',
    children: [
      {
          path: 'patient-dashboard',
          component: PatientDashboardComponent
      }
    ]
    },
  ];