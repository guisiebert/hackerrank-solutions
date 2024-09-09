// Challenge: https://www.hackerrank.com/challenges/flatland-space-stations/problem?isFullScreen=true

function flatlandSpaceStations(n, c) {
    const stations = c.sort((a, b) => a - b);
    
    let maxDistance = 0;

    // Check distance for the first city to the first station
    maxDistance = Math.max(maxDistance, stations[0] - 0);
    
    // Check distance for the last city to the last station
    maxDistance = Math.max(maxDistance, n - 1 - stations[stations.length - 1]);
    
    // Check distances between consecutive stations
    for (let i = 1; i < stations.length; i++) {
        const distance = (stations[i] - stations[i - 1]) / 2; // Middle point between two stations
        maxDistance = Math.max(maxDistance, distance);
    }

    return Math.floor(maxDistance);
}
