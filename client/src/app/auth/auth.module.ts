import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { CoreModule } from '../core/core.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    CoreModule
  ],
  declarations: [AuthComponent],
  exports: [AuthComponent]
})
export class AuthModule { }
