const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req,res)=>{

    //lodash
    const num = _.random(0,20);
    console.log(num);

    const greet = _.once(
        ()=>{
            console.log('hello');
        }
    );

    greet();
    greet();


    //Set header content type
    res.setHeader('Content-Type',"text/html");

    // res.write(`<head><link rel="stylesheet" href="#"></head>`)
    // res.write('<p>Hello yash</p>');
    // res.write('<p>Hello yash again</p>');


    //Routing
    let path = './views/';
    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/index':
            res.statusCode = 301;
            res.setHeader('Location','/')
            res.end();
            break;
        case '/about':
            path+='about.html';
            res.statusCode = 200;
            break;
        case '/about-us': //This is for redirecting to other page
            res.statusCode = 301;
            res.setHeader('Location','/about');
            res.end();
            break;
        default:
            path += '404.html'; 
            res.statusCode = 404;
            break;      
    }


    //This method to send complete html page in response
    fs.readFile(path ,(err,data)=>{
        if(err){
            console.log(err);
            res.end();
        }else{
            // res.write(data);//if we have single thing we can directlty pass it to end funstion
            res.end(data);
        }
    });

});

server.listen(3000,'localhost',() => {
    console.log("Litsening on port 3000");
});


