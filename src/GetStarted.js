// import React from "react";
// import demo1 from '/home/student/Begin/truestory/src/videos/get.mp4';
// import './GetStarted.css'




// function GetStarted() {
//   return (
//     <div className="landing-page" id="events">
//       <div>
//       <video autoPlay muted loop id="background-video">
//         <source src={demo1} />
//       </video>
//       </div>
     

//       <div className="overlay">
     
   
     
//       </div>
     
//     </div>
//   );
// }

// export default GetStarted;

import 'react-slideshow-image/dist/styles.css';
import "./GetStarted.css";
import React from 'react';
import { Slide } from 'react-slideshow-image';


import image2 from '/home/student/Begin/truestory/src/videos/30.mp4';
import image3 from '/home/student/Begin/truestory/src/videos/40.mp4';
import image4 from '/home/student/Begin/truestory/src/videos/50.mp4';
import image5 from '/home/student/Begin/truestory/src/videos/60.mp4';
import image6 from '/home/student/Begin/truestory/src/videos/70.mp4';
import image7 from '/home/student/Begin/truestory/src/videos/80.mp4';
import image8 from '/home/student/Begin/truestory/src/videos/90.mp4';
import image9 from '/home/student/Begin/truestory/src/videos/100.mp4';


const slideImages = [

  {
    path: image2,
  
  },
  {
    path: image3,
 
  },
  {
    path: image4,
  
  },
  {
    path: image5,
 
  },
  {
    path: image6,
  
  },
  {
    path: image7,
 
  },
  {
    path: image8,
  
  },
  {
    path: image9,
 
  },

 
  // Add more objects with local image paths for other slides
];

const GetStarted = () => {
  return (
    <div className='landing-page' id='events'>


      <div className='card-container'>
        <Slide easing="ease" pauseOnHover={true} slidesToShow={1} transitionDuration={1000}>
          {slideImages.map((image, index) => (
            <div className='cardi' key={index}>
              <img src={image.path} alt='Product' />
        
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default GetStarted;















// import 'react-slideshow-image/dist/styles.css';
// import "./App.css";
// import React from 'react';
// import { Slide } from 'react-slideshow-image';

// import video1 from '/home/student/Begin/truestory/src/videos/one.mp4';
// import video2 from '/home/student/Begin/truestory/src/videos/two.mp4';
// import video3 from '/home/student/Begin/truestory/src/videos/three.mp4';
// import video4 from '/home/student/Begin/truestory/src/videos/four.mp4';
// import video5 from '/home/student/Begin/truestory/src/videos/five.mp4';
// import video6 from '/home/student/Begin/truestory/src/videos/six.mp4';
// import video7 from '/home/student/Begin/truestory/src/videos/seven.mp4';
// import video8 from '/home/student/Begin/truestory/src/videos/eight.mp4';


// const slideVideos = [
//   {
//     path: video1,
//   },
//   {
//     path: video2,
//   },
//   {
//     path: video3,
//   },
//   {
//     path: video4,
//   },
//   {
//     path: video5,
//   },
//   {
//     path: video6,
//   },
//   {
//     path: video7,
//   },
//   {
//     path: video8,
//   },
 
  
//   // Add more objects with local video paths for other slides
// ];

// const GetStarted = () => {
//   return (
//     <div className='landing-page' id='events'>
//       <div className='card-container'>
//         <Slide easing="ease" pauseOnHover={true} slidesToShow={1} transitionDuration={2000}>
//           {slideVideos.map((video, index) => (
//             <div className='cardi' key={index}>
//               <video controls autoPlay muted width="100%" height="auto">
//                 <source src={video.path} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           ))}
//         </Slide>
//       </div>
//     </div>
//   );
// };

// export default GetStarted;