console.log("helloo")
let a = 9;
let b= 9;
console.log(a+b)

console.time("forLoop")
for(let i = 0;i<5;i++){
    console.log(99)
}
console.timeEnd("forLoop")

//2
alert("enter the value of aa !")
let aa = prompt("enter a here" )
aa = Number.parseInt(aa)
alert("you entered a of type" + (typeof aa) )
let write = confirm("do you want to write it to page?")
if (write) {
    document.write(aa)
}
else {
    document.write("please allow me to write")
}


