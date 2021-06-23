const fs = require("fs");
const express  = require("express");
const cors = require('cors');

const path = require("path");

const PUERTO= 3000;

const home = fs.readFileSync("./index.html");
const about = fs.readFileSync("./about.html");

const server  = express();
server.use(cors()).use(express.json());

server.get("/", devolverIndex );
server.get("/about", (req,res)=>{
    res.write(about);
    res.end();

})
server.listen(PUERTO,()=>{
    console.log(`El servidor esta ejecutAndose por el puerto ${PUERTO}`);
})
const paginaDeError = path.join(__dirname ,'./error.html' ) ;

server.use( (req,res,next) =>{
    res.status(404).sendFile(paginaDeError);
})


function devolverIndex(req,res)
{
    res.write(home);
}




/*

const http = require('http');

//   http://localhost:8080/ http://localhost:8080/usuarios
http.createServer((request, response)=>{
   const {url} = request;
   if (url==="/")
   {
       console.log(`ruta /`)
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(home);

   }
   else if (url==="/about")
   {
    console.log(`ruta /about`)
        response.writeHead(200, {"Content-type":"text/html"});
        response.write(about);
   }
   else
   {
    console.log(`ruta no encontrada`)
    response.writeHead(404, {"Content-type":"text/html"});
    response.write("PAgina no encontrada");

   }
   response.end();
}).listen(8080, ()=>{
    console.log(`El servidor se esta ejecutando en el puerto 8080`)
});



*/