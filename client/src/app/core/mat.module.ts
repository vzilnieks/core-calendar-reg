import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatGridListModule, MatButtonModule, MatListModule, MatTableModule, 
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
    MatDialogModule,
    MatListModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatToolbarModule,
    MatInputModule,
    MatGridListModule,
    MatExpansionModule,
    MatDialogModule,
    MatListModule
  ],
  declarations: []
})
export class MatModule { }
