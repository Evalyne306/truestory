// import React from "react";
// import video2 from '/home/student/Begin/truestory/src/images/family.png';
// import './FamilyTree.css'




// function FamilyTree() {
//   return (
//     <div className="family-page" id="family-tree">
//       <div>
//       <video autoPlay muted loop id="background-video">
//         <source src={video2} />
//       </video>
//       </div>
     

//       <div className="overlay">
     
   
     
//       </div>
     
//     </div>
//   );
// }

// export default FamilyTree;
import React from "react";
// import picture from '/home/student/true-story-app/src/images/phone.png';
import picture1 from '/home/student/Begin/truestory/src/images/family.png';
import './FamilyTree.css';


function FamilyTree(){

return(

<div className="family-page" id="family-tree">
<img src={picture1} alt="placeholder" />

</div>


);

}
export default FamilyTree;