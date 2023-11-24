import Home from './Home';
import GetStarted from './GetStarted';
import AboutUs from './AboutUs';
import './App.css';
import ContactUs from './ContactUs';
import Download from './Download';
import Navbar from './Navbar';
import FamilyTree from './FamilyTree';



function App() {
  return (
    <div className="App">
   <Navbar/>
<Home/>
<AboutUs/>

<GetStarted/>
<Download/>
<FamilyTree/>

<ContactUs/>
    </div>
  );
}

export default App;
