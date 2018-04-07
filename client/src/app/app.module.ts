import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ModalComponent } from './shared/components/modal/modal.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AuthModule } from './auth/auth.module';

// TODO: component refactoring
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { DashboardFilterComponent } from './dashboard/dashboard-filter/dashboard-filter.component';
// import { AdminComponent } from './admin/admin.component';
// import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    DashboardModule,
    AuthModule
  ],
  providers: [],
  entryComponents: [ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
