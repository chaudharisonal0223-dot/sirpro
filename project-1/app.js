//Q1.Create a program to calculate the sum of two numbers.
let num1 = 50;
let num2 = 70;
let sum = num1 + num2;
document.getElementById('sum').innerHTML = `num1= ${num1}<br>  num2= ${num2}<br> The Sum Of Num1 and Num2 ${sum}`;
// Q2.Create a program to calculate the difference between two numbers.
let num3 = 40;
let num4 = 30;
let sub = num3 - num4;
document.getElementById('sub').innerHTML = `num3= ${num3}<br>  num4= ${num4}<br> The Sub Of Num3 and Num4= ${sub}`;
//   Q3.Create a program to calculate the product of two numbers.
let num5 = 40;
let num6 = 50;
let calculate = num5 * num6;
document.getElementById('calculate').innerHTML = `num5= ${num5}<br>  num6= ${num6}<br> The calculate Of Num5 and Num6= ${calculate}`;
// Q4.Write a program to divide two numbers and handle division by zero using conditional statements.
let num7 = 40;
let num8 = 20;
let div = num7 / num8;
if (num7 == 0 || num8 == 0) {
    document.getElementById(`div`).innerHTML = "You Cant't Divided By Zero";
}
else {
    // document.getElementById(`div`).innerHTML = `division of ${num7} and ${num8} is ${div}`
    document.getElementById('div').innerHTML = `num7= ${num7}<br>  num8= ${num8}<br> The div Of Num7 and Num8= ${div}`;
}
//    Q.5 Create a program to calculate the square and cube of a number.
let num9 = 30;
let num10 = 40;
let sq = num9 * num10;
document.getElementById('sq').innerHTML = `num9= ${num9}<br>  num10= ${num10}<br> The calculate Of Num9 and Num10= ${sq}`;
let num11 = 50;
let num12 = 20;
let num13 = 30;
let sb = num11 * num12 * num13;
document.getElementById(`sb`).innerHTML = `num11= ${num11}<br> num12= ${num12}<br> num13= ${num13}<br> The Calculate of num11 num12 And13= ${sb}`;
// Q.6 Develop a program to calculate the area of a rectangle.
let length = 10;
let width = 5;
let area = length * width;
document.getElementById('result').innerHTML = `Length = ${length}<br> Width = ${width}<br> Area of Rectangle = ${area}`;
//   Q.7 Create a program to calculate the area of a circle.
let radius = 5;
let circle = 3.14 * radius * radius;
document.getElementById('circles').innerHTML = `Radius = ${radius}<br> Area of Circle = ${circle}`;
// Q.8 Write a program to convert Celsius to Fahrenheit
let celsius = 25;
let fahrenheit = (celsius * 9 / 5) + 30;
document.getElementById('close').innerHTML = `Celsius = ${celsius}<br> Fahrenheit = ${fahrenheit}`;
//Q.9 Develop a program to calculate Simple Interest using the formula
let P = 10000;
let R = 8;
let T = 4;
let SI = (P * R * T) / 100;
document.getElementById('income').innerHTML = `Principal = ${P}<br> Rate = ${R}<br> Time = ${T} years<br> Simple Interest = ${SI}`;
//  Q.10  Write a program to check whether a number is even or odd.
let number = 7;
if (number % 2 == 0) {
    document.getElementById('check').innerHTML = `Number = ${number}<br>Number is Even`;
}
else {
    document.getElementById('check').innerHTML = `Number = ${number}<br>Number is Odd`;
}
// Q.11 Create a program to check whether a number is positive, negative, or zero.
let chok = -5;
if (number > 0) {
    document.getElementById('choks').innerHTML = `Chok = ${chok}<br>Number is Positive`;
}
else if (number < 0) {
    document.getElementById('choks').innerHTML = `Chok = ${chok}<br>Number is Negative`;
}
else {
    document.getElementById('choks').innerHTML = `Chok = ${chok}<br>Number is Zero`;
}
//Q. 12 Develop a program to find the largest of two numbers using if-else.//
let num15 = 20;
let num16 = 15;
if (num1 > num2) {
    document.getElementById('chik').innerHTML = `Number 15 = ${num15}<br>Number 16 = ${num16}<br>Largest Number = ${num15}`;
}
else {
    document.getElementById('chik').innerHTML = `Number 15 = ${num15}<br>Number 16 = ${num16}<br>Largest Number = ${num16}`;
}
// Q. 13 Create a program to find the largest of three numbers using conditional statements.
let num17 = 15;
let num18 = 20;
let num19 = 25;
if (num17 > num18 && num17 > num19) {
    document.getElementById('pass').innerHTML = `Number 17 = ${num17}<br> Number 18 = ${num18}<br></br> Number 19 = ${num19}<br> Largest Number = ${num17}`;
}
else if (num2 > num1 && num2 > num3) {
    document.getElementById('pass').innerHTML = `Number 17 = ${num17}<br> Number 18 = ${num18}<br> Number 19= ${num19}<br> Largest Number = ${num18}`;
}
else {
    document.getElementById('pass').innerHTML = `Number 17 = ${num17}<br> Number 18 = ${num18}<br> Number 19 = ${num19}<br> Largest Number = ${num19}`;
}
//Q.14 Write a program to check whether a person is eligible for voting (age ≥ 18).
let age = 25;
if (age >= 18) {
    document.getElementById('chekout').innerHTML = `Age = ${age}<br> Person is eligible for voting`;
}
else {
    document.getElementById('chekout').innerHTML = `Age = ${age}<br> Person is not eligible for voting`;
}
// Q.15 Develop a program to calculate grade based on marks:
let marks = 55;
let grade;
if (marks >= 90) {
    grade = "A";
}
else if (marks >= 75 - 89) {
    grade = "B";
}
else if (marks >= 50 - 74) {
    grade = "C";
}
else {
    grade = "Fail";
}
document.getElementById('total').innerHTML = `Marks = ${marks}<br> Grade = ${grade}`;
// Q.16 Write a program to check whether a given year is a leap year
let year = 2025;
if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
    document.getElementById('leap').innerHTML = `Year = ${year}<br> ${year} is a Leap Year`;
}
else {
    document.getElementById('leap').innerHTML = `Year = ${year}<br> ${year} is not a Leap Year`;
}
//  Q. 17 Create a program to check whether a number is divisible by both 5 and 11.
let numbers = 20;
if (number % 5 == 0 && number % 11 == 0) {
    document.getElementById('number').innerHTML = `Number = ${numbers}<br>  Number is divisible by both 5 and 11`;
}
else {
    document.getElementById('numer').innerHTML = `Number = ${numbers}<br> Number is not divisible by both 5 and 11`;
}
//Q.18 Develop a simple calculator using switch statement to perform addition, subtraction, multiplication, and division.
let num21 = 20;
let num22 = 5;
let operator = "*";
let result;
switch (operator) {
    case "+":
        result = num21 + num22;
        break;
    case "-":
        result = num21 - num22;
        break;
    case "*":
        result = num21 * num22;
        break;
    case "/":
        result = num21 / num22;
        break;
    default:
        result = "Invalid Operator";
}
document.getElementById('inavalid').innerHTML = `Number 21 = ${num21}<br>   Number 2 = ${num22}<br> Operator = ${operator}<br> Result = ${result}`;
//Q.19 Write a program to calculate BMI and display the health category (Underweight, Normal, Overweight, Obese).    
let weight = 70;
let height = 1.75;
let bmi;
let category;
bmi = weight / (height * height);
if (bmi < 18.5) {
    category = "Underweight";
}
else if (bmi < 25) {
    category = "Normal";
}
else if (bmi < 30) {
    category = "Overweight";
}
else {
    category = "Obese";
}
document.getElementById('chekin').innerHTML = `Weight = ${weight} kg<br> Height = ${height} m<br> BMI = ${bmi.toFixed(2)}<br> Category = ${category}`;
// Q. 20 Create a program to calculate electricity bill based on units consumed:
let units = 300;
let bill;
if (units <= 100) {
    bill = units * 5;
}
else if (units <= 200) {
    bill = (100 * 5) + ((units - 100) * 7);
}
else {
    bill = (100 * 5) + (100 * 7) + ((units - 200) * 10);
}
document.getElementById('light').innerHTML = `Units Consumed = ${units}<br>  Electricity Bill = ₹${bill}`;

