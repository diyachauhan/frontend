//for loop
let sum = 0
let n = prompt("enter the value of n ")
n = Number.parseInt(n)
for (let i =0 ; i<n ; i++)
{
    sum += (i+1)
}
console.log("sum pf first" + n + "natural number is" + sum)

let obj = {
    harry:90,
    diya:100,
    kajal:95,
}

//for in loop
for (let a in obj){
    console.log("marks of "+a + "are" + obj[a])
}

//for of loop
for (let b of "diya"){
    console.log(b)
}

//while loop
let n = prompt("enter the value of n")
n = Number.parseInt(n)

let i= 0;
while(i<n)
{
    console.log(i)
    i++
}

//do while
do { 
    console.log(i)
    i++;
}while (i<n)