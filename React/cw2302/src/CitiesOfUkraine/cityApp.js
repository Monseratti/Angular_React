import React from "react";

export default class CityApp extends React.Component {
    constructor(props){
        super(props);
        this.state = {cities:props.cities};
        this.Show = this.Show.bind(this);
    }
    Show(){
        let arr = [];
        for (let index = 0; index < this.state.cities.length; index++) {
            const element = this.state.cities[index];
            arr.push(
                <li>{element.name},{element.country}====={element.population}</li>
            );
        }
        return arr;
    }
    render(){
        return(
            <>
            <ul>
            {this.Show()}
            </ul>
            </>
        );
    }
}