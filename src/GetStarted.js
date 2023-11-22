import React from "react";
import demo1 from '/home/student/Begin/truestory/src/videos/getstarted1 (5).mp4';
import './GetStarted.css'




function GetStarted() {
  return (
    <div className="landing-page" id="events">
      <div>
      <video autoPlay muted loop id="background-video">
        <source src={demo1} />
      </video>
      </div>
     

      <div className="overlay">
     
   
     
      </div>
     
    </div>
  );
}

export default GetStarted;