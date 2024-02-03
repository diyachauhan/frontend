// let promise = new Promise(function(resolve,reject){
//     alert("i am an alert in promise")
//     resolve(56)
// })


console.log("hello one")

setTimeout(function() {
    console.log("hello two in 2 seconds")
} , 2000)

console.log("my name is "+ "hello three")
console.log(promise)

let p = new Promise((resolve,reject)=>{
    console.log("promise is  pending")
    setTimeout(()=>{
        //console.log("i am a promise and i am fulfilled")
        resolve(true)
       
    },5000)
})
let p2 = new Promise((resolve,reject)=>{
    console.log("promise is  pending")
    setTimeout(()=>{
       // console.log("i am a promise and i am rejected")
       // resolve(true)
       reject(new Error("I am an error"))
    },5000)
})
console.log(p,p2)

p.then((value)=> {
    console.log(value)
})
p2.then((error)=> {
    console.log("some error has occured")
})
