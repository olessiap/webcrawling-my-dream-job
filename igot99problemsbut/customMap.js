Array.prototype.customMap = function (callbackFn, thisArg) {
    const myArray = [];
    for(let i = 0; i < this.length; i++) {
        myArray[i] = callbackFn(this[i], i, this);
    }
    return myArray;
}

const myArray = [1, 2, 3];

console.log(myArray.customMap((el) => el));

