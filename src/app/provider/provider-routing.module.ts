import { Routes } from '@angular/router';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';

export const ProviderRoutes: Routes = [
    {
     path: '',
    children: [
      {
          path: 'provider-dashboard',
          component: ProviderDashboardComponent
      }
    ]
    },
  ];