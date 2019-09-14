import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/Models/Employee';
import { employeeEntryService } from './employee-entry.service';

@Component({
    selector: 'employee-entry',
    templateUrl: './employee-entry.html',
    styleUrls: ['./employee-entry.component.scss']
})

export class EmployeeEntryComponent implements OnInit {
    employeeList: Employee[] = [];
    displayedColumns: string[] = [ 'Id', 'firstName', 'secondName','dateOfBirth', 'image',
     'lastLoginDateTime', 'lastLogoutDateTime'];
    errorMessage: any;
    
    constructor(private employeeEntry: employeeEntryService) { }

    ngOnInit(): void {
        this.employeeEntry.getEmployeeList().subscribe(
            employeList => {
                this.employeeList.push(employeList);
            },
            error => this.errorMessage = <any>error
        );
    }
}