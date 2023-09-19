// const para = document.querySelector('div.error');
// console.log(para);

// const paras = document.querySelectorAll('p');

// paras.forEach(para => {
//     console.log(para);
// });

//by id
// const title = document.getElementById('page-title'); 


// //by class name
// const errors = document.getElementsByClassName('error')

// //by tag name
// const paras = document.getElementsByTagName('p');


// console.log(paras);

document.title = "This is changing"

// const para = document.querySelector('p');
// // para.innerText += " Yash Bhardwaj"

// const paras = document.querySelectorAll('p');
// paras.forEach(para => {
//     para.innerText += ` new text`;
// });

// const content = document.querySelector('.content');
// // content.innerHTML = `<h2>This is new inner html</h2>`;

// const peoples = ['yash','bhardwaj','yoshi'];


// peoples.forEach(people => {
//     content.innerHTML += `<li>${people}</li>`;
// });

// const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
// link.setAttribute('href',`https://yashbhardwaj.netlify.app`);
// link.setAttribute('target','_blank');
// link.innerText = 'yash bhardwaj';


// const message = document.querySelector('p');
// message.setAttribute('class','success');
// message.setAttribute('style','color:green');
// console.log(message.getAttribute('class'));

// const title = document.querySelector('h1');
// // title.setAttribute('style','margin:30px');
// title.style.margin = '15px';
// title.style.color = 'crimson';
// title.style.fontSize = '60px';

// console.log(title.style.margin);

// const title = document.querySelector('p');
// console.log(title.classList);
// title.classList.add('error');
// title.classList.remove('error');
// title.classList.add('success');

const pTags = document.querySelectorAll('p')

pTags.forEach(p => {
    if(p.textContent.includes('error')){
        p.classList.add('error');
    }else if(p.textContent.includes('success')){
        p.classList.add('success');
    }
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');

