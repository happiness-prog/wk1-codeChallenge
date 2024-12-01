function netSalary(basicSalary, benefits) {
    //deductions
    const payee = 0.3
    const NHIF = 0.027
    const NSSF = 0.06

    //calculate grossSalary
    const grossSalary = (basicSalary + benefits)

    //calculate deductions
    const payeeTax = (payee * grossSalary)
    const nhifDeductions = (NHIF * grossSalary)
    const nssfDeductions = (NSSF * grossSalary)

    //calculate netsalary
    const netSalary = (grossSalary - (payeeTax + nhifDeductions + nssfDeductions))

    //display results
    console.log("Salary Breakdown")
    console.log(`Basic Salary: ${basicSalary}`)
    console.log(`Benefits: ${benefits}`)
    console.log(`Gross Salary: ${grossSalary}`)
    console.log(`PAYE Tax: ${payeeTax}`)
    console.log(`NHIF Deductions: ${nhifDeductions}`)
    console.log(`NSSF Deductions: ${nssfDeductions}`)
    console.log(`Net Salary: ${netSalary}`)

    return netSalary
}

// set values 
const basicSalary = 90000
const benefits = 20000

// Call the function
netSalary(basicSalary, benefits)