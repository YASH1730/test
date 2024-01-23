var flat = function (arr, n) {
    if(n<=0)
    return arr;
    let newArr = [];
    arr.forEach(ele=>{
        if(Array.isArray(ele))
        newArr = [...newArr,...ele]
        else newArr.push(ele)
    })
    n-=1;
    arr=[...newArr];
    if(n<=0)
    return arr
    else
    return flat(arr,n);
};

function ForArray(obj){
    return obj.filter(ele=>true&&ele)
}

console.log(ForArray([1,2,0,false,0]));