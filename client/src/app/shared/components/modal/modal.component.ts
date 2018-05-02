import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
 
// TODO: MatDialog -> MatModule ?
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  private modalForm: FormGroup = new FormGroup({
    "phone": new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  public closeDialog() {
    this.dialogRef.close();
  }

  private orderService() {
    console.log(this.modalForm.controls.phone.value);
    this.closeDialog();
  }

}
