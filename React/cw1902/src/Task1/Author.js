import 'bootstrap/dist/css/bootstrap.min.css'
import AuthorWorks from './AuthorWorks';

export default function Author(props){
    return(
    <>
        <h1>{props.name}</h1>
        <img src={props.photo} alt="Not loaded"/>
        <p>{props.info}</p>
        <AuthorWorks works={props.works}/>
    </>);
}