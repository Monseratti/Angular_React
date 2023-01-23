var http = require("http");
http.createServer(function( request,response){response.end("Hello NodeJS");})
.listen(3000, "127.0.0.1",function(){console.log("Сервер начал прослушивание запросов на порту 3000");});

var ops = require("os");
let usName = ops.userInfo().username;
console.log(usName);

var myfile = require("./app_two");
console.log(myfile.MyHello(usName));

var pers = require("./app_three");
var man =  new pers(usName, "0977715630", 28);
console.log(man.toString());