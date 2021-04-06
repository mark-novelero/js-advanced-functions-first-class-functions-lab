const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

function returnFirstTwoDrivers(drivers){
    const firstTwo = [];
    firstTwo.push(drivers[0], drivers[1]);
    return firstTwo;
}

function returnLastTwoDrivers(drivers){
    const lastTwo = [];
    lastTwo.push(drivers[2], drivers[3]);
    return lastTwo;
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


const createFareMultiplier = function (multiplier){
    return function(fare){
        return multiplier * fare; 
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers (arrayOfDrivers, returnFirstTwoDrivers){
    return returnFirstTwoDrivers(arrayOfDrivers);
};