let a = prompt("enter your age")
a = Number.parseInt(a)
if (a<0) { 
    console.error("please enter a valid age!");
}

const Candrive = (a)=> {
    return a>=18?true:false
}
if (Candrive(a)){
    alert("You can Drive")
}
else {
    alert("You Cant Drive")
}
let age = confirm("Do you want to see prompt again?" )
if (age) {
   prompt(a)
}

let color = ("prompt enter the background color")
document.body.style.background=color