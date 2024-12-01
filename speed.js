function checkSpeed(speed) {
    // 70 is the speedlimit constant
    const speedLimit = 70;
    if (typeof speed !== "number" || isNaN(speed)) {
        console.log("Invalid input. Please enter a valid number.");
        return;
    }
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        // Calculate the number of demerit points
        let demeritPoints = Math.floor((speed - speedLimit) / 5);
        console.log("Demerit points: " + demeritPoints);
    }
}
//input different values to test
checkSpeed(90)