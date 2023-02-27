import React from "react";
import { City } from "./city";

export default class CityApp extends React.Component {
    constructor(props){
        super(props);
        this.setState({cities:props.cities});
    }
    render(){
        return(
            <>
            <ul>
            {this.state.cities.forEach(e => {
                <li>{e.name},{e.country} ===== {e.population}</li>
            })}
            </ul>
            </>
        );
    }
}