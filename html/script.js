function adition(){
let num1 = document.getElementById("num1").value;
let num2 = document.getElementById("num2").value;
let res = document .getElementById("res");

if(isNaN(num1)){
    alert("Le champ Nombre 1 ne doit pas etre nul");
}
if(isNaN(num2)){
    alert("Le champ Nombre 1 ne doit pas etre nul");
}

result = +num1 + +num2;
res.value = result ;
}