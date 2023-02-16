import './App.css';
import React from 'react'
import Book from './Book';
import ReactDOM from 'react-dom'
import Group from './Group';

function App() {

  return (
    
    <>
      <button type='button' onClick={task1}>Task 1</button>
      <button type='button' onClick={task2}>Task 2</button>
      <button type='button' onClick={task3}>Task 3</button>
      <div id="app"></div>
    </>
  );
}

function task1(){
  let Recension = [
    "some text1",
    "some text2",
    "some text3",
    "some text4",
    "some text5",
  ]
  ReactDOM.render(
  <Book Recension = {Recension} Name = "My Author" CountLetter = '407'/>,
    document.getElementById("app")
  );
}
function task2(){
  let Singers = [
    "some singer1",
    "some singer2",
    "some singer3",
    "some singer4",
    "some singer5",
    "some singer6",
  ]
  let Albums = [
    "some album1",
    "some album2",
    "some album3",
    "some album4",
    "some album5",
  ]
  let image = "index.jpg"
  ReactDOM.render(
    <Group image = {image} Singers = {Singers} Name = "My favGroup" Album = {Albums}></Group>,
    document.getElementById("app")
  );
}
function task3(){

}

export default App;
