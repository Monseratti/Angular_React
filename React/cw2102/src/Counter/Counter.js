import React from "react"

function Button (props){
    const myClick =()=>{return(props.cnahgeCounter(props.text));}
    return(
       <button type="button" onClick={myClick} className={props.myClassName}>{props.text}</button>
    )
}

function DisplayCount (props){
    return(<div className="p-3 m-3 border w-25">{props.text}</div>);
}

export default function Counter() {
    const[count,setCount] = React.useState(0);
    const ChangeCounter = (nextCount)=>{setCount(count+parseInt(nextCount))};
return(
    <>
        <DisplayCount text={count}/>
        <div className="d-inline-flex">
            <Button myClassName="btn btn-primary m-3" text="+5" cnahgeCounter = {ChangeCounter}/>
            <Button myClassName="btn btn-secondary m-3" text="-2" cnahgeCounter = {ChangeCounter}/>
            <Button myClassName="btn btn-warning m-3" text="+1" cnahgeCounter = {ChangeCounter}/>
        </div>
    </>
);
}