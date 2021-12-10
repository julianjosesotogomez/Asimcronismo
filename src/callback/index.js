function sum(numOne, numTwo){
    return numOne + numTwo;
}
function calc(numOne, numTwo, callback){
    return callback(numOne, numTwo);
}
console.log(calc(6,2,sum));

//-----------------------------------------------------------------------------

function date(callback){
    console.log(new Date);
    setTimeout(function (){
        let date = new Date;
        callback(date);
    },3000)
}
function printDate(dateNow){
    console.log(dateNow)
}
date(printDate);