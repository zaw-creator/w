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

// const x = 10;
// if( x == 10){
//     console.log("x is 10");
// }
 
// const y = 16;
// if (y == 15) {
//     console.log('y is 15');

// } else {
//     console.log("y is not 15");
// }

// const a = 100;
// if ( a == 50){
//     console.log( "a is 50");
// }else if (a > 50){
//     console.log("a is greater than 50");
// } else {
//     console.log("a is less than 50");
// }

// const x =4;
// const y = 11;
// if (x >5 ||  y > 10 ) {
//     console.log("x is greater than 5 or y is greater than 11");
// }

// const x =4 ;
// const y = 11;
// if (x > 5 && y > 10){
//     console.log("x is greater than 5 and y is greater than 11");
// }

// const x = 10;
// const color = x > 9 ? "red" : "blue";

// console.log(color);

// const color = "red";

// switch (color) {
//     case "red": 
//     console.log("color is red");
//     break;

//     case "green":
//         console.log("color is green");
//         break;
    
//     default: 
//     console.log("color is not green or red");
//     break;
// }

// const name = "Htet Myet Lwin";

// switch (name){
//     case "myat kaung khant":
//         console.log("name is myat kaung khant");
//         break;

//         case "Htet Myet Lwin":
//         console.log("name is Htet Myet Lwin");
//         break;

//         default:
//             console.log("name is Htet Myet Lwin or myat kaung khant");
//             break;

// }

// function addNums(num1,num2){
//     console.log(num1 + num2);
// }

// addNums(5,6);

// function addNums(num1,num2){
//     return num1 + num2;
// }

// console.log(addNums(5,6));

// function multiNums(num1,num2){
//     return num1 * num2;
// }

// console.log(multiNums(7,8));

// function minusNums(num1,num2){
//     console.log(num1 - num2);

// }

// minusNums(9,10);

// function dividedNums(num1,num2){

//         return num1 / num2;
    
// }
// console.log(dividedNums(12,2));

// function moduleNums(num1,num2){
//     console.log(num1 % num2);
// }
// moduleNums(20,5);

// const addNums =(num1,num2) =>{
//     console.log(num1 + num2); 
// };

// addNums(5,6);

// const addNums = (num1,num2) =>{
//     return num1 + num2;
// };

// console.log(addNums(5,6));

// function Person(firstName,lastName,dob){
//     this.firstName = firstName;
//     this.lastName =lastName;
//     this.dob=dob;
// }

// const person1 = new Person("Htet Myet","Lwin","10/20/1995");

// console.log(person1);
// console.log(person1.firstName,person1.lastName,person1.dob);