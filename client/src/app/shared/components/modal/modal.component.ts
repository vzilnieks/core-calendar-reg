import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from './../../../order.service';
 
// TODO: MatDialog -> MatModule ?
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {

  private $orders: Subscription;

  public modalForm: FormGroup = new FormGroup({
    "phone": new FormControl('', [ Validators.required ])
  });

  constructor(
    private orderService: OrderService,
    public dialogRef: MatDialogRef<ModalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.$orders = this.orderService.getOrders().subscribe();
  }

  ngOnDestroy() {
    this.$orders.unsubscribe();
  }

  private closeDialog() {
    this.dialogRef.close();
  }

  private makeOrder() {
    this.$orders = this.orderService.addOrder(this.modalForm.controls.phone.value)
        .subscribe(() => this.closeDialog());
  }

}
