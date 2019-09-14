import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
    selector: 'employee-central',
    templateUrl: './employee-central.html',
    styleUrls: ['./employee-central.scss']
})

export class employeeCentralComponent implements OnInit{
     employeeDetailsForm : FormGroup

     constructor(){
         this.employeeDetailsForm = this.createEmployeeDetailsForm();
     }

     createEmployeeDetailsForm(){
         return new FormGroup ({
            firstName: new FormControl(),
            secondName: new FormControl(),
            employeeId: new FormControl()
         })
     }

     onSubmit(){
        console.log("Submit");
     }

     revert(){
         console.log("clear");
     }

    ngOnInit(){}
}