const exp = require("express");
let app = exp();

const fs = require("fs");

const jsonParser = exp.json();

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
next(); 
});

app.post("/postData",jsonParser,(req,resp)=>{
    if(!req.body) return resp.sendStatus(400);
    fs.readFile("users.json",(data,err)=>{
        if(err) return console.log(err);
        let userList = JSON.parse(data);
        let reqestLogin = req.body.login;
        let reqestPassw = req.body.password;

        let isNotInList = false;

        for (let index = 0; index < userList.length; index++) {
            const user = userList[index];
            if(user.login==reqestLogin){
                isNotInList = true;
                break;
            }
        }

        if(!isNotInList){
            userList.push({"login":reqestLogin, "password":reqestPassw});
            fs.writeFile("users.json",JSON.stringify(userList));
            resp.json({"isOk":true});
        }
        else resp.json({"isOk":false});
    })
});

app.listen(3000);