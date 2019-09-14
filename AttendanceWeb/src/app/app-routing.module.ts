import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeEntryComponent } from './employee-entry/employee-entry.component';

const routes: Routes = [
  {
    path: 'employeeEntry',
    component: EmployeeEntryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
