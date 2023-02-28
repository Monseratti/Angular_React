import {useState} from "react"

function Button(props){
    const handlerClick = () =>{
        return props.send();
    }
    return(
        <>
            <button className="btn btn-primary" onClick={handlerClick}>Save</button>
        </>
    )
}

function Check(props){
    const handlerChecked = ()=>{
        return props.handlerChecked();
    }
    return(
        <>
            <label>
                {props.title==="setPriority"?"Hight priority":"Done"}
                <input type={"checkbox"} onChange={handlerChecked} /> 
            </label>
        </>
    );
}

function Input(props){
    const handlerChange = (event)=>{
        return props.changeValue(event.target.value, props.dataType);
    }
    return(
        <>
            <label className="mb-3">
                {props.title}:
                <input className="ms-3" type={ props.dataType === "toDoDate"? "date": "text"} onChange={handlerChange}/>
            </label>
        </>
    )
}

function Display(props){
    return(
        <div className="col-4">
            <h4>Title: {props.title}</h4>
            <h5>Tags: {props.tags}</h5>
            <table className="table table-black">
                <tbody>
                    <tr>
                        <td>Prioprty:</td>
                        <td>{props.hightPriority===false?"standart":"hight"}</td>
                    </tr>
                    <tr>
                        <td>Date:</td>
                        <td>{props.toDoDate}</td>
                    </tr>
                    <tr>
                        <td>Done:</td>
                        <td>{props.date}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <b>Description:</b>
                <p>{props.descr}</p>
            </div>
        </div>
    );
}

export default function Task(props){
    const [id, setID] = useState(props.isEdit!== undefined?props.id:0);
    const [title, setTitle] = useState(props.isEdit!== undefined?props.title:"");
    const [date, setDate] = useState(props.isEdit!== undefined?props.date:"");
    const [toDoDate, setToDoDate] = useState(props.isEdit!== undefined?props.toDoDate:"");
    const [descr, setDescr] = useState(props.isEdit!== undefined?props.descr:"");
    const [tags, setTags] = useState(props.isEdit!== undefined?props.tags:"");
    const [hightPriority, setHightPriority] = useState(props.isEdit!== undefined?props.hightPriority:false);
    const [successPost, setSuccessPost] = useState(false);
    // if(props.isEdit!== undefined){
    //     setID(props.id);
    //     setTitle(props.title);
    //     setDate(props.date);
    //     setToDoDate(props.toDoDate);
    //     setDescr(props.descr);
    //     setTags(props.tags);
    //     setHightPriority(props.hightPriority);
    // }

    const changePriority = ()=>{
        return hightPriority===false?setHightPriority(true):setHightPriority(false);
    }

    const setDone = ()=>{
       return setDate(new Date().toUTCString());
    }

    const setterFunc = (data, type)=>{
        switch (type) {
            case "title":
                return setTitle(data);
            case "toDoDate":
                return setToDoDate(new Date(data).toUTCString());
            case "descr":
                return setDescr(data);
            case "tags":
                return setTags(data);
            default: break;
        }
    }

    const postTask = async ()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"task":{ "id":id,"title":title,"date":date, "toDoDate":toDoDate, "descr":descr, "tags":tags, "hightPriority":hightPriority }})
        };
        await fetch("http://localhost:7171/postTask",requestOptions)
                .then(resp=>resp.json())
                .then(data=>setSuccessPost(data.isOK));
    }

    const editTask = async ()=>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({"task":{ "id":id,"title":title,"date":date, "toDoDate":toDoDate, "descr":descr, "tags":tags, "hightPriority":hightPriority }})
        };
        await fetch("http://localhost:7171/editTask",requestOptions)
                .then(resp=>resp.json())
                .then(data=>setSuccessPost(data.isOK));
    }

    return(
        <>
            <div className="d-flex col-3 flex-column">
                <Check handlerChecked={changePriority} title="setPriority" hightPriority={hightPriority}/>
                <Check handlerChecked={setDone} title="setDone"/>
                <Input changeValue = {setterFunc} title="Title" dataType="title"/>
                <Input changeValue = {setterFunc} title="To do date" dataType="toDoDate"/>
                <Input changeValue = {setterFunc} title="Description" dataType="descr"/>
                <Input changeValue = {setterFunc} title="Tags" dataType="tags"/>
            </div>
                <Display title={title} date={date} toDoDate={toDoDate} descr={descr} tags={tags} hightPriority={hightPriority}/>
                <Button send={props.isEdit===undefined?postTask:editTask}/>
                {successPost?<div>Posted</div>:<div/>}
        </>
    );
}