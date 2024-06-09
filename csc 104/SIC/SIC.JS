// function to calculate  simple interest
function
calculatesimpleinterest(principal, rate, time){
    return(principal * rate * time)/100;
}

//Get input  from user
var principal =  parseFloat(prompt("Enter Principal Amount:"));
var rate =  parseFloat(prompt("Enter annual interest rate(in %):"));
var time = parseFloat(prompt("Enter time(in years):"));

//validate inputs
if (isNaN(principal) || isNaN(rate) || isNaN(time)){
    alert("Please enter valid numerical value");
} else{
    //calculate  simple interest
    let interest =  calculatesimpleinterest(principal,rate,time);

    // display the result
    alert("the simple interest is: "+ interest)
}
calculatesimpleinterest()