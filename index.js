const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function countBatteries(batch, total) {
    return batch + total 
}

let totalBatteries = batteryBatches.reduce(countBatteries, 0)
