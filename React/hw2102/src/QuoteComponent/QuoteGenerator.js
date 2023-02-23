import React, {useState} from 'react'

function Button (props){
    const myClick =()=>{return(props.changeQuoteFunc(props.prevIndex));}
    return(
       <button type="button" className='btn btn-ontline-primary'  onClick={myClick} >Random Quote</button>
    )
}

function MyDisplay (props){
    return(<div>{props.qoute}</div>);
}

export default function QuoteGenerator(props) {
    const quoteArray=props.quotes;
    const[randomQuote,setRandomQuote] = useState("");
    const[prevIndex,setPrevIndex] = useState(-1);
    const ChangeQuote = (prevIndex)=>{
        let index = 0;
        do {
            index = Math.floor(Math.random()*(quoteArray.length-1));
        } while (index===prevIndex);
       setRandomQuote(quoteArray[index]);
       setPrevIndex(index);
    };
return(
    <>
        <div className="d-inline-flex">
            <Button prevIndex = {prevIndex} changeQuoteFunc = {ChangeQuote}/>
        </div>
        <MyDisplay qoute={randomQuote}/>
    </>
);
}