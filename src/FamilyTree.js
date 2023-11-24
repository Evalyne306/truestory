import React from "react";
import video2 from '/home/student/Begin/truestory/src/videos/downloadimg.mp4';
import './FamilyTree.css'




function FamilyTree() {
  return (
    <div className="family-page" id="family-tree">
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

export default FamilyTree;