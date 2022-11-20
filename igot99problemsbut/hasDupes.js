// given an array return true if there are any duplicates

const hasDupes = (a) => {
    if (a == null) return;
    const resultsSet = new Set();
    for(let i = 0; i < a.length; i++) {
        if(resultsSet.has(a[i])){
            return true;
        } else {
            resultsSet.add(a[i]);
        }
    }
}

console.log(hasDupes([1,2,2,4,3]));

// time complexity O(n)
// space complecity O(n)