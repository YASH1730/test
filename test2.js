// let pre = new Array(2);

// pre[5] = 5
// pre[6] = 6

// console.log(...pre)
let pre = [];
function sum(...args){
   
    if(pre[args] !== undefined)
    return pre[args]

   let result = args.reduce((res,val)=> res*=val ,1);

   pre[args] = result
   return result
}

console.log(sum(1,2,3,5,49,3,8,138,1,848,13,8,1,68,31,89,198,1,68,1,8,8,213))
console.log(sum(1,2,3,5,49,3,8,138,1,848,13,8,1,68,31,89,198,1,68,1,8,8,213))
console.log(sum(1,2,3,5,49,3,8,138,1,848,13,8,1,68,31,89,198,1,68,1,8,8,213))
console.log(sum(1,2,3,5,49,3,8,138,1,848,13,8,1,68,31,89,198,1,68,1,8,8,213))
