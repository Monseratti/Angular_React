var http = require("http");

http.createServer((req, resp)=>{
    var text = "Smth text";
    console.log(text);
    resp.end(text);
}).listen(3000,"localhost",()=>{console.log("Srv run")});