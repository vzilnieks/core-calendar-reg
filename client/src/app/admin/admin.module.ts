import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  declarations: [AdminComponent]
})
export class AdminModule { }
