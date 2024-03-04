const Queue = require('./Queue.js');
/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let queue = new Queue();
    let currentFuel = 0;

    let startingStations = getPotentialStartingStations(gas, cost);
    if(startingStations.length == 0)
        return -1; 

    let currentIndex = startingStations[0];

    while(queue.items.length != gas.length){ //until all stations are added to the queue
        let nextIndex;
        if(currentIndex == gas.length - 1)
            nextIndex = 0;
        else
            nextIndex = currentIndex + 1;

       
        //currentFuel + gas[currentIndex] - cost[ currentIndex] + gas[nextIndex] > cost[nextIndex]
        if(currentFuel + gas[currentIndex] >= cost[currentIndex]){
            queue.enqueue(currentIndex);
            currentFuel = currentFuel + gas[currentIndex] - cost[ currentIndex] ;
            currentIndex = nextIndex;            
        }
        else{
            //remove the first station as it did not complete circuit and look for next starting station
            startingStations.shift();
            while(startingStations[0] < currentIndex && startingStations.length !== 0) //empty starting stations until the station where currentindex is stuck.  if you start from station a and stuck at b, then you can't get to b from any station between a and b.
                startingStations.shift();
           if( startingStations.length == 0) 
           return -1;
           // currentIndex = startingStations[0];
            currentFuel = 0;
            while( !queue.isEmpty() && queue.peek() !== currentIndex)
                queue.dequeue();
            currentIndex = startingStations[0];
        }
       

    }
    return currentIndex;

};

const getPotentialStartingStations = (gas, cost) => {
    let startingStations = [];
    let currentIndex = 0;
    while(currentIndex < gas.length){
        if( gas[currentIndex] >= cost[currentIndex]){ 
            startingStations.push(currentIndex);
              
        }
        currentIndex++;
    }
    return startingStations;
   
}

console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]));