function netSalary(){
    //prompt input basicSalary and benefits 
    const basicSalary= prompt ("Enter basic salary")
    const benefits= prompt("Enter benefits")
    //deduction
    const payee=0.3
    const NHIF=0.027
    const NSSF=0.06
    //calculate deductions
    const payeeTax=(payee*(basicSalary+benefits))
    const nhifDeductions=(NHIF*(basicSalary+benefits))
    const nssfDeductions=(NSSF*(basicSalary+benefits))
    //calculate grossSalary
    const grossSalary=(basicSalary+benefits)
    //calculate netsalary
    const netSalary=(grossSalary-(payeeTax+nhifDeductions+nssfDeductions))
}
netSalary()