import "./Book.css"

function Book(props){
    const Recension = [];
    props.Recension.forEach(element => {
        Recension.push(<li>{element}</li>)
    });
    return(
        <div>
            <div className="container">
                <h3>{props.Name}</h3>
                <h5><i>{props.CountLetter} ps</i></h5>
            </div>
            <h6>Recension</h6>
            <ul>
                {Recension}
            </ul>
        </div>
    );
}

export default Book;