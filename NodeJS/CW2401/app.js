var exp = require("express");
var path = require("path");
var app = exp();

app.use(exp.static(path.join(__dirname,"/public")));

app.listen(3000);