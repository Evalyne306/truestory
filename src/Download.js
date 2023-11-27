
// import React from "react";
// import picture1 from '/home/student/Begin/truestory/src/images/try1.png';
// import './Download.css';


// function Download(){

// return(

//   <div className="image-placeholder" id="downloads">
//   <img src={picture1} alt="placeholder" />
  
//   </div>
  
  
//   );
  
//   }
// export default Download;
import React from "react";
import video2 from '/home/student/Begin/truestory/src/videos/downloads (1).mp4';
import './Download.css'




function Download() {
  return (
    <div className="family-page" id="downloads">
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