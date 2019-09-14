import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';
import { employeeCentralComponent } from './employee-central/employee-central.component';

const routes: Routes = [
  {path:  "", pathMatch:  "full",redirectTo:  "home"},
  {path: "home", component: employeeCentralComponent},
  {path: "employeelist", component: EmployeeEntryComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
