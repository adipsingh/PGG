import { EmployeeDetails, FarmerDetails, PayrollDetails } from './employee-information-details.model';

export const employeeDetails: EmployeeDetails = {
    CreationDate: new Date(),
    LoginUserName: 'asdf',
    Comployee: 'Yes',
    Contractor: 'asdf',
    BioMetricId: 'asdf',
    EmployeeNmae: 'asdf',
    PermanantDesc: 'asdf',
    PanNumber: 'asdf',
    ESINumer: 'asdf',
    AadharNumber: 'asdf',
    PassportNumber: 'asdf',
    PfNumber: 'asdf',
    TotalExperience: 0,
    InHouseExperience: 0,
    Designation: 'asdf',
    Skills: 'asdf',
    EmpJoiningDate: new Date(2010, 10, 10),
    Gender: 'asdf',
    EmployeeDivision: 'Staff',
    DOB: new Date(1993, 10, 10),
    FatherSpouseName: 'asdf',
    RelationShip: 'asdf',
    ContactNumber: '999999999',
    AlternateContactNumber: '999999999',
    Email: 'test@gmail.com',
    MaritalStatus: 'Yes',
    NoOfDependends: 2,
    PresentAddress: 'adf',
    PermanantAddress: 'sdf',
    BloodGroup: 'b+ve',
    Department: 'asdf',
    SubDepartment: 'asdf'
};
export const farmerInfo: FarmerDetails[] = [{
    Name: 'Clearance Approval', DocPath: 'c:\\Documents\\clearancepath'
},
{
    Name: 'Previous Approval', DocPath: 'c:\\Documents\\PreviousPath'
}];

export const payrollInfo: PayrollDetails = {
    PaymentTenure: 'Yearly', Basic: 10000, HRA: 2000, DearnessAllowance: 10000, ConveyanceAllowance: 200,
    MedicalAllowance: 1500, Incentives: 3250, OtherAllowances: 1900, TotalSalary: 25000
};
