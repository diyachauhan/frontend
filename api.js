//fetch api
const URL = "https://cat-fact.herokuapp.com/facts"
const factPara = document.querySelector("#fact");
const btn = document.querySelector('#btn');
// let promise = fetch(URL);
// console.log(promise);


const getFacts = async()=> {
let response =await fetch(URL);
console.log(response); //JSON format
let data = await response.json();//to make api readable format
 factPara.innerText = data[2].text; //to add in html
// };
}

                     OR

function getFacts() {
    fetch(URI)
    .then((response) => {
        return response.json();
    })
    .then((data)=>{
        console.log(data);
        factPara.innerText = data[2].text;
    });
}


btn.addEventListener("click", getFacts);

//Request and response
//response satuts code - 200 
//sending post request
