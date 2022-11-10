import { Routes } from '@angular/router';
import { BlankComponent } from './layout/blank/blank.component';
import { FullComponent } from './layout/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path:'', redirectTo: '/authentication/login', pathMatch:'full' },
      {
        path: 'patient',
        loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: 'provider',
        loadChildren: () => import('./provider/provider.module').then(m => m.ProviderModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
      }
    ]
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path:'authentication',
        loadChildren: () => import ('./authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]
  },
  {path: '**', redirectTo: '/authentication/not-found', pathMatch: 'full'}
];

