import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { of } from 'rxjs';
import { employeeDetails, farmerInfo, payrollInfo } from './data';
import { EmployeeDetails } from './employee-information-details.model';



@Injectable({
    providedIn: 'root'
})
export class EmployeeService {

    constructor(private http: HttpClient) { }

    private baseURL = environment.baseServiceURL;

    getEmployeeDetails() {
        return of(employeeDetails);
        // return this.http.get<any>(`${this.baseURL}/getEmployeeDetails`).subscribe(res=>{
        // });
    }
    saveEmployeeDetails(Details: EmployeeDetails) {
        return of(employeeDetails);
    }
    findEmployee(crieteria: any) {
        return of(employeeDetails);
    }
    updateEmployee(details: EmployeeDetails) {
        return of(details);
    }
    addEmployee(details: EmployeeDetails) {
        return of(details);
    }
    getFarmerDetails() {
        return of(farmerInfo);
    }
    getPayrollDetails() {
        return of(payrollInfo);
    }
}
