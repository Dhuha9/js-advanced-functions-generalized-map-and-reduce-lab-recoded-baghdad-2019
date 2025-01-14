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
    if(startingPoint===undefined){
        let funType=typeof(fun(true,true)) 
        if(funType==="number"){
            startingPoint=0;
        }else if(funType==="boolean"){
            startingPoint=true;
        }
    }
    for(let i=0;i<sourceArray.length;i++){
        startingPoint= fun(sourceArray[i],startingPoint);
    }
    return startingPoint;
}