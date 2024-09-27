import React from 'react';
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading'
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new flavor" />
      <h1 className='app__header-h1'>The key to fine Dining</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}> Lorem ipsum dolor sit amet consectetur adipisicing elit.
        quas perspiciatis accusamus? Pariaturamet consectetur adipisicing sapiente labore impedit amet consectetur adipisicinganimi reiciendis?</p>
      <button className="custom__button">Explore Menu</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;
