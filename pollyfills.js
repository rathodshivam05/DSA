let arrmap = [1, 1, 2, 3, 45, 8, 7];
// let res=arr.map((e)=>e*2); inbuilt map;
//custom map fuinction
Array.prototype.myMap = function (cb) {
    let newArr = new Array();
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i, this));
    }
    return newArr;
}
let resultMap = arrmap.myMap((e) => e * 2);
console.log(resultMap);

// custom higher order functin are the pollyfills

let arrfilter = [1, 1, 2, 3, 7];

// let resultFilter = arrfilter.filter((e) => e > 2);
// console.log(resultFilter); //inbuilt filter

//custom filter 
Array.prototype.myFilter = function (cb) {
    let newArr = new Array();
    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            newArr.push(this[i])
        }
    }
    return newArr;
}
let resultFilter = arrfilter.filter((e) => e > 2);
console.log(resultFilter);

// let resultReduce = arr.reduce((prev, next) => {
//     return prev + next;
// }, 3)
// console.log(resultReduce); //inbuilt reduce

// Custom Reduce function

Array.prototype.myReduce = function (cb, initVal) {
    let accum = initVal;
    for (let i = 0; i < this.length; i++) {
        accum = accum ? cb(accum, this[i], i, this) : this[i]
    }
    return accum;
}
let res = arr.myReduce((prev, next) => {
    return prev + next;
}, 3)
console.log(res);