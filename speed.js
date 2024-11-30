function speedDetector(){
    const speedLimit=70;

    // prompt user to enter speed
    let speed = parseFloat(prompt("Enter the speed of the car "));

    

//check speed
    if (speed<speedLimit){
        console.log("OK")
    }else if (speed>speedLimit){
        //calculate demerit points
        const demeritPoints=Math.floor((speed-speedLimit)/5)
        console.log("Demerit points" + demeritPoints)
        // check if license should be suspended
    }else if (demeritPoints>12){
        console.log("License suspended")
    }
}
speedDetector()