let arr = [ 45, 23, 91]
arr.map((value,index , array)=>{
    console.log(value , index , array) 
    return value + 1
    //return value + index
})
console.log(arr)

//array filter method
let arr2 = [ 45, 67, 87, 99]
let a2 = arr2.filter((a)=> {
    return a < 10
})
console.log(a2,arr2)

//array reduce method
let arr3 = [1,2,3,4,5]
let newarr3 = arr3.reduce((h1,h2)=>
{
return h1 + h2
})
console.log(newarr3)

//Q5
let arrr = [1 ,2 ,3, 5 , 99]
let a = prompt("enter a number ")
a = Number.parseInt(a)
arr.push(a)
console.log(arrr)



