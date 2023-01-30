var app = require("./parser");
var http = require("http");
var fs = require("fs");

var adress = "./importFile/MyText.txt";
var text = "text text";
fs.readFile(adress,'utf8',(err,data)=>{
  if(err) console.log(err);
  text = data;
})
http.createServer((req,resp)=>{
    resp.end(app.Parser(text));
    console.log(app.Parser(text));
}).listen(3000,"localhost",()=>{
    console.log("SrvRun");
});