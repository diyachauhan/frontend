function onePlusAvg(x , y){
return 1 + (x + y) / 2
}

let a =1 ;
let b = 2;
let c = 3 ;

//invoking 
console.log("one plus average of a and b is" , onePlusAvg(a ,b))
console.log("one plus average of b and c is" , onePlusAvg(b ,a))
console.log("one plus average of a and c is" , onePlusAvg(a ,c))

//function without parameter
const hello = ()=>{
    console.log("heyy how are you ?")
}
//invoke
hello();

//funct with return
const helloo = ()=>{
    console.log("heyy how are you ?")
    return "hi "
}
let v = helloo();

//Q3
let marks = {
    diya:90,
    kajal:9,
    Umesh:45,
}
for (let i = 0 , i<Object.keys(marks).length;i++){
   console.log("the marks of" + Object.keys(marks)[i]+"are"+marks[Object.keys(marks)[i]]) 
}

let cn = 43
let i 
while (i != cn)
{
    i = prompt("enter a number")
}
console.log("you have entered a correct number")

