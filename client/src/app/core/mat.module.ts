import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatButtonModule, MatTableModule, MatToolbarModule, MatInputModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule
  ],
  declarations: []
})
export class MatModule { }
