function speedDetector(){
    const speedLimit=70;

    // prompt speed
    let speed=prompt("Enter Speed")

//check speed
    if (speed<speedLimit){
        console.log("OK")
    }else if (speed>speedLimit){
        //calculate demerit points
        const demeritPoints=Math.floor((speed-speedLimit/5))
        console.log("Demerit points" + demeritPoints)
    }else if (demeritPoints>12){
        console.log("License suspended")
    }
}