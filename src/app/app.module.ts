import { MatcomponentModule } from './models/matcomponent/matcomponent.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { CustDetailsComponent } from './components/cust-details/cust-details.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CustomerAddressComponent } from './components/customer-address/customer-address.component';
import { CustomerAccountComponent } from './components/customer-account/customer-account.component';
import { ConvertCamelCasePipe } from './pipes/convert-camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CustDetailsComponent,
    DashboardComponent,
    CustomerAddressComponent,
    CustomerAccountComponent,
    ConvertCamelCasePipe
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatcomponentModule
  ],
  providers: [TopBarComponent],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
