//console.log("start")

// setTimeout(function() {
//     console.log("hey I am Good");
// },3000
// )

// console.log("end")

//callback
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
        console.log("SRC:"+src);
        callback();
    }
    document.body.appendChild(script);
}

function hello() {
    alert ("HELLO WORLD");
}

function goodmorning() {
    alert("GoodMorning!");
}

loadScript("https://cdn.jsdelivr.net/npm/es-module-shims@1/dist/es-module-shims.min.js",hello )

