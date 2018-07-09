import { NgModule } from '@angular/core';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { CoreModule } from '../core/core.module';
import { AuthModule } from '../auth/auth.module';
import { MasterService } from '../admin/masters-list/master.service';
import { OrderService } from '../admin/orders-list/order.service';
import { HttpService } from '../core/http.service';

import { DashboardComponent } from './dashboard.component';
import { DashboardFilterComponent } from './dashboard-filter/dashboard-filter.component';
import { DashboardSliderComponent } from './dashboard-slider/dashboard-slider.component';
import { DashboardDaysComponent } from './dashboard-days/dashboard-days.component';

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
    DashboardSliderComponent, 
    DashboardDaysComponent,
  ],
  providers: [
    MasterService, 
    OrderService,
    HttpService
  ]
})
export class DashboardModule { }
