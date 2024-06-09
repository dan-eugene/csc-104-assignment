function CALCULATECOMPOUNDINTEREST(){
    var PRINCIPAL = parseFloat(prompt("ENTER THR PRINCIPAL AMOUNT:"));
    var RATE = parseFloat(prompt("ENTER THE ANNUAL INTERST RATE(IN %):"))/100;
    var TIME = parseFloat(prompt("ENTER THE TME IN YEARS"));
    var COMPOUNDFREQUENCY = parseInt(prompt("ENTER THE  NUMBER OF TIMES INTEREST IS COMPUNDED PER YEAR"));

    var AMOUNT = PRINCIPAL * Math.pow((1 + RATE/COMPOUNDFREQUENCY),(COMPOUNDFREQUENCY*TIME));
    var INTEREST = AMOUNT - PRINCIPAL;

    alert("the compound interest is: "+ INTEREST.toFixed(2));
    alert("the total amount is: " + AMOUNT.toFixed(2));
}

CALCULATECOMPOUNDINTEREST()