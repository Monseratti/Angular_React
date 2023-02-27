import './App.css';
import ResumeApp from "./ResumeApp/resumeApp"
import Resume from "./ResumeApp/resume"
import City from "./CitiesOfUkraine/city"
import CityApp  from "./CitiesOfUkraine/cityApp"

function App() {
  // let res = new Resume("Roman","Smal","1994-05-30","dnamaxy@gmail.com","+380977715630","Kryvyi Rih")
  // return (
  //   <div>
  //     <ResumeApp resume = {res}/>
  //   </div>
  // );
  let cityArr = [
    new City("Kryvyi Rih", 650000, "Ukraine"),
    new City("Kyiv", 3500000, "Ukraine"),
    new City("Dnipro", 1650000, "Ukraine"),
    new City("Kharkiv", 2730000, "Ukraine"),
  ]
  return(
    <div>
      <CityApp cities={cityArr}/>
    </div>
  )
}

export default App;
