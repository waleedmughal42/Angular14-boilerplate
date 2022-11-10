import { Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

export const AdminRoutes: Routes = [
    {
     path: '',
    children: [
      {
          path: 'admin-dashboard',
          component: AdminDashboardComponent
      }
    ]
    },
  ];