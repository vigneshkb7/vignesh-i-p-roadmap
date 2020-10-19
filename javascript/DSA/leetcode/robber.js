/**
 * Robber
 * All the houses at this place are arranged in a circle so first and last elemnt becomes adjacent
 * 
 * you can't rob @ adjacent house and also in the maximum amount that can be robbed.
 * 
 * scenario -1  IP => [2,3,4]  OP => 3
 * 
 * scenarios -2 IP => [1,2,3,1] OP => 4
 * 
 * scenario -3  IP => [0] OP => 0
 * 
 * secnario -4 IP => [1,2] OP => 2
 */

const roberrySum = (houses, start,end) => {
    const robbed = [];
    for (var i = start;i < end; i = i + 2){
        robbed.push(houses[i])
    }
    return robbed.reduce((a, b) => a + b, 0);
}


const maxRobbedSum = (houses) => {
    console.log(houses)
    if (houses.length === 0) return 0;
    if (houses.length === 1) return houses[0];
    if (houses.length === 2) return Math.max(houses[0],houses[1])
    return Math.max(roberrySum(houses, 0,houses.length-1), roberrySum(houses, 1,houses.length));
}

