// const greet = (name) => {
//     console.log(`Welcome onboard ${name}`);
// }

// greet('Yash Bhardwaj');
// greet('Yash ');


// setTimeout(()=>{
//     alert('hello');
// },2000);


// setTimeout(()=>{
//     console.log("this is awesome");
//     clearInterval(int);
// },3000)

// const int = setInterval(()=>{
//     console.log("interval");
// },1000)

// console.log(__dirname);
// console.log(__filename);


//Modules and requires

const {people , ages} = require('./people');

// console.log(people , ages);

// const os = require('os');
// console.log(os.platform(),os.homedir(),os.hostname());


// const fs = require('fs');

//read files
// fs.readFile('./hello.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// });

// console.log('last line');


//write files
// fs.writeFile('./hello.txt','Hello worlds',()=>{
//     console.log("fikle is writted");
// });

// //it file not find create file with that name
// fs.writeFile('./blog.txt','this is blog',()=>{
//     console.log("fikle is writted");
// });

//directories
// if(!fs.existsSync('./assets')){
//     fs.mkdir('./assets',(err)=>{
//         if(err){
//             console.log(err);
//         }
//         console.log("folder created");   
//     })
// }else{
//     fs.rmdir('./assets',(error)=>{
//         if(error){
//             console.log(error);
//         }
//         console.log("folder deleted");
//     })
// }

//Deleted files
// if(fs.existsSync('./hello.txt')){
//     fs.unlink('./hello.txt',(error)=>{
//         if(error){
//             console.log(error);
//         }
//         console.log('File deleted');
//     })
// }



/*Streams and Buffers */
//Streams start using data before it has finished loading


// //ReadStrams
// const fs = require('fs');

// const readStram = fs.createReadStream('./blog3.txt',{encoding: 'utf-8'});
// const writeStram  = fs.createWriteStream('./blog4.txt');


// readStram.on('data',(chunk)=>{
//     console.log('---------New Chunk----------------');
//     console.log(chunk);
//     writeStram.write('\nNew Chunk\n');
//     writeStram.write(chunk);
// })

// piping
// readStram.pipe(writeStram); write complete inside the new file







