import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';

import { AdminComponent } from './admin.component';
import { MastersListComponent } from './masters-list/masters-list.component';
import { UsersListComponent } from './users-list/users-list.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { MasterService } from '../master.service';
import { OrderService } from '../order.service';
import { UserService } from '../user.service';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule
  ],
  declarations: [
    AdminComponent, 
    MastersListComponent, 
    UsersListComponent, 
    OrdersListComponent
  ],
  providers: [
    MasterService,
    OrderService,
    UserService
  ]
})
export class AdminModule { }
