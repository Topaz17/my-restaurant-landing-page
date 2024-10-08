import React from 'react';
import { SubHeading } from "../../components";
import { images, data } from "../../constants";
const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="contact"/>
      <h1 className="headtext__cormorant" style={{marginBottom:"3rem"}}> find us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Lane Bungalow,Whatcroft Hall Lane, Rudheath,CW9 7SG</p>
        <p className="p__cormorant" style={{color:"#DCCA87",margin:"2rem 0"}}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 10:00am - 2:00am</p>
        <p className="p__opensans">Sat - Sun: 10:00am - 3:00am</p>
      </div>
      <button className="custom__button" style={{marginTop:"2rem"}}>visit us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus"/>
    </div>
  </div>
);

export default FindUs;
