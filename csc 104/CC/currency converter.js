function ConvertTOnaira(){
    return(dollar * 1430);
}
//GET INPUT FROM USER 
let DOLLAR =parseFloat(prompt("Enter the amount in dollars:"));
//validate input
if(isNaN(dollar)){
    alert("please enter a vaild numerical value")
}else{
    //conevert to naira 
    let naira =ConvertTOnaira();

    //display the result
    alert(dollar +" USD is equal to "+ naira.toFixed(2) +"NGN" );
}