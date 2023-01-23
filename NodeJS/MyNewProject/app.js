var http = require("http");
var server = http.createServer(function(request,response){
    var url = request.url.split('/')[1].toLowerCase();
    switch(url){
        case "home": response.end("Welcome home!");
            break;
        case "about":response.end("Welcome to about!");
            break;
        default:
            response.statusCode = 404;
            response.text = "Not Found";
            response.end(response.text);
    };
});
server.listen(3000, "127.0.0.1",function(){console.log("Сервер начал прослушивание запросов на порту 3000");});
