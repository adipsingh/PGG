export class EmployeeDetails {
    public CreationDate: Date;
    public LoginUserName: string;
    public Comployee: string;
    public Contractor: string;
    public BioMetricId: string;
    public EmployeeNmae: string;
    public Gender: string;
    public EmployeeDivision: string;
    public DOB: Date;
    public FatherSpouseName: string;
    public RelationShip: string;
    public ContactNumber: string;
    public AlternateContactNumber: string;
    public Email: string;
    public MaritalStatus: string;
    public NoOfDependends: number;
    public PresentAddress: string;
    public PermanantAddress: string;
    public BloodGroup: string;
    public Department: string;
    public SubDepartment: string;
    public Designation: string;
    public Skills: string;
    public EmpJoiningDate: Date;
    public InHouseExperience: number;
    public TotalExperience: number;
    public PfNumber: string;
    public ESINumer: string;
    public AadharNumber: string;
    public PassportNumber: string;
    public PanNumber: string;
    public PermanantDesc: string;
}
export class FarmerDetails {
    public Name: string;
    public DocPath: string;
}
export class PayrollDetails {
    public PaymentTenure: string;
    public Basic: number;
    public HRA: number;
    public DearnessAllowance: number;
    public ConveyanceAllowance: number;
    public MedicalAllowance: number;
    public Incentives: number;
    public OtherAllowances: number;
    public TotalSalary: number;
    constructor() {
        this.Basic = this.HRA = this.DearnessAllowance = this.ConveyanceAllowance =
            this.MedicalAllowance = this.Incentives = this.OtherAllowances = this.TotalSalary = 0;
    }
}
