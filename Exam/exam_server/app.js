const express = require("express");

const app = express();

const fs = require("fs");

const jsonParser = express.json();

app.use(function(req, res, next) {
res.header("Access-Control-Allow-Origin", "*");
res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
res.header("Access-Control-Allow-Methods", "GET, PATCH, PUT, POST, DELETE, OPTIONS");
next(); 
});

app.post("/postTask",jsonParser,(req,resp)=>{
    if(!req.body) return resp.sendStatus(400);
    fs.readFile("files/data.json","utf-8",(err,data)=>{
        if(err) return console.log(err);
        let toDoList = JSON.parse(data);
        let task = req.body.task;
        task.id = toDoList?.length??0;
        toDoList.push(task);
        fs.writeFileSync("files/data.json",JSON.stringify(toDoList));
        resp.json({"isOk":true});
    })
});

app.get("/toDoList",jsonParser,(req,resp)=>{
    fs.readFile("files/data.json","utf-8",(err,data)=>{
        if(err) return console.log(err);
        let toDoList = JSON.parse(data);
        resp.json({"toDoList":toDoList});
    })
})

app.get("/tasks",jsonParser,(req,resp)=>{
    fs.readFile("files/data.json","utf-8",(err,data)=>{
        if(err) return console.log(err);
        let toDoList = JSON.parse(data);
        let findID = req.query.id;
        let task = toDoList.find(o=>o.id==findID)
        if (task!== undefined) 
        resp.json({"task":task, "isOk":true});
        else
        resp.json({"task":{}, "isOk":false})

    })
})

app.listen(7171);