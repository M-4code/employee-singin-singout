import { Employee } from '../shared/Models/Employee';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError, from} from 'rxjs';
import {catchError, tap, map} from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class employeeEntryService{
    private url = 'http://localhost/api/getEmployeeList';
    
    constructor(private http: HttpClient) { }
    
    getEmployeeList(): any {
        this.http.get<Employee[]>(this.url).pipe(
            tap(data => console.log('All: '+ JSON.stringify(data))),
            catchError(this.handleError)
        );
        return from(employeeList);
    }

    handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occurred: ${err.error.message}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
}

export const employeeList: Employee[] = [
    {Id: 20190001, firstName: "John", secondName: "Wick",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},
 {Id: 20190002, firstName: "Liui", secondName: "Igu",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},
 {Id: 20190003, firstName: "Htyft", secondName: "Ojhj",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},
 {Id: 20190004, firstName: "Kffty", secondName: "Ouy",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},
 {Id: 20190005, firstName: "Liu", secondName: "Pgfy",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},
 {Id: 20190006, firstName: "JoWffgfhn", secondName: "wSD",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},
 {Id: 20190007, firstName: "Tam", secondName: "Jick",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},

 {Id: 20190008, firstName: "Cric", secondName: "Wick",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},
 {Id: 20190009, firstName: "John", secondName: "Cena",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()},
 {Id: 20190010, firstName: "Drax", secondName: "yy",
 dateOfBirth: new Date(), image: "Test", 
 lastLoginDateTime: new Date(), lastLogoutDateTime: new Date()}
  ];