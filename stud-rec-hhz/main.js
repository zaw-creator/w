const people=[
{
    id: 1,
    name:"Han Htoo Zaw",
    firstname:"Han",
    middlename:"Htoo",
    lastname:"Zaw",
    age:19,
    email:"hanzaw362@gmail.com",
    phone:"09450244925",
    attendance:false,
},
{
    id: 2,
    name:"Myat Kaug Khant",
    firstname:"Myat",
    middlename:"Kaung",
    lastname:"Khant",
    age:21,
    email:"myatkaunkhant@gmail.com",
    phone:"097539456",
    attendance:true,
},
{
    id: 3,
    name:"Zaw Ye Htet",
    firstname:"Zaw",
    middlename:"Ye",
    lastname:"Htet",
    age:19,
    email:"zawyehtet2642019@gmail.com",
    phone:"09795594996",
    attendance:true,
},
{
    id: 4,
    name:"Ye Paing Aung",
    firstname:"Ye",
    middlename:"Paing",
    lastname:"Aung",
    age:21,
    email:"yehp.ag@gmail.com",
    phone:"09350616718",
    attendance:true,
},
{
    id: 5,
    name:"Min Kyaw Thu",
    firstname:"Min",
    middlename:"Kyaw",
    lastname:"Thu",
    age:20,
    email:"supermkt2001@gmail.com",
    phone:"09777341100",
    attendance:true,
},
{
    id: 6,
    name:"Aung Pyae Win",
    firstname:"Aung",
    middlename:"Pyae",
    lastname:"Win",
    age:23,
    email:"aungpyaewin.apw@gmail.com",
    phone:"09261191166",
    attendance:true,
},
{
    id: 7,
    name:"Min Myat Lwin",
    firstname:"Min",
    middlename:"Myat",
    lastname:"Lwin",
    age:27,
    email:"myat2.snow@gmail.com",
    phone:"09791718264",
    attendance:true,
},
{
    id: 8,
    name:"Thu Ra Naing",
    firstname:"Thu",
    middlename:"Ra",
    lastname:"Naing",
    age:22,
    email:"thuranaingkuk2525@gmail.com",
    phone:"09784172525",
    attendance:true,
},
{
    id: 9,
    name:"Htet Myat Lwin",
    firstname:"Htet",
    middlename:"Myat",
    lastname:"Lwin",
    age:27,
    email:"htetmyatlwin@gmail.com",
    phone:"09456789123",
    attendance:false,
},
{
    id: 10,
    name:"Kaung Sett",
    firstname:"Kaung",
    middlename:"Sett",
    lastname:null,
    age:25,
    email:"iscomputing@gmail.com",
    phone:"09777771723",
    attendance:false,
},
];
// create the above data in array order
console.log(people);
// create data with people who attend the class and has the true value which mean present and the three people which are absent are not include in this data 
const attendance = people
.filter(function(people){
    return people.attendance == true;
})
// map function gap the data of the above filter array with the age of the people which only show ther age of the people who atttend the classs.
.map(function(people){
    return people.name;
});

console.log(attendance);

const attendanced = people
.filter(function(people){
    return people.attendance == false;
})
.map(function(people){
    return people.name;
});
console.log(attendanced);

for (let i=0; i<people.length; i++){
    console.log(people[i].id);
    console.log(people[i].name);
    console.log(people[i].age);
    console.log(people[i].email);
    console.log(people[i].phone);
    console.log(people[i].attendance)
    
}