var http = require("http");

http.createServer((req,resp)=>{
    resp.end("Hello");
}).listen(3000);