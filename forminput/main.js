// console.log(window);

// document.getElementById("my-form");
// console.log(document.getElementById("my-form"));

// const form= document.getElementById("my-form");
//  console.log(form);

//  console.log(document.querySelector(".container"));

//  console.log(document.querySelector("h3"));

// console.log(document.querySelectorAll(".item"));
// console.log(document.getElementsByClassName("item"));
// console.log(document.getElementsByTagName("li"));

// const items =document.querySelectorAll(".item");
// items.forEach((item) => console.log(item));
// const ul =document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent ="Hello";
// ul.children[1].innerText ="Htet";
// a thone myr sone
// ul.lastElementChild.innerHTML="<h3>HML</h3>";

// const btn = document.querySelector(".btn");
// btn.style.backgroundColor ="red";

// const btn = document.querySelector(".btn");

// btn.addEventListener("click",(e) => {
//     e.preventDefault();
    // console.log(e);
    // console.log(e.target.className);
    // const ul =document.querySelector(".items");
    // ul.children[0].remove();
    // ul.lastElementChild.innerHTML="<h3>HML</h3>";
// document.querySelector('#my-form').style.background ="grey";
// document.querySelector("body").classList.add("bg-dark"); 
// document.querySelector(".items").lastElementChild.innerHTML ="<h1>HML</h1>";


// });

const myform = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userlist = document.querySelector("#users");

myform.addEventListener("submit", onsubmit);
function onsubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);
    if(nameInput.value == "" || emailInput.value ==""){
        // alert("please enter fields");
        msg.classList.add("error");
        msg.innerHTML = "Ser hte py pr !"
        setTimeout(() => msg.remove(), 3000);
    }else{
        // console.log("success");
        const li = document.createElement("li");
        li.appendChild(
            document.createTextNode(`${nameInput.value}: ${emailInput.value}`)

        );
        userlist.appendChild(li);
        nameInput.value ="";
        emailInput.value ="";

    }
}
