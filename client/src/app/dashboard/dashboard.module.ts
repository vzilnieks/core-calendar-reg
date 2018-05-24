import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';
import { MasterService } from '../master.service';
import { OrderService } from '../order.service';
import { HttpService } from '../http.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardFilterComponent } from './dashboard-filter/dashboard-filter.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    AuthModule,
    DashboardRoutingModule,
  ],
  declarations: [
    DashboardComponent, 
    DashboardFilterComponent,
  ],
  providers: [
    MasterService, 
    OrderService,
    HttpService
  ]
})
export class DashboardModule { }
