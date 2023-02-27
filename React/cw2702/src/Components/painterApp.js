import {BrowserRouter as Router, Routes, Route, NavLink, Outlet, useParams} from 'react-router-dom'

function Home(){
    return <h2>Painter</h2>
}

function PopularArt(){
    return <h3>Popular art</h3>
}

const arr = [
    {id:1, name:"Art 1"},
    {id:2, name:"Art 2"},
    {id:3, name:"Art 3"},
    {id:4, name:"Art 4"},
]
function Arts(){
    return(
        <>
            <h3>List of art</h3>
            {arr.map(art=>{
                return <li key={art.id}><NavLink to={`arts/${art.id}`}>{art.name}</NavLink></li>
            })}
            <Outlet/>
        </>
    )
}

function Art(){
    const props = useParams();
    const ID = props.id;
    return <h4>{arr.find(p=>p.id==ID).name}</h4>
}

function Nav(){
    const changeNav=(isActive)=>{return isActive?"m-3 text-warning bg-primary":"m-3"}
    return(
        <div className='d-inline-flex'>
            <NavLink className={changeNav} to="/">Main</NavLink>
            <NavLink className={changeNav} to="/popularart">Popular art</NavLink>
            <NavLink className={changeNav} to="/arts">Arts</NavLink>
        </div>
    );
}

export default function PainterApp(){
    return(
        <>
        <Router>
            <Nav/>
            <div>

        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/popularart' element={<PopularArt/>}/>
            <Route path='/arts' element={<Arts/>}>
                <Route path='arts/:id' element={<Art/>}/>
            </Route>
            <Route/>
        </Routes>
            </div>
        </Router>
        </>
    );
}