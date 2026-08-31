let num1 = 50;
let num2 = 70;
let num3 = 40;
let num4 = 30;
let num5 = 40;
let num6 = 50;
let num7 = 40;
let num8 = 20;
let num9 = 30;
let num10 = 40;
let num11 = 50;
let num12 = 20;
let num13 = 30;





let sum = num1 + num2;
document.getElementById('sum').innerHTML  = `num1= ${num1}<br>  num2= ${num2}<br> The Sum Of Num1 and Num2 ${sum}`;


let sub = num3 - num4;
document.getElementById('sub').innerHTML  = `num3= ${num3}<br>  num4= ${num4}<br> The Sub Of Num3 and Num4= ${sub}`;



let calculate = num5 * num6;
document.getElementById('calculate').innerHTML  = `num5= ${num5}<br>  num6= ${num6}<br> The calculate Of Num5 and Num6= ${calculate}`;

let div = num7/num8;
if(num7 == 0 || num8 == 0){
    document.getElementById(`div`).innerHTML = "You Cant't Divided By Zero";
}else{
    // document.getElementById(`div`).innerHTML = `division of ${num7} and ${num8} is ${div}`
    document.getElementById('div').innerHTML  = `num7= ${num7}<br>  num8= ${num8}<br> The div Of Num7 and Num8= ${div}`;
}

let sq = num9 * num10
document.getElementById('sq').innerHTML  = `num9= ${num9}<br>  num10= ${num10}<br> The calculate Of Num9 and Num10= ${sq}`;

let sb = num11 * num12* num13;
document.getElementById(`sb`).innerHTML = `num11= ${num11}<br> num12= ${num12}<br> num13= ${num13}<br> The Calculate of num11 num12 And13= ${sb}`
