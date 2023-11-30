import Home from './Home';
import GetStarted from './GetStarted';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import Download from './Download';
import FamilyTree from './FamilyTree';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 

import Navbar from './Navbar';
import YourStory from './YourStory';



function App() {
  return (
    <div className="App">
   <Navbar/>
<Home/>
<AboutUs/>
<FamilyTree/>
<GetStarted/>
<Download/>
<YourStory/>
<ContactUs/>
    </div>
  );
}

export default App;
// import React from 'react';
// import Navbar from './Navbar';
// import Home from './Home';
// import AboutUs from './AboutUs';
// import FamilyTree from './FamilyTree';
// import GetStarted from './GetStarted';
// import Download from './Download';
// import ContactUs from './ContactUs';
// // import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home/>} />
//           <Route path="/about" element={<AboutUs/>} />
//           <Route path="/family-tree" element={<FamilyTree/>} />
//           <Route path="/how-it-works" element={<GetStarted/>} />
//           <Route path="/download" element={<Download/>} />
//           <Route path="/contact" element={<ContactUs/>} />
         
//         </Routes>
        
//       </div>
//     </Router>
//   );
// };

// export default App;