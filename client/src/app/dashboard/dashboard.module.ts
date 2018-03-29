import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { DashboardFilterComponent } from './dashboard-filter/dashboard-filter.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardComponent, DashboardFilterComponent]
})
export class DashboardModule { }
