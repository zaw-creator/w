// // alert("hello");
// // clear();
// // console.log("Hi");
// // console.error("red for error message");
// // console.warn("warn message");
// // let age=18;
// // age = 19
// // alert(age);
// //  const age =17
// //

// // const name="HHZ"
// // const age= 19;
// // const rating=1.5;
// // const isCool=true;
// // const x=null;
// // const y=undefined;
// // let z;

// // console.log(typeof name);
// // console.log(typeof age);
// // console.log(typeof rating);
// // console.log(typeof isCool);
// // console.log(typeof x);
// // console.log(typeof y);
// // console.log(typeof z);

// const s="hello hehe"

// console.log(s);
// console.log(s.length);
// console.log(s.toUpperCase());
// console.log(s.toLowerCase());
// console.log(s.substring(0,7));
// console.log(s.substring(5,10).toUpperCase());
// console.log(s.split(""));

// const name="hhz"
// const age=18;

// console.log("I am "+name+" and "+age+" year old");
// console.log(`I am ${name} and ${age} years old`);

/* const s="heehee,hoohoo,haha";

 console.log(s.split(","));*/

/*const numbers = new Array(1,2,3,4);
 console.log(numbers);
 console.log(numbers[1]);


 const fruits =["apple","orange","pineapple"];
 console.log(fruits);
 console.log(fruits[1]);
 console.log(fruits[0]);*/

/*const fruits =["apple","orange","pineapple"];
  fruits[3]="grape";
  fruits[4]="pears";
  fruits.push("hehe");
  fruits.unshift("hoho")
  console.log(fruits[5]);
  fruits.pop();
  const name="hhz"
  console.log(fruits);
  console.log(Array.isArray(fruits));
  console.log(Array.isArray(1));



  console.log(fruits.indexOf("hoho"));*/

/*const animals ={name: "MKK",type:"cow",age:2};
  console.log(animals);
  console.log(animals.type);
  console.log(animals.name);*/

/* const person ={
            firstname:"nay",
            middlename:"htoo",
            lastname:"hlaing",
            age:"18",
            gender:"male",
            hobbies : ["games","books","movies"],
            address:{
                city:"Yangon",
                township:"Yankin",
                street:"Damar Yone",
                number:3,
            },
            email:"nayhtoohlaing69@gmail.com",
            phone:"096969696969696969",


  }
  console.log(person);
  person.maritalStatus = "married";
person.educaation = "under-graduated";
person.workExperience ="none";

  console.log(person.address.street);
console.log(person.firstname,person.middlename,person.lastname)
  console.log(person.hobbies[2]);*/
// const todos =[
//     {
//         id:1,
        
//         text: "take lunch",
//         isComplete: true,

//     },
//     {
//         id:2,
//         hobbies : [
//           {text:"games"},{text:"dota"},{text:"books"},
//         ],
//         text: "take a rest",
//         isComplete: true,
//     },

//     {
//         id:3,
       
//         text: "Meeting with boos",
//         isComplete: true,

//     },
// ]



// console.log(todos);
// console.log(todos[1].hobbies[2]);
// const todosJSON = JSON.stringify(todos);
// console.log(todosJSON);

/*const family = [
  {
    name: "U He He",
    memberType: "Father",
    gender: "Male",
    address: {
      street: "Damaryone street",
      number: 3,
      township: "Yankin",
      city: "Yangon",
    },
    hobbies: ["football", "books", "movies"],
  },
  {
    name: "Daw Ho Ho",
    memberType: "Mother",
    gender: "Female",
    address: {
      street: "Damaryone street",
      number: 3,
      township: "Yankin",
      city: "Yangon",
    },
    hobbies: ["walking", "k-drama", "movies"],
  },
  {
    name: "Mg Ho He he ho",
    memberType: "son",
    gender: "Male",
    address: {
      street: "Damaryone street",
      number: 3,
      township: "Yankin",
      city: "Yangon",
    },
    hobbies: ["games", "movies", "football"],
  },
];
console.log(family);*/

// 


  
  // for (let i= 0; i <todos.length; i++ ){
  //     console.log(todos[i].id);
  //     console.log(todos[i].text);
  //     console.log(todos[i].isComplete);
  
  // }
  // for (let todo of todos){
  //   console.log(todo.id);
  // }
  // todos.forEach(function(todo){
  //   console.log(todo.id);
  //   console.log(todo.text);
  //   console.log(todo.isComplete);
  //   console.log(todo[0])
  // })

//   const todoText = todos.map(function (todo) {
//     return todo.text;
// });
// console.log(todoText);
// const todocompleted =todos.filter(function(todo){
//   return todo.isComplete === true;
// });
// console.log(todocompleted);

// const todocompleted = todos
// .filter(function(todo){
//   return todo.isComplete === true;
// })
// .map (function (todo){
//   return todo.text;
// });
// console.log(todocompleted);

// let i=0;
// while (i<=10){
//   console.log(`while loop no:${i}`);
//   i++;
// }