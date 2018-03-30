import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatButtonModule, MatTableModule, 
  MatToolbarModule, MatInputModule, MatExpansionModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule
  ],
  declarations: []
})
export class MatModule { }
