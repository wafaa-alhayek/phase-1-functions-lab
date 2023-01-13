// Code your solution in this file!
const hq=42;
function distanceFromHqInBlocks(pickup) {
    
    return Math.abs(pickup - hq);
    
}
function distanceFromHqInFeet(pickup) {
    return distanceFromHqInBlocks (pickup) * 264;
}
function distanceTravelledInFeet(pickupBlock, destinationBlock) {
    return Math.abs(pickupBlock - destinationBlock) * 264
}

function calculatesFarePrice(start, destination) {
    let fare =0;
    let distance = distanceTravelledInFeet(start, destination);
    if (distance > 400) {
        if (distance > 2000) {
            if (distance > 2500) {
                fare = `cannot travel that far`;
            } else {
                fare = 25;
            }
        } else {
            fare = (distance - 400) * .02;
        }
    } else {
        fare = 0;
    }
    return fare;
}