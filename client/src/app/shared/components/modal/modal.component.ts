import { Component, OnInit, Inject, ViewEncapsulation, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { OrderService } from '../../../admin/orders-list/order.service';
import { MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent implements OnInit, OnDestroy {

  private orders$: Subscription;

  public modalForm: FormGroup = new FormGroup({
    'phone': new FormControl('', [ Validators.required ])
  });

  constructor(
    private orderService: OrderService,
    public dialogRef: MatDialogRef<ModalComponent>, 
    @Inject(MAT_DIALOG_DATA) private data: any
  ) { }

  ngOnInit() {
    this.orders$ = this.orderService.getOrders().subscribe();
  }

  ngOnDestroy() {
    this.orders$.unsubscribe();
  }

  private closeDialog() {
    this.dialogRef.close();
  }

  private makeOrder() {
    this.orders$ = this.orderService.addOrder(
      this.modalForm.controls.phone.value,
      this.data.date,
      this.data.time,
      this.data.masterId)
        .pipe(finalize(() => this.closeDialog()))
        .subscribe();
  }

}
