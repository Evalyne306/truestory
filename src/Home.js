import React from "react";
import video1 from '/home/student/Begin/truestory/src/videos/home video (6).mp4';
import './Home.css'




function Home() {
  return (
    <div className="landing-page" id="/">
      <div>
      <video autoPlay muted loop id="background-video">
        <source src={video1} />
      </video>
      </div>
     

      <div className="overlay">
     
   
     
      </div>
     
    </div>
  );
}

export default Home;