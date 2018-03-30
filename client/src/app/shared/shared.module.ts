import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
// import { ModalComponent } from './modal/modal.component';


@NgModule({
  imports: [
    CommonModule,
    CoreModule
  ],
  // declarations: [ModalComponent],
  // entryComponents: [ModalComponent]
})
export class SharedModule { }
