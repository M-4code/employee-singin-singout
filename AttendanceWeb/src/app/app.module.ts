import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { MatTableModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { employeeEntryService } from './employee-entry/employee-entry.service';
import { ReactiveFormsModule } from '@angular/forms';
import { employeeCentralComponent } from './employee-central/employee-central.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent, 
    EmployeeEntryComponent,
    employeeCentralComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    employeeEntryService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
