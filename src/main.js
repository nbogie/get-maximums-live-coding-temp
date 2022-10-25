/**
 * Returns an array of the maximum numbers from each of the subarrays of the given array.
 * 
 * function: getMaximums 
 * params: 
 *   inputArrays: number[][]
 * returns:
 *   array of numbers (maximums from each subarray in the input array)
 * 
*/
function getMaximums(inputArrays) {
    
}

console.log(getMaximums([]), [])
console.log(getMaximums([ [20] ]), [20])
console.log(getMaximums([ [-1000, -2000] ]), [-1000])
console.log(getMaximums([ [2, 3.14, 1], [100, 500, 200] ]), [3.14, 500])
console.log(getMaximums([[10, 70, 30], [40], [20, -30, 80]]), [70, 40, 80])
console.log(getMaximums([[10],[10,3,3],[-1,-50]]), [10, 10, -1])
console.log(getMaximums([[1,2,3,4], [3,5,2], [100,-1,4]]), [4,5,100])
