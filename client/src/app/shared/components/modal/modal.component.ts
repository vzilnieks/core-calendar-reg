import { Component, OnInit, Inject, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from './../../../order.service';
 
// TODO: MatDialog -> MatModule ?
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit {

  public modalForm: FormGroup = new FormGroup({
    "phone": new FormControl('')
  });

  constructor(
    private orderService: OrderService,
    public dialogRef: MatDialogRef<ModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

  private closeDialog() {
    this.dialogRef.close();
  }

  private makeOrder() {
    this.orderService.addOrder(this.modalForm.controls.phone.value);
    this.closeDialog();
  }

}
