//comments 
//let and const is used to declare variables    

// let email = "yash82206@gmail.com";
// let res = email.slice(0,4);
// let res = email.replace('y','k');//replace the first occurence of the letter only
// console.log(res)


// let radius = 10;
// const pi = 3.14;

// BIDMAS


// const title = "Best of 2019";
// const author = 'Mario';
// const likes = 78;

//concatenation way
// let result = title + ' ' + author + ' ' + likes;

// tmeplate way of concatinating string 
// let result = `The blog called ${title} by author ${author} has ${likes} likes` ;
// console.log(result);

// creating hmtl templates
// let hmtl = `
//     <h2>${title}</h2>
//     <p> By ${author}</p>
//     <p>This blog has ${likes} likes</p>
// `;

// let ninjas = ['yash','bhardwaj'];
// ninjas[1] = 'Bhardwaj';

// let ages = ['12',12,'12',1,21,2,1];
// console.log(ages);


// console.log(ninjas.length);

// let result = ninjas.join('--');

// let result = ninjas.indexOf('yash');
// let result = ninjas.concat('ken','crystal');

// let result = ninjas.push('hehe');
// result = ninjas.pop();

// console.log(result);

// let age = null;
// console.log(age,age+3,`the age is ${age}`)

// console.log(true,false,"true","false");

// let email = "yash@gmail.com";
// let result = email.includes('@');

// let age = 'hello';

// age = Number(age);//Type conversion

// console.log(age === 25);
// console.log(age === '25');
// console.log(age !== '25');
// console.log(age !== 25);

// console.log(Number(age));

// let result = String(50);
// console.log(result,typeof result);


// let result = Boolean('101');
// console.log(result , typeof result)

//control flow 
//loops and conditions
// let names = ['yash','bhardwaj','yashu']
// for (let index = 0; index < names.length; index++) {
//     let html =`
//         <div>${names[index]}</div>
//     `;
//     console.log(html)
// }

// let i = 0;
// while (i<5) {
//     console.log(i);
//     i++;
// }

// let a  = 312;

// switch(a){
//     case 1 :
//         console.log("one");
//         break;
//     case 2 :
//         console.log("Two");
//         break;
//     case 3 :
//         console.log("Three");
//         break;
//     case 4 :
//         console.log("Four");
//         break;
//     case 5 :
//         console.log("Five");
//         break;
//     default:
//         console.log('not valid');
// }

// let age = 10;
// if(true){
//     let age = 12;
//     console.log("inside ",age )
// }
// console.log("outside ",age )

//Functions declaration
// function greet(){
//     console.log("Hello there ");
// }

//funstion expression
// const speak = function(name = 'lorem', time = 'ipsum'){
//     console.log(`Good day ${name} in the ${time}`);
// };

// const calArea = function(radius){
//     let area = 3.14 * radius**2;
//     return area;
// }
// console.log(calArea(5));

// const area = (radius) => {
//     return 3.14*radius**2
// }

// console.log(area(5))

// let radius = 2;
// const calArea = 3.14 * radius**2;

// const greet = () => `Hello world`;

// console.log(greet());

// const bill  = function(products,tax){
//     let total = 0;
//     for (let index = 0; index < products.length; index++) {
//         total += products[index] + products[index]*tax;
//     }
//     return total;
// }

// const bill2 = (products,tax)=>{
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total+= products[i] + products[i]*tax
//     }
//     return total;
// };

// console.log(bill2([10,15,30],0.2));

//  const greet = () => `hello`;
//  console.log(greet());

//  let oka = `yash`;
//  console.log(oka.toUpperCase());
//  console.log(oka);

// const myFun = (callBackFunc) => {
//     let value = 50;
//     callBackFunc(value);
// };

// myFun(function(value){
//     console.log(value);
// });

// myFun(value => {
//     console.log(value);
// });\\


// let people = ['yash','bhardwaj','kumar'];

// const logPerson = (person,index)=>{
//     console.log(person + ' ' + index);
// };

// people.forEach(logPerson);

// let ul = document.querySelector('.people');

// const people = ['yash','bhardwaj','kumar','sanu','aimor','cheetos'];

// let html  = ``;

// let htmlGenreator = (person)=>{
//     html += `<li style="color: purple">${person}</li>`
// };

// people.forEach(htmlGenreator);

// console.log(html);
// ul.innerHTML = html;

//*********************************Objects in javascript************************************************

// const greetUser = (name) => `Good morning ${name}`;

// const blogs = [
//     {title : 'why am i here',likes:30},
//     {title: 'android is cool', likes : 50}
// ];

// console.log(blogs);

// let user = {
//     name:'yash',
//     age:13,
//     email:'yash@gmail.com',
//     location:'delhi',
//     blogs:[
//         {title : 'why am i here',likes:30},
//         {title: 'android is cool', likes : 50},
//     ],
//     login:function(){
//         console.log("logged in");
//     },
//     greet: greetUser('yash'),
//     logout:function(){
//         console.log('user log out');
//     },
//     logBlogs: function(){
//        this.blogs.forEach( blog =>{
//         console.log(blog.title, blog.likes);
//        }); 
//     },
//     randomFuntion(){
//         console.log("this is random function");
//     },
// };

// user.logBlogs();

// const key = 'location';
// console.log(user[key]);
// console.log(user['email']);

// user.age = 20;
// console.log(user.age);

// console.log(typeof(user));


//Math Object;

// console.log(Math.PI);
// console.log(Math.E);

// const area = 7.1212;


// console.log(Math.floor(area));
// console.log(Math.round(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

//Generate Random number
// const random = Math.random();
// console.log(Math.round(random*100));

// const userOne = [
//     'hello',
//     'one'
// ];
// const userTwo = userOne;

// userOne.push('heheheh');
// userTwo.push('kom');

// console.log(userTwo);



