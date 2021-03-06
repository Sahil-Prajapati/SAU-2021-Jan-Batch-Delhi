package com.payment;

public class SoftwareEngineer extends Employee{
	
	// Deduction percentage is a combination of tax, epf and gratuity.
	private static final double DeductionPercentage = 6.03;
	
	public SoftwareEngineer(int employeeId, String employeeName, int employeeMobileNo, String employeeEmailId,
			double employeeCTC, String preferredNotifyChannel) {
		super(employeeId, employeeName, employeeMobileNo, employeeEmailId, employeeCTC, preferredNotifyChannel);
		
		double deductedAmount = (this.getEmployeeCTC() * DeductionPercentage)/100;	
		this.setEmployeeNetSalary(this.getEmployeeCTC() - deductedAmount);
	}

}
