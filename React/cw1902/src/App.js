import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import  ReactDOM  from 'react-dom/client';
import Author from './Task1/Author';
import Film from './Task2/Film';

function App() {
  return (
    <div className="App">
      <button className='btn btn-outline-primary m-3' onClick={Task1}>Task 1</button>
      <button className='btn btn-outline-primary m-3' onClick={Task2}>Task 2</button>
      <div id="app"></div>
    </div>
  );
}

export default App;

function Task1(){
  let name = "Willam Shakespeare";
  let photo = "https://www.williamshakespeare.net/images/shakespeare.jpg";
  let info = 'William Shakespeare was an English poet and playwright who is considered one of the greatest writers to ever use the English language. He is also the most famous playwright in the world, with his plays being translated in over 50 languages and performed across the globe for audiences of all ages. Known colloquially as "The Bard" or "The Bard of Avon," Shakespeare was also an actor and the creator of the Globe Theatre, a historical theatre, and company that is visited by hundreds of thousands of tourists every year.';
  let works = [
    'A Midsummer Night`s Dream',
    'Hamlet',
    'Romeo and Juliet',
    'Twelfth Night',
    'Merchant of Venice (header 3)'
  ]
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<Author name = {name} photo = {photo} info = {info} works = {works}/>);
}

function Task2(){
  const root = ReactDOM.createRoot(document.getElementById("app"));
  root.render(<Film/>);
}
  
