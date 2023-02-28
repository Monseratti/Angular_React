import { useEffect, useState } from "react";
import {BrowserRouter as Router, NavLink, Outlet, Route, Routes, useParams} from "react-router-dom"
import Task from "./Components/Task/task"

function Display(props){
  const [data, setData] = useState([]);
  useEffect(()=>{
    async function fetchData(){
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };
      await fetch ("http://localhost:7171/toDoList",requestOptions)
      .then(resp=>resp.json())
      .then(data=>{
        setData(data.toDoList);
      });
    }
    fetchData();
  },[]);
  return(
    <>
      <table className="table table-selected mt-5 col-md-6 col-12">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>ToDo Date</th>
            <th>Done Date</th>
            <th>Priority</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          {data.map(task=>{
            return(
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.toDoDate}</td>
                <td>{task.date}</td>
                <td>{task.hightPriority===false?"standart":"hight"}</td>
                <td><NavLink to={`tasks/${task.id}`}>Edit</NavLink></td>
              </tr>
            )
          })}
        </tbody>

      </table>
    </>
  );
}

function Tasks(){
  return<Outlet/>
}

function Edit(){
  const [id] = useState(useParams().id);
  const [data, setData] = useState();
  useEffect(()=>{
    async function fetchData(){
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      };
      await fetch (`http://localhost:7171/tasks?id=${id}`,requestOptions)
      .then(resp=>resp.json())
      .then(data=>{
        if(data.isOk)
          setData(data.task);
        else
          setData("")
      });
    }
    fetchData();
  },[id]);
  if(data!=="")
  return(
    <>
      <Task {...data} isEdit={true}/>
    </>
  )
  else
  return <h4>Not found</h4>
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Display/>}/>
        <Route path="/tasks" element={<Tasks/>}>
          <Route path=":id" element={<Edit/>}/>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
