import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';

// import { MatCardModule, MatGridListModule, MatButtonModule, MatListModule, MatTableModule, MatToolbarModule, MatInputModule, MatExpansionModule, MatDialogModule, MatCheckboxModule, MatSelectModule, MatRadioModule } from '@angular/material';

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
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule
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
    MatListModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule
  ],
  declarations: []
})
export class MatModule { }
