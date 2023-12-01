
// import React from "react";
// import picture1 from '/home/student/Begin/truestory/src/images/click.png';

// import './Download.css'




// function Download() {

//   return(

//     <div className="image-placeholder" id="download">
//     <img src={picture1} alt="placeholder" />
    
//     </div>
    
    
//     );
    
//     }

// export default Download;




// import React from "react";
// import picture1 from '/home/student/Begin/truestory/src/images/click.png';
// import './Download.css';

// function Download() {

//   const handleButtonClick = () => {
//     // Replace 'com.rovio.angrybirds' with the package name of the desired game
//     const playStoreLink = 'https://play.google.com/store/apps/details?id=com.rovio.angrybirds';
    
//     // Open the Google Play Store link in a new tab
//     window.open(playStoreLink, '_blank');
//   };

//   return (
//     <div className="image-placeholder" id="download">
//       <img src={picture1} alt="placeholder" />
//       <button onClick={handleButtonClick} className="download-button">
//         Install Game
//       </button>
//     </div>
//   );
// }

// export default Download;



import React from "react";
import picture1 from '/home/student/Begin/truestory/src/images/slide2.png';
import firstButtonImage from '/home/student/Begin/truestory/src/images/pic__1_-removebg-preview.png';
import secondButtonImage from '/home/student/Begin/truestory/src/images/pic-removebg-preview.png';
import './Download.css';
import './Download.css';

function Download() {

  const handleAndroidButtonClick = () => {
    // Replace 'com.rovio.angrybirds' with the package name of the desired game on Google Play Store
    const playStoreLink = 'https://play.google.com/store/apps/details?id=com.rovio.angrybirds';
    
    // Open the Google Play Store link in a new tab
    window.open(playStoreLink, '_blank');
  };

  const handleAppleButtonClick = () => {
    // Replace '123456789' with the App Store ID of the desired app
    const appStoreLink = 'https://apps.apple.com/us/app/your-app-name/id123456789';
    
    // Open the App Store link in a new tab
    window.open(appStoreLink, '_blank');
  };

  return (
    <div className="image-placeholders" id="download">
      <img src={picture1} alt="placeholder" />
      <div className="download-buttons">
      {/* <button onClick={handleAndroidButtonClick} className="download-button download-button-android">
  Install on Android
</button>
<button onClick={handleAppleButtonClick} className="download-button download-button-apple">
  Install on Apple
</button> */}
     <img src={firstButtonImage} alt="First Button" className="download-button" onClick={handleAndroidButtonClick} />
      <img src={secondButtonImage} alt="Second Button" className="download-button" onClick={handleAppleButtonClick} />
      </div>
    </div>
  );
}

export default Download;