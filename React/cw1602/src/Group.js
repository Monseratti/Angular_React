

function Group(props){
    const Album = [];
    props.Album.forEach(element => {
        Album.push(<li>{element}</li>)
    });
    const Singers = [];
    props.Singers.forEach(element => {
        Singers.push(<li>{element}</li>)
    });
    return(
        <div>
            <div className="container">
                <img src={props.image} alt="someText"/>
                <h3>{props.Name}</h3>
            </div>
            <div className="div">
                <div>
                    <b>Singers</b>
                    {Singers}
                </div>
                <div>
                    <b>Albums</b>
                    {Album}
                </div>
            </div>
        </div>
    );
}

export default Group;