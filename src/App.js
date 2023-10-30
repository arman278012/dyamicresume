import logo from './logo.svg';
import './App.css';
import HorizontalStepper from './Components/HorizontalStepper';
import UserDetails from './Components/UserDetails';
import Education from './Components/Education';
import Employment from './Components/Employment'
import DisplayData from './Components/DisplayData';
import { useContext } from 'react';
import { AppContext } from './Components/AuthContextPro';
import RangeSlider from './Components/RangeSlider';

function App() {

  const {display} = useContext(AppContext)

  return (
    <div className="App">
    {/* <RangeSlider/> */}
      {
        display==1?(<DisplayData/>):(<HorizontalStepper />)
      }
    </div>
  );
}

export default App;
