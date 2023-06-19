// let arr=[1,1,2,3,45,8,7];
// // let res=arr.map((e)=>e*2);
// Array.prototype.myMap=function (cb){
// let newArr=new Array();
// for(let i=0;i<this.length;i++){
//     newArr.push(cb(this[i], i, this));
// }
// return newArr;
// }
// let res=arr.myMap((e)=>e*2);
// console.log(res);

// custom higher order functin are the pollyfills

let arr = [1, 1, 2, 3, 7];

// let  res=arr.filter((e)=> e>2);
// console.log(res);

// Array.prototype.myFilter=function (cb){
// let newArr=new Array();
// for(let i=0;i<this.length;i++){
//  if(cb(this[i], i, this)){
//     newArr.push(this[i])
//  }
// }
// return newArr;
// }
// let  res=arr.filter((e)=> e>2);
// console.log(res);

// let res = arr.reduce((prev, next)=> {
//  return prev+next;
// },3)
// console.log(res);

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