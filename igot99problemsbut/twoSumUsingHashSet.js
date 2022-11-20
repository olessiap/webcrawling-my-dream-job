// Given an array of integers, find a pair of integers that sums to a number X.

const twoSumUsingHashSet = (array, target) => {
   if(array == null) return;
    const resultsSet = new Set();
    for(let i = 0; i < array.length; i++) {
        if(resultsSet.has(target - array[i])) {
            return [array[i], target - array[i]]
        } else {
            resultsSet.add(array[i]);
        }
    }
}

console.log(twoSumUsingHashSet([6,3,5,2,1,7], 4)) // [3, 1]

// time complexity O(n)
// space complexity 0(n)