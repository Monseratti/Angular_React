import './App.css';
import ResumeApp from "./ResumeApp/resumeApp"
import Resume from "./ResumeApp/resume"

function App() {
  let res = new Resume("Roman","Smal","1994-05-30","dnamaxy@gmail.com","+380977715630","Kryvyi Rih")
  return (
    <div>
      <ResumeApp resume = {res}/>
    </div>
  );
}

export default App;
