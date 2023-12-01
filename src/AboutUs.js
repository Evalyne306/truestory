import React from "react";
// import picture from '/home/student/true-story-app/src/images/phone.png';
import picture from '/home/student/Begin/truestory/src/images/newabt.png';
import './AboutUs.css';

import firstButton from '/home/student/Begin/truestory/src/images/pic__1_-removebg-preview.png';
import secondButton from '/home/student/Begin/truestory/src/images/pic-removebg-preview.png';
import './AboutUs.css';



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
function AboutUs(){

return(

<div className="image-placeholders" id="about-page">
<img src={picture} alt="placeholder" />
<div className="download-btns">

     <img src={firstButton} alt="First Button" className="download-button" onClick={handleAndroidButtonClick} />
      <img src={secondButton} alt="Second Button" className="download-button" onClick={handleAppleButtonClick} />
      </div>
</div>


);

}
export default AboutUs;