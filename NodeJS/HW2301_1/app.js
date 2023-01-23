var http = require("http");
var host = "127.0.0.1";
var port = 3000;
var server = http.createServer(function(request,response){
    var myURL = new URL(request.url.toString(), `https://${host}:${port}/`);
    response.setHeader('Content-Type', 'text/html; charset=utf-8');
    response.text = `<div>Host: ${myURL.host}</div>`+
    `<div>Hostname: ${myURL.hostname}</div>`+
    `<div>Port: ${myURL.port}</div>`+
    `<div>Path: ${myURL.pathname}</div><div>SearchParams: ${myURL.searchParams}</div>`
    response.end(response.text);
});
server.listen(port, host,function(){console.log(`Сервер начал прослушивание запросов на порту ${port}`);});