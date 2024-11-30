
// FUNCTION
function studentGradeGenerator(){

   
    // PROMPT USER TO ENTER MARKS 
    let marks= prompt("Enter student marks")



    // DETERMINE GRADE
    if (marks>79&&marks<=100){
        return "A"
    }else if (marks<=79 && marks>=60){
        return "B"
    }else if (marks<=59 && marks>=49){
        return "C"
    }else if (marks<49&& marks>=40){
        return "D"
    }else if (marks<40){
        return "E"
    }
}



// OUTPUT
const grade =studentGradeGenerator
console.log(`The student's grade is: ${grade}`);