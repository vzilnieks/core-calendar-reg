import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardFilterComponent } from './dashboard-filter/dashboard-filter.component';
import { AuthComponent } from '../auth/auth.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    DashboardRoutingModule
  ],
  declarations: [
    DashboardComponent, 
    DashboardFilterComponent,
    AuthComponent
  ],
})
export class DashboardModule { }
