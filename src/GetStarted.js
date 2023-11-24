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

// import 'react-slideshow-image/dist/styles.css';
// import "./App.css";
// import React from 'react';
// import { Slide } from 'react-slideshow-image';

// import image1 from './images/image1.jpg';
// import image2 from './images/image2.jpg';

// const slideImages = [
//   {
//     path: image1,
//     name: 'Womens Sundress',
//     description: 'Romwe Womens Long Sleeve sundress'
//   },
//   {
//     path: image2,
//     name: 'Waterproof Bluetooth',
//     description: 'Smart Watch for Men Women Compatible with iPhone Samsung Android Phone'
//   },
//   // Add more objects with local image paths for other slides
// ];

// const GetStarted = () => {
//   return (
//     <div className='landing-page' id='events'>
//       <div className='about-section'>
//         <div className='container'>
//           {/* Add any content for about-section here if needed */}
//         </div>
//       </div>

//       <div className='card-container'>
//         <Slide easing="ease" pauseOnHover={true} slidesToShow={1} transitionDuration={1000}>
//           {slideImages.map((image, index) => (
//             <div className='cardi' key={index}>
//               <img src={image.path} alt='Product' />
//               <h3>{image.name}</h3>
//               <p>{image.description}</p>
//             </div>
//           ))}
//         </Slide>
//       </div>
//     </div>
//   );
// };

// export default GetStarted;















import 'react-slideshow-image/dist/styles.css';
import "./App.css";
import React from 'react';
import { Slide } from 'react-slideshow-image';

import video1 from '/home/student/Begin/truestory/src/videos/2.mp4';
import video2 from '/home/student/Begin/truestory/src/videos/3.mp4';
import video3 from '/home/student/Begin/truestory/src/videos/4.mp4';
import video4 from '/home/student/Begin/truestory/src/videos/5.mp4';
import video5 from '/home/student/Begin/truestory/src/videos/6.mp4';
import video6 from '/home/student/Begin/truestory/src/videos/7.mp4';
import video7 from '/home/student/Begin/truestory/src/videos/8.mp4';
import video8 from '/home/student/Begin/truestory/src/videos/9.mp4';


const slideVideos = [
  {
    path: video1,
  },
  {
    path: video2,
  },
  {
    path: video3,
  },
  {
    path: video4,
  },
  {
    path: video5,
  },
  {
    path: video6,
  },
  {
    path: video7,
  },
  {
    path: video8,
  },
 
  
  // Add more objects with local video paths for other slides
];

const GetStarted = () => {
  return (
    <div className='landing-page' id='events'>
      <div className='card-container'>
        <Slide easing="ease" pauseOnHover={true} slidesToShow={1} transitionDuration={2000}>
          {slideVideos.map((video, index) => (
            <div className='cardi' key={index}>
              <video controls autoPlay muted width="100%" height="auto">
                <source src={video.path} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </Slide>
      </div>
    </div>
  );
};

export default GetStarted;