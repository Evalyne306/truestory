import React from "react";
import video2 from '/home/student/Begin/truestory/src/videos/downloadimg.mp4';
import './Download.css'




function Download() {
  return (
    <div className="landing-page" id="download">
      <div>
      <video autoPlay muted loop id="background-video">
        <source src={video2} />
      </video>
      </div>
     

      <div className="overlay">
     
   
     
      </div>
     
    </div>
  );
}

export default Download;