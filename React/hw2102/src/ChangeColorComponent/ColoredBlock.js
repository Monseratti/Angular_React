import React, {useState} from 'react'

function Button (props){
    let myStyle = {
        color: props.color,
        backgroundColor: props.bgColor,
        width: "100px"
    }
    const myClick =()=>{return(props.changeStyleFunc(props.color, props.bgColor));}
    return(
       <button type="button" className='btn m-3 border' style={myStyle} onClick={myClick} >{props.bgColor}</button>
    )
}

function MyDisplay (props){
    let myStyle = {
        color: props.color,
        backgroundColor: props.bgColor,
        height: "100px"
    }
    return(<div style={myStyle} className="w-25">Don`t worry, be happy</div>);
}

export default function ColoredBlock() {
    const[color,setColor] = useState("black");
    const[bgColor, setBgColor] = useState("white")
    const ChangeStyleValue = (color, bgColor)=>{setColor(color);setBgColor(bgColor)};
return(
    <>
        <MyDisplay color={color} bgColor={bgColor}/>
        <div className="d-inline-flex">
            <Button color="black" bgColor="white" changeStyleFunc = {ChangeStyleValue}/>
            <Button color="silver" bgColor="red" changeStyleFunc = {ChangeStyleValue}/>
            <Button color="gold" bgColor="green" changeStyleFunc = {ChangeStyleValue}/>
        </div>
    </>
);
}