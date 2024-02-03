let a = prompt("hey whats your age?")
a=Number.parseInt(a) //converting the string into a number 
if (a>18) {
alert("you are valid")
}
else if (a<9){
    alert("you are a kid")
}
else if (a>9 && a<18){
    alert("you can drive")
}
else {
    alert("this is an invalid age")
}

//practice set 2
let age = prompt("what is your age?")
switch(age)
{
    case 12:
        console.log("your age is 12")
    break;
    case 13:
        console.log("your age is 13")
    break;
    case 14:
        console.log("your age is 14")
    break;
    case 15:
        console.log("your age is 15")
    break;
    default:
        console.log("your age is not special")
    

}

//Q2
let num = prompt("what is your age?")
num = Number.parseInt(num)
if (num%2==0 || num%3==0){
    console.log("your number is  divisible by 2 and 3")

}
else {
    console.log("your number is not divisible by 2 and 3")
}

//Q3
let age = 19
let a = age>18 ? "you can drive" : "you cannot drive"
console.log(a)