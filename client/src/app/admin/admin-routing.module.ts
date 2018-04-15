import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { MastersListComponent } from './masters-list/masters-list.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { 
    path: '', //component: AdminComponent, 
    children: [
      { 
	path: '',
	children: [
	  { path: '', redirectTo: 'orders' },
	  { path: 'orders', component: OrdersListComponent },
	  { path: 'masters', component: MastersListComponent },
	  { path: 'users', component: UsersListComponent }
	]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
