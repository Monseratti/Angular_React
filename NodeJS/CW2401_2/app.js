var app = require("./parser");
var http = require("http");
var fs = require("fs");

var text = "tst";
fs.readFile("./nodejs/cw2401_2/importFile/MyText.txt",'utf8',(err,data)=>{
    if(err) console.log(err);
    text = data;
})

http.createServer((req,resp)=>{
    resp.end(app.Parser(text));
    console.log(app.Parser(text));
}).listen(3000,"localhost",()=>{
    console.log("SrvRun");
});