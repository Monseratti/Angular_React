import ColoredBlock from './ChangeColorComponent/ColoredBlock';
import QuoteGenerator from './QuoteComponent/QuoteGenerator';
import './App.css';

function App() {
  const quoteArr = [
    "Quote 1",
    "Quote 2",
    "Quote 3",
    "Quote 4",
    "Quote 5",
    "Quote 6"
  ]
  return (
    <div>
      {/* <ColoredBlock/> */}
      <QuoteGenerator quotes ={quoteArr}/>
    </div>
  );
}

export default App;
