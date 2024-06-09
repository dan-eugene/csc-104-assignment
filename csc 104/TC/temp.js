function convertToFahreinit(){
    var  celsius = parseFloat(prompt("Enter the temperaturein degress Celsius"));
    var  fahrenhiet = (celsius *9/5)+32;
    alert(celsius + "degrees  is  equal" + fahrenhiet.toFixed(2));
}
convertToFahreinit()