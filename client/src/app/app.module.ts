import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { AuthService } from './auth.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
  ],
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  providers: [AuthService],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
