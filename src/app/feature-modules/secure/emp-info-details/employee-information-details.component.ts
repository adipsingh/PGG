import { Component, OnInit } from '@angular/core';
import { EmployeeDetails, FarmerDetails, PayrollDetails } from './employee-information-details.model';
import { EmployeeService } from './employee-information-details.service';

@Component({
  selector: 'app-employee-information-details',
  templateUrl: './employee-information-details.component.html'
})
export class EmployeeInformationDetailsComponent implements OnInit {

  public empDetails: EmployeeDetails;
  public farmerDetails: FarmerDetails[];
  public payrollInfo: PayrollDetails;
  public mobNumberPattern = '^((\\+91-?)|0)?[0-9]{10}$';
  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.empDetails = new EmployeeDetails();
    this.getEmployeeDetails();
    this.getFarmerDetails();
    this.getPayrollDetails();
  }

  getEmployeeDetails() {
    this.empService.getEmployeeDetails().subscribe(res => {
      this.empDetails = res;
    });
    console.log('Employee Details:', this.empDetails);
  }
  getFarmerDetails() {
    this.empService.getFarmerDetails().subscribe(res => {
      this.farmerDetails = res;
    });
  }
  getPayrollDetails() {
    this.empService.getPayrollDetails().subscribe(res => {
      this.payrollInfo = res;
    });
  }
  saveEmployeeDetails() {
    this.empService.saveEmployeeDetails(this.empDetails);
    console.log('Employee Details:', this.empDetails);
  }
  addEmployee() {
    this.empService.addEmployee(this.empDetails);
  }
  modifyEmployee() {
    this.empService.updateEmployee(this.empDetails);
  }
  findEmployee() {
    this.empService.findEmployee(this.empDetails);
  }
  clearEmployeeDetails() {
    this.empDetails = new EmployeeDetails();
    this.payrollInfo = new PayrollDetails();
  }
  CalculateTotal() {
    this.payrollInfo.TotalSalary = +this.payrollInfo.Basic + +this.payrollInfo.ConveyanceAllowance +
      +this.payrollInfo.DearnessAllowance + +this.payrollInfo.HRA + +this.payrollInfo.Incentives
      + +this.payrollInfo.MedicalAllowance
      + +this.payrollInfo.OtherAllowances;
  }

}
