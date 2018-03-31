import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
 
// TODO: MatDialog -> MatModule ?
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

// @Component({
//   selector: 'dialog-model',
//   // templateUrl: 'dialog-model.html'
// })
// export class DialogModel {
//   constructor (public dialog: MatDialog) {}
//
//   openDialog(): void {
//     let dialogRef = this.dialog.open(DialogModel, {
//       width: '100px',
//       data: { name: "qqq" }
//     });
//
//     dialogRef.afterClosed().subscribe(result => {
//       console.log('dfsfs');
//     });
//   }
// }

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }
  

}
