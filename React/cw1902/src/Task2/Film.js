import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"


export default function Film(props){
    return(
        <>
            <img src={props.posterPath} alt="No poster"/>
            <div>{props.title}</div>
            <div>{props.director}</div>
            <div>{props.postedYear}</div>
            <div>{props.manufacturer}</div>
            <ul>    
                {props.actors.forEach(actor => {
                    <li>{actor}</li>
                })}
            </ul>
        </>
    );
}