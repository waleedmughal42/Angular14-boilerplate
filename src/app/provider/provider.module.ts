import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProviderDashboardComponent } from './provider-dashboard/provider-dashboard.component';
import { RouterModule } from '@angular/router';
import { ProviderRoutes } from './provider-routing.module';



@NgModule({
  declarations: [
    ProviderDashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProviderRoutes)

  ]
})
export class ProviderModule { }
