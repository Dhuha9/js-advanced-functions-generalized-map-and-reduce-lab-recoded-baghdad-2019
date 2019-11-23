// Add your functions here
map([1, 2, 3, -9], function(a){ return a * a })

function map(sourceArray,fun){
    let newArray=[];
    for(let i=0;i<sourceArray.length;i++){
        newArray.push(fun(sourceArray[i]));
    }
    return newArray;
}


function reduce(sourceArray,fun,startingPoint){
 
    startingPoint=0;
  
    for(let i=0;i<sourceArray.length;i++){
        startingPoint= fun(sourceArray[i],startingPoint);
    }
    return startingPoint;

}